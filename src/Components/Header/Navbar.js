import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <div>
    <div class="navbar">
    <div class="logo"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="currentColor" d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"/></svg></div>
    <ul class="nav-links">
      <li><a href="#">Tutorial</a></li>
      <li><a href="#">Videos</a></li>
      <li><a href="#">Explore</a></li>
      <li><a href="#">Roadmap</a></li>
    </ul>
    <button class="login-btn">Login</button>
  </div>
    </div>
    </>
  )
}

export default Navbar;