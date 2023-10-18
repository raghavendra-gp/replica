import React, { Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
import HeadBarCss from "../css/HeadBarCss.module.css";
import logo from "../images/logo.svg";

const HeadBar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToHome = () => {};
  return (
    <Fragment>
      <Navbar
        expand="lg"
        data-bs-theme="dark"
        style={{ backgroundColor: "#CD5C08" }}
        className={`${HeadBarCss.sticky_top}`}
      >
        <Navbar.Brand href="#home">
          <img
            className={`${HeadBarCss.navImg}`}
            src={logo}
            alt="logo"
            onClick={scrollToTop}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-inline-flex align-items-end ms-auto">
            <Nav className="me-auto">
              <Nav.Link
                className={`${HeadBarCss.navLinks}`}
                href="#home"
                onClick={scrollToTop}
              >
                Home
              </Nav.Link>
              <Nav.Link className={`${HeadBarCss.navLinks}`} href="#selfies">
                Selfies
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default HeadBar;
