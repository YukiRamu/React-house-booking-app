import React, { useContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Text, Button, ButtonGroup, Spinner, Divider, Feature, Box, Stack, HStack, Heading, VStack, Grid, GridItem, Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { FaHeart, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { MdSmokeFree } from "react-icons/md";
import { IoFlowerOutline, IoFlowerSharp, IoBedSharp } from "react-icons/io5";
import "./PropertyDetail.css";
import PropertyDetailContext from '../../Context/PropertyDetailContext';

const PropertyDetail = () => {

  const { propertyDetail, dispatchPropertyDetail } = useContext(PropertyDetailContext);

  console.log(propertyDetail);

  return (
    <>
      {(propertyDetail.roomImg.length !== 0) && (Object.keys(propertyDetail.property).length !== 0) ? (
        <div className="PropertyDetailContainer">
          {/* ===== Property Title ===== */}
          <div className="title">
            <Text fontSize="4xl">{propertyDetail.property.propertyDescription.name}</Text>
            <Button colorScheme="teal" variant="ghost">
              <FaHeart /> Save
            </Button>
          </div>

          <p className="address">
            {propertyDetail.property.propertyDescription.address.fullAddress}
          </p>

          {/* ===== Image Panel ===== */}
          <Grid
            h="200px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(7, 1fr)"
            gap={4}
            className="imgPanel"
          >
            <GridItem rowSpan={2} colSpan={3} className="imgItem">
              <img src={propertyDetail.roomImg[0].largeImageURL} alt="img0" />
            </GridItem>
            <GridItem colSpan={2} className="imgItem">
              <img src={propertyDetail.roomImg[1].largeImageURL} alt="img1" />
            </GridItem>
            <GridItem colSpan={2} className="imgItem">
              <img src={propertyDetail.roomImg[2].largeImageURL} alt="img2" />
            </GridItem>
            {(() => {
              const html = [];
              for (let i = 3; i < propertyDetail.roomImg.length; i++) {
                html.push(
                  <GridItem colSpan={1} className="imgItem" key={propertyDetail.roomImg.id}> <img src={propertyDetail.roomImg[i].largeImageURL} alt={`img${i}`} /></GridItem>
                );
              }
              return html;
            })()}
          </Grid>

          <Divider bg="lightgray" />

          {/* ===== Details ===== */}
          <div>
            <Text fontSize="3xl">{propertyDetail.property.propertyDescription.tagline[0].replace("<b>", "").replace("</b>", "")} </Text>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non in vel, ad consequuntur fugiat debitis exercitationem ex minus officia consequatur tempora assumenda voluptatum deleniti dolorem ipsam a animi corporis accusantium.</p>
          </div>

          {/* amenity */}
          <Text fontSize="2xl">Amenities</Text>
          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={6}
            className="amenityPanel">
            <Box w="100%" h="100%" className="hotel">
              <Text fontSize="lg">Hotel</Text>
              <ul>
                {propertyDetail.property.amenities[0].listItems.map((elem, index) => (
                  <li key={index}><IoFlowerOutline /> {elem.listItems}</li>
                ))}
              </ul>
            </Box>

            <Box w="100%" h="100%" className="room">
              <Text fontSize="lg">Room</Text>
              <ul>
                {propertyDetail.property.amenities[1].listItems.map((elem, index) => (
                  <li key={index}><IoFlowerSharp /> {elem.listItems}</li>
                ))}
              </ul>
            </Box>
          </Grid>

          <Divider bg="lightgray" />

          {/* Room */}
          <Text fontSize="2xl">Sleeping Arrangements</Text>
          <Grid
            templateColumns="repeat(5,1fr)"
            gap={4}
            className="roomTypePanel">

            {(() => {
              let roomArr = [];
              const html = [];
              roomArr = propertyDetail.property.propertyDescription.roomTypeNames.map(e => e.split(","));
              for (let i = 0; i < roomArr.length; i++) {
                html.push(
                  <Box className="roomInfo" w="100%">
                    <p className="room"> {roomArr[i][0]}</p>
                    <p><IoBedSharp></IoBedSharp> {roomArr[i][1]}</p>
                    <p><MdSmokeFree></MdSmokeFree> {roomArr[i][2]}</p>
                  </Box>
                );
              }
              return html;
            })()}
          </Grid>

          {/* Review */}
          <Text fontSize="2xl">Review</Text>

        </div>
      ) : (
        <div className="PropertyDetailContainer">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="teal.500"
            size="xl"
          />
        </div>
      )}
    </>
  );
};

export default PropertyDetail;
