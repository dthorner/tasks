import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Some Header</h1>
            <img src="" alt="some alt text" />
            <ol>
                <li>element 1</li>
                <li>element 2</li>
                <li>element 3</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div className="Rectangles"></div>
                    </Col>
                    <Col>
                        <div className="Rectangles"></div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Devlan Horner Hello World
            </p>
        </div>
    );
}

export default App;
