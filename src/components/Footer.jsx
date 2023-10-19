import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure to import Bootstrap CSS
import FooterCss from "../css/Footer.module.css";

const Footer = () => {
  return (
    <>
      <hr />
      <footer
        className="footer"
        id="footer"
        style={{ cursor: "default", padding: "0px", height: "40px" }}
      >
        <Container fluid>
          <div className="d-flex justify-content-center container"></div>
        </Container>
        <Container fluid>
          <Row className="d-flex align-items-center">
            <Col xs={4}>
              <div className={FooterCss.org}></div>
              <div className={FooterCss.grn}></div>
            </Col>
            <Col
              xs={4}
              className="text-center text-nowrap"
              style={{ padding: "0px" }}
            >
              <div className="row">
                <div
                  className="p-2 text-break footer_text d-flex align-items-center justify-content-center col"
                  style={{ fontWeight: "normal", margin: "0" }}
                >
                  We are Indian's
                </div>
              </div>
            </Col>
            <Col xs={4}>
              <div className={FooterCss.org}></div>
              <div className={FooterCss.grn}></div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
