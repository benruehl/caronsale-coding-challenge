import { ISalesmanAuctionView } from "../../../models/ISalesmanAuctionView";

/**
 * This service describes an interface to access auction data from the CarOnSale API.
 */
export interface ICarOnSaleClient {

    getRunningAuctions(): Promise<ISalesmanAuctionView[]>;

}
