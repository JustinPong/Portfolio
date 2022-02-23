import React from 'react';
import Nav from '../../components/Nav/Nav';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Work.css';
import Jammming from './Jammming.png';
import todolist from './To-Do-List.png';
import ColmarAcademy from './ColmarAcademy.png';
import FindYourHat from './FindYourHat.png';
import Ravenous from './Ravenous.png';

function Work() {
    return (
        <div className="work-page">
            <Nav />
            <div className="work-page-top">
                <Card className="card" style={{ width: '18rem' }}>
                    <Card.Img className="card-logo" variant="top" src={Jammming} />
                    <Card.Body>
                        <Card.Title className="card-title">Jammming</Card.Title>
                        <Card.Text className='card-text'>
                            An education app that will allow users to save songs to a playlist
                        </Card.Text>
                        <a className="work-link" href="https://github.com/JustinPong/Jammming" variant="primary">Source Code</a><br />
                        <a className="work-link" href="https://justinpong.github.io/Jammming/" variant="primary">Demo</a>
                    </Card.Body>
                </Card>
                <Card className="card" style={{ width: '18rem' }}>
                    <Card.Img className="card-logo" variant="top" src={todolist} />
                    <Card.Body>
                        <Card.Title>To-Do-List</Card.Title>
                        <Card.Text className='card-text'>
                            Demonstrate the technical and non-technical skills developed.
                        </Card.Text>
                        <a className="work-link" href="https://github.com/JustinPong/react-todo-list" variant="primary">Source Code</a><br />
                        <a className="work-link" href="https://justinpong.github.io/react-todo-list/" variant="primary">Demo</a>
                    </Card.Body>
                </Card>
                <Card className="card" style={{ width: '18rem' }}>
                    <Card.Img className="card-logo" variant="top" src={ColmarAcademy} />
                    <Card.Body>
                        <Card.Title>Colmar-Academy</Card.Title>
                        <Card.Text className='card-text'>
                            Building a responsive website which using html, css, and git skill path.
                        </Card.Text>
                        <a className="work-link" href="https://github.com/JustinPong/Colmar-Academy" variant="primary">Source Code</a><br />
                        <a className="work-link" href="https://justinpong.github.io/Colmar-Academy/" variant="primary">Demo</a>
                    </Card.Body>
                </Card>
            </div>
            <div className="work-page-bottom">
                <Card className="card" style={{ width: '18rem' }}>
                    <Card.Img className="card-logo" variant="top" src={FindYourHat} />
                    <Card.Body>
                        <Card.Title>Find Your Hat</Card.Title>
                        <Card.Text className='card-text'>
                            Building an interactive terminal game, the player must navigate back to hat without falling down the holes or stepping outside the field.
                        </Card.Text>
                        <a className="work-link" href="https://github.com/JustinPong/find-your-hat" variant="primary">Source Code</a><br />
                        <a className="work-link not-work" href="#" variant="primary">Demo</a>
                    </Card.Body>
                </Card>
                <Card className="card" style={{ width: '18rem' }}>
                    <Card.Img className="card-logo" variant="top" src={Ravenous} />
                    <Card.Body>
                        <Card.Title className="card-title">Ravenous</Card.Title>
                        <Card.Text className='card-text'>
                            React and API project
                        </Card.Text>
                        <a className="work-link" href="https://github.com/JustinPong/Ravenous" variant="primary">Source Code</a><br />
                        <a className="work-link not-work" href="#" variant="primary">Demo</a>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Work;