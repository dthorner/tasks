import React, { useState } from "react";
import { Form } from "react-bootstrap";
const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "white",
    "brown"
];

export function ChangeColor(): JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>("blue");

    function updateChosenColor(event: React.ChangeEvent<HTMLInputElement>) {
        setChosenColor(event.target.value);
    }

    return (
        <div>
            <p
                style={{ backgroundColor: chosenColor }}
                data-testid="colored-box"
            >
                {chosenColor}
            </p>
            {COLORS.map((color: string) => (
                <Form.Check
                    type="radio"
                    key={color}
                    name="colors"
                    onChange={updateChosenColor}
                    id={color}
                    label={color}
                    value={color}
                    style={{ backgroundColor: color }}
                    inline={true}
                    checked={chosenColor === color}
                />
            ))}
        </div>
    );
}
