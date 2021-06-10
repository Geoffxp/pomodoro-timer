import React from "react"
import {minutesToDuration} from "../utils/duration";

export default function timers({ 
    incrementFocusDuration, 
    decrementFocusDuration, 
    incrementBreakDuration, 
    decrementBreakDuration, 
    focusDuration, 
    breakDuration, 
    disabled }){

    return (
        <div className="row">
            <div className="col">
              <div className="input-group input-group-lg mb-2">
                <span className="input-group-text" data-testid="duration-focus">
                    Focus Duration: {minutesToDuration(focusDuration)}
                </span>
                <div className="input-group-append">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={decrementFocusDuration}
                        disabled={!disabled}
                        data-testid="decrease-focus"
                    >
                        <span className="oi oi-minus" />
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={incrementFocusDuration}
                        disabled={!disabled}
                        data-testid="increase-focus"
                    >
                        <span className="oi oi-plus" />
                    </button>
                </div>
              </div>
            </div>
            <div className="col">
                <div className="float-right">
                    <div className="input-group input-group-lg mb-2">
                        <span className="input-group-text" data-testid="duration-break">
                            Break Duration: {minutesToDuration(breakDuration)}
                        </span>
                        <div className="input-group-append">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={decrementBreakDuration}
                                disabled={!disabled}
                                data-testid="decrease-break"
                            >
                                <span className="oi oi-minus" />
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={incrementBreakDuration}
                                disabled={!disabled}
                                data-testid="increase-break"
                            >
                                <span className="oi oi-plus" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
