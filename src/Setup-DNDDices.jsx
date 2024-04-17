import React from 'react'
import ReactDOM from 'react-dom/client'
import HeaderBurger from './HeaderBurger'
import './index.css'
const DNDDices = [
  //4, 6, 8, 10, 12, 20, 100
  {name: 4},
  {name: 6},
  {name: 8},
  {name: 10},
  {name: 12},
  {name: 20},
  {name: 100},
]
ReactDOM.createRoot(document.getElementById('header-burger')).render(
  <React.StrictMode>
    <HeaderBurger Dices={DNDDices}/>
  </React.StrictMode>,
)
