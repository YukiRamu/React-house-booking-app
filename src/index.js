import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./Router/AppRouter";
import reportWebVitals from "./reportWebVitals";
import { HomeContextProvider } from "./Context/HomeContext";

ReactDOM.render(
  <React.StrictMode>
    <HomeContextProvider>
      <AppRouter />
    </HomeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
