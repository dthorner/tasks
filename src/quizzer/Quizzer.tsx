import React, { useState } from "react";
import { Quiz } from "../interfaces/quiz";
import { makeBlankQuestion } from "../objects";
import { Question } from "../interfaces/question";

const INITIAL_QUIZZES = [
    {
        title: "Quiz One",
        description: "The first quiz in the list",
        questions: [
            makeBlankQuestion(
                1,
                "Name of the first question",
                "short_answer_question"
            ),
            makeBlankQuestion(
                2,
                "Name of the second question",
                "short_answer_question"
            )
        ]
    },
    {
        title: "Quiz Two",
        description: "The second quiz in the list",
        questions: [
            makeBlankQuestion(
                1,
                "Name of the first question",
                "short_answer_question"
            ),
            makeBlankQuestion(
                2,
                "Name of the second question",
                "short_answer_question"
            ),
            makeBlankQuestion(
                3,
                "Name of the third question",
                "short_answer_question"
            )
        ]
    }
];

export function Quizzer(): JSX.Element {
    const [quizzes, setQuizzes] = useState<Quiz[]>(INITIAL_QUIZZES);
    const [selectedQuiz, setSelectedQuiz] = useState<Quiz>();

    return (
        <div>
            <h1>Quizzer</h1>
            <br></br>
            <h3>
                {selectedQuiz ? selectedQuiz.title : "Select a quiz to begin"}
            </h3>
            {selectedQuiz && (
                <div>
                    <ol>
                        {selectedQuiz.questions.map(
                            (q: Question): JSX.Element => {
                                return (
                                    <li key={q.id}>
                                        <div>
                                            <i>
                                                ({q.points} point
                                                {q.points > 1 ? "s" : ""}){" "}
                                            </i>
                                            <b>{q.name}: </b>
                                            {q.body ? q.body : "body is empty"}
                                            <br></br>
                                            {q.type ===
                                            "multiple_choice_question"
                                                ? "MULTIPLE CHOICE OPTIONS GO HERE"
                                                : "SHORT ANSWER INPUT GOES HERE"}
                                        </div>
                                    </li>
                                );
                            }
                        )}
                    </ol>
                </div>
            )}
            <br></br>
            <ul>
                {quizzes.map((quiz: Quiz): JSX.Element => {
                    return (
                        <li
                            key={quiz.title}
                            onClick={() => {
                                setSelectedQuiz(quiz);
                            }}
                        >
                            <b>{quiz.title}: </b>
                            <i>{quiz.description}</i> - {quiz.questions.length}{" "}
                            Questions
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
