
import React, { createContext, useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import jwt_decode from 'jwt-decode';

 
const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({children}) => {
  
  const [authTokens, setAuthTokens] = useState(() => {
    const storedTokens = localStorage.getItem('authTokens');
    return storedTokens ? JSON.parse(storedTokens) : null;
  });
  
  const [user, setUser] = useState(() => {
    const storedTokens = localStorage.getItem('authTokens');
    return storedTokens ? jwt_decode(JSON.parse(storedTokens).tokens.access) : null;
  });
  const [name, setName] = useState(() => {
    const storedTokens = localStorage.getItem('authTokens');
    return storedTokens ? jwt_decode(JSON.parse(storedTokens).tokens.access) : null;
  });

  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    status: false,
    msg: '',
    type: '',
  });
  const navigate = useNavigate();

  // fetching login api from backend
  const loginUser = async (e) => {
    
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: e.target.email.value,
          password: e.target.password.value,
        }),
      });

      if (response.ok) {
        const data = await response.json();
          setName(data.tokens.username);
          // console.log(data.tokens.username)
          setAuthTokens(data);
         
          // console.log(data.access)
          setUser(jwt_decode(data.tokens.access));
          console.log(data)
          localStorage.setItem('authTokens', JSON.stringify(data));
          setError({ status: true, msg: 'LOGIN SUCCESSFULLY', type: 'success' });
          if (data.tokens.role=== 'User'){
            navigate('/',{replace:true});
          }
          else if (data.tokens.role=== 'Admin'){
            navigate('/profiles',{replace:true});
          }
          
        
      }
       else {
        setError({ status: true, msg: 'Check your password or email', type: 'error' });
      }
    } catch (error) {
      setError({ status: true, msg: 'An error occurred during login', type: 'error' });
    }
  };


  // removing tokens from the localStorage 
  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem('authTokens');
    navigate('/login', { replace: true });
  };


  // sending data as a contextData

  const contextData={
    user,
    loginUser,
    logoutUser,
    error,
    name,   
    authTokens 
  }

  return <AuthContext.Provider value={contextData}> {children}
 </AuthContext.Provider>;
}
