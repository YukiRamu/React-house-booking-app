import React, { useContext } from "react";
import "./scss/Header.scss";
import { FaSearch } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import { Container, Row, Col } from "react-bootstrap";
import HomeContext from "../Context/HomeContext";
//import { Button } from "@chakra-ui/react";
//import { useDisclosure } from "@chakra-ui/react";
const logo = "../image/home.png";

const Header = () => {
  //const { isOpen, onOpen, onClose } = useDisclosure();
  const homeCtx = useContext(HomeContext);

  return (
    <>
      <Container fluid className="headerContainer">
        <Row>
          <Col>
            <img className="logo" src={logo} />
          </Col>
          <Col>
            <div>
              <input
                onClick={() =>
                  homeCtx.dispatchHome({
                    type: "OPEN",
                  })
                }
                className="input"
                placeholder="Search"
                type="search"
              />
              <FaSearch className="searchIcon" />
            </div>
          </Col>
          <Col className="headerRight">
            <span>Become a Host</span>
            <GrLanguage className="icon" />
            <BsPersonFill className="icon" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;