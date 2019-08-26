import chai from "chai";
import {expect} from "chai";
import {ISalesmanAuctionView} from "../../../models/ISalesmanAuctionView";
import {AuctionEvaluator} from "./AuctionEvaluator";

describe("Evaluator of CarOnSale auctions", () => {
    let evaluator: AuctionEvaluator;

    beforeEach(() => {
        evaluator = new AuctionEvaluator();
    });

    describe("Get average bids", () => {
        it("should return 0.5 for auctions with 0 and 1 bids", () => {
            const auctions: ISalesmanAuctionView[] = [
                {
                    numBids: 0,
                } as ISalesmanAuctionView,
                {
                    numBids: 1,
                } as ISalesmanAuctionView,
            ];

            const averageBids = evaluator.getAverageBids(auctions);
            expect(averageBids).to.equal(0.5);
        });

        it("should return 0 for auction with 0 bids", () => {
            const auctions: ISalesmanAuctionView[] = [
                {
                    numBids: 0,
                } as ISalesmanAuctionView,
            ];

            const averageBids = evaluator.getAverageBids(auctions);
            expect(averageBids).to.equal(0);
        });

        it("should return 0 for no auctions", () => {
            const auctions: ISalesmanAuctionView[] = [];
            const averageBids = evaluator.getAverageBids(auctions);
            expect(averageBids).to.equal(0);
        });

        it("should throw when given null", () => {
            expect(() => evaluator.getAverageBids(null)).to.throw(Error);
        });
    });

    describe("Get average progress", () => {
        it("should return 0.5 for auctions with progress of 0 and 1", () => {
            const auctions: ISalesmanAuctionView[] = [
                {
                    currentHighestBidValue: 0,
                    minimumRequiredAsk: 1,
                } as ISalesmanAuctionView,
                {
                    currentHighestBidValue: 1,
                    minimumRequiredAsk: 1,
                } as ISalesmanAuctionView,
            ];

            const averageProgress = evaluator.getAverageProgress(auctions);
            expect(averageProgress).to.equal(0.5);
        });

        it("should return 1 for auctions without minimum ask", () => {
            const auctions: ISalesmanAuctionView[] = [
                {
                    currentHighestBidValue: 1,
                    minimumRequiredAsk: 0,
                } as ISalesmanAuctionView,
                {
                    currentHighestBidValue: 1,
                    minimumRequiredAsk: null,
                } as ISalesmanAuctionView,
            ];

            const averageProgress = evaluator.getAverageProgress(auctions);
            expect(averageProgress).to.equal(1);
        });

        it("should return 0 for no auctions", () => {
            const auctions: ISalesmanAuctionView[] = [];
            const averageProgress = evaluator.getAverageProgress(auctions);
            expect(averageProgress).to.equal(0);
        });

        it("should throw when given null", () => {
            expect(() => evaluator.getAverageProgress(null)).to.throw(Error);
        });
    });
});
