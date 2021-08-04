
import { Component, OnInit, ViewChild } from '@angular/core';

export interface callSettings {
  isCamEnable: boolean;
  isMicEnable: boolean;
  isChatEnable : boolean;
  isShareScreenEnable: boolean;
  isFullScreen: boolean;
}

@Component({
  selector: 'app-connecting-screen',
  templateUrl: './connecting-screen.component.html',
  styleUrls: ['./connecting-screen.component.scss']
})



export class ConnectingScreenComponent implements OnInit {

  activeCallSettings : callSettings = {
    isCamEnable : false,
    isMicEnable: false,
    isChatEnable: false,
    isShareScreenEnable: false,
    isFullScreen: false,
  }
  constructor() { }

  ngOnInit(): void {
  }

  toggleCam(){
    return this.activeCallSettings.isCamEnable = !this.activeCallSettings.isCamEnable
  }
  toggleMic(){
    return this.activeCallSettings.isMicEnable = !this.activeCallSettings.isMicEnable
  }
  toggleWcChat(){
   
    return this.activeCallSettings.isChatEnable = !this.activeCallSettings.isChatEnable
  }
}
