import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-layout',
  templateUrl: './call-layout.component.html',
  styleUrls: ['./call-layout.component.scss']
})
export class CallLayoutComponent implements OnInit {

    /**
   * primary links
   */
  callLinks = [
    { path : 'history',icon :'access_time', name : 'Recents' },
    { path : 'speed-dial',icon :'call', name : 'Speed Dial' },
    { path : 'contacts',icon :'contacts', name : 'Contacts' },
    { path : 'voice-mail',icon :'voicemail', name : 'Voice Mail' },
  ] 
  constructor() { }

  ngOnInit(): void {
  }

}
