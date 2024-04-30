import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import logo from '../assets/logo_to_do.png';


const Header = () => {
    return (
        <header className="header">
            <div className="logoContainer">
                <h1 className="headerText">TO DO</h1>
                <img src={logo} className="logo" alt="Metal logo" />
            </div>

            <div className="topNav">
                <Link to="/">START</Link>
                <Link to="/informationpage">INFORMATION</Link>
                <Link to="/todopage">TO DO</Link>
            </div>
        </header>
    )
}

export default Header;