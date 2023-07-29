import { createAction, props } from '@ngrx/store';

import { ICurrencyInfo } from '../../models/types';

export enum ActionTypes {
    SET_CURRENCIES = 'SET_CURRENCIES',
}

export const setCurrenciesAction = createAction(
    ActionTypes.SET_CURRENCIES,
    props<{ currencies: ICurrencyInfo[] }>()
)