import { ContentType } from 'src/app/models/content-type.enum'

export class IncommingMessage {
    content: string;
    contentType: ContentType;
    groupMessage: boolean;
    sentTo: string;
    sentBy: string;
    sentAt?: string;
    recievedAt?: Date;
    seenAt?: Date;
    editedAt?: Date;
}


export class OutgoingMessage {
    content: string;
    contentType: ContentType;
    groupMessage: boolean;
    sentTo: string;
    sentAt?: string;
    editedAt?: Date;
}