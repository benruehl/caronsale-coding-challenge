import "reflect-metadata";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import {expect} from "chai";
import {CarOnSaleAuthClient} from "./CarOnSaleAuthClient";
import {ICarOnSaleAuthClient} from "../interface/ICarOnSaleAuthClient";
import {IUserAuth} from "../../../models/IUserAuth";

describe("Client for CarOnSale authorization API", () => {
    describe("Authorize user by email and password", () => {
        const authBaseUrl = "http://caronsale-backend-service-dev.herokuapp.com/api/v1";
        let client: ICarOnSaleAuthClient;

        before(() => {
            client = new CarOnSaleAuthClient(authBaseUrl);
        });

        context("when valid credentials are used", () => {
            const validUserCredentials = {
                userMailId: "salesman@random.com",
                userPassword: "123test",
            };

            let authResponse: IUserAuth;

            before(async () => {
                authResponse = await client.authorize(validUserCredentials.userMailId, validUserCredentials.userPassword);
            });

            it("should return an object", () => {
                expect(authResponse).to.be.an("object");
            });

            it("should have an access token", () => {
                expect(authResponse.token).to.not.equal(null);
                expect(authResponse.token).to.not.equal("");
            });
        });

        context("when invalid credentials are used", () => {
            const invalidUserCredentials = {
                userMailId: "invalid-email-address",
                userPassword: null,
            };

            it("should throw an error", async () => {
                chai.use(chaiAsPromised);
                await expect(client.authorize(invalidUserCredentials.userMailId, invalidUserCredentials.userPassword)).to.be.rejected;
            });
        });
    });
});
