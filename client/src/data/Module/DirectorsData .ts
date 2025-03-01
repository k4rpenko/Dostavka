export interface DirectorsData {
    id?: string;
    idCompany: string;
    idLastCompany?: string[];
    fullName: string;
    email: string;
    emailConfirmation?: boolean;
    hashPassword: string;
    phoneNumber: string;
    phoneNumberConfirmation?: boolean;
    location?: string;
    avatar: string;
    successfulTransportation?: number;
    truckId?: string[];
    transportationId?: string[];
    workersId?: string[];
    employeeKeys?: string[];
    employeeBusKeys?: string[];
    employeeUsageKeys?: string[];
    refreshToken?: string;
    concurrencyStamp?: string;
}
