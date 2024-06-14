import { useRef } from "react"


export const FocusScreen = () => {
    const inputRef = useRef()
   const onClick = ()=>{
    console.log(inputRef);
   }
  return (
    <>
    <h1>Focus screen</h1>
    <hr />
    <input 
    ref={inputRef}
    type="text" 
    className='form-control'
    placeholder='Ingrese su nombre'/>

    <button className='btn btn-primary mt-4'
    onClick={onClick}
    >Set Focus</button>
    </>
  )
}
