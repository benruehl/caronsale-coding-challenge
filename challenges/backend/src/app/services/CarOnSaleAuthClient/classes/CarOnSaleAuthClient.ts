import {injectable} from "inversify";
import {ICarOnSaleAuthClient} from "../interface/ICarOnSaleAuthClient";
import {IUserAuth} from "../../../models/IUserAuth";

@injectable()
export class CarOnSaleAuthClient implements ICarOnSaleAuthClient {
    public async authorize(userMailId: string, userPassword: string): Promise<IUserAuth> {
        throw new Error("Method not implemented.");
    }
}
