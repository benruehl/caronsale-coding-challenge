import {injectable} from "inversify";
import {ICarOnSaleClient} from "../interface/ICarOnSaleClient";
import { ISalesmanAuctionView } from "../../../models/ISalesmanAuctionView";

@injectable()
export class CarOnSaleClient implements ICarOnSaleClient {
    public async getRunningAuctions(): Promise<ISalesmanAuctionView[]> {
        throw new Error("Method not implemented.");
    }
}
