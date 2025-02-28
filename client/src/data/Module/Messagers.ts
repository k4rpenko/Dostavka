export interface Messagers{
    message: Message;
    company: CompanyModel;
    worker: WorkerModel;
}

export interface Message {
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

export interface WorkerModel {
    id: string;
    fullName?: string;
    phoneNumber: string;
    email: string;
    avatar: string;
}

export interface CompanyModel {
    id: string;
    title?: string;
    idDirector: string;
    phoneNumber: string;
    email: string;
    avatar: string;
    rating?: number;
    reviewsNumbers?: number;
}