import { ActionReducerMap } from '@ngrx/store';

import { AvailabilityReducer } from './reducer/availability.reducer';

export const reducerMapper: ActionReducerMap<any> = {
  availability: AvailabilityReducer,
  
};
