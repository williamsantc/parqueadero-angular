import { StateType } from '../reducers';
import { createSelector } from '@ngrx/store';

const vehiclesSelector = (state: StateType) => state.mainReducer.TicketReducers.vehicleReducer;

export const getVehicles = createSelector(
    vehiclesSelector,
    (state) => state
);
