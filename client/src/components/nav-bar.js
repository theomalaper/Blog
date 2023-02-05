import React from 'react'
import "../styles/nav-bar.scss"

const NavBar = () => {
  return (
    <div className="nav__bar">
      <div className="nav__bar__left">
        <img alt="Earth logo" src={process.env.PUBLIC_URL + "earth1.png"}/>
        <p>Theo's blog</p>
      </div>
      <div className="nav__bar__right">
        <p>Home</p>
        <p>About</p>
        <p>Login</p>
        <div className="contact__button">
          <p>Contact</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar