import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
    // define timer states with values 'Running', 'Stopped' and 'Ended'
    
    // define timer intervals pomodoro and shortbreak as arrays

    // define timers object with object properties pomodoro and shortBreak
    //  each property object should have properties: 
    //  type, timeout, timerState, timeLeft, timeLeftDisplay and message

    // Call useState Hook to manage 'currentTimer' state
   

    // Call useEffect Hook to update currentTimer state as timer interval expires
    

    // define startTimer() function to start timer and update currentTimer state
    
    // define endTimer() function to end current timer and navigate to next timer
    
    // define navigateToTimer() function to update currentTimer state with given timer

    // define navigateToNextTimer() function to update currentTimer with next timer state
    
    // define stopTimer() function to pause the current timer and update the currentTimer state
    
    
    // DO NOT MODIFY THE BELOW CODE, ELSE THE TEST CASES WILL FAIL 
    return (
        <div>
            <header>Pomodoro</header>
            <div className="timer-box">
                <div className="timer-box-tabs">
                    <button
                        id="btn-pd-timer"
                        onClick={navigateToTimer.bind(null, timers.pomodoro.type)}
                        className={
                            currentTimer.type === timers.pomodoro.type
                                ? "btn--tab btn--active"
                                : "btn--tab"}>
                        Pomodoro
                    </button>
                    <button
                        id="btn-sb-timer"
                        onClick={navigateToTimer.bind(null, timers.shortBreak.type)}
                        className={
                            currentTimer.type == timers.shortBreak.type
                                ? "btn--tab btn--active"
                                : "btn--tab"}>
                        Short Break
                    </button>
                </div>
                <div id="timer">{currentTimer.timeLeftDisplay}</div>
                <div className="timer-controls">
                    {
                        currentTimer.timerState == timerStates.stopped
                            ? <button
                                className="btn btn--control"
                                onClick={startTimer}
                                id="btn-start-timer">
                                start
                            </button>
                            : <>
                                <button
                                    className="btn btn--control"
                                    onClick={stopTimer}
                                    id="btn-stop-timer">stop</button>
                                <button
                                    className="btn btn--control"
                                    onClick={endTimer}
                                    id="btn-end-timer">end</button>
                            </>
                    }
                </div>
            </div>
            <div className="message-container">
                <div id="message">{currentTimer.message}</div>
            </div>
        </div>
    )
}
export default App;