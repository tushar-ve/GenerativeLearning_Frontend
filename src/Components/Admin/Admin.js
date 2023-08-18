import React, { useContext, useEffect, useState } from "react";
import "./Admin.css";
import AuthContext from "../Context/AuthContext";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  CardActions,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const Admin = () => {
  const { logoutUser } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const { authTokens } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("Editor"); // Default to Editor tab

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user-data/", {
      headers: {
        Authorization: `Bearer ${authTokens.tokens.access}`,
      },
    })
      .then((result) => result.json())
      .then((resp) => {
        setData(resp);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredData = data.filter((item) => {
    if (activeTab === "Editor") {
      return item.role === "Editor";
    } else if (activeTab === "User") {
      return item.role === "User";
    }
    return true;
  });
  return (
    <>
      <div style={{display:'flex'}}>
        <div>
          <body>
            <main>
              <header>
                <h2 className="h11">Admin Dashboard</h2>
              </header>
              <section class="row">
                <article class="col-md-3 article-left">
                  <i class="fa fa-heart-o fa-5x" aria-hidden="true"></i>
               
                  <ul class="ul11">
                    <li className="li11">
                      <NavLink href="#">Home</NavLink>
                    </li>
                    <li className="li11" >
                      <NavLink href="#">Message</NavLink>
                    </li>
                    <li className="li11">
                    <button style={{background:'none', border:'none', fontSize:'1em'}}
                      className={activeTab === "User" ? "active-tab" : ""}
                      onClick={() => setActiveTab("User")}
                    >
                      <NavLink href="#">Users</NavLink>
                    </button>
                    </li>
                    <li className="li11">
                    <button style={{background:'none', border:'none', fontSize:'1em'}}
                      className={activeTab === "Editor" ? "active-tab" : ""}
                      onClick={() => setActiveTab("Editor")}
                    >
                      <NavLink href="#">Editor</NavLink>
                    </button>
                    </li>
                    <li className="li11">
                      <NavLink href="#">To-Do</NavLink>
                    </li>
                    <li>
                      <NavLink href="#">Statistics</NavLink>
                    </li>
                    <li className="li11">
                      <NavLink href="#">Settings</NavLink>
                    </li>
                    <li className="li11">
                      <NavLink href="#">Analytics</NavLink>
                    </li>
                    <li className="li11">
                      <NavLink href="#">Social</NavLink>
                    </li>
                    <li className="li11">
                      <NavLink href="#">Feedback</NavLink>
                    </li>
                  </ul>
                </article>
                <article class="col-md-9 article-right">
                  {/* <h1  className='h112'>Admin Panel</h1> */}
                </article>
                <button class="login-btn" onClick={logoutUser}>
                  Logout
                </button>
              </section>
            </main>
          </body>
        </div>
        <div>
          {filteredData.map((item, i) => (
            <Card key={i} className="dashboard-card">
          
              <CardContent>
                <Typography variant="h6" className="namehuh">
                  {item.username}
                </Typography>
                <Typography variant="body2" className='about'>
              {item.about}
            </Typography>
            <Typography variant="body2" className='email'>
              Email: {item.email}
            </Typography>
            <Typography variant="body2" className='role'>
              Role: {item.role}
            </Typography>
              </CardContent>
              <CardActions className="dashboard-card-actions">
                <IconButton aria-label="edit" color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" color="secondary">
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
      
    </>
  );
};

export default Admin;
