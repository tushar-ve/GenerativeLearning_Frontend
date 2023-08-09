import React, { useContext } from 'react'
import './Login.css'
import AuthContext from '../Context/AuthContext'

const Login = () => {
  const {loginUser, error} = useContext(AuthContext)
  return (
    <div className='nonee'>
    <div className='working'>
    <div className='head0'>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" style={{marginTop:'7px'}} ><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z"/></svg> <h2>Login to your account</h2>
    </div>
    <form method='POST' onSubmit={loginUser} className='word'>
    <div  >
    <label className='sub'>E-mail</label><br/>
      <input placeholder='Enter E-mail' type='text' name='email' /><br/><br/><br/>
      <label className='sub' >Password</label><br/>
      <input placeholder='Pa**word' type='text' name='password' />
      <p style={{fontSize:'10px', textAlign:'left', color:'#B02525', marginLeft:'12px'}}>forgot Password?</p>
    </div>
    <button type='submit' className='login-button'>Login</button>
    </form>
    <p style={{fontSize:'10px', textAlign:'left',  marginLeft:'12px'}}> Don't have an account? <span style={{color:'#B02525'}}>SignUp</span></p>
    </div>
    <div>
    {error.status?<alert>{error.msg}</alert>:'' }
    </div>
    </div>
  )
}

export default Login
