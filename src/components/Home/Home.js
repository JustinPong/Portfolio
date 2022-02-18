import React from "react";
import Nav from "../../components/Nav/Nav";
import './Home.css';


function Home() {
    return (
        <div className="home-page">
            <Nav />
            <h1 className="intro">
                Hi there,<br />
                I'm <font style={{ color: "rgb(6,217,158)" }}>Justin</font>,<br />
                a junior web developer
            </h1>
        </div>
    )
}

export default Home;