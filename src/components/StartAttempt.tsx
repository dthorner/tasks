import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inprogress, setInprogress] = useState<boolean>(false);

    return (
        <div>
            <span>Atempts: {attempts}</span>
            <span>In-Progress: {inprogress}</span>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                    setInprogress(!inprogress);
                }}
                disabled={inprogress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    setInprogress(!inprogress);
                }}
                disabled={!inprogress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => setAttempts(attempts + 1)}
                disabled={inprogress}
            >
                Mulligan
            </Button>
        </div>
    );
}
