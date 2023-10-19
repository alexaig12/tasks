import React, { useState } from "react";
import { Button } from "react-bootstrap";

const holidays = [
    { name: "Halloween", emoji: "🎃" },
    { name: "Thanksgiving", emoji: "🦃" },
    { name: "Christmas", emoji: "🎄" },
    { name: "New Year", emoji: "🎉" },
    { name: "Easter", emoji: "🐰" }
];
export function CycleHoliday(): JSX.Element {
    const [currentHolidayIndex, setCurrentHolidayIndex] = useState(0);

    const getNextHolidayAlphabetically = () => {
        setCurrentHolidayIndex(
            (prevIndex) => (prevIndex + 1) % holidays.length
        );
    };

    const getNextHolidayByYear = () => {
        setCurrentHolidayIndex(
            (prevIndex) => (prevIndex + 1) % holidays.length
        );
    };

    const renderCurrentHoliday = () => {
        const currentHoliday = holidays[currentHolidayIndex];
        return (
            <div>
                <p>Holiday: {currentHoliday.emoji}</p>
            </div>
        );
    };

    return (
        <div>
            {renderCurrentHoliday()}
            <Button onClick={getNextHolidayAlphabetically}>
                Advance by Alphabet
            </Button>
            <Button onClick={getNextHolidayByYear}>Advance by Year</Button>
        </div>
    );
}
