import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './Card'
import './index.css'
ReactDOM.createRoot(document.getElementById('cards')).render(
  <React.StrictMode>
    <Card class="TTRPG-card" name="TTRPG" link="TTRPG.html"/>
    <Card class="WarGaming-card" name="WarGaming" link="WarGaming.html"/>
  </React.StrictMode>,
)
