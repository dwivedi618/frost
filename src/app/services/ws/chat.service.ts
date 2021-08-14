import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Socket } from 'ngx-socket-io';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment'
import { OutgoingMessage, IncommingMessage } from '../../models/message.model'

@Injectable({
    providedIn: 'root'
})
export class ChatService {
    private chatRoute: string = 'chat';
    chats: Array<any>;
    newMessage: Subject<any> = new Subject<any>();
    ICECandidate: Subject<any> = new Subject<any>();
    desc: Subject<any> = new Subject<any>();
    desc1: Subject<any> = new Subject<any>();



    newCall: any;

    constructor(private socket: Socket, private http: HttpClient) {

        // this.socket.on('new message', (data) => {
        //     console.log('New message----.....---------------',data);
        //     this.newMessage.next(data);
        // });

        // this.socket.on('new call', (pc) => {
        //     console.log('New call----.....---------------',pc.pc);
        //     this.newCall = pc.pc;
        // });
        this.socket.on('icecandidate',async (data) => {
            console.log(`A new candidate:${data} has been recieved on ${new Date()}`);
            this.ICECandidate.next(data);
        });

        this.socket.on('offer',async (data) => {
            console.log(`A new offer:${data} has been recieved on ${new Date()}`);
            this.desc.next(data);
        });

        this.socket.on('offer-accepted',async (data) => {
            console.log(`The Offer:${data} has been accepted by the peer on ${new Date()}`);
            this.desc1.next(data);
        });
    }

    sendMessage(message: OutgoingMessage) {
        this.socket.emit('new message', message);
    }

    getRecentChats(){
        const url = `${environment.apiUrl}/${this.chatRoute}`;
        return this.http.get<any>(url);
    }

    getIndividualChats(id: string){
        const url = `${environment.apiUrl}/${this.chatRoute}/:${id}`;
        return this.http.get<IncommingMessage []>(url, { params: {id: id}});
    }

    sendPC(pc) {
        this.socket.emit('new call', {pc:pc});
    }

    peerConnectionHandshaking(type: string, msg: any){
        console.log(`A message:${msg} of type ${type} has been sent on ${new Date()}`);
        
        this.socket.emit(type, msg);
    }

}