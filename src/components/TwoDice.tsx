import React, { useState } from "react";
import { Button } from "react-bootstrap";

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
    const [left, setLeft] = useState<number>(3);
    const [right, setRight] = useState<number>(2);

    return (
        <div>
            <span data-testid="left-die">{left}</span>
            <span data-testid="right-die">{right}</span>
            <Button onClick={() => setLeft(d6())}>Roll left</Button>
            <Button onClick={() => setRight(d6())}>Roll right</Button>
            {left === right && left !== 1 && right !== 1 ? (
                <span>Win</span>
            ) : (
                <span></span>
            )}
            {left === right && left === 1 && right === 1 ? (
                <span>Lose</span>
            ) : (
                <span></span>
            )}
        </div>
    );
}
