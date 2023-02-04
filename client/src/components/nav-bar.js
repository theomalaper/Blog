import React from 'react'
import "../styles/nav-bar.css"

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar-left">
        <img alt="Earth logo" src={process.env.PUBLIC_URL + "earth1.png"}/>
        <p>Theo's blog</p>
      </div>
      <div className="nav-bar-right">
        <p>Home</p>
        <p>About</p>
        <p>Login</p>
        <div>
          <p>Contact</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar