import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  messageForm: FormGroup;
  chats = [
    {
      user_id: 1,
      message: 'hi',
      message_time: new Date()
    },
    {
      user_id: 0,
      message: 'helloo',
      message_time: new Date()
    },
    {
      user_id: 0,
      message: 'how are you?',
      message_time: new Date()
    },
    {
      user_id: 0,
      message: 'where have you been?',
      message_time: new Date()
    },
    {
      user_id: 1,
      message: 'I have been busy.',
      message_time: new Date()
    },
    {
      user_id: 1,
      message: 'umm.. hey! I hate to ask this but do you know where was marven last week?',
      message_time: new Date()
    },
    {
      user_id: 0,
      message: 'what is this about?',
      message_time: new Date()
    },
    {
      user_id: 0,
      message: 'is everything okay?',
      message_time: new Date()
    },
  ]
  constructor(
    public fb: FormBuilder
  ) {
    this.messageForm = this.fb.group({
      message: ['']
    })
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
    console.log(this.messageForm.value.message);
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
}
