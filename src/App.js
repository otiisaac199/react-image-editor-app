import "./App.css";
import React from "react";
import Slider from "./Components/Sidebar";

function App() {
  return (
    <div className="app_container">
      <div className="main_image">Image</div>
      <div className="sidebar">sidebar</div>
      <Slider />
    </div>
  );
}

export default App;
