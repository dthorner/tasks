import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requesting, setRequesting] = useState<number>(0);

    function updateRequesting(event: React.ChangeEvent<HTMLInputElement>) {
        const newNum = parseInt(event.target.value);

        setRequesting(isNaN(newNum) ? requesting : newNum);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>attempts left: {attempts}</Form.Label>
                <Form.Control
                    type="number"
                    value={requesting}
                    onChange={updateRequesting}
                />
            </Form.Group>
            <Button
                disabled={attempts <= 0}
                onClick={() => setAttempts(attempts - 1)}
            >
                use
            </Button>
            <Button onClick={() => setAttempts(attempts + requesting)}>
                gain
            </Button>
        </div>
    );
}
