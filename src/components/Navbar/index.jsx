import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllDataWallet } from "../../features/wallet/walletSlice";
import './styles.css'

const Navbar = () => {

    const wallet = useSelector(getAllDataWallet);

    return(
        <header className="navbar">
            <Link className="link" to={'/'}>My-Wallet</Link>
            <Link className="link" to={'/coins'}>Coins</Link>
            <Link className="link" to={'/wallet'}>Wallet:{wallet.length}</Link>
        </header>
    )
}

export default Navbar;