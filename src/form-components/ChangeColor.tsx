import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function ChangeColor(): JSX.Element {
    const colors = [
        "Red",
        "Blue",
        "Green",
        "Yellow",
        "Orange",
        "Purple",
        "Pink",
        "Cyan",
        "Magenta"
    ];

    const [selectedColor, setSelectedColor] = useState<string | null>(null);

    const colorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {colors.map((color, index) => (
                    <Form.Check
                        key={index}
                        inline
                        type="radio"
                        label={color}
                        name="colorRadio"
                        id={`colorRadio${index}`}
                        value={color}
                        checked={selectedColor === color}
                        onChange={colorChange}
                    />
                ))}
            </Form>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor || "transparent",
                    padding: "10px",
                    margin: "10px",
                    display: "inline-block"
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
