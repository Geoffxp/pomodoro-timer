import {minutesToDuration, secondsToDuration} from "../utils/duration";
import React from "react";

export default function ProgressDisplay({ session, isTimerRunning, focusDuration, breakDuration }){
    if(!session) return null; // does not display when session is not active

    // displays pause text when paused
    const pauseToggle = (!isTimerRunning === false || session === null) ? "none" : "block";
    // switches caption depending on session state
    const focusBreakToggle = (session?.label === "Focusing") ?
        `${minutesToDuration(focusDuration)} minutes` :
        `${minutesToDuration(breakDuration)} minutes`;
    // math to handle progress bar filling
    const time = (session?.label === "Focusing") ? focusDuration : breakDuration
    const bar = (1 - (session?.timeRemaining / (time * 60))) * 100

    return (
        <div>
            <div className="row mb-2">
                <div className="col">
                    <h2 data-testid="session-title">
                        {/* focusing/break for x minutes */}
                        {session?.label} for {focusBreakToggle}
                    </h2>
                    <p className="lead" data-testid="session-sub-title">
                        {secondsToDuration(session?.timeRemaining)} remaining
                    </p>
                    <h3 style={{display: `${pauseToggle}`}}>
                        PAUSED
                    </h3>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col">
                    <div className="progress" style={{ height: "20px"}}>
                        <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-valuenow={bar}
                            style={{width: `${bar}%`}}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
    