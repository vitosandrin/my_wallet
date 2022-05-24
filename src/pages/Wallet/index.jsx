import React from "react";
import { getAllDataWallet, removeFromWallet } from "../../features/wallet/walletSlice";
import { useDispatch, useSelector } from "react-redux";

const Wallet = () => {
    const wallet = useSelector(getAllDataWallet);
    const dispatch = useDispatch();
    
    const removeDataFromWallet = (id) => {
        dispatch(removeFromWallet(id));
    };

    return(
        <div>
            {wallet.map((coin) => {
                return(
                    <div key={coin.id}>
                        <h1>{coin.name}</h1>
                        <p>{coin.current_price}</p>
                        <button onClick={() => removeDataFromWallet(coin.id) }>remove</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Wallet;