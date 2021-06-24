import React from "react";
import "./Main.css";

import Header from "../Header";
import Home from "../Home";

//This is our parent component (Yumi & Yuki)

const Main = () => {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Main container */}
      <Home />
      {/* Footer */}
    </>
  );
};

export default Main;
