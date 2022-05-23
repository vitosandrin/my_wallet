import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncCoins = createAsyncThunk(
    'coins/fetchAsyncCoins',
    async () => {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        return response.data    
    }
);

const initialState = {
    coins: [],
    coin: {}
};

const coinSlice = createSlice({
    name: 'coins',
    initialState,
    reducers:{},
    extraReducers:{
        [fetchAsyncCoins.pending]: () => {
            console.log("Pending");
        },
        [fetchAsyncCoins.fulfilled]: (state, action) => {
            console.log("Fetched Successfully!");
            return { ...state, coins: action.payload };
        },
        [fetchAsyncCoins.rejected]: () => {
            console.log("Rejected!");
        },
    }
})

export const getAllCoins = (state) => state.coins.coins;

export default coinSlice.reducer;