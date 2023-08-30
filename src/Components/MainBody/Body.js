import React, { useContext } from "react";
import Navbar from "../Header/Navbar";
import "./Body.css";
import { FaSearch } from "react-icons/fa";
import image from "../assets/images/Lovepik_com-611139503-Professional theme programmer cartoon illustration.png";
import img from "../assets/images/Rectangle 66.jpg";
import Cards from "./Cards";
import Card2 from "./Card2";
import Footer from "../Footer/footer";
import AuthContext from "../Context/AuthContext";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Quiztab from "../Tabs/Quiztab";
const Body = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Navbar />

      {user ? (
        <Quiztab />
      ) : (
        <>
          <div className="body1">
            <div className="header-container">
              <h3 className="head3">
                <span>Test Your</span>
                <span>Capabilities </span>
                <span className="para">Learn from your own mistakes...</span>
                <div className="search-container">
                  <input type="text" placeholder="search..." name="name" />
                  <span
                    style={{
                      marginLeft: "-40px",
                      marginTop: "8px",
                    }}
                  >
                    <FaSearch className="search-icon" />
                  </span>
                </div>
              </h3>
            </div>
            <div style={{ marginLeft: "261px" }}>
              <img className="image1" src={image} alt="ux-design" />
            </div>
          </div>
          <div className="body2">
            <div className="card-left">
              <div className="card-left-top">
                <h2>As All Explore for your Own</h2>
                <p>Admire & Learn</p>
                <svg
                  width="75"
                  height="10"
                  viewBox="0 0 75 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="75"
                    height="10"
                    rx="5"
                    fill="url(#paint0_linear_176_5)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_176_5"
                      x1="75"
                      y1="5"
                      x2="-5"
                      y2="3.00001"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#293BE4" />
                      <stop offset="1" stop-color="#E64141" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="card-left-bottom">
                <p>
                  Expand your career opportunities with Python, * Employment,
                  Wages, and Projected Change in Employment by Typical
                  Entry-level Education : U.S. Bureau of Labor Statistics. Sept.
                  2022, www.bls.gov/emp/tables/education-summary.htm  ** Median
                  salary and job opening data are sourced from United States
                  Lightcast™ Job Postings Report. Data for job roles relevant to
                  featured programs (1/1/22-12/31/22) *** Growth rate data is
                  sourced from United States Lightcast™ Job Postings Report.
                  Data for job roles relevant to featured programs
                  (1/1/22-12/31/22)
                </p>
              </div>
            </div>
            <div className="card-right">
              <h4>Recommended Professional</h4>
              <div className="card-right-cards">
                <Cards
                  menuName="Menu 1"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting
                              industry. Lorem Ipsum has been the industry's standard dummy text ever
                              since the 1500s Lorem Ipsum has been the industry's standard dummy
                              text ever since the 1500s."
                  imageUrl={img}
                />
                <Cards
                  menuName="Menu 2"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s."
                  imageUrl={img}
                />
              </div>
            </div>
          </div>
          <div className="body3">
            <h2>Select Your GOAL</h2>
            <div className="card3">
              <Card2 />
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default Body;
