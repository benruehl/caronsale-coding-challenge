import {injectable} from "inversify";
import {ICarOnSaleClient} from "../interface/ICarOnSaleClient";

@injectable()
export class CarOnSaleClient implements ICarOnSaleClient {
    public getRunningAuctions(): Promise<any> {
        throw new Error("Method not implemented.");
    }
}
