import React, { useEffect, useRef, useState } from 'react';
import {Button, Paper, Box, Typography} from '@mui/material';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { Alarm } from '@mui/icons-material';
import myLogo from './Logo.png';

function Pomodoro(props) {
  const [timerId, setTimerId] = useState(null);
  const [time, setTime] = useState(25 * 60);

  const handlePomodo = () => {
    setTime(25 * 60)
  };

  const handleShortBreak = () => {
    setTime(5 * 60)
  };

  const handleLongBreak = () => {
    setTime(15 * 60)
  };

  const handleStartTimer = () => {
    if (!timerId) {
      const id = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      setTimerId(id);
    }
  };

  const handleStopTimer = () => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }
  };

  useEffect(() => {
    if (time === 0) {
      handleStopTimer()
      alert("Ding Ding Ding ...")
    }
  }, [time])

  return (
    <React.Fragment>
      <Paper variant="outlined" style={{ background: "darkblue", width: 1000, margin: "auto", opacity: [0.9, 0.8, 0.7]}} elevation={0}>
        <Box margin={5} alignItems="center" justifyContent="center" display="flex">
          <Alarm fontsize='small' style={{color: "#FFFFFF"}}></Alarm>
          <h1 style={{color: "#FFFFFF"}}>Pomodoro Timer</h1>
        </Box>
      </Paper>
      <Paper variant="outlined" style={{ background: "lightblue", width: 1000, margin: "auto", opacity: [0.9, 0.8, 0.7]}} elevation={0}>
      <Box margin={5} alignItems="center" justifyContent="center" display="flex">
        <Button variant="contained" style={{margin: 5}} onClick={handlePomodo}>Pomodoro</Button>
        <Button variant="contained" style={{margin: 5}} onClick={handleShortBreak}>Short Break</Button>
        <Button variant="contained" style={{margin: 5}} onClick={handleLongBreak}>Long Break</Button>
        <Button variant="contained" style={{margin: 5}} onClick={handleLongBreak}>Reward</Button>
      </Box>
      <Box margin={"auto"} alignItems="center" justifyContent="center" display="flex">
      <Typography variant="h4" style={{margin: 100}}>Time: {Math.floor(time / 60)} min : {time % 60} seconds</Typography>
      </Box>
      <Box margin={"auto"} alignItems="center" justifyContent="center" display="flex">
        <Button variant="contained" style={{margin: 5}} onClick={handleStartTimer}>Start</Button>
        <Button variant="contained" style={{margin: 5}} onClick={handleStopTimer}>Stop</Button>
      </Box>
    </Paper>
    </React.Fragment>
  );
}


ReactDOM.render(
  <Pomodoro>
    <App />
  </Pomodoro>,
  document.getElementById('root')
);
