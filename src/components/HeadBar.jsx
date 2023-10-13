import React, { Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
import HeadBarCss from "./HeadBarCss.module.css";

import loclogo from "./images/logo.svg";

const HeadBar = () => {
  return (
    <Fragment>
      <Navbar
        expand="lg"
        data-bs-theme="dark"
        style={{ backgroundColor: "#E9B824" }}
      >
        <Navbar.Brand href="#home">
          <img className={HeadBarCss.navImg} src={loclogo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-inline-flex align-items-end ms-auto">
            <Nav className="me-auto">
              <Nav.Link className={HeadBarCss.navLinks} href="#features">
                Home
              </Nav.Link>
              <Nav.Link className={HeadBarCss.navLinks} href="#selfies">
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
