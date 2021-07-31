import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChatService } from 'src/app/services/ws/chat.service';
import { OutgoingMessage } from 'src/app/models/message.model';
import { ContentType } from 'src/app/models/content-type.enum';

@Component({
  selector: 'app-message-bar',
  templateUrl: './message-bar.component.html',
  styleUrls: ['./message-bar.component.scss']
  // directives: [ ContentEditableDirective ]
})
export class MessageBarComponent implements OnInit {

  @ViewChild('textBox') textBox: ElementRef;
  editorText: any;

  constructor(
    public fb: FormBuilder,
    private chatService: ChatService,
  ) {
  }

  ngOnInit(): void {
  }
  toggled: boolean = false;
  /**
   * events fire when an emoji selected
   * @param event 
   */
  emojiSelection(event) {
    console.log(event.char);
  }
  /**
   * editor innerText 
   * @param event innerText 
   */
  handleEditorEvents(event) {
    this.editorText = event || '';
    console.log("editorText",this.editorText);
    // console.log("event",event);

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
