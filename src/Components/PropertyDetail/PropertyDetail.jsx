import React, { useContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
// import { Row, Col, Button, Form, Card } from 'react-bootstrap';
import { FaHeart, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import "./PropertyDetail.css";
import PropertyDetailContext from '../../Context/PropertyDetailContext';

const PropertyDetail = () => {

  const { propertyDetail, dispatchPropertyDetail } = useContext(PropertyDetailContext);

  console.log(propertyDetail);

  return (
    <>
      {propertyDetail.roomImg.length !== 0 ? (
        <div className="PropertyDetailContainer">
          <div className="title">
            <h2>Property title Creekside tree house</h2>
            <Button colorScheme="teal" variant="ghost">
              <FaHeart /> Save
            </Button>
          </div>

          <div className="img">
            <Grid
              h="200px"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(5, 1fr)"
              gap={4}
            >
              <GridItem rowSpan={2} colSpan={1} bg="tomato"><img src={propertyDetail.roomImg[0].previewURL} alt="img1" /></GridItem>
              <GridItem colSpan={2} bg="papayawhip" />
              <GridItem colSpan={2} bg="papayawhip" />
              <GridItem colSpan={1} bg="tomato" />
              <GridItem colSpan={1} bg="tomato" />
              <GridItem colSpan={1} bg="tomato" />
              <GridItem colSpan={1} bg="tomato" />
            </Grid>
          </div>
        </div>
      ) : (<h1>Loading....</h1>)}
    </>
  );
};

export default PropertyDetail;
