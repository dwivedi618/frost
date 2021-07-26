import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest/rest.service'
import { ChatService } from 'src/app/services/ws/chat.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  messageForm: FormGroup;
  chats: any;
  userId: string;

  constructor(
    public fb: FormBuilder,
    private rest: RestService,
    public activatedRoute: ActivatedRoute,
    private chatService: ChatService,
    private socket: Socket,
  ) {
    this.messageForm = this.fb.group({
      message: ['']
    });

    this.activatedRoute.queryParams.subscribe(params => {
      this.userId = params['id'];
      this.rest.get(`/chat/${this.userId}`).subscribe(res => {
      this.chats = res.data;
    })
    });


    /**
     * Subscribe the newMessage Subject to get
     * and update the chat array with new message
     */
    this.chatService.newMessage.subscribe((chat) => {
      this.chats.push(chat);
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  
  ngOnInit(): void {
    
    this.scrollToBottom();
  }
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
  toggled: boolean = false;
  handleSelection(event) {
    console.log(event.char);
    const msg = this.messageForm.get('message') ;
    msg.patchValue(( msg.value || '') + ' ' + event.char)
  }

  send() {
    console.log('------------------------------------------->>>>>>>>>>>>>>>>>>',this.messageForm.value.message);
    const msg = this.messageForm.get('message');
    if (msg) {
      const chat = {
        user_id: 0,
        message: this.messageForm.value.message,
        message_time: new Date()
      }
      this.chats.push(chat);
      this.messageForm.reset();
      this.messageForm.value.message = ' '
    }

  }

  addChat(chat: any){
    this.chats.push(chat);
  }

}
