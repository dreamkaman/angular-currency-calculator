import { createReducer, on } from '@ngrx/store';

import { setCurrenciesAction } from './app.actions';
import { ICurrencyInfo } from './types';

export interface IGlobalState {
    currencies: ICurrenciesState,
}

export interface ICurrenciesState {
    data: ICurrencyInfo[];
}

export const initialState: ICurrenciesState = {
    data: []
}

export const currenciesReducer = createReducer(
    initialState,
    on(setCurrenciesAction, (_state, payload) => {

        return { data: [...payload.currencies] };
    })
)