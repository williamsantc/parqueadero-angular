import Ticket from 'src/app/shared/models/ticket.model';
import { createReducer, on, combineReducers } from '@ngrx/store';
import { addVehicle } from '../actions/ticket.actions';

const initialEstate: Ticket[] = [];

const vehicleReducer = createReducer(initialEstate, on(addVehicle, (state, { vehicle }) => {
    const ticket: Ticket = {
        vehicle,
        entryTime: new Date(),
    };
    return [
        ...state,
        ticket
    ];
}));

const ticketReducers = combineReducers({
    vehicleReducer
});

export default ticketReducers;


export type TicketReducersType = ReturnType<typeof ticketReducers>;
