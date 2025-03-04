export interface Message {
    id: number;
    idUser: string;
    text: string;
    type: string;
    img?: string;
    idAnswer?: string;
    view?: boolean;
    send?: boolean;
    chang?: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface ChatModel {
    id: string;
    usersID: string;
    messages?: Message[];
    timestamp?: Date;
}

export interface CompanyModel {
    id: string;
    title?: string;
    idDirector: string;
    description: string;
    background: string;
    phoneNumber: string;
    transportationNumber: number;
    email: string;
    avatar: string;
    rating?: number;
    reviewsNumbers?: number;
    posts?: PostModel[];
}

export interface PostModel {
    id: string;
    image?: string;
    text?: string;
    idCompany: string;
    creatAt: string;
}

export interface WorkerModel {
    id: string;
    fullName?: string;
    phoneNumber: string;
    email: string;
    avatar: string;
}

export interface Chats {
    chat: ChatModel;
    company: CompanyModel;
    worker: WorkerModel;
}
