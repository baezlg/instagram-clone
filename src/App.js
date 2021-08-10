import React from "react";
import Topbar from "./components/topbar/Topbar";
import "./App.scss";
import Homepage from "./pages/homepage/Homepage";
import Messengerpage from "./pages/messengerpage/Messengerpage";
import Explorepage from "./pages/explorepage/Explorepage";

const App = () => {
  return (
    <div>
      <Topbar />
      {/* <Homepage /> */}
      {/* <Messengerpage /> */}
      <Explorepage />
    </div>
  );
};

export default App;
