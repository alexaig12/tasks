import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    //initialize the state to an empty string
    const [userAnswer, setUserAnswer] = useState("");

    const handleUserAnwerChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setUserAnswer(event.target.value);
    };

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={userAnswer}
                onChange={handleUserAnwerChange}
            />
            <div>
                {userAnswer === expectedAnswer ? (
                    <span>✔️</span> //Display checkmark if the answers match
                ) : (
                    <span>❌</span> //Otherwise display a cross
                )}
            </div>
        </div>
    );
}
