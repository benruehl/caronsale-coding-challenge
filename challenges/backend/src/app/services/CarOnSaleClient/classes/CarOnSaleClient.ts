import {injectable, inject} from "inversify";
import axios from "axios";
import {DependencyIdentifier} from "../../../DependencyIdentifiers";
import {ICarOnSaleClient} from "../interface/ICarOnSaleClient";
import {ISalesmanAuctionView} from "../../../models/ISalesmanAuctionView";

@injectable()
export class CarOnSaleClient implements ICarOnSaleClient {

    public constructor(@inject(DependencyIdentifier.CAR_ON_SALE_BASE_URL) private baseUrl: string) {
    }

    public async getRunningAuctions(userId: string, accessToken: string): Promise<ISalesmanAuctionView[]> {
        const url = `${this.baseUrl}/auction/salesman/${encodeURIComponent(userId)}/_all`;

        return (await axios.get(url, {
            headers: {
                authtoken: accessToken,
                userid: userId,
            },
        })).data as ISalesmanAuctionView[];
    }
}
