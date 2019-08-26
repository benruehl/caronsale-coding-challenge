import "reflect-metadata";
import {expect} from "chai";
import {ICarOnSaleClient} from "../interface/ICarOnSaleClient";
import {CarOnSaleClient} from "./CarOnSaleClient";
import {CarOnSaleAuthClient} from "../../CarOnSaleAuthClient/classes/CarOnSaleAuthClient";
import {IUserAuth} from "../../../models/IUserAuth";

describe("Client for CarOnSale development API", () => {
    describe("Get running auctions", () => {
        const baseUrl = "http://caronsale-backend-service-dev.herokuapp.com/api/v1";
        const validUserCredentials = {
            userMailId: "salesman@random.com",
            userPassword: "123test",
        };
        let client: ICarOnSaleClient;
        let userAuth: IUserAuth;

        before(async () => {
            client = new CarOnSaleClient(baseUrl);
            userAuth = await new CarOnSaleAuthClient(baseUrl).authorize(validUserCredentials.userMailId, validUserCredentials.userPassword);
        });

        it("should return an array", async () => {
            const auctions = await client.getRunningAuctions(userAuth.userId, userAuth.token);
            expect(auctions).to.be.an("array");
        });
    });
});
