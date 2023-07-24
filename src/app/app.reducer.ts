import { createReducer, on } from '@ngrx/store';

import { setCurrenciesAction } from './app.actions';
import { ICurrencyInfo } from './types';

export interface ICurrenciesState {
    currencies: ICurrencyInfo[];
}
export const initialState: ICurrenciesState = {
    currencies: []
}

export const currenciesReducer = createReducer(
    initialState,
    on(setCurrenciesAction, (state, payload) => {
        console.log(state.currencies);
        console.log(payload);
        return { ...initialState };
    })
)