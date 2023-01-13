import React, { useState } from "react";

export default function Score() {

    const [currentScore, setCurrentScore] = useState(0)

    return(
        <div>
            <h1>{currentScore}</h1>
        </div>
    )
}