import React from 'react'
import ReactDOM from 'react-dom/client'
import HeaderBurger from './HeaderBurger'
import './index.css'
const list = [
  {name: "DNDDices.html", target: "_self", display: "Dices"},
  {name: "DNDCombat.html", target: "_self", display: "Combat"},
  {name: "https://open5e.com/monsters", target: "_blank", display: "StatBlocks"},
  {name: "https://dnd.wizards.com/products?category=tabletop-rpg", target: "_blank", display: "Books"},
  {name: "https://dnd.wizards.com/", target: "_blank", display: "D&D official website"},
  {name: "https://www.dndbeyond.com/posts/1480-what-is-dungeons-dragons", target: "_blank", display: "What is D&D"}
]
ReactDOM.createRoot(document.getElementById('header-burger')).render(
  <React.StrictMode>
    <HeaderBurger list={list}/>
  </React.StrictMode>,
)
