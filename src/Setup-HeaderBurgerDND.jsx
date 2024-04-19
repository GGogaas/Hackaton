import React from 'react'
import ReactDOM from 'react-dom/client'
import HeaderBurger from './HeaderBurger'
import './index.css'
const list = [
  {name: "DNDDices.html", target: "_self", display: "Dices"},
  {name: "DNDPCC.html", target: "_self", display: "Character Creation"},
  {name: "DNDCombat.html", target: "_self", display: "Combat"},
  {name: "DNDStatBlocks.html", target: "_self", display: "StatBlocks"},
  {name: "DNDBooks.html", target: "_self", display: "Books"},
  {name: "https://dnd.wizards.com/", target: "_blank", display: "DND official website"}
]
ReactDOM.createRoot(document.getElementById('header-burger')).render(
  <React.StrictMode>
    <HeaderBurger list={list}/>
  </React.StrictMode>,
)
