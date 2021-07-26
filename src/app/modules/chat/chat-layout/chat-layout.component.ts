import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, Event, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ExpandInOutAnimation } from 'src/app/services/animation/dropdown-animation';
import { RestService } from 'src/app/services/rest/rest.service'

@Component({
  selector: 'app-chat-layout',
  templateUrl: './chat-layout.component.html',
  styleUrls: ['./chat-layout.component.scss'],
  animations : [ExpandInOutAnimation]
})
export class ChatLayoutComponent implements OnInit {


  expandAnimation = 'collapsed';
  activeChat: any;
  recentChats: any;

  constructor (
    public route: Router,
    public activatedRoute: ActivatedRoute,
    private rest: RestService,
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
    this.rest.get(`/chat`)
    .subscribe(res => {
      this.recentChats = res.data;
      this.openChat(this.recentChats[0]);
    })
  }


  /**
   * ChatOptions
   */
  
  links = [
    { path: 'chat', name: 'Chat' },
    { path: 'files', name: 'Files' },
    { path: 'notes', name: 'Notes' },
  ];

  activeLink = this.links[0].path;


  private openChat(recentChat){
    this.activeChat = recentChat;
    this.route.navigate(['./chats/chat'],{ queryParams: {id: recentChat.id, name: recentChat.name}})
  }

  toggleAnimation(divName: string) {
    if (divName === 'divA') {
      this.expandAnimation = this.expandAnimation === 'expanded' ? 'collapsed' : 'expanded';
      console.log(this.expandAnimation);
    }
  }
}
