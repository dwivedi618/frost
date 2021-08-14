
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatService } from 'src/app/services/ws/chat.service'

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
  @ViewChild('local') local: ElementRef;
  @ViewChild('remote') remote: ElementRef;
  @ViewChild('three') one: ElementRef;
  @ViewChild('four') four: ElementRef;

  rpc: RTCPeerConnection;
  pc: RTCPeerConnection;
  localStream: MediaStream;
  remoteStream: MediaStream;
  desc: RTCSessionDescription;
  ICECandidate: RTCIceCandidateInit;
  inboundStream: MediaStream = null;
  callee: boolean = false;

  constructor(private chatService: ChatService) {
      this.chatService.ICECandidate.subscribe(data => {
        this.ICECandidate = data;
        if(this.callee) this.handelIceCandidate();
      });
      this.chatService.desc.subscribe(async data => {
        this.desc = data
        await this.handleOffer();
        this.handelIceCandidate();
        
      }); 
      this.chatService.desc1.subscribe(async data => {
        this.desc = data;
        await this.handleAnswer();
        this.callee = true;
        console.error('--------------ICE CANDIDATEEEE------',this.ICECandidate,this.callee);
        
        // this.handelIceCandidate();

      });      

   }
  ngOnInit(): void {
  }


  toggleCam(){
    this.inviteToJoinTheCall();
    return this.activeCallSettings.isCamEnable = !this.activeCallSettings.isCamEnable
  }
  toggleMic(){
    return this.activeCallSettings.isMicEnable = !this.activeCallSettings.isMicEnable
  }
  toggleWcChat(){
   
    return this.activeCallSettings.isChatEnable = !this.activeCallSettings.isChatEnable
  }

  ngOnDestroy(){
    // this.stream.getTracks()[0].stop()
  }

  async createPeerConnection() {
    this.pc = new RTCPeerConnection({});

    /**
     * Add event listner and handler for the ICECandidate
     */
    this.pc.addEventListener('icecandidate', (event) => {
      if(event.candidate)
      this.chatService.peerConnectionHandshaking('icecandidate', {candidate: event.candidate});
    });


    /**
     * Add event listner and handler for the negotiation
     */
    this.pc.addEventListener('negotiationneeded',async (event) => {
      try {

          if(this.pc.signalingState != "stable"){
            return;
          }
          const offer = await this.pc.createOffer();
          await this.pc.setLocalDescription(offer);
          this.chatService.peerConnectionHandshaking('offer', {desc: this.pc.localDescription})
          
        }catch(e){
          console.log('error in creatng offer');
        }
    });

    /**
     * Listen  and handle the event for incomming video stream
     */
    this.pc.addEventListener('track', (event) => {
      if(event.streams && event.streams[0]){
        console.log('------Getting the event track1---->>>>>>>',event.streams,this.remote.nativeElement.srcObject );
        this.remote.nativeElement.srcObject = event.streams[0];
        console.log('------Getting the event track2---->>>>>>>',event.streams,this.remote.nativeElement.srcObject );

      } else {
        if(!this.inboundStream){

          this.inboundStream = new MediaStream();
          this.remote.nativeElement.srcObject = this.inboundStream;
        }

        this.inboundStream.addTrack(event.track);
      }

    });
  }


  async inviteToJoinTheCall(){
    this.createPeerConnection();
    try{
      this.localStream = await navigator.mediaDevices.getUserMedia({audio: false, video: true});
      this.local.nativeElement.srcObject = this.localStream;
    } catch(e){
      console.error('Error in getting user media devices',e);
      return;
    }

    try{
      this.localStream.getTracks().forEach(track => this.pc.addTrack(track, this.localStream));
    }catch(e){
      console.error('Error in adding transciever');
      return;
    }
   

  }

  async handleOffer(){
    if(!this.pc) this.createPeerConnection();

    if(this.pc.signalingState != 'stable'){

      console.warn('----------It is not stable yet---------------------');      
      await Promise.all([
        this.pc.setLocalDescription({type: 'rollback'}),
        this.pc.setRemoteDescription(this.desc)
      ]);
      return;

    }else{

      console.log('----------It is now stable-----------------------------------------');
      await this.pc.setRemoteDescription(this.desc);

    }

    if(!this.localStream){
      try{
        this.localStream = await navigator.mediaDevices.getUserMedia({audio: false, video:true})
        this.local.nativeElement.srcObject = this.localStream;
      }catch(e){
        console.error('Error in getting user media from handle offer');
        return;
      }
    }

    try{
      this.localStream.getTracks().forEach(track => this.pc.addTrack(track,this.localStream));
    }catch(e){
      console.error('Error in adding transciever');
      return;
    }

    try{
      
      const answer = await this.pc.createAnswer(); 
      await this.pc.setLocalDescription(answer);
    }catch(e){
      
      console.log('ERROR: error in in creating answer and setting local description', e);
      
    }    
    this.chatService.peerConnectionHandshaking('offer-accepted', {desc: this.pc.localDescription})

  }

  async handleAnswer(){
    console.log('--------------handle re thHE ABNAE>>>>>>>>>>>',);
    
    try{
      await this.pc.setRemoteDescription(this.desc);
    }catch(e){
      console.error('ERROR: error in handling answer', e) ;
      
    }
  }

  async handelIceCandidate(){
    let candidate = new RTCIceCandidate(this.ICECandidate);
    try{
      await this.pc.addIceCandidate(candidate);
    }catch(e){
      console.error('Error in adding ICE Candidate',e);
      return;
    }
  }

}
