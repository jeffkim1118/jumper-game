import React, { useState } from "react";

export default function Score() {

    const [currentScore, setCurrentScore] = useState(0)

    return(
        <div className="score">
            <h1>{currentScore}</h1>
        </div>
    )
}