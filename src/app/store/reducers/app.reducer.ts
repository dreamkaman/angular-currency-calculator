import { createReducer, on } from '@ngrx/store';

import { setCurrenciesAction } from '../actions/app.actions';
import { ICurrencyInfo } from '../../models/types';

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