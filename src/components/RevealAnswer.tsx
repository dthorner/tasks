import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <span>
            <Button onClick={() => setVisible(!visible)}>
                {visible ? "42" : "Reveal Answer"}
            </Button>
        </span>
    );
}
