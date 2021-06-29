import React, { useContext, useState, useRef } from "react";
import HomeContext from "../Context/HomeContext";
import "./scss/BookModal.scss";
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const homeCtx = useContext(HomeContext);
  const [error, setError] = useState(false);

  const startDateChange = () => {
    setMyStartDate(document.getElementById("myStartDate").value);
  };

  const endDateChange = () => {
    setMyEndDate(document.getElementById("myEndDate").value);
  };

  const sample = () => {
    const b = inputRef.current.value;
    if (b === "") {
      setError(true);
    } else {
      homeCtx.dispatchHome({
        type: "CLOSE",
      });
      getHotelData();
      setShowHotelList(true);
    }
  };

  return (
    <>
      <Modal isOpen={homeCtx.openModal} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Book a hotel</ModalHeader>
          <ModalCloseButton
            onClick={() => {
              homeCtx.dispatchHome({
                type: "CLOSE",
              });
              setError(false);
            }}
          />
          <ModalBody>
            <input
              id="location"
              className="border"
              type="text"
              placeholder="Location"
              ref={inputRef}
              onChange={() => {
                setInputValue(inputRef.current.value);
              }}
            />
            <div className="chackInOutContainer">
              <div className="checkInContainer">
                <span>Check in</span>
                <DatePicker
                  className="border"
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
              <div className="checkOutContainer">
                <span>Check out</span>
                <DatePicker
                  className="border"
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
            </div>
            <div className="errorMsg">
              {error ? <p>Something went wrong. Please search again!</p> : ""}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="ghost"
              onClick={() => {
                sample();
              }}
            >
              Search
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BookModal;
