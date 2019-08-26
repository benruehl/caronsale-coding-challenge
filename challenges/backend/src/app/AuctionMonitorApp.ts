import "reflect-metadata";
import {inject, injectable} from "inversify";
import {ILogger} from "./services/Logger/interface/ILogger";
import {DependencyIdentifier} from "./DependencyIdentifiers";
import {ICarOnSaleAuthClient} from "./services/CarOnSaleAuthClient/interface/ICarOnSaleAuthClient";
import {ICarOnSaleClient} from "./services/CarOnSaleClient/interface/ICarOnSaleClient";

@injectable()
export class AuctionMonitorApp {

    public constructor(
        @inject(DependencyIdentifier.LOGGER) private logger: ILogger,
        @inject(DependencyIdentifier.CAR_ON_SALE_AUTH_CLIENT) private authClient: ICarOnSaleAuthClient,
        @inject(DependencyIdentifier.CAR_ON_SALE_CLIENT) private client: ICarOnSaleClient) {
    }

    public async start(): Promise<void> {

        this.logger.log(`Auction Monitor started.`);
        this.logger.log(`Authorizing ...`);

        const auth = await this.authClient.authorize("salesman@random.com", "123test");

        this.logger.log(`... Authorization done`);
        this.logger.log(`Retrieving auctions ...`);

        const auctions = await this.client.getRunningAuctions(auth.userId, auth.token);
        const averageBids = auctions.reduce((sum, cur) => sum + cur.numBids, 0) / auctions.length;
        const averageProgress = auctions
            .reduce((sum, cur) => sum + (cur.minimumRequiredAsk ? (cur.currentHighestBidValue / cur.minimumRequiredAsk) : 1), 0) / auctions.length;

        this.logger.log(`... Auctions retrieved`);
        this.logger.log(``);
        this.logger.log(`Available auctions: ${auctions.length}`);
        this.logger.log(`Average Bids: ${averageBids}`);
        this.logger.log(`Average Percentage: ${(averageProgress * 100).toFixed(2)}%`);
    }

}
