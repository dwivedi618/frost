import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-layout',
  templateUrl: './chat-layout.component.html',
  styleUrls: ['./chat-layout.component.scss']
})
export class ChatLayoutComponent implements OnInit {

  /**
   * recentChats
   */
  recentChats = [
    { path : 'history',icon :'access_time', name : 'Recents' },
    { path : 'speed-dial',icon :'call', name : 'Speed Dial' },
    { path : 'contacts',icon :'contacts', name : 'Contacts' },
    { path : 'voice-mail',icon :'voicemail', name : 'Voice Mail' },
    { path : 'history',icon :'access_time', name : 'Recents' },
    { path : 'speed-dial',icon :'call', name : 'Speed Dial' },
    { path : 'contacts',icon :'contacts', name : 'Contacts' },
    { path : 'voice-mail',icon :'voicemail', name : 'Voice Mail' }, { path : 'history',icon :'access_time', name : 'Recents' },
    { path : 'speed-dial',icon :'call', name : 'Speed Dial' },
    { path : 'contacts',icon :'contacts', name : 'Contacts' },
    { path : 'voice-mail',icon :'voicemail', name : 'Voice Mail' }, { path : 'history',icon :'access_time', name : 'Recents' },
    { path : 'speed-dial',icon :'call', name : 'Speed Dial' },
    { path : 'contacts',icon :'contacts', name : 'Contacts' },
    { path : 'voice-mail',icon :'voicemail', name : 'Voice Mail' },
  ] 
  constructor() { }

  ngOnInit(): void {
  }

}
