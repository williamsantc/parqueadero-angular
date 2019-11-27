import {Action, createReducer, on} from '@ngrx/store';
import Ticket from 'src/app/shared/models/ticket.model';
import Vehicle from '../../../shared/models/vehicle.model';
import {addVehicle} from '../actions/ticket.actions';

const ticketsIS: Ticket[] = [];

const _vehicleReducer = createReducer(ticketsIS, on(addVehicle, (state, { vehicle }) => {
    const ticket: Ticket = {
        vehicle: Object.assign(new Vehicle(), vehicle),
        entryTime: new Date(),
    };
    return [
        ...state,
        ticket,
    ];
}));

export function vehicleReducer(state: Ticket[], action: Action) {
  return _vehicleReducer(state, action);
}
