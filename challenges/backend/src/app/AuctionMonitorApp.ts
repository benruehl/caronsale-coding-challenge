import "reflect-metadata";
import {inject, injectable} from "inversify";
import {ILogger} from "./services/Logger/interface/ILogger";
import {DependencyIdentifier} from "./DependencyIdentifiers";
import {ICarOnSaleAuthClient} from "./services/CarOnSaleAuthClient/interface/ICarOnSaleAuthClient";
import {ICarOnSaleClient} from "./services/CarOnSaleClient/interface/ICarOnSaleClient";
import {IAuctionEvaluator} from "./services/AuctionEvaluator/interface/IAuctionEvaluator";

@injectable()
export class AuctionMonitorApp {

    public constructor(
        @inject(DependencyIdentifier.LOGGER) private logger: ILogger,
        @inject(DependencyIdentifier.CAR_ON_SALE_AUTH_CLIENT) private authClient: ICarOnSaleAuthClient,
        @inject(DependencyIdentifier.CAR_ON_SALE_CLIENT) private client: ICarOnSaleClient,
        @inject(DependencyIdentifier.AUCTION_EVALUATOR) private auctionEvaluator: IAuctionEvaluator) {
    }

    public async start(): Promise<void> {

        this.logger.log(`Auction Monitor started.`);
        this.logger.log(`Authorizing ...`);

        const auth = await this.authClient.authorize("salesman@random.com", "123test");

        this.logger.log(`... Authorization done`);
        this.logger.log(`Retrieving auctions ...`);

        const auctions = await this.client.getRunningAuctions(auth.userId, auth.token);
        const averageBids = this.auctionEvaluator.getAverageBids(auctions);
        const averageProgress = this.auctionEvaluator.getAverageProgress(auctions);

        this.logger.log(`... Auctions retrieved`);
        this.logger.log(``);
        this.logger.log(`Available auctions: ${auctions.length}`);
        this.logger.log(`Average Bids: ${averageBids.toFixed(2)}`);
        this.logger.log(`Average Percentage: ${(averageProgress * 100).toFixed(2)}%`);
    }

}
