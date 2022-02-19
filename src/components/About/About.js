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
                        About Me.
                    </h1>
                    <h3 className="about">
                        I'm a Front-End Developer located in Hong Kong.<br />
                        I have a serious passion for web developing,
                        designing and programming.<br /> Also hungry for challenges and yearning to put my brains to the test.<br />
                        <br />
                        I am addicted in the entire frontend spectrum and <br />
                        working on ambitious projects with positive people. <br />
                        Are you interested in working on something awesome together? 
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