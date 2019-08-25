import "reflect-metadata";
import {expect} from "chai";
import {CarOnSaleClient} from "./CarOnSaleClient";

describe("Client for CarOnSale development API", () => {
    describe("Get running auctions", () => {
        let client;

        beforeEach(() => {
            client = new CarOnSaleClient();
        });

        it("should return an array", () => {
            const auctions = client.getRunningAuctions();
            expect(auctions).to.be.an("array");
        });
    });
});
