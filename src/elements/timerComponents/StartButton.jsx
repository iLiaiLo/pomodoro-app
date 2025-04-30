import React from 'react'
import AppContext from '../../context/pomoContext'
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { IoPlayForward } from "react-icons/io5";
import '../../styles/startButton.css';

const StartButton = () => {

    const {pomoData,setPomoData,index,setIndex,isStarted,setIsStarted,setIsBreak}=useContext(AppContext);
    const {amount}=pomoData;

    const navigate=useNavigate();

    const handleStart=()=>{
      setIsStarted(true);
    }

    const handleNavigate=()=>{
      setIsStarted(false);
      setIndex(0);
      setIsBreak(false);
      setPomoData({ amount: 2, timer: 25, breakTime: 5 });
      navigate("/");
    }

  if(amount===index){
    return <button className='finish-btn' onClick={handleNavigate}>Finish</button>
  }
  return (
    <div>
        {
          !isStarted?
          <button className='start-btn' onClick={handleStart}>
            <IoPlayForward />
          </button>
          :
          null
        }
    </div>
  )
}

export default StartButton