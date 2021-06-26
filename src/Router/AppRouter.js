import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "../Components/Main/Main";
import ScrollToTop from "./ScrollToTop"; //for moving back to top when routing
import { PropertyDetailProvider } from "../Context/PropertyDetailContext";
import Header from "../Components/Header";
import Home from "../Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Yumi
const AppRouter = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} />} />
          <PropertyDetailProvider>
            {/* App Router : added main conponent for testing purpose. please rewrite this with router*/}
            {/* <ScrollToTop> */}
            <Route path="/main" exact component={Main} />
            {/* </ScrollToTop> */}
            {/* App Router : added main conponent for testing purpose. please rewrite this with router*/}
          </PropertyDetailProvider>
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
