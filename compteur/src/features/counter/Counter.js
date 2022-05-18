import React, { useState } from 'react'
import { increment, decrement, incrementByAmount, incrementAsync } from './counterSlice';
import { useDispatch, useSelector } from 'react-redux';
const Counter = () => {
    const [incrementAmount, setIncrementAmount]=useState('2');
    const count= useSelector(state=>state.counter.value);
    const dispatch=useDispatch();
  return (
    <>
      <div>
        <input 
        type="text" 
        aria-label='set increment amount'
        value={incrementAmount}
        onChange={e=>setIncrementAmount(e.target.value)}
         />
         <button
          type='button'
          onClick={()=>dispatch(incrementByAmount(Number(incrementAmount) || 0))}
         >Add Amount</button>
         <button
         type='button'
         onClick={()=>dispatch(incrementAsync(Number(incrementAmount) || 0))}
         >Add Async</button>
      </div>
    
      <div>
          <button 
          type='button' 
          aria-label='Increment value'
          onClick={()=>dispatch(increment())}>+</button>
          <span>{count}</span>
          <button 
          type='button' 
          aria-label='decrement value'
          onClick={()=>dispatch(decrement())}>-</button>
      </div>

    </>
  )
}

export default Counter