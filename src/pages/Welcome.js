import React from 'react';
import NavigationBar from '../components/NavigationBar';
import logo from '../images/logo2.png';
import '../styles/Welcome.css';

function Welcome() {
    return (
        <div>
            <div className="header1">
                <h1> pandemetrics </h1>
            </div>
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="header2">
            <h2> See Coronavirus trends that matter to you.</h2>
            </div>
        </div>
    )
}

export default Welcome