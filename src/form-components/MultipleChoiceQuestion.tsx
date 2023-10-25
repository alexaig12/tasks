import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    // Initialize the state to the first element in the options array
    const [selectedChoice, setSelectedChoice] = useState(options[0]);
    const isCorrect = selectedChoice === expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select
                value={selectedChoice}
                onChange={(e) => setSelectedChoice(e.target.value)}
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {isCorrect ? <span>✔️ Correct</span> : <span>❌ Incorrect</span>}
        </div>
    );
}
