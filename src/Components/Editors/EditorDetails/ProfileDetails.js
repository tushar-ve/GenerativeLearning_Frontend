import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';
import { Card, CardContent, Typography, IconButton, CardActions } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './ProfileDetails.css';
import Navbar from '../../Header/Navbar';
import Footer from '../../Footer/footer';
import Admin from '../../Admin/Admin';

const ProfileDetails = () => {
  const [data, setData] = useState([]);
  const { authTokens } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user-data/", {
      headers: {
        Authorization: `Bearer ${authTokens.tokens.access}`
      }
    })
      .then((result) => result.json())
      .then((resp) => {
        setData(resp);
        console.log(resp);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Filter data based on user role which we are getting from Authcontext

  const filteredData = data.filter(item => {
    if (authTokens.tokens.role === 'Editor') {
      return item.role === 'Editor';
    } else if (authTokens.tokens.role === 'User') {
      return item.role === 'User';
    }
    return true;
  });

  return (
    <>
     <h2 className='nameNew h11'>Welcome to the Admin-Panel</h2>
    <div className='newfloat'>
    <Admin/>
   
    </div>
    </>
  );
};

export default ProfileDetails;
