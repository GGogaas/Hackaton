import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Card from './Card'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('cards')).render(
  <React.StrictMode>
    <div className="cards">
      <Card class="TTRPG-card" name="TTRPG" link="TTRPG.html"/>
      <Card class="WarGaming-card" name="WarGaming" link="WarGaming.html"/>
    </div>
  </React.StrictMode>,
)
