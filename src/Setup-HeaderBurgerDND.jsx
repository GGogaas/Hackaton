import React from 'react'
import ReactDOM from 'react-dom/client'
import HeaderBurger from './HeaderBurger'
import './index.css'
const list = [
  {name: "DNDDices.html", display: "Dices"},
  {name: "DNDPCC.html", display: "Character Creation"},
  {name: "DNDCombat.html", display: "Combat"},
  {name: "DNDStatBlocks.html", display: "StatBlocks"},
  {name: "DNDBooks.html", display: "Books"},
  {name: "https://dnd.wizards.com/", display: "DND official website"}
]
ReactDOM.createRoot(document.getElementById('header-burger')).render(
  <React.StrictMode>
    <HeaderBurger list={list}/>
  </React.StrictMode>,
)
