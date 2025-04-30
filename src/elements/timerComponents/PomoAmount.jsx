import React, { useContext } from 'react'
import AppContext from '../../context/pomoContext';
import '../../styles/pomoTime.css';
const PomoAmount = () => {
    const {pomoData,index}=useContext(AppContext);
    const {amount}=pomoData;
    const amountArr=[...Array.from({length:amount},(_,i)=>i+1)];
    
      return (
        <div className='pomo-amount'>
        {
          amountArr.map(item=>{
            return item<=index?<span key={item} style={{backgroundColor:"green"}}></span>
            :
            <span key={item} style={{backgroundColor:"#3f4ad9"}}></span>
          })
        }
      </div>
  )
}

export default PomoAmount