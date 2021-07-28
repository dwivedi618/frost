import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from 'src/app/services/ws/chat.service';

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
    public activatedRoute: ActivatedRoute,
    private chatService: ChatService,
  ) {
    this.messageForm = this.fb.group({
      message: ['']
    });

    this.activatedRoute.queryParams.subscribe(params => {
      this.userId = params['id'];
      this.chatService.getIndividualChats(this.userId)
        .subscribe(res => {
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

}
