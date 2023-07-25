import { createSelector } from "@ngrx/store";
import { IGlobalState } from "./app.reducer";

export const selectCurrencies = (state: IGlobalState) => state;

export const usdUahRateSelector = createSelector(
    selectCurrencies,
    state => state?.currencies.data.find(currencyInfo => currencyInfo.currencyCodeA === 840)
)

export const eurUahRateSelector = createSelector(
    selectCurrencies,
    state => state?.currencies.data.find(currencyInfo => currencyInfo.currencyCodeA === 978)
)

export const eurUsdRateSelector = createSelector(
    selectCurrencies,
    state => state?.currencies.data.find(currencyInfo => currencyInfo.currencyCodeA === 978 && currencyInfo.currencyCodeB === 840)
)