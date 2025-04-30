import React, { useContext} from 'react'
import AppContext from '../../context/pomoContext';
import '../../styles/pomoSetterComponents.css'

const PomoMinutes = () => {
  const {pomoData,setPomoData}=useContext(AppContext);
  const {timer}=pomoData;
  const pomoMinutes=[...Array.from({length:12},(_, i) => (i+1)*5)];


  const handleClick = (e)=>{
    if(e.target.className!=="minutes") return;
    const minutes=e.target.textContent;
    const obj={...pomoData,timer:+minutes};
    setPomoData(obj);
    const element=document.getElementsByClassName("drop-content")[1];
    element.style.display="none";
  };

  const handleShowContent=()=>{
    
    const element=document.getElementsByClassName("drop-content")[1];
    element.style.display=element.style.display=="flex"?"none":"flex";
  }
 
  return (
    <div className='container'>
        <div className="dropButton" onClick={handleShowContent}>
            <div>Choose work time</div>
            <span>{timer} min</span>
        </div>
        <div onClick={handleClick} className="drop-content">
            {
                pomoMinutes.map(num=>{
                    return <div className='minutes' key={num}>{num}</div>
                })
            }
        </div>
    </div>
  )
}

export default PomoMinutes