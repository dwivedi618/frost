import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {

  messageForm : FormGroup;
  constructor(
    public fb : FormBuilder
  ) { 
    this.messageForm = this.fb.group({
      message : ['']
    })
  }

  ngOnInit(): void {
  }
  toggled: boolean = false;
  handleSelection(event) {
    console.log(event.char);
    const msg = this.messageForm.get('message') ;
    msg.patchValue(msg.value +' '+ event.char)
  }
}
