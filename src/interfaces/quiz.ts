import { Question } from "./question";

/** A representation of a Question in a quizzing application */
export interface Quiz {
    title: string;
    description: string;
    questions: Question[];
}
