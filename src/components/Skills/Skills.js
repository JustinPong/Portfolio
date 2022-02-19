import React from "react";
import Nav from '../../components/Nav/Nav';
import HTML from './HTML.png';
import CSS from './CSS.png';
import JavaScript from './JavaScript.png';
import Bootstrap from './Bootstrap.png';
import ReactJs from './React.png';
import Git from './Git.png';
import './Skills.css';

function Skills() {
    return (
        <div className="skills-page">
            <Nav />
            <div className="skills-top">
                <img src={HTML} className="language-logo" />
                <img src={CSS} className="language-logo" />
                <img src={JavaScript} className="language-logo" />
                <img src={ReactJs} className="language-logo" />
                <img src={Git} className="language-logo" />
                <img src={Bootstrap} className="language-logo" />
            </div>
            <div className="skills-bottom">
                <h3 className="skills-title" >
                    Skills.
                </h3>
                <h5 className="skills-article" >
                HTML, CSS, JavaScript, ReactJS, Git, and Bootstrap are the languages or skills that my bootcamp focuses on, which meant these are the languages I am most familiar with and plan to learn more in the future, such as PHP, React-Native, MySQL.
                </h5>
            </div>
        </div>
    )
}

export default Skills;