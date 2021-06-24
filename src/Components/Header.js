import React from "react";
import "./scss/Header.scss";
import { FaSearch } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../image/home.png";

const Header = () => {
  return (
    <>
      <Container fluid className="headerContainer">
        <Row>
          <Col>
            <img className="logo" src={logo} />
          </Col>
          <Col>
            <form>
              <input className="input" placeholder="Search" type="search" />
              <FaSearch className="searchIcon" />
            </form>
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
