export interface MessageData {
    id: number;
    idUser: string;
    text: string;
    img?: string;
    idAnswer?: string;
    view?: boolean;
    send?: boolean;
    chang?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}