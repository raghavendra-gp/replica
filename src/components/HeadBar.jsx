import React, { Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
import HeadBarCss from "../css/HeadBarCss.module.css";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

const HeadBar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fragment>
      <Navbar
        expand="lg"
        data-bs-theme="dark"
        style={{ backgroundColor: "#CD6688" }}
        className={`${HeadBarCss.sticky_top}`}
      >
        <Navbar.Brand>
          <img
            className={`${HeadBarCss.navImg}`}
            src={logo}
            alt="logo"
            onClick={scrollToTop}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {" "}
            {/* Use ms-auto to push the links to the right */}
            <Nav.Link
              className={`mx-auto mx-lg-0 ${HeadBarCss.navLinks}`}
              onClick={scrollToTop}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/letters"
              className={`mx-auto mx-lg-0 ${HeadBarCss.navLinks}`}
            >
              Letters
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default HeadBar;
