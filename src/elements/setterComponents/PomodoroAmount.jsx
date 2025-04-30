import React from 'react'
import { useContext } from 'react'
import AppContext from '../../context/pomoContext'
import '../../styles/pomoSetterComponents.css';
const PomodoroAmount = () => {
  const {pomoData,setPomoData}=useContext(AppContext);
  const choosedAmount=[...Array.from({length:7},(_,i)=>i+2)];

  const {amount}=pomoData;

  const handlePomoChoose=(e)=>{
    if(e.target.className!=='pomo') return;
    const obj={...pomoData,amount:+e.target.textContent};
    setPomoData(obj);
    const element=document.getElementsByClassName("drop-content")[0];
    element.style.display="none";
  }
  const handleShowContent=()=>{
    
    const element=document.getElementsByClassName("drop-content")[0];
    element.style.display=element.style.display=="flex"?"none":"flex";
  }
  
  return (
    <div className='container'>
        <div className='dropButton' onClick={handleShowContent}>
          <div>
            Choose amount of pomodoros
          </div>
          <span>{amount}</span>
        </div>
        <div onClick={handlePomoChoose} className='drop-content'>
          {
            choosedAmount.map(num=>{
              return <div className='pomo' key={num}>{num}</div>
            })
          }
        </div>
    </div>
  )
}

export default PomodoroAmount