'use client'
import React from "react";
function HitCounter({currentVisitor}) {

    return (
            <button className="censored">
                {currentVisitor}
            </button>
    );
}

export default HitCounter;
