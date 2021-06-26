import React, { useContext, useState, useRef } from "react";
import HomeContext from "../Context/HomeContext";
import HotelLists from "./HotelLists";
import "./scss/BookModal.scss";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookModal = ({
  setInputValue,
  getHotelData,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  setMyStartDate,
  setMyEndDate,
  setShowHotelList,
}) => {
  const inputRef = useRef(null);
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());
  const { isOpen, onOpen, onClose } = useDisclosure();
  const homeCtx = useContext(HomeContext);

  const startDateChange = () => {
    //console.log(document.getElementById("myStartDate").value);
    setMyStartDate(document.getElementById("myStartDate").value);
  };

  const endDateChange = () => {
    // console.log(document.getElementById("myEndDate").value);
    setMyEndDate(document.getElementById("myEndDate").value);
  };

  return (
    <>
      <ChakraProvider>
        <Modal isOpen={homeCtx.openModal} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Book a hotel</ModalHeader>
            <ModalCloseButton
              onClick={() =>
                homeCtx.dispatchHome({
                  type: "CLOSE",
                })
              }
            />
            <ModalBody>
              <input
                type="text"
                placeholder="Location"
                ref={inputRef}
                onChange={() => {
                  setInputValue(inputRef.current.value);
                }}
              />
              <div>
                <span>Check in</span>
                <DatePicker
                  id="myStartDate"
                  selected={startDate}
                  dateFormat="yyyy-MM-dd"
                  onChange={(date) => {
                    {
                      setStartDate(date);
                      startDateChange(date);
                    }
                  }}
                />
              </div>
              <div>
                <span>Check out</span>
                <DatePicker
                  id="myEndDate"
                  selected={endDate}
                  dateFormat="yyyy-MM-dd"
                  onChange={(date) => {
                    {
                      setEndDate(date);
                      endDateChange(date);
                    }
                  }}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                variant="ghost"
                onClick={() => {
                  {
                    homeCtx.dispatchHome({
                      type: "CLOSE",
                    });
                    getHotelData();
                    setShowHotelList(true);
                  }
                }}
              >
                Search
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    </>
  );
};

export default BookModal;
