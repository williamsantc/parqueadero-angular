import TicketReducers from './ticket.reducers';
import { combineReducers } from '@ngrx/store';

const storeReducer = combineReducers({
    TicketReducers
});

export default storeReducer;

export interface StateType {
    mainReducer: ReturnType<typeof storeReducer>;
}

