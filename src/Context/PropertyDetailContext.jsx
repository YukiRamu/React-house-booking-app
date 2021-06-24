import React, { useReducer, createContext, useEffect } from 'react';
import PropertyDetailReducer from '../Reducer/PropertyDetailReducer';

const PropertyDetailContext = createContext();

const PropertyDetailProvider = (props) => {

  const ImgAPI = {
    ENDPOINT: "https://pixabay.com/api/",
    API_KEY: "22112901-d9ab6e677acd5ee1c4e0a636d"
  };

  //Under consideration, not sure if I use this api
  const BookingAPI = {
    ENDPOINT: "https://api.test.hotelbeds.com/",
    API_KEY: "440d17dae2610ab733684ec26af58173"
  };

  //PropertyDetailReducer
  const initialState = {
    property: [],
    host: [],
    roomImg: []
  };

  const [propertyDetail, dispatchPropertyDetail] = useReducer(PropertyDetailReducer, initialState);

  // useEffect(() => {
  //   //get state from Yumi and pass it to the reducer
  //   dispatchPropertyDetail({ type: "SHOW_PROPERTY", payload: "state" });
  // }, []);

  useEffect(() => {
    try {
      (async () => {
        const imgRes = await fetch(`${ImgAPI.ENDPOINT}?key=${ImgAPI.API_KEY}&q="room+house"&image_type=photo&pretty=true`);
        if (!imgRes.ok) {
          throw imgRes.statusText;
        } else {
          const imgData = await imgRes.json();
          dispatchPropertyDetail({ type: "IMG_FETCH_SUCCESS", payload: imgData });
        }
      })();
    } catch (error) {
      console.error(`Failed to fetch image data. Error= ${error}`);
    }
  }, []);

  return (
    <>
      <PropertyDetailContext.Provider value={{
        propertyDetail,
        dispatchPropertyDetail
      }}>
        {props.children}
      </PropertyDetailContext.Provider>
    </>
  );
};

export { PropertyDetailContext as default, PropertyDetailProvider };
