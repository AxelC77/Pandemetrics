import React from 'react';
import bamboo from "../images/bamboo.png";
import { Link } from 'react-router-dom';
import "../styles/NavigationBar.css";

function NavigationBar() {
    return (
        <div className="navigationbar">
            <div className="leftSide">
                <Link to="/"> <img src={bamboo} alt=''/> </Link>
            </div>
            <div className="rightSide">
                <Link to="/home"> Home </Link>
                <Link to="/covidinfo"> Covid Info </Link>
                <Link to="/about"> About </Link>
            </div>
        </div>
    )
}

export default NavigationBar
