import React from "react";
import AppBar from "../src/Components/AppBar";
import Dashboard from "../src/Components/Dashboard";
import "./App.scss";
import Navtab from "./LoginPage/NavTab/NavTab";
import SlideShow from "./LoginPage/loginForm/loginForm";

function App() {
  return (
    <div>
      {/* <AppBar />
      <Dashboard /> */}
      <Navtab />
      <SlideShow />
    </div>
  );
}

export default App;
