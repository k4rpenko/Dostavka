import { MessageData } from "./MessageData";

export interface ChatModel {
    id?: string;
    usersID: string[];
    chat?: MessageData[];
    timestamp: Date;
}