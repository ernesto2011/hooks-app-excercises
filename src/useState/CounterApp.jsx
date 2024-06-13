import React, { useState } from 'react'

export const CounterApp = () => {
    const [state, setCount] = useState({
        count1: 10,
        count2: 20,
        count3: 30,
    })
    const {count1, count2, count3} = state
  return (
    <>
    <h1>Counter1: {count1}</h1>
    <h1>Counter2: {count2}</h1>
    <h1>Counter3: {count3}</h1>
    <hr />
    <button className="btn" onClick={()=>setCount({
        ...state,
        count1: count1+1
        })}>+ 1</button>
    </>
  )
}
