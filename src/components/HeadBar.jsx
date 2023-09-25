import React, { Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
import HeadBarCss from "./HeadBarCss.module.css";
import moc from "./images/moc.svg";
import azadi from "./images/aka.svg";

const HeadBar = () => {
  return (
    <Fragment>
      <Navbar expand="lg" data-bs-theme="">
        <Navbar.Brand href="#home">
          <img className={HeadBarCss.navImg} src={moc} alt="logo" />
          <img className={HeadBarCss.navImg} src={azadi} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-inline-flex align-items-end ms-auto">
            <Nav className="me-auto">
              <Nav.Link className={HeadBarCss.navLinks} href="#home">
                Selfies
              </Nav.Link>
              <Nav.Link className={HeadBarCss.navLinks} href="#features">
                Home
              </Nav.Link>
              <Nav.Link className={HeadBarCss.navLinks} href="#features">
                Blog
              </Nav.Link>
              <Nav.Link className={HeadBarCss.navLinks} href="#features">
                Downloads
              </Nav.Link>
              <Nav.Link className={HeadBarCss.navLinks} href="#pricing">
                Flag Code
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default HeadBar;
