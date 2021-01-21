import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speed-dial',
  templateUrl: './speed-dial.component.html',
  styleUrls: ['./speed-dial.component.scss']
})
export class SpeedDialComponent implements OnInit {

  speedDialContact = [
    {
      thumbnail: '../../../../assets/user_profiles/profile1.jpeg',
      name : 'Loffy dagger',
      status : 'on youTube',
      actions : [
        { action : 'textsms', icon : 'textsms' },
        { action : 'call', icon : 'call' },
        { action : 'video_call', icon : 'video_call' },
      ]
    },
    {
      thumbnail: '../../../../assets/user_profiles/profile2.png',
      name : 'Kung fu panda',
      status : 'sleeping',
      actions : [
        { action : 'textsms', icon : 'textsms' },
        { action : 'call', icon : 'call' },
        { action : 'video_call', icon : 'video_call' },
      ]
    },
    {
      thumbnail: '../../../../assets/user_profiles/thor.jpeg',
      name : 'Thor',
      status : 'hammaring',
      actions : [
        { action : 'textsms', icon : 'textsms' },
        { action : 'call', icon : 'call' },
        { action : 'video_call', icon : 'video_call' },
      ]
    },
    {
      thumbnail: '../../../../assets/user_profiles/ironman.jpeg',
      name : 'Tony Stark',
      status : 'active',
      actions : [
        { action : 'textsms', icon : 'textsms' },
        { action : 'call', icon : 'call' },
        { action : 'video_call', icon : 'video_call' },
      ]
    },
    {
      thumbnail: '../../../../assets/user_profiles/ironman.jpeg',
      name : 'Tony Stark',
      status : 'active',
      actions : [
        { action : 'textsms', icon : 'textsms' },
        { action : 'call', icon : 'call' },
        { action : 'video_call', icon : 'video_call' },
      ]
    },
    {
      thumbnail: '../../../../assets/user_profiles/ironman.jpeg',
      name : 'Tony Stark',
      status : 'active',
      actions : [
        { action : 'textsms', icon : 'textsms' },
        { action : 'call', icon : 'call' },
        { action : 'video_call', icon : 'video_call' },
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
