import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../slices/CounterSlice'

let Counter = () => {

    let value = useSelector((state) =>state.counter.value)
    console.log(value);
    let dispatch = useDispatch();
  return (
    <div>
        <h1>Counter:{value}</h1>
        <button onClick={()=> dispatch(increment())}>Inc</button>
        <button onClick={()=> dispatch(decrement())}>Dec</button>
      
    </div>
  )
}

export default Counter