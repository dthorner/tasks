import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ChangeType } from "/Users/devlan/School/2023 Fall/CISC 275/tasks/src/components/ChangeType";
import { RevealAnswer } from "/Users/devlan/School/2023 Fall/CISC 275/tasks/src/components/RevealAnswer";
import { StartAttempt } from "/Users/devlan/School/2023 Fall/CISC 275/tasks/src/components/StartAttempt";
import { TwoDice } from "/Users/devlan/School/2023 Fall/CISC 275/tasks/src/components/TwoDice";
import { CycleHoliday } from "/Users/devlan/School/2023 Fall/CISC 275/tasks/src/components/CycleHoliday";
import { Counter } from "/Users/devlan/School/2023 Fall/CISC 275/tasks/src/components/Counter";
import { DoubleHalf } from "/Users/devlan/School/2023 Fall/CISC 275/tasks/src/bad-components/DoubleHalf";
import { ColoredBox } from "/Users/devlan/School/2023 Fall/CISC 275/tasks/src/bad-components/ColoredBox";
import { ShoveBox } from "/Users/devlan/School/2023 Fall/CISC 275/tasks/src/bad-components/ShoveBox";
import { ChooseTeam } from "/Users/devlan/School/2023 Fall/CISC 275/tasks/src/bad-components/ChooseTeam";
import { CheckAnswer } from "/Users/devlan/School/2023 Fall/CISC 275/tasks/src/form-components/CheckAnswer";
import { GiveAttempts } from "/Users/devlan/School/2023 Fall/CISC 275/tasks/src/form-components/GiveAttempts";
import { EditMode } from "/Users/devlan/School/2023 Fall/CISC 275/tasks/src/form-components/EditMode";
import { MultipleChoiceQuestion } from "/Users/devlan/School/2023 Fall/CISC 275/tasks/src/form-components/MultipleChoiceQuestion";
import { ChangeColor } from "/Users/devlan/School/2023 Fall/CISC 275/tasks/src/form-components/ChangeColor";

export function ShowHideTasks(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <div>
            {visible && (
                <div>
                    <CheckAnswer expectedAnswer="42"></CheckAnswer>
                    <hr></hr>
                    <GiveAttempts></GiveAttempts>
                    <hr></hr>
                    <EditMode></EditMode>
                    <hr></hr>
                    <ChangeColor></ChangeColor>
                    <hr></hr>
                    <MultipleChoiceQuestion
                        options={["a", "b", "c"]}
                        expectedAnswer="b"
                    ></MultipleChoiceQuestion>
                    <hr></hr>
                    <DoubleHalf></DoubleHalf>
                    <hr></hr>
                    <ChooseTeam></ChooseTeam>
                    <hr></hr>
                    <ColoredBox></ColoredBox>
                    <hr></hr>
                    <ShoveBox></ShoveBox>
                    <hr></hr>
                    <Counter></Counter>
                    <hr />
                    <RevealAnswer></RevealAnswer>
                    <hr />
                    <StartAttempt></StartAttempt>
                    <hr />
                    <TwoDice></TwoDice>
                    <hr />
                    <ChangeType></ChangeType>
                    <hr />
                    <CycleHoliday></CycleHoliday>
                </div>
            )}
            <Button onClick={() => setVisible(!visible)}>Show/Hide</Button>
        </div>
    );
}
