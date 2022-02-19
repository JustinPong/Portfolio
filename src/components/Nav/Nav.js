import React from "react";
import './Nav.css';
import { Link } from 'react-router-dom';
import Pdf from './JustinPong CV with VASK.pdf';

function Nav() {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <Link to="/" className="logo">
                <h2 className="title">Justin's</h2>
                </Link>
                <Link to="/" className="logo">
                <h2 className="title2">Portfolio</h2>
                </Link>
            </div>
            <div className="navbar-right">
                <Link to="/" className="link">Home</Link>
                <Link to="/about" className="link">About</Link>
                <Link to="/skills" className="link">Skills</Link>
                <Link to="/work" className="link">Work</Link>
                <a href={Pdf} className="link">Resume</a>
                {/* <Link to="/contact" className="link">Contact</Link> */}
            </div>
        </div>
    )
}

export default Nav;