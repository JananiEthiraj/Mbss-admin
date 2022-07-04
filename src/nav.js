import React from "react";
import icon from "./icon.png";

export default function Nav() {

  const Head={
    display:"flex",
    alignItem:"center",
    color : "white"
  };
  return (
    <div>
      <nav>
          <img src={icon} alt="icon" height="60px" width="80px" />
        <h3 style={Head}>Admin Page</h3>
          </nav>
    </div>
  );
}
