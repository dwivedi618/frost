import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router,Event, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

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
  
    { path : 'voice-mail',icon :'voicemail', name : 'Voice Mail' }, { path : 'history',icon :'access_time', name : 'Recents' },
    { path : 'speed-dial',icon :'call', name : 'Speed Dial' },
    { path : 'contacts',icon :'contacts', name : 'Contacts' },
    { path : 'voice-mail',icon :'voicemail', name : 'Voice Mail' }, { path : 'history',icon :'access_time', name : 'Recents' },
    { path : 'speed-dial',icon :'call', name : 'Speed Dial' },
    { path : 'contacts',icon :'contacts', name : 'Contacts' },
    { path : 'voice-mail',icon :'voicemail', name : 'Voice Mail' },
  ] 

  /**
   * ChatOptions
   */
  links = [
    { path : 'chat', name : 'Chat' },
    { path : 'files', name : 'Files' },
    { path : 'notes', name : 'Notes' },
];
  activeLink: string;
  // activeLink = this.links[0].path;
  constructor( 
    public route: Router,
    public activatedRoute: ActivatedRoute,
    ) { 
     route.events.pipe(
      filter(event => event instanceof NavigationEnd)  
    ).subscribe((event: NavigationEnd) => {
      
      console.log("bullllu",event.url.split('/').pop());
      this.activeLink = event.url.split('/').pop() 
    });
  }

  ngOnInit(){
    this.getActivatedPath();
  }

  private getActivatedPath(){
    // this.route.events.subscribe(url =>{console.log(url,"url")})
  }
}
