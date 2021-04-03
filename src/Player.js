import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import "./Player.css";
import Sidebar from "./Sidebar";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        {/* sidebar */}
        <Body spotify={spotify} />
        {/* body */}
      </div>
      <Footer />
      {/* footer */}
    </div>
  );
}

export default Player;
