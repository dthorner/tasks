import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    return (
        <div>
            <Button
                onClick={() =>
                    setType(
                        type === "multiple_choice_question"
                            ? "short_answer_question"
                            : "multiple_choice_question"
                    )
                }
            >
                Change Type
            </Button>

            {type === "multiple_choice_question" ? (
                <span>Multiple Choice</span>
            ) : (
                <span>Short Answer</span>
            )}
        </div>
    );
}
