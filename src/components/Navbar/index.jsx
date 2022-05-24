import React from "react";
import { Link } from "react-router-dom";
import './styles.css'

const Navbar = () => {
    return(
        <header className="navbar">
            <Link to={'/'}>Home</Link>
            <Link to={'/coins'}>Coins</Link>
            <Link to={'/wallet'}>Wallet</Link>
        </header>
    )
}

export default Navbar;