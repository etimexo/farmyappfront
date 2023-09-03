import React, { useState, useContext, useEffect } from "react";
import "../styles/waitlist.css";
import "../styles/upload.css";
import Navbar from "./Navbar";

function StoreUpload() {
  return (
    <div className="upload">
      <Navbar />
      <div className="uploads">
        <div className="upload1">
          <img src="https://c.wallhere.com/photos/d9/d8/landscape_plants_forest_trees-9760.jpg!d" alt="plants" />
        </div>
        <div className="upload2"></div>
      </div>
    </div>
  )
}
export default StoreUpload