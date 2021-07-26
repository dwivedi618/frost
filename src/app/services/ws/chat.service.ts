import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Subject } from 'rxjs';
import { OutgoingMessage } from '../../models/message.model'

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    newMessage: Subject<any> = new Subject<any>();

    constructor(private socket: Socket) {

        this.socket.on('new message', (data) => {
            console.log('New message----.....---------------',data);
            this.newMessage.next(data);
        });
    }

    sendMessage(message: OutgoingMessage) {
        this.socket.emit('new message', message);
    }

}