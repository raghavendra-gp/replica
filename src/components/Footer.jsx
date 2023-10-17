import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure to import Bootstrap CSS
import FooterCss from "./Footer.module.css";

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
          <div className="d-flex justify-content-center container">
            <Row>
              {/* <Col xs={5}>
                <a
                  className="p-2 text-nowrap sm_font d-flex align-items-center justify-content-center"
                  href="/terms-and-conditions"
                  style={{ fontSize: "12px" }}
                >
                  Terms and Condition
                </a>
              </Col> */}
              {/* <Col
                xs={2}
                className="d-flex align-items-center justify-content-center"
              >
                |
              </Col>
              <Col xs={5}>
                <a
                  className="p-2 text-nowrap sm_font d-flex align-items-center justify-content-center"
                  href="/privacy-policy"
                  style={{ fontSize: "12px" }}
                >
                  Privacy Policy
                </a>
              </Col> */}
            </Row>
          </div>
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
