import { useMemo, useState } from 'react'
import { useCounter } from '../hooks'


const heavyStuff = (iterationNumber=100)=>{
  for(let i=0; i<iterationNumber; i++){
    console.log(iterationNumber);
}
return `${ iterationNumber} iteraciones realizadas`
}
export const MemorizeHook = () => {
    const {counter , increment} =useCounter(4000)
    const [show, setShow] = useState(true)
   const memorizeValue = useMemo(()=> heavyStuff(counter) , [counter])
  return (
    <>
    <h1>Counter:{counter} </h1>
    <hr />
    <h4>{memorizeValue}</h4>

    <button className='btn btn-primary'onClick={()=>increment()}>+1</button>

    <button className='btn outline-primary' onClick={()=> setShow(!show)}>Show/hide{JSON.stringify(show)}</button>
    </>
  )
}
