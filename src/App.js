import React from "react";
import Topbar from "./components/topbar/Topbar";
import "./App.scss";
import Homepage from "./pages/homepage/Homepage";

const App = () => {
  return (
    <div>
      <Topbar />
      <Homepage />
    </div>
  );
};

export default App;
