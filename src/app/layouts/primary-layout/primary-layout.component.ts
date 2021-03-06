import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-primary-layout',
  templateUrl: './primary-layout.component.html',
  styleUrls: ['./primary-layout.component.scss']
})
export class PrimaryLayoutComponent implements OnInit{
  
  /**
   * primary links
   */
  primaryLinks = [
    { path : 'activity',icon :'notifications', name : 'Activity' },
    { path : 'chats',icon :'message', name : 'Chats' },
    { path : 'groups',icon :'groups', name : 'Groups' },
    { path : 'calls',icon :'call', name : 'Calls' },
    { path : 'files',icon :'folder', name : 'Files' },
  ]  

  constructor() {}
  ngOnInit(){

  }

}
