import React, { useEffect } from "react";
import { getAllCoins, fetchAsyncCoins } from "../../features/Coin/coinSlice";
import { useDispatch, useSelector } from "react-redux";

const CoinList = () => {
    const dispatch = useDispatch();
    const coins = useSelector(getAllCoins)

    useEffect(() => {
        dispatch(fetchAsyncCoins())
    }, [dispatch])

    return (
        <div>
            {coins.map((coin) => {
                return (
                    <div key={coin.id}>
                        {coin.name}
                    </div>
                )
            })}
        </div>
    )

};

export default CoinList;