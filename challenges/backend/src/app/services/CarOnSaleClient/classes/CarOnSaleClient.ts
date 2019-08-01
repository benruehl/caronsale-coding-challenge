import {inject, injectable} from "inversify";
import {ILogger} from "../../Logger/interface/ILogger";
import {ICarOnSaleClient} from "../interface/ICarOnSaleClient";
import {DependencyIdentifier} from "../../../DependencyIdentifiers";
import "reflect-metadata";
import {createHash} from "crypto";
import fetch from "node-fetch";

@injectable()
export class CarOnSaleClient implements ICarOnSaleClient {

    public constructor(@inject(DependencyIdentifier.LOGGER) private logger: ILogger) {
    }

    private hashPasswordWithCycles(plainTextPassword: string, cycles: number): string {
        let hash = `${plainTextPassword}`;

        for(let i = 0; i < cycles; i++) {
            const sha512 = createHash("sha512");
            sha512.update(hash);
            hash = sha512.digest("hex");
        }

        return hash;
    }

    public async getRunningAuctions(): Promise<void /* TODO: Introduce a type */> {
        const hashpass = this.hashPasswordWithCycles("123test", 5);
        const user = encodeURIComponent("salesman@random.com");
        const headers = {
            "Accept": "application/json",
            "User-Agent": "caronsale-coding-challenge",
        };

        const base = "https://caronsale-backend-service-dev.herokuapp.com/api/v1/";

        const authResponse = await fetch(base + "authentication/" + user, {
            method: "PUT",
            headers: {
                ...headers,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                password: hashpass,
                meta: "",
            }),
        });
        this.logger.log(JSON.stringify({
            password: hashpass,
            meta: "",
        }));
        this.logger.log(authResponse.url);

        const auth = await authResponse.json();

        this.logger.log(JSON.stringify(auth));
        this.logger.log(Buffer.from(auth.token).toString("base64"));

        const response = await fetch(base + "auction/salesman/" + user + "/_all" +
                "?access_token=" + encodeURIComponent(Buffer.from(auth.token).toString("base64")), {
            method: "GET",
            headers: headers,
        });
        const list = await response.json();

        this.logger.log(JSON.stringify(list));
    }

}
