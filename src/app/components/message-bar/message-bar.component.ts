import { Component, OnInit } from '@angular/core';
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
    let message: OutgoingMessage;
    const chatBox = document.querySelector('#chat-box');
    console.log(this.messageForm.value.message, chatBox);
    // const msg = this.messageForm.get('message');
    // const content = chatBox.innerHTML;
    const content = 'messaeg from user';

    if (content) {
      message = {
        content: content,
        contentType: ContentType.TEXT,
        groupMessage: false,
        sentTo: 'satyam.dwivedi825@gmail.com'
      }
      // this.chats.push(chat);
      console.log('hiiiii----------->', content)
      this.chatService.sendMessage(message);

      this.messageForm.reset();
      this.messageForm.value.message = ' '
    }

  }

}
