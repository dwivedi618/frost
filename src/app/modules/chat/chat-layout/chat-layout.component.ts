import { AlertService } from './../../../services/alert/alert.service';
import { ConnectingScreenComponent } from 'src/app/modules/wc/connecting-screen/connecting-screen.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Route, Router, Event, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ExpandInOutAnimation } from 'src/app/services/animation/dropdown-animation';
import { WcdialogService } from 'src/app/services/wc/wcdialog.service';
import { ChatService } from 'src/app/services/ws/chat.service'

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
    public dialog : MatDialog,
    public activatedRoute: ActivatedRoute,
    private chatService: ChatService,
    public wcDailog : WcdialogService,
    public alertService : AlertService
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
    this.chatService.getRecentChats()
    .subscribe(res => {
      this.recentChats = res;
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

  connectCall(){
    this.wcDailog.openWcDialog()
    this.alertService.alertWithAction('Please verify your account by OTP sent to registered Email and Phone','verify').subscribe(res =>{

    })
  }

  
}
