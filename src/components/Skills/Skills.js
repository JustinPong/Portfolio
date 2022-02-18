import React from "react";
import Nav from '../../components/Nav/Nav';
import HTML from './HTML5.png';
import './Skills.css';

function Skills() {
    return(
        <div className="skills-page">
            <Nav />
            <div className="flex">
                <img src={HTML} className="language-logo" />
            </div>
        </div>
    )
}

export default Skills;