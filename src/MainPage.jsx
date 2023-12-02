import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css"
let Functional=({ toggleMenu })=>{
    return(
        <div className="container">
        <div className="navbar">
            <div className="menu">
                <h3 className="logo">My Portfolio</h3>
                <div className="hamburger-menu" onClick={toggleMenu}>
                    <div className="bar"></div>
                </div>
            </div>
        </div>
        <div className="main-container">
            <div className="main">
                <header>
                    <div className="overlay">
                        <div className="inner">
                            <h2 className="title">Hi,My name is Indranil</h2>
                            <br />
                            <h3>I am a passionate Web Developer</h3>
                            </div>
                    </div>
                </header>
            </div>
            <div className="shadow one"></div>
            <div className="shadow two"></div>
        </div>
        <div className="links">
        <ul>
        <li><Link to="/" style={{ '--i': '0.05s' }}>Home</Link></li>
        <li><Link to="/my-profiles" style={{ '--i': '0.10s' }}>My Profiles</Link></li>
        <li><a href="https://github.com/IndranilShingne/resume/blob/main/INDRANIL_GANESH_SHINGNE_RESUME.pdf"  style={{ '--i': '0.15s' }}>Download my resume</a></li>
        <li><Link to="/contact-me" style={{ '--i': '0.20s' }}>Contact Me</Link></li>
        </ul>
        </div>
    </div>
    )
}

export default Functional;
//we can call defult module component by using different name