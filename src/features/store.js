import { configureStore } from "@reduxjs/toolkit";
import coinReducer from './Coin/coinSlice'

export const store = configureStore({
    reducer: {
        coins: coinReducer
    }
})