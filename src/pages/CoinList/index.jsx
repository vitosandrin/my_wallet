import React, { useEffect } from "react";
import { getAllCoins, fetchAsyncCoins } from "../../features/coin/coinSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToWallet } from "../../features/wallet/walletSlice";

const CoinList = () => {
    const dispatch = useDispatch();
    const coins = useSelector(getAllCoins)

    useEffect(() => {
        dispatch(fetchAsyncCoins())
    }, [dispatch])

    const addCoinToWallet = (coin) =>{
        dispatch(addToWallet(coin))
    }

    return (
        <div>
            {coins.map((coin) => {
                return (
                    <div key={coin.id}>
                        <h1>{coin.name}</h1>
                        <button onClick={() => addCoinToWallet(coin)}>cart</button>
                    </div>
                )
            })}
        </div>
    )

};

export default CoinList;