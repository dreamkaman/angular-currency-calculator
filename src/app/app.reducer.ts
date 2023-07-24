import { createReducer, on } from '@ngrx/store';

import { setCurrenciesAction } from './app.actions';
import { ICurrencyInfo } from './types';

export interface ICurrenciesState {
    data: ICurrencyInfo[];
}
export const initialState: ICurrenciesState = {
    data: []
}

export const currenciesReducer = createReducer(
    initialState,
    on(setCurrenciesAction, (state, payload) => {
        console.log(state.data);
        console.log(payload);
        return { data: [...payload.currencies] };
    })
)