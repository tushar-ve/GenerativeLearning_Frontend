import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import AuthContext from '../Context/AuthContext';
const Navbar = () => {

  const navigate= useNavigate();
  const {user, logoutUser} = useContext(AuthContext)

  return (
    <>
    <div>
    <div class="navbar">
    <div class="logo"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="currentColor" d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"/></svg></div>
    <ul class="nav-links">
      <li><p>Tutorial</p></li>
      <li><p>Videos</p></li>
      <li><p>Explore</p></li>
      <li><p>Roadmap</p></li>
    </ul>
    {user ? (
          <>
          <button class="login-btn" onClick={logoutUser}>Logout</button>
</>
        ) : (

         <button class="login-btn" onClick={()=>navigate('/login')}>Login</button>

        )}
    
  </div>
    </div>
    </>
  )
}

export default Navbar;
