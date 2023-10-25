import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [remainAttempt, setRemainAttempt] = useState(3);
    const [requestAttempt, setRequestAttempt] = useState("");

    const handleUseAttempt = () => {
        if (remainAttempt > 0) {
            setRemainAttempt(remainAttempt - 1);
        }
    };

    const handleGainAttempt = () => {
        const parsedAttempt = parseInt(requestAttempt, 10);
        if (!isNaN(parsedAttempt)) {
            setRemainAttempt(remainAttempt + parsedAttempt);
            setRequestAttempt("");
        }
    };

    const isUseButtonDiabled = remainAttempt <= 0;

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Remaining Attempts: {remainAttempt}</p>
            <input
                type="number"
                value={requestAttempt}
                onChange={(e) => setRequestAttempt(e.target.value)}
            />
            <button onClick={handleUseAttempt} disabled={isUseButtonDiabled}>
                Use
            </button>
            <button onClick={handleGainAttempt}>Gain</button>
        </div>
    );
}
