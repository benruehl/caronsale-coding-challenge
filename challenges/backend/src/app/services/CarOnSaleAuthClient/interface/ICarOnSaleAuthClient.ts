import {IUserAuth} from "../../../models/IUserAuth";

/**
 * This service describes an interface to perform authorization requests to the CarOnSale API.
 */
export interface ICarOnSaleAuthClient {
    authorize(userMailId: string, userPassword: string): Promise<IUserAuth>;
}
