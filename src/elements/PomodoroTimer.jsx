import React from 'react'
import PomoTime from './timerComponents/PomoTime'
import PomoAmount from './timerComponents/PomoAmount'
import StartButton from './timerComponents/StartButton'
import '../styles/pomodoroContainer.css';

const PomodoroTimer = () => {
  return (
    <section className="Timer">
    <PomoTime />
    <PomoAmount />
    <StartButton />
    </section>
  )
}

export default PomodoroTimer