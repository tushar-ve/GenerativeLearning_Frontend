import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Quiz from "../Quiz/Quiz";
import "./Tabs.css";
import "./Quiztab.css";
import Cards from "../MainBody/Cards";
import image2 from "../assets/images/complete-guide-to-software-testing-automation-thumbnail.png";
import New from "./New";
import Articles from "../Articles/Articles";
import CardSlider from "./CardSlider/CardSlider";
import Videos from "../MainBody/Videos";

const Quiztab = () => {
  const [value, setValue] = React.useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <>
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
          <Tab
            value="three"
            className={value === "three" ? "active-tabs" : "tabs"}
            label="What's New"
          />
        </Tabs>
      </Box>

      <div className="content-tabs">
        <div className={value === "one" ? "content active-content" : "content"}>
          <Quiz />
          <New />
          <div className="New-tab">
            <CardSlider />
          </div>
        </div>
      </div>
      <div className="content-tabs">
        <div className={value === "two" ? "content active-content" : "content"}>
          <div className="topics1">
            <New />
          </div>
          <div style={{ marginLeft: "106px", marginRight: "66px" }}>
            <div className="card2">
              <h3 className="video">Popular Videos</h3>
              <div
                style={{
                  display: "flex",
                  flex: "row",
                  marginLeft: "100px",
                  justifyContent: "space-evenly",
                }}
              >
                <Cards
                  menuName="Menu 1"
                  description="Description of Menu 1 mbjhedjkhdfi f sjishjkchsdbcjkhdsfkcheukshdbfjkchxikshd,cnkdhsjkcsdjnckdjhfiusbj "
                  imageUrl={image2}
                />
                <Cards
                  menuName="Menu 1"
                  description="Description of Menu 1 mbjhedjkhdfi f sjishjkchsdbcjkhdsfkcheukshdbfjkchxikshd,cnkdhsjkcsdjnckdjhfiusbj "
                  imageUrl={image2}
                />
                <Cards
                  menuName="Menu 1"
                  description="Description of Menu 1 mbjhedjkhdfi f sjishjkchsdbcjkhdsfkcheukshdbfjkchxikshd,cnkdhsjkcsdjnckdjhfiusbj "
                  imageUrl={image2}
                />

                <Cards
                  menuName="Menu 1"
                  description="Description of Menu 1 mbjhedjkhdfi f sjishjkchsdbcjkhdsfkcheukshdbfjkchxikshd,cnkdhsjkcsdjnckdjhfiusbj "
                  imageUrl={image2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-tabs">
        <div
          className={value === "three" ? "content active-content" : "content"}
        >
          <div className="quiztab-videos-container">
            <h2>New Videos</h2>
            <Videos />
          </div>
          <div className="quiztab-article-container">
            <h2>New Articles</h2>
            <Articles />
          </div>
          <div className="quiztab-test-container">
            <h2>Test Preparation</h2>
            <Videos />
          </div>
          <div className="quiztab-announcement-container">
            <h2>Announcements</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since 1500s Lorem Ipsum has been the industry's standard
              dummy text ever since 1500s. Lorem Ipsum has been the industry's
              standard dummy text ever since 1500s Lorem Ipsum has been the
              industry's standard dummy text ever since 1500s.{" "}
              <span>Learn More...</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiztab;
