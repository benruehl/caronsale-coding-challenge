import {ISalesmanAuctionView} from "../../../models/ISalesmanAuctionView";

export interface IAuctionEvaluator {
    getAverageBids(auctions: ISalesmanAuctionView[]): number;
    getAverageProgress(auctions: ISalesmanAuctionView[]): number;
}
