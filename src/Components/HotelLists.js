import React, { useContext } from "react";
import HomeContext from "../Context/HomeContext";
import HotelListCard from "./HotelListCard";

const HotelLists = () => {
  const homeCtx = useContext(HomeContext);

  return (
    <>
      {homeCtx.fetchedData &&
        homeCtx.fetchedData.results.map((result) => {
          return (
            <div>
              {console.log(result.guestReviews)}
              <HotelListCard
                name={result.name}
                rating={result.guestReviews ? result.guestReviews.rating : ""}
                total={result.guestReviews ? result.guestReviews.total : ""}
                price={result.ratePlan.price.current}
                imageUrl={result.optimizedThumbUrls.srpDesktop}
              />
            </div>
          );
        })}
    </>
  );
};

export default HotelLists;
