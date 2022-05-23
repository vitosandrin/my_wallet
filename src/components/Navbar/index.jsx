import React from "react";
import { Link } from "react-router-dom";
import './styles.css'

const Navbar = () => {
    return(
        <header className="navbar">
            <Link to={'/wallet'}>Wallet</Link>
            <Link to={'/coins'}>Coins</Link>
            <Link to={'/'}>Home</Link>
        </header>
    )
}

export default Navbar;