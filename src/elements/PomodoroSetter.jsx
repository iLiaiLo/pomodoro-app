import React from 'react'
import PomodoroAmount from './setterComponents/PomodoroAmount'
import PomoMinutes from './setterComponents/PomoMinutes'
import BreakMinutes from './setterComponents/BreakMinutes'
import NavigateButton from './setterComponents/NavigateButton'

import '../styles/pomoSetterContainer.css'


const PomodoroSetter = () => {
  return (
    <section className='setterContainer'>
        <PomodoroAmount />
        <PomoMinutes />
        <BreakMinutes />
        <NavigateButton />
    </section>
  )
}

export default PomodoroSetter