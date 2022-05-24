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
                    image: newData.image,
                    price: newData.price,
                    current_price: newData.current_price,
                    name: newData.name,
                    description: newData.description,
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