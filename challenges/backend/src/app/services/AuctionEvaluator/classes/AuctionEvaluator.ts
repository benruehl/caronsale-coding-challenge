import {injectable} from "inversify";
import {IAuctionEvaluator} from "../interface/IAuctionEvaluator";
import {ISalesmanAuctionView} from "../../../models/ISalesmanAuctionView";

@injectable()
export class AuctionEvaluator implements IAuctionEvaluator {

    public getAverageBids(auctions: ISalesmanAuctionView[]): number {
        if (!auctions.length) {
            return 0;
        }

        return auctions.reduce((sum, cur) => sum + cur.numBids, 0) / auctions.length;
    }

    public getAverageProgress(auctions: ISalesmanAuctionView[]): number {
        if (!auctions.length) {
            return 0;
        }

        return auctions
            .reduce((sum, cur) => sum + (cur.minimumRequiredAsk ? (cur.currentHighestBidValue / cur.minimumRequiredAsk) : 1), 0) / auctions.length;
    }
}
