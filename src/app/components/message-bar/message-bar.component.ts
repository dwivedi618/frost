import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
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

  @ViewChild('textBox') textBox: ElementRef;

  constructor(
    public fb: FormBuilder,
    private chatService: ChatService,
  ) {
  }

  ngOnInit(): void {
  }
  toggled: boolean = false;
  handleSelection(event) {
    console.log(event.char);
  }

  send() {
    let message: OutgoingMessage;
    let content = this.textBox.nativeElement.innerHTML;
    if (content) {
      message = {
        content: content,
        contentType: ContentType.TEXT,
        group: false,
        sentTo: '1',
        sentAt: new Date(),
        editedAt: new Date()
      }
      this.chatService.newMessage.next(message)
      this.chatService.sendMessage(message);
      this.textBox.nativeElement.innerHTML = '';
    }

  }

}
