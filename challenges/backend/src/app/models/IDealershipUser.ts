import { IFile } from "./IFile";
import { IUserDevice } from "./IUserDevice";

export interface IDealershipUser {
    dealershipName: string;
    deliverMailNotifications: boolean;
    role: string;
    dealershipType: string;
    numEstimatedVehiclesPerMonth: number;
    tradeInValuationPreference: string;
    priority: number;
    imageUrl: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    iban: string;
    vatId: string;
    taxId: string;
    userDevices: IUserDevice[];
    urlToBusinessRegistrationDocument: string;
    businessRegistrationDocument: IFile;
    urlToIdDocument: string;
    idDocument: IFile;
    isBlacklisted: boolean;
    state: number;
    mailAddress: string;
    password: string;
    passwordVersion: number;
    privileges: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    id: number;
    addressLine: string;
    zipCode: string;
    city: string;
    country: string;
    countryCode: string;
}
