'use client'
import React from "react";
function HitCounter({currentVisitor}) {

    const [isCensored, setIsCensored] = React.useState(true)

    let buttonClass = isCensored ? "censored" : null
    return (
            <button className={buttonClass}>
                {currentVisitor}
            </button>
    );
}

export default HitCounter;
