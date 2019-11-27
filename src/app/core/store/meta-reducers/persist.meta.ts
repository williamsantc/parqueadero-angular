import {ActionReducer} from '@ngrx/store';
import {localStorageSync} from 'ngrx-store-localstorage';
import {ParkingState, reducerKeys} from '../reducers';

const STORE_KEYS_TO_PERSIST = reducerKeys;

export function localStorageSyncReducer(reducer: ActionReducer<ParkingState>): ActionReducer<ParkingState> {
    return localStorageSync({
        keys: STORE_KEYS_TO_PERSIST,
        rehydrate: true,
    })(reducer);
}
