import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import BookModal from "./BookModal";
import HotelLists from "./HotelLists";
import HomeContext from "../Context/HomeContext";

//画像はimportではなくstringでパスを変数に代入するやり方が良い。
//画像はpublicフォルダの中に。
const mainImage = "/image/mainImage.jpg";

const Home = () => {
  const [inputValue, setInputValue] = useState(new Date());
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [myStartDate, setMyStartDate] = useState("");
  const [myEndDate, setMyEndDate] = useState("");
  const [showHotelList, setShowHotelList] = useState(false);
  const homeCtx = useContext(HomeContext);

  const getHotelData = () => {
    const options = {
      method: "GET",
      url: "https://hotels4.p.rapidapi.com/locations/search",
      params: { query: inputValue, locale: "en_US" },
      headers: {
        "x-rapidapi-key": "b452ba0297msh7e5ae1d1fbc373dp1b412djsn1f1b5eaf3e46",
        "x-rapidapi-host": "hotels4.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response);
        setDestination(response.data.suggestions[0].entities[0].destinationId);
      })
      .then(() => {
        //getHotelList();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (destination === "") return;

    const options = {
      method: "GET",
      url: "https://hotels4.p.rapidapi.com/properties/list",
      params: {
        adults1: "1",
        pageNumber: "1",
        destinationId: destination,
        pageSize: "25",
        checkOut: myEndDate,
        checkIn: myStartDate,
        sortOrder: "PRICE",
        locale: "en_US",
        currency: "USD",
      },
      headers: {
        "x-rapidapi-key": "b452ba0297msh7e5ae1d1fbc373dp1b412djsn1f1b5eaf3e46",
        "x-rapidapi-host": "hotels4.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.data.body.searchResults);
        homeCtx.dispatchHome({
          type: "FETCH_SUCCESS",
          payload: response.data.data.body.searchResults,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [destination]);

  return (
    <>
      <BookModal
        setInputValue={setInputValue}
        getHotelData={getHotelData}
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setMyStartDate={setMyStartDate}
        setMyEndDate={setMyEndDate}
        setShowHotelList={setShowHotelList}
      />
      {showHotelList ? (
        <HotelLists />
      ) : (
        <div
          className="mainImage"
          style={{
            backgroundImage: `url(${mainImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "relative",
            width: "100%",
            minHeight: "100vh",
          }}
        ></div>
      )}
    </>
  );
};

export default Home;
