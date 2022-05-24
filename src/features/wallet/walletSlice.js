import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wallet: []
};

const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        addToWallet: (state, action) => {
            const newData = action.payload;
            const existingData = state.wallet.find((data) => data.id === newData.id);
            if (!existingData) {
                state.wallet.push({
                    id: newData.id,
                    symbol: newData.symbol,
                    name: newData.name,
                    image: newData.image,
                    current_price: newData.current_price,
                    market_cap: newData.market_cap,
                });
            }
        },
        removeFromWallet(state, action) {
            const id = action.payload;
            const existingData = state.wallet.find((data) => data.id === id);
            if (existingData) {
                state.wallet = state.wallet.filter((data) => data.id !== id);
            }
        },
    },
});

export const { addToWallet, removeFromWallet } = walletSlice.actions;

export const getAllDataWallet = (state) => state.wallet.wallet;

export default walletSlice.reducer;