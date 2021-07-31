import { Directive } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContentEditableDirective } from 'src/app/customDirectives/content-editable.directive';


@Component({
  selector: 'app-message-bar',
  templateUrl: './message-bar.component.html',
  styleUrls: ['./message-bar.component.scss']
  // directives: [ ContentEditableDirective ]
})
export class MessageBarComponent implements OnInit {

  messageForm: FormGroup;
  editorText: any;
  constructor(
    public fb: FormBuilder
  ) {
    this.messageForm = this.fb.group({
      message: ['']
    })
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
    const text = document.getElementById("message-editor") ;
    // text.innerHTML = ' ' + event.char;
    // text.textContent = ' ' + event.char;

    this.editorText = (this.editorText || '' ) + ' ' + event.char;
    console.log("text",text);
    console.log("editorText",this.editorText);
    
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
    console.log(this.messageForm.value.message);
    const msg = this.messageForm.get('message');
    if (msg) {
      const chat = {
        user_id: 0,
        message: this.messageForm.value.message,
        message_time: new Date()
      }
      // this.chats.push(chat);
      this.messageForm.reset();
      this.messageForm.value.message = ' '
    }

  }
 
}
