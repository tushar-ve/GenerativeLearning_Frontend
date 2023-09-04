import React, { useContext, useState } from "react";
import "./Admin.css";
import AuthContext from "../Context/AuthContext";
import { NavLink } from "react-router-dom";
import HomeDash from "./HomeDash/HomeDash";

const Admin = () => {
  const { logoutUser } = useContext(AuthContext);
  const [selectedTab, setSelectedTab] = useState("Home"); // Initialize with the default tab

  // Define content for each tab
  const tabContent = {
    Home: <div><div>
      <HomeDash/>
    </div></div>,
    Message: <div>Message Content</div>,
    "To-Do": <div>To-Do Content</div>,
    Statistics: <div>Statistics Content</div>,
    Settings: <div>Settings Content</div>,
    Analytics: <div>Analytics Content</div>,
    Social: <div>Social Content</div>,
    Feedback: <div>Feedback Content</div>,
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div style={{ display: "flex" }}>
      <aside className="col-md-3 article-left">
        <i className="fa fa-heart-o fa-5x" aria-hidden="true"></i>

        <ul className="ul11">
          <li className="li11">
            <NavLink onClick={() => handleTabClick("Home")}>Home</NavLink>
          </li>
          <li className="li11">
            <NavLink onClick={() => handleTabClick("Message")}>Message</NavLink>
          </li>

          <li className="li11">
            <NavLink onClick={() => handleTabClick("To-Do")}>To-Do</NavLink>
          </li>
          <li>
            <NavLink onClick={() => handleTabClick("Statistics")}>Statistics</NavLink>
          </li>
          <li className="li11">
            <NavLink onClick={() => handleTabClick("Settings")}>Settings</NavLink>
          </li>
          <li className="li11">
            <NavLink onClick={() => handleTabClick("Analytics")}>Analytics</NavLink>
          </li>
          <li className="li11">
            <NavLink onClick={() => handleTabClick("Social")}>Social</NavLink>
          </li>
          <li className="li11">
            <NavLink onClick={() => handleTabClick("Feedback")}>Feedback</NavLink>
          </li>
        </ul>
        <button className="login-btn" onClick={logoutUser}>
        Logout
      </button>
      </aside>
      <main>
        {tabContent[selectedTab]}
      </main>
      
    </div>
  );
};

export default Admin;
