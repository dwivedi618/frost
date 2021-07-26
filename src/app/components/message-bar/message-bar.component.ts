import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChatService } from 'src/app/services/ws/chat.service';
import { OutgoingMessage } from 'src/app/models/message.model';
import { ContentType } from 'src/app/models/content-type.enum';

@Component({
  selector: 'app-message-bar',
  templateUrl: './message-bar.component.html',
  styleUrls: ['./message-bar.component.scss']
})
export class MessageBarComponent implements OnInit {

  messageForm : FormGroup;
  @Output() sendChatEvent = new EventEmitter<any>();

  constructor(
    public fb: FormBuilder,
    private chatService: ChatService,
  ) {
    this.messageForm = this.fb.group({
      message: ['']
    })
  }

  ngOnInit(): void {
  }
  toggled: boolean = false;
  handleSelection(event) {
    console.log(event.char);
    const msg = this.messageForm.get('message') ;
    msg.patchValue(( msg.value || '') + ' ' + event.char)
  }

  send() {
    // let message: OutgoingMessage;
    let message: any;

    const chatBox = document.getElementsByClassName("myText");
    // const msg = this.messageForm.get('message');
    const content = chatBox[1]?.nodeValue;
    console.log('-------------1:', content, '-----', chatBox );
    // const content = 'messaeg from user';

    if (content) {
      message = {
        user_id: 0,
        message: content,
        message_time: new Date()
      }
      // this.chats.push(chat);
      this.sendChatEvent.emit(message);
      chatBox[1].nodeValue = ' ';
      this.chatService.sendMessage(message);

      // this.messageForm.reset();
    }

  }

}
