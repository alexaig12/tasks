import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    const toggleQuestionType = () => {
        setQuestionType(
            questionType === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question"
        );
    };

    return (
        <div>
            <Button onClick={toggleQuestionType}>Change Type</Button>
            {questionType === "multiple_choice_question" ? (
                <p>Multiple Choice</p>
            ) : (
                <p>Short Answer</p>
            )}
        </div>
    );
}
