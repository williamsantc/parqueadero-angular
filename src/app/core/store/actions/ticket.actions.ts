import { createAction, props } from '@ngrx/store';
import Vehicle from 'src/app/shared/models/vehicle.model';

export interface AddVehicleAction {
    vehicle: Vehicle;
}

export const addVehicle = createAction('[Parking Module] Add Vehicle', props<AddVehicleAction>());
