import {injectable, inject} from "inversify";
import {sha512} from "js-sha512";
import axios from "axios";
import {DependencyIdentifier} from "../../../DependencyIdentifiers";
import {ICarOnSaleAuthClient} from "../interface/ICarOnSaleAuthClient";
import {IUserAuth} from "../../../models/IUserAuth";

@injectable()
export class CarOnSaleAuthClient implements ICarOnSaleAuthClient {
    public constructor(@inject(DependencyIdentifier.CAR_ON_SALE_BASE_URL) private baseUrl: string) {
    }

    public async authorize(userMailId: string, userPassword: string): Promise<IUserAuth> {
        const url = `${this.baseUrl}/authentication/${encodeURIComponent(userMailId)}`;
        const body = {
            password: this.hashPasswordWithCycles(userPassword, 5),
        };

        return (await axios.put(url, body)).data as IUserAuth;
    }

    private hashPasswordWithCycles(plainTexPassword: string, cycles: number): string {
        let hash = `${plainTexPassword}`;

        for(let i = 0; i < cycles; i++) {
            hash = sha512(hash);
        }

        return hash;
    }
}
