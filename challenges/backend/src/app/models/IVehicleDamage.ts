export interface IVehicleDamage {
    id: number;
    location: string;
    type: string;
    description: string;
    _fk_associatedVehicle: number;
}
