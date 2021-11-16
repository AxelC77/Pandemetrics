import React from 'react';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import logo from '../images/logo2.png';
import '../styles/Welcome.css';

function Welcome() {
    return (
        <div>
            <div className="header1">
                <h1> pandemetrics </h1>
            </div>
            <div>
                <img className="logo" src={logo} alt=''/>
            </div>
            <div className="header2">
                <h2> See Coronavirus trends that matter to you.</h2>
            </div>
            <Link to="/home">
                <button className="start"> Start </button>
            </Link>
        </div>
    )
}

export default Welcome