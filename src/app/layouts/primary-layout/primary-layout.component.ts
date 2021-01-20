import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-primary-layout',
  templateUrl: './primary-layout.component.html',
  styleUrls: ['./primary-layout.component.scss']
})
export class PrimaryLayoutComponent implements OnInit{
  primaryLinks = [
    { path : '',icon :'notifications', name : 'Activity' },
    { path : 'chats',icon :'message', name : 'Chats' },
    { path : 'groups',icon :'groups', name : 'Groups' },
    { path : 'calls',icon :'call', name : 'Calls' },
    { path : 'files',icon :'folder', name : 'Files' },
   

  ];

  constructor() {}
  ngOnInit(){

 }

}
