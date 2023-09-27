import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SubContentCss from "./MainContentCss.module.css";

const SubContent = () => {
  return (
    <Fragment>
      <div style={{ paddingTop: "5%" }}>
        <Container fluid className="py-5">
          <Row className="justify-content-center">
            <Col sm={12} md={8} lg={6}>
              <iframe
                width="100%"
                height="400px"
                src="https://www.youtube.com/embed/J3usOwPYRbA?si=CK3bh4fpUhbXfAz5"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className={SubContentCss.videoIframe}
                style={{ borderRadius: "10px" }}
              ></iframe>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="py-5">
            <Col
              sm={12}
              lg={6}
              className={`d-flex align-items-center ${SubContentCss.flagVideo}`}
            >
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/ADfivEQV24U?si=Kcodr1UpePGRzNTw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className={SubContentCss.videoIframe}
                style={{ borderRadius: "10px" }}
              ></iframe>
            </Col>
            <Col sm={12} lg={5} className="offset-lg-1">
              <div className="text-center">
                <h3 className={`${SubContentCss.vidTitle} my-4`}>
                  Har Ghar Tiranga
                </h3>
                <p className={SubContentCss.videoText}>
                  The Tri-colour flag is a symbol of pride for every Indian. It
                  represents national integrity and signifies the hopes and
                  aspirations of the Indian people.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default SubContent;
