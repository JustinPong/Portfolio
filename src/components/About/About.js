import Nav from '../../components/Nav/Nav';
import './About.css';
import become from './How-to-become-a-Full-Stack-Web-Developer--451x300.png';

function About() {
    return (
        <div className="about-page">
            <Nav />
            <div className="about-me">
                <div className="about-left">
                    <h1 className="about-title">
                        About Me
                    </h1>
                    <h3 className="about">
                        I'm a Front-End Developer located in Hong Kong.
                    </h3>
                </div>
                <img 
                src={become}
                className="about-right"
                />
            </div>
        </div>
    )
}

export default About;