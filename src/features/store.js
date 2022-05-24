import { configureStore } from "@reduxjs/toolkit";
import coinReducer from './coin/coinSlice'
import walletReducer from './wallet/walletSlice'

export const store = configureStore({
    reducer: {
        coins: coinReducer,
        wallet: walletReducer
    }
})