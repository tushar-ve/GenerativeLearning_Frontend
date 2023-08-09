import React, { useState } from 'react';
import sidebarimg from "../assets/images/Vector2.svg";
import "./Sidebar.css";
const Sidebar = () => {
  const arr = [
    "HTML",
    "JavaScript",
    "CSS",
    "PHP",
    "C++",
    "JAVA",
    "Python",
    "C#",
    "DSA",
    "Quiz",
    "Aptitude",
    "DBMS",
    "Algorithms",
    "React.js",
  ];
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {sidebarOpen && (
        <div>
          <div className="sidebar-navbar">
            <ul className="sidebar-nav-links">
              <p style={{ fontWeight: "800" }}>Explore</p>
            </ul>
            <div className="sidebar-logo" style={{ marginRight: "3%" }} onClick={handleSidebarToggle}>
              <img src={sidebarimg} alt="" />
            </div>
          </div>

          <div className="categories">
            <ul className="sidebar-nav-links">
              {arr.map((category) => {
                return (
                  <li>
                    <p>{category}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <button className="sidebar-btn">more...</button>
        </div>
      )}
    </>
  );
};

export default Sidebar;
