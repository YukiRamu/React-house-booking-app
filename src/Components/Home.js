import React, { useEffect } from "react";
import mainImage from "../image/mainImage.jpg";
import axios from "axios";

const Home = () => {
  const options = {
    method: "GET",
    url: "https://hotels4.p.rapidapi.com/locations/search",
    params: { query: "new york", locale: "en_US" },
    headers: {
      "x-rapidapi-key": "b452ba0297msh7e5ae1d1fbc373dp1b412djsn1f1b5eaf3e46",
      "x-rapidapi-host": "hotels4.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div
        className="mainImage"
        style={{
          backgroundImage: `url(${mainImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
    </>
  );
};

export default Home;
