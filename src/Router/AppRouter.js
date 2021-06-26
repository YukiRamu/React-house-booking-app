import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./ScrollToTop";
import Header from "../Components/Header";
import Home from "../Components/Home";
import FadeIn from "react-fade-in";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PropertyDetail from "../Components/PropertyDetail/PropertyDetail";

const AppRouter = () => {
  return (
    <>
      <Router>
        <FadeIn>
          <ScrollToTop>
            <Header />
            <Switch>
              <Route path="/" exact render={(props) => <Home {...props} />} />
              <Route path="/detail" component={PropertyDetail} />
            </Switch>
            {/* Footer here */}
          </ScrollToTop>
        </FadeIn>
      </Router>
    </>
  );
};

export default AppRouter;
