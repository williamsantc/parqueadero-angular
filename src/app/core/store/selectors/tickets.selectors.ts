import {createSelector} from '@ngrx/store';
import {ParkingState} from '../reducers';

const vehiclesSelector = (state: ParkingState) => state.vehicles;

export const getVehicles = createSelector(
    vehiclesSelector,
    (state) => state
);
