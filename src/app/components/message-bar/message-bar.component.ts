import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-message-bar',
  templateUrl: './message-bar.component.html',
  styleUrls: ['./message-bar.component.scss']
})
export class MessageBarComponent implements OnInit {

  messageForm : FormGroup;
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
  handleSelection(event) {
    console.log(event.char);
    const msg = this.messageForm.get('message') ;
    msg.patchValue(( msg.value || '') + ' ' + event.char)
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
