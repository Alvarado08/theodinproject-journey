import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import JSX from './JSX.jsx'
import Render from './Render.jsx'
import Props from './Props.jsx'
import Conditional from './Conditional.jsx'
import Conditional2 from './Conditional2.jsx'
import Props2 from './props/Props2.jsx'
import Click from './props/Click.jsx'
import State from './hooks/State.jsx'
import Color from './hooks/Color.jsx'
import { Food } from './Food.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <JSX /> */}
    {/* <Render /> */}
    {/* <Props/> */}
    {/* <Conditional/> */}
    {/* <Conditional2/> */}
    {/* <Props2/> */}
    {/* <Click/> */}
    {/* <State/> */}
    <Color/>
  </React.StrictMode>,
)
