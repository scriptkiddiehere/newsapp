import React from "react";
import "./NavDrawer.css";
import HamburgerDrawer from "./HamburgerDrawer";

const NavDrawer = ({ setTopic }) => {
  return (
    <div className="nav">
      <div className="menu">
        <HamburgerDrawer setTopic={setTopic} />
      </div>
      <img
        style={{ cursor: "pointer" }}
        src="https://iotcdn.oss-ap-southeast-1.aliyuncs.com/News-Image.jpg"
        height="80%"
        alt="logo"
      />
    </div>
  );
};

export default NavDrawer;