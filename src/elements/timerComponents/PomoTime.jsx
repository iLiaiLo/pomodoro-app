import React, { useContext, useEffect, useState} from 'react'
import AppContext from '../../context/pomoContext';
import '../../styles/pomoTime.css';
import sound from'../../alarm/alarm.mp3';



const PomoTime = () => {
  const {pomoData,isBreak,setIsBreak,isStarted,setIsStarted,index,setIndex}=useContext(AppContext);
  const {amount,timer,breakTime}=pomoData;
  const [time,setTime]=useState(timer*60);

  useEffect(()=>{
    if(!isStarted) return;
    if(!time){
      setIsStarted(false);
      const currBreakStatus=!isBreak;
      setIsBreak(currBreakStatus);

      if(currBreakStatus){
        setTime(breakTime*60);
        setIndex(p=>p+1);
      }
      
      else{
        setTime(timer*60);
      }
      
      const audio=new Audio(sound);
      audio.play();
      return;
    }


    const countrdown=setInterval(()=>{
      setTime((time)=>{
        let newTime=time-1;
        return newTime;
      })
    },1000);

    return()=>{
      clearInterval(countrdown);
    }

  }, [time, isStarted, isBreak, breakTime, timer, setIsStarted, setIsBreak, setIndex])
  
  


  return (
    <div className='time-container'>
      <div className='time-content'>
       {
          index<amount?
          <>
            <span>{`${Math.floor(time / 60)}`.padStart(2,"0")}</span>:
            <span>{`${time % 60}`.padStart(2,"0")}</span>
          </>
            :
          <h1 className='finish-greeting'>You are done!</h1>
        }

      </div>
    </div>
  )
}

export default PomoTime