import React, { useState, useReducer, useEffect } from "react";
import HomeReducer from "../Reducer/HomeReducer";
//import axios from "axios";

const HomeContext = React.createContext();

export const HomeContextProvider = (props) => {
  const initialState = {
    openModal: false,
    fetchedData: "",
  };

  const [state, dispatchHome] = useReducer(HomeReducer, initialState);

  return (
    <HomeContext.Provider
      value={{
        fetchedData: state.fetchedData,
        openModal: state.openModal,
        dispatchHome: dispatchHome,
      }}
    >
      {props.children}
    </HomeContext.Provider>
  );
};
export default HomeContext;
