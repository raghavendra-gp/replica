import React, { Fragment, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SubContentCss from "./MainContentCss.module.css";
import FileUpload from "./FileUpload";
import "./ScrollingCss.css";

const SubContent = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fadeInOnScroll");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const offset = rect.top + rect.height * 0.2;

        if (offset <= window.innerHeight && offset >= 0) {
          element.classList.add("fadeIn");
        } else {
          element.classList.remove("fadeIn");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <div>
        <Container className="py-5">
          <div className="text-center">
            <h2 className={`${SubContentCss.title}`}>
              Letter of Compassionate
            </h2>

            <p className={`${SubContentCss.title_para}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              consequatur labore, incidunt ea nisi voluptatum alias eos magni
              id! In repudiandae, maxime, at quod blanditiis saepe temporibus
              reiciendis distinctio porro eius dolorum dolor architecto soluta
              quaerat error debitis recusandae dignissimos molestiae explicabo
              harum culpa. Recusandae eveniet, ab deleniti dicta nulla iure sint
              at quod blanditiis saepe temporibus reiciendis distinctio porro
              eius dolorum dolor architecto soluta quaerat error debitis
            </p>
          </div>
        </Container>

        {/* -----------------------file upload----------------------------- */}
        <Container className="py-5 fadeInOnScroll">
          {/* <div className={`${SubContentCss.saffron}`}></div> */}
          <FileUpload />
          {/* <div className={`${SubContentCss.green}`}></div>   */}
        </Container>

        {/* ----------------------end file upload--------------------------- */}

        {/* /--------------------------------Example------------------------------------/ */}

        <Container className="py-5 fadeInOnScroll">
          <Row>
            <Col sm={12} lg={6} className="d-flex align-items-center">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/ADfivEQV24U?si=Kcodr1UpePGRzNTw"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ borderRadius: "10px" }}
              ></iframe>
            </Col>
            <Col sm={12} lg={5} className="offset-lg-1">
              <div className="text-center">
                <h3 className="my-4">Har Ghar Tiranga</h3>
                <p>
                  The Tri-colour flag is a symbol of pride for every Indian. It
                  represents national integrity and signifies the hopes and
                  aspirations of the Indian people.
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        {/* /-----------------------------End Of Example--------------------------------/ */}

        {/* /---------------------------start video and content------------------------/ */}
        {/* <Container className="py-5">
          <Row>
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
        </Container> */}
        {/* /---------------------------start video and content------------------------/ */}
      </div>
    </Fragment>
  );
};

export default SubContent;
