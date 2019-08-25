export interface ITransportationTask {
    id: number;
    createdAt: string;
    updatedAt: string;
    bookedAt: string;
    state: string;
    netPrice: number;
    grossPrice: number;
    internalNetPrice: number;
    distanceInKm: number;
    _fk_associatedAuction: number;
    _fk_associatedBuyer: number;
    _fk_transportationProvider: number;
}
