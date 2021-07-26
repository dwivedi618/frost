import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { OutgoingMessage } from '../../models/message.model'

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    constructor(private socket: Socket) {}

    sendMessage(message: OutgoingMessage) {
        this.socket.emit('new message', message);
    }

}