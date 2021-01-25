import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-activity-layout',
  templateUrl: './activity-layout.component.html',
  styleUrls: ['./activity-layout.component.scss']
})
export class ActivityLayoutComponent implements OnInit {


  /**
   * recentChats
   */
  recentChats = [

    {
      path: 'chat',
      thumbnail: '../../../../assets/user_profiles/thor.jpeg',
      name: 'Thor',
      group : false,
      group_name : null,
      id : 1,
      last_msg: 'call me',
      last_active: '08/01'

    },
    {
      path: 'chat',
      thumbnail: '../../../../assets/user_profiles/ironman.jpeg',
      name: 'Ironman',
      group : false,
      group_name : null,
      id : 2,
      last_msg: 'get ready! bringing party to you',
      last_active: '08/01'

    },
    {
      path: 'chat',
      thumbnail: '../../../../assets/user_profiles/profile1.jpeg',
      name: 'Loffy Dagger',
      group : false,
      group_name : null,
      id : 3,
      last_msg: 'what is party?',
      last_active: '08/01'

    },

  ]

  /**
   * ChatOptions
   */
  
  links = [
    { path: 'timeline', name: 'Timeline' },
    { path: 'files', name: 'Files' },
    { path: 'notes', name: 'Notes' },
  ];

  activeLink = this.links[0].path;
  activeChat: any;
  
  constructor(
    public route: Router,
    public activatedRoute: ActivatedRoute,
  ) {
    route.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {

      const activeLinkWithParam = (event.url.split('/').pop())      
      console.log("activeLinkWithParam", activeLinkWithParam);
      this.activeLink = activeLinkWithParam.split('?')[0]
      console.log("activeLink", this.activeLink);

    });
  }

  ngOnInit() {
    this.openChat(this.recentChats[0])
  }

  private openChat(recentChat){
    this.activeChat = recentChat;
    this.route.navigate(['./activity/timeline'],{ queryParams: {id: recentChat.id, name: recentChat.name}})
  }
}

