import React from 'react'
import "./header.css"
const header = () => {
  return (
    <div className='header-container'>
      <div className="header1">
        <h2>Jamal.Dev</h2>
      </div>
      <div className="header2">
        <h3>Mern developer</h3>
      </div>
      <div className="header3">
      
      <ul className="sidebar-menu">
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About us</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    
      </div>
    </div>
  )
}

export default header