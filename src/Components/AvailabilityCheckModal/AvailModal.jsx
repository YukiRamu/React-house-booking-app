import React, { useContext, useState, useEffect } from 'react';
import {
  Text, Button, Spinner, Divider, Box, Grid, GridItem, Avatar, AvatarBadge, AvatarGroup, FormControl, FormLabel, Input, Select, FormErrorMessage, FormHelperText, NumberInput, NumberInputField,
  NumberInputStepper, NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { ImCross } from "react-icons/im";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropertyDetailContext from '../../Context/PropertyDetailContext';
import "./AvailModal.css";

const AvailModal = () => {

  const { propertyDetail, dispatchPropertyDetail } = useContext(PropertyDetailContext);
  console.log(propertyDetail);

  //private state hook for modal pop up
  const [modalStyle, setModalStyle] = useState({ "display": "block" });
  const [modalInput, setModalInput] = useState({
    checkInDate: new Date(),
    checkOutDate: new Date(),
    adultNum: 0,
    childrenNum: 0,
    roomType: "",
    roomNum: 0,
  });

  const openModal = () => {
    setModalStyle({ "display": "block" });
  };

  const hideModal = () => {
    setModalStyle({ "display": "none" });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    //setModalStyle({ "display": "none" });
    console.log("form submitted", modalInput);
  };

  return (
    <>
      <Button colorScheme="teal" size="lg"
        className="availBtn"
        onClick={openModal}>
        Check Availability
      </Button>
      
      <div className="modalContainer" style={modalStyle}>
        <div className="modalContent">
          <Text fontSize="xl">Availability</Text>
          <button className="clsBtn" onClick={hideModal}><ImCross /></button>
          <form onSubmit={formSubmit}>

            <div className="dateSelect">
              <FormControl>
                <FormLabel>Check-in date</FormLabel>
                <DatePicker
                  className="checkIn"
                  onChange={date => { setModalInput({ ...modalInput, checkInDate: date }); }}
                  selected={modalInput.checkInDate}
                  monthsShown={2} />
              </FormControl>

              <FormControl>
                <FormLabel>Check-out date</FormLabel>
                <DatePicker
                  className="checkOut"
                  onChange={date => setModalInput({ ...modalInput, checkOutDate: date })}
                  selected={modalInput.checkOutDate}
                  monthsShown={2} />
              </FormControl>
            </div>

            <FormControl>
              <FormLabel>Guests</FormLabel>
              <div className="guestNumInput">
                <FormLabel fontSize="md">Adults</FormLabel>
                <NumberInput
                  min={0}
                  defaultValue={0}
                  className="adultNum"
                  onChange={num => setModalInput({ ...modalInput, adultNum: Number(num) })}
                  value={modalInput.adultNum} >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>

                <FormLabel fontSize="md">Children</FormLabel>
                <NumberInput
                  min={0}
                  defaultValue={0}
                  className="childrenNum"
                  onChange={num => setModalInput({ ...modalInput, childrenNum: Number(num) })}
                  value={modalInput.childrenNum}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </div>
            </FormControl>

            <FormControl>
              <FormLabel>Rooms</FormLabel>
              <div className="roomTypeInput">
                <FormLabel fontSize="md">Type</FormLabel>
                <Select
                  className="roomType"
                  onChange={e => setModalInput({ ...modalInput, roomType: e.target.value })}>
                  <option value="">select room type</option>
                  {propertyDetail.property.propertyDescription.roomTypeNames.map((e, index) => (<option value={e} key={index}>{e}</option>))}
                </Select>

                <FormLabel fontSize="md">Number</FormLabel>
                <NumberInput
                  min={0}
                  defaultValue={0}
                  className="roomNum"
                  onChange={num => setModalInput({ ...modalInput, roomNum: Number(num) })}
                  value={modalInput.roomNum}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </div>
            </FormControl>

            <Button type="submit" className="submitBtn">Check availability</Button>
          </form>
        </div>
      </div>

    </>
  );
};

export default AvailModal;
