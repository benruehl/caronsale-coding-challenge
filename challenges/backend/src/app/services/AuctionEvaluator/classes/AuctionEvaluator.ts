import {IAuctionEvaluator} from "../interface/IAuctionEvaluator";
import {ISalesmanAuctionView} from "../../../models/ISalesmanAuctionView";

export class AuctionEvaluator implements IAuctionEvaluator {
    public getAverageBids(auctions: ISalesmanAuctionView[]): number {
        throw new Error("Method not implemented.");
    }

    public getAverageProgress(auctions: ISalesmanAuctionView[]): number {
        throw new Error("Method not implemented.");
    }
}
