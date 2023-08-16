import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import AuthContext from '../Context/AuthContext';
const Navbar = () => {

  const navigate= useNavigate();
  const {user, logoutUser, name} = useContext(AuthContext)

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
          {/* <p className='name1'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z"/></svg>Hey<span className='name2'>{name}</span></p> */}
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
