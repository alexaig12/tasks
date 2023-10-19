import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    //two states for each die
    const [leftDie, setLeftDie] = useState(1);
    const [rightDie, setRightDie] = useState(2);

    //rolls for left die with random num
    const rollLeftDie = () => {
        setLeftDie(d6());
    };

    //rolls for right die with random num
    const rollRightDie = () => {
        setRightDie(d6());
    };

    //if left die and right die are equal, then it is a win
    //else, if both are equal to one, then it is a lose ("snake eye")
    const isWin = leftDie === rightDie && leftDie !== 1; // Check for a win condition
    const isLose = leftDie === 1 && rightDie === 1; // Check for a lose condition

    return (
        <Container>
            <Row>
                <Col>
                    <span data-testid="left-die">{leftDie}</span>
                    <Button onClick={rollLeftDie}>Roll Left</Button>
                </Col>
                <Col>
                    <span data-testid="right-die">{rightDie}</span>
                    <Button onClick={rollRightDie}>Roll Right</Button>
                </Col>
            </Row>
            {isWin && <p>You Win!</p>}
            {isLose && <p>You Lose!</p>}
        </Container>
    );
}
