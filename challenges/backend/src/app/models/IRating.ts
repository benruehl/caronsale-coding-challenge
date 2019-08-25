import { IDealershipUser } from "./IDealershipUser";
import { IAuction } from "./IAuction";
import { ISalesmanUser } from "./ISalesmanUser";

export interface IRating {
    value: number;
    textFeedback: string;
    associatedAuction: IAuction;
    _fk_associatedAuction: number;
    associatedDealership: IDealershipUser;
    _fk_associatedDealership: number;
    associatedSalesman: ISalesmanUser;
    _fk_associatedSalesman: number;
    id: number;
}
