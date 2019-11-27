import {Action, MetaReducer} from '@ngrx/store';
import {environment} from '../../../../environments/environment';
import {ParkingState} from '../reducers';
import {localStorageSyncReducer} from './persist.meta';

export const metaReducers: Array<MetaReducer<ParkingState, Action>> = !environment.production ? [localStorageSyncReducer] : [];
