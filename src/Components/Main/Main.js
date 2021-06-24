import React from 'react';
import "./Main.css";
import PropertyDetail from '../PropertyDetail/PropertyDetail';
import { ChakraProvider } from "@chakra-ui/react";
import FadeIn from 'react-fade-in';

//This is our parent component (Yumi & Yuki)

const Main = () => {
  return (
    <>
      <ChakraProvider>
        <FadeIn>
          {/* Header */}

          {/* Main container */}
          <h1>React Property Booking Website</h1>

          {/* Detail page for testing purpose, will be deleted once the router is ready */}
          <PropertyDetail />
          {/* Footer */}

        </FadeIn>
      </ChakraProvider>
    </>
  );
};

export default Main;
