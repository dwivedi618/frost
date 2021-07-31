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

    constructor(private socket: Socket, private http: HttpClient) {

        this.socket.on('new message', (data) => {
            console.log('New message----.....---------------',data);
            this.newMessage.next(data);
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

}