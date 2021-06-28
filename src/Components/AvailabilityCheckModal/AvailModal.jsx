import React, { useContext, useState } from 'react';
import {
  Text, Button, FormControl, FormLabel, Input, Select, FormErrorMessage, FormHelperText, NumberInput, NumberInputField,
  NumberInputStepper, NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { ImCross } from "react-icons/im";
import { IoAlertCircleSharp } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropertyDetailContext from '../../Context/PropertyDetailContext';
import "./AvailModal.css";

const AvailModal = () => {

  const { propertyDetail, dispatchPropertyDetail, setRsvCompFlg } = useContext(PropertyDetailContext);
  console.log(propertyDetail);

  //private state hook for modal pop up
  const [error, setError] = useState("");
  const [availFlg, setAvailFlg] = useState(false);
  const [modalStyle, setModalStyle] = useState({ "display": "none" });
  const [modalInput, setModalInput] = useState({
    hotelId: propertyDetail.hotelId,
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

  const checkAvailability = (e) => {
    e.preventDefault();
    //setModalStyle({ "display": "none" });
    console.log("e is ", e); //e.target[0].value = "2021/06/26 (checkin date format)
    //  console.log("form submitted", modalInput);

    //get the date and hotel id from localstorage
    if (localStorage.hasOwnProperty("reservation")) {
      const reservationData = JSON.parse(localStorage.getItem("reservation"));
      //hotelId, roomType, check-in date match
      if (reservationData.some(elem => (
        (elem.hotelId === modalInput.hotelId) &&
        (elem.roomType === modalInput.roomType) &&
        (elem.checkInDate.substring(0, 10).replaceAll("-", "/") === e.target[0].value)))) {
        setError("The room is not available :( Please try different room or date.");
        setTimeout(() => { setError(""); }, 2000);
      } else {
        console.log("available. show price");
        //show price

        //show reserve button
        setAvailFlg(true);
      }
    } else {
      console.log("first time adding localstorage. available. show price");
      //show price

      //show reserve button
      setAvailFlg(true);
    }
  };

  const reserve = (e) => {
    e.preventDefault();
    console.log("reserve", modalInput);
    //dispatch
    dispatchPropertyDetail({
      type: "RESERVE",
      payload: modalInput,
    });
    //open completion page
    setRsvCompFlg(true);
    //close this modal
    setModalStyle({ "display": "none" });
    //hide reserve button
    setAvailFlg(false);
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
          <form onSubmit={checkAvailability}>

            <div className="dateSelect">
              <FormControl>
                <FormLabel>Check-in date</FormLabel>
                <DatePicker
                  className="checkIn"
                  onChange={date => setModalInput({ ...modalInput, checkInDate: date })}
                  selected={modalInput.checkInDate}
                  dateFormat="yyyy/MM/dd"
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

            {error && (<p className="error"><IoAlertCircleSharp />{error}</p>)}

            <div className="btns">
              <Button type="submit" className="submitBtn">Check availability</Button>
              {availFlg && (<Button type="button" className="checkOutBtn"
                onClick={reserve}>Reserve</Button>)}
            </div>
          </form>
        </div>
      </div>

    </>
  );
};

export default AvailModal;
