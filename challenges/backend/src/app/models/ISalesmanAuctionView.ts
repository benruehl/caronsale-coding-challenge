import { IDealershipUser } from "./IDealershipUser";
import { IFile } from "./IFile";
import { ITransportationTask } from "./ITransportationTask";
import { IRating } from "./IRating";
import { IVehicle } from "./IVehicle";

enum LocationCountryCode {
    DE,
    AT,
    CH,
    CZ,
    PL,
    US,
}

export interface ISalesmanAuctionView {
    amIHighestBidder: boolean;
    amIInvolved: boolean;
    watching: boolean;
    sellerType: string;
    sellerContact: IDealershipUser;
    biddingAgentValue: number;
    isMinAskReached: boolean;
    rating: IRating;
    transportationTask: ITransportationTask;
    label: string;
    state: string;
    endingTime: string;
    remainingTimeInSeconds: number;
    remainingTimeForInstantPurchaseInSeconds: number;
    createdAt: string;
    startedAt: string;
    paymentDueDate: string;
    pickupDueDate: string;
    purchaseConfirmedAt: string;
    purchaseRejectedAt: string;
    outgoingPaymentConfirmedAt: string;
    incomingPaymentConfirmedAt: string;
    pickupConfirmedAt: string;
    locationCountryCode: LocationCountryCode;
    locationCountry: string;
    locationAddress: string;
    locationCity: string;
    locationZip: string;
    minimumRequiredAsk: number;
    originalMinimumRequiredAsk: number;
    purchasePrice: number;
    currentHighestBidValue: number;
    numBids: number;
    associatedVehicle: IVehicle;
    isRatedByDealership: boolean;
    isRatedByBuyer: boolean;
    isPaidByBuyer: boolean;
    invoice: IFile;
    urlToInvoice: string;
    hotBid: boolean;
    instantPurchasePrice: number;
    allowInstantPurchase: boolean;
    didEndWithInstantPurchase: boolean;
    instantPurchasePossibleUntil: string;
    auctioningIterations: number;
    priority: number;
    advertisementHtmlContent: string;
    urlToPickUpAuthorizationDocument: string;
    buyerComplaint: string;
    _fk_associatedVehicle: number;
    _fk_associatedDealershipUser: number;
    _fk_highestBiddingSalesmanUser: number;
    _fk_involvedInternalUser: number;
    involvedInternalUserRole: string;
    internalUserCommission: number;
    id: number;
}
