import { createSelector } from "@ngrx/store";
import { IGlobalState } from "./app.reducer";

export const selectCurrencies = (state: IGlobalState) => state;

export const usdRateSelector = createSelector(
    selectCurrencies,
    state => {
        console.log(state);
        const result = state?.currencies.data.find(currencyInfo => currencyInfo.currencyCodeA === 840);

        console.log(result);
        return result;

    }
)

export const eurRateSelector = createSelector(
    selectCurrencies,
    state => state?.currencies.data.find(currencyInfo => currencyInfo.currencyCodeA === 978)
)

export const allSelector = createSelector(
    selectCurrencies,
    state => {
        console.log(state);
        return state
    }

)