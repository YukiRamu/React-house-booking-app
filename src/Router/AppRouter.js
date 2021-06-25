import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "../Components/Main/Main";
import ScrollToTop from "./ScrollToTop"; //for moving back to top when routing
import { PropertyDetailProvider } from "../Context/PropertyDetailContext";

//Yumi
const AppRouter = () => {
  return (
    <>
      {/* Add all providers on the top level */}
      <PropertyDetailProvider>
        {/* App Router : added main conponent for testing purpose. please rewrite this with router*/}
        {/* <ScrollToTop> */}
        <Main />
        {/* </ScrollToTop> */}
        {/* App Router : added main conponent for testing purpose. please rewrite this with router*/}
      </PropertyDetailProvider>
    </>
  );
};

export default AppRouter;
