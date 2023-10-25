import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [userName, setUsername] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    const editModeChange = () => {
        setEditMode(!editMode);
    };

    const nameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const studentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsStudent(event.target.checked);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            {editMode ? (
                <div>
                    <input type="text" value={userName} onChange={nameChange} />
                    <Form.Check
                        type="checkbox"
                        id="is-check-box"
                        label="Student"
                        checked={isStudent}
                        onChange={studentChange}
                        color="primary"
                    />
                </div>
            ) : (
                <div>
                    {userName} is {isStudent ? "a student" : "not a student"}{" "}
                </div>
            )}
            <Form.Check
                type="switch"
                id="is-edit-mode"
                label="Edit Mode"
                checked={editMode}
                onChange={editModeChange}
                color="primary"
            />
        </div>
    );
}
