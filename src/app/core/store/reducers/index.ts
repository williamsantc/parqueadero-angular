import {ActionReducerMap} from '@ngrx/store';
import Ticket from '../../../shared/models/ticket.model';
import {vehicleReducer} from './vehicle.reducer';

export interface ParkingState {
  vehicles: Ticket[];
}

export const reducers: ActionReducerMap<ParkingState> = {
  vehicles: vehicleReducer,
};

export const reducerKeys = Object.keys(reducers) as Array<(keyof ParkingState)>;
