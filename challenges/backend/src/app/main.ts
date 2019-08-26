import {Container} from "inversify";
import {ILogger} from "./services/Logger/interface/ILogger";
import {Logger} from "./services/Logger/classes/Logger";
import {AuctionMonitorApp} from "./AuctionMonitorApp";
import {DependencyIdentifier} from "./DependencyIdentifiers";
import {ICarOnSaleClient} from "./services/CarOnSaleClient/interface/ICarOnSaleClient";
import {CarOnSaleClient} from "./services/CarOnSaleClient/classes/CarOnSaleClient";
import {ICarOnSaleAuthClient} from "./services/CarOnSaleAuthClient/interface/ICarOnSaleAuthClient";
import {CarOnSaleAuthClient} from "./services/CarOnSaleAuthClient/classes/CarOnSaleAuthClient";

/*
 * Create the DI container.
 */
const container = new Container({
    defaultScope: "Singleton",
});

/*
 * Register dependencies in DI environment.
 */
container.bind<ILogger>(DependencyIdentifier.LOGGER).to(Logger);
container.bind<ICarOnSaleClient>(DependencyIdentifier.CAR_ON_SALE_CLIENT).to(CarOnSaleClient);
container.bind<ICarOnSaleAuthClient>(DependencyIdentifier.CAR_ON_SALE_AUTH_CLIENT).to(CarOnSaleAuthClient);
container.bind<string>(DependencyIdentifier.CAR_ON_SALE_BASE_URL).toConstantValue("http://caronsale-backend-service-dev.herokuapp.com/api/v1");


/*
 * Inject all dependencies in the application & retrieve application instance.
 */
const app = container.resolve(AuctionMonitorApp);

/*
 * Start the application
 */
(async () => {
    await app.start();
})();
