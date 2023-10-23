import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState";

/*function Doubler(): JSX.Element {
    return 
}
 these functions are removed becuase it is extract and not needed...
 when export function NAME(): JSX.Element is already present

 additionally, a file DoubleHalfState.tsx was also deleted...
 because useState cannot be outside of a component function
 
function Halver(): JSX.Element {
    return 
}*/

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
            <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
        </div>
    );
}
