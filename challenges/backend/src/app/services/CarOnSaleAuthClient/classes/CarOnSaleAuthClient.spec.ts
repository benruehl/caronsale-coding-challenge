import "reflect-metadata";
import {expect} from "chai";
import {CarOnSaleAuthClient} from "./CarOnSaleAuthClient";
import {ICarOnSaleAuthClient} from "../interface/ICarOnSaleAuthClient";
import {IUserAuth} from "../../../models/IUserAuth";

describe("Client for CarOnSale authorization API", () => {
    describe("Authorize user by email and password", () => {
        let client: ICarOnSaleAuthClient;

        beforeEach(() => {
            client = new CarOnSaleAuthClient();
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
                expect(await client.authorize(invalidUserCredentials.userMailId, invalidUserCredentials.userPassword)).to.throw();
            });
        });
    });
});
