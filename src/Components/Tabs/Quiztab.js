import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Quiz from "../Quiz/Quiz";
import "./Tabs.css";
import Cards from "../MainBody/Cards";
import image2 from "../assets/images/complete-guide-to-software-testing-automation-thumbnail.png";
import New from "./New";
import Articles from "../Articles/Articles";
import CardSlider from "./CardSlider/CardSlider";
import Navbar from "../Header/Navbar";
import SearchVideos from "../SearchVideos/SearchVideos";

const Quiztab = () => {
  const [value, setValue] = React.useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingTop: "0px",
          width: "100%",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab
            value="one"
            className={value === "one" ? "active-tabs" : "tabs"}
            label="Let's Learn"
          />
          <Tab
            value="two"
            className={value === "two" ? "active-tabs" : "tabs"}
            label="Search Videos"
          />
          <Tab value="three"
            className={value === "three" ? "active-tabs" : "tabs"}
            label="What's New"
          />
        </Tabs>
      </Box>

      <div className="content-tabs">
        <div className={value === "one" ? "content active-content" : "content"}>
          <Quiz />
        </div>
      </div>
      <div className="content-tabs">
        <div className={value === "two" ? "content active-content" : "content"}>
          <SearchVideos />
        </div>
      </div>
      <div className="content-tabs">
        <div
          className={value === "three" ? "content active-content" : "content"}
        >
        </div>
      </div>
    </>
  );
};

export default Quiztab;
