import React from 'react'
import { useNavigate } from 'react-router'
import "../../styles/navigateButton.css"
const NavigateButton = () => {
    const navigate=useNavigate();
    const handleNavigate=()=>{
        navigate("/app/timer");
    }
  return (
    <div className='buttonContainer'>
        <button onClick={handleNavigate}>start pomodoro</button>
    </div>
  )
}

export default NavigateButton