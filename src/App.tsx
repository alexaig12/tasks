import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>Hi...</h1>

            <img src="bear.jpg" alt="UMaine Bears logo" />

            <p>
                Hello World. Edit <code>src/App.tsx</code> and save. This page
                will automatically reload. Alexa.
            </p>

            <ul>
                <li>Dutton</li>
                <li>Gym</li>
                <li>School</li>
            </ul>

            <button type="button" className="btn">
                Hello World
            </button>
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => console.log("Hello World!")}
            >
                Log Hello World
            </button>

            <Container className="div">
                <Row>
                    <Col>First Column</Col>
                    <Col>Second Column</Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
