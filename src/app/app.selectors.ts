import { createSelector } from "@ngrx/store";
import { ICurrenciesState } from "./app.reducer";

export const selectCurrencies = (state: ICurrenciesState) => state.data;

export const usdRateSelector = createSelector(
    selectCurrencies,
    state => state?.find((currencyInfo) => currencyInfo.currencyCodeA === 840)
)
