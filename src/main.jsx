import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { FormWCusHook } from './useEffect/FormWCusHook'
// import { SimpleForm } from './useEffect/SimpleForm'
// import { HooksApp } from './HooksApp.jsx'
// import { CounterApp } from './useState/CounterApp.jsx'
//import { CounterWCustomHook } from './useState/CounterWCustomHook.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormWCusHook/>
    {/* <SimpleForm/> */}
    {/* <CounterWCustomHook/> */}
    {/* <CounterApp /> */}
  </React.StrictMode>,
)