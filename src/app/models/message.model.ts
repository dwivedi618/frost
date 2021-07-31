import { ContentType } from 'src/app/models/content-type.enum'

export class IncommingMessage {
    content: string;
    contentType: ContentType;
    group: boolean;
    sentTo: string;
    sentBy: string;
    sentAt?: Date;
    recievedAt?: Date;
    seenAt?: Date;
    editedAt?: Date;
}


export class OutgoingMessage {
    content: string;
    contentType: ContentType;
    group: boolean;
    sentTo: string;
    sentAt?: Date;
    editedAt?: Date;
}