import React, { useReducer, createContext, useEffect } from "react";
import PropertyDetailReducer from "../Reducer/PropertyDetailReducer";
import axios from "axios";

const PropertyDetailContext = createContext();

const PropertyDetailProvider = (props) => {

  /* PropertyDetailReducer */
  const initialState = {
    property: [],
    transportation: [],
    host: [],
    roomImg: [],
    price: {
      King: 150,
      Queen: 120,
      Sofa: 100,
      Other: 200
    },
    hotelId: "",
  };

  const [propertyDetail, dispatchPropertyDetail] = useReducer(
    PropertyDetailReducer,
    initialState
  );

  /* Get Hotel Detail */
  const detailParam = {
    method: "GET",
    url: "https://hotels4.p.rapidapi.com/properties/get-details",
    params: { id: propertyDetail.hotelId }, //will get hotel id from Yumi
    headers: {
      "x-rapidapi-key": "c9968e2987mshd0b8344da831c28p10df23jsn55a0df610ca7",
      "x-rapidapi-host": "hotels4.p.rapidapi.com",
    },
  };

  useEffect(() => {
    if (propertyDetail.hotelId === "") return;

    axios
      .request(detailParam)
      .then((response) => {

        console.log("fetched data is ", response.data);
        dispatchPropertyDetail({
          type: "PROPERTYDETAIL_FETCH_SUCCESS",
          payload: response.data.data.body,
        });
        dispatchPropertyDetail({
          type: "TRANSPORTATION_FETCH_SUCCESS",
          payload: response.data.transportation.transportLocations,
        });
      })
      .catch((error) => {
        console.error(`Failed to fetch property detail data. Error= ${error}`);
      });
  }, [propertyDetail.hotelId]);

  /* Get Review */
  // const reviewParam = {
  //   method: 'GET',
  //   url: 'https://hotels4.p.rapidapi.com/reviews/list',
  //   params: { id: '634418464', page: '1', loc: 'en_US' }, //will get id from Yumi
  //   headers: {
  //     'x-rapidapi-key': 'c9968e2987mshd0b8344da831c28p10df23jsn55a0df610ca7',
  //     'x-rapidapi-host': 'hotels4.p.rapidapi.com'
  //   }
  // };

  // useEffect(() => {
  //   axios
  //     .request(reviewParam)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(`Failed to fetch review data. Error= ${error}`);
  //     });
  // }, []);

  // useEffect(() => {
  //   //get state from Yumi and pass it to the reducer
  //   dispatchPropertyDetail({ type: "SHOW_PROPERTY", payload: "state" });
  // }, []);

  /* Fake Property Images */
  const ImgAPI = {
    ENDPOINT: "https://pixabay.com/api/",
    API_KEY: "22112901-d9ab6e677acd5ee1c4e0a636d",
  };

  useEffect(() => {
    try {
      (async () => {
        const imgRes = await fetch(
          `${ImgAPI.ENDPOINT}?key=${ImgAPI.API_KEY}&q="room+house"&image_type=photo&pretty=true`
        );
        if (!imgRes.ok) {
          throw imgRes.statusText;
        } else {
          const imgData = await imgRes.json();
          console.log(imgData.hits);
          let data = []; //pick only 7 photos
          for (let i = 0; i < 7; i++) {
            data.push(imgData.hits[i]);
          }
          dispatchPropertyDetail({ type: "IMG_FETCH_SUCCESS", payload: data });
        }
      })();
    } catch (error) {
      console.error(`Failed to fetch image data. Error= ${error}`);
    }
  }, []);

  return (
    <>
      <PropertyDetailContext.Provider
        value={{
          propertyDetail,
          dispatchPropertyDetail,
        }}
      >
        {props.children}
      </PropertyDetailContext.Provider>
    </>
  );
};

export { PropertyDetailContext as default, PropertyDetailProvider };
