import { BrowserRouter } from 'react-router-dom';
import { Route , Routes } from 'react-router-dom';
import PomodoroSetter from './elements/PomodoroSetter';
import PomodoroTimer from './elements/PomodoroTimer';
import AppContext from './context/pomoContext';
import { useState } from 'react';

function App() {

  const [isBreak,setIsBreak]=useState(false);
  const [isStarted,setIsStarted]=useState(false);
  const [index,setIndex]=useState(0);
  const [pomoData,setPomoData]=useState({amount:2,timer:25,breakTime:5});
  const props={
    isBreak,
    setIsBreak,
    isStarted,
    setIsStarted,
    index,
    setIndex,
    pomoData,
    setPomoData};

  return (
    <AppContext.Provider value={props}>
      <BrowserRouter>
        <Routes>
          <Route  index element={<PomodoroSetter />}/>
          <Route  path="app/timer" element={<PomodoroTimer />}/>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
