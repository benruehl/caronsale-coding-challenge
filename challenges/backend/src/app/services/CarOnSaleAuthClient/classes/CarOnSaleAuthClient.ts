import {injectable} from "inversify";
import {sha512} from "js-sha512";
import axios from "axios";
import {ICarOnSaleAuthClient} from "../interface/ICarOnSaleAuthClient";
import {IUserAuth} from "../../../models/IUserAuth";

@injectable()
export class CarOnSaleAuthClient implements ICarOnSaleAuthClient {
    private baseUrl: string;

    public constructor(baseUrl: string) {
        this.baseUrl = baseUrl.endsWith("/") ? baseUrl.substr(0, baseUrl.length - 1) : baseUrl;
    }

    public async authorize(userMailId: string, userPassword: string): Promise<IUserAuth> {
        const url = `${this.baseUrl}/authentication/${encodeURIComponent(userMailId)}`;
        const body = {
            password: this.hashPasswordWithCycles(userPassword, 5),
        };

        return await axios.put(url, body);
    }

    private hashPasswordWithCycles(plainTexPassword: string, cycles: number): string {
        let hash = `${plainTexPassword}`;

        for(let i = 0; i < cycles; i++) {
            hash = sha512(hash);
        }

        return hash;
    }
}
