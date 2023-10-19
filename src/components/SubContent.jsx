import React, { Fragment, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MainCss from "../css/MainCss.module.css";
import FileUpload from "./FileUpload";
import VerticalLine from "../reusables/VerticalLine";
import HorizontalLine from "../reusables/HorizontalLine";
import "../css/Scrolling.css";

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
        {/* /-----------------------About the app--------------------------/ */}
        <Container className="py-5">
          <div className="text-center">
            <h2 className={`${MainCss.title}`}>Letter of Compassionate</h2>

            <p className={`${MainCss.title_para}`}>
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
        {/* /-----------------------About the app end--------------------------/ */}
        <HorizontalLine />
        {/* -----------------------file upload----------------------------- */}
        <Container className="py-5 fadeInOnScroll">
          <FileUpload />
        </Container>

        {/* ----------------------end file upload--------------------------- */}
        <HorizontalLine />
        {/* /---------------------------start video and content------------------------/ */}
        <Container className="py-5 fadeInOnScroll">
          <Row>
            <Col sm={12} lg={6} className="d-flex align-items-center">
              <iframe
                width="100%"
                height="315"
                // src="../videos/army man.mp4"
                src="https://www.youtube.com/embed/ev9pf8RjjRY?si=g7BRNqxgAFTvJIf6"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                style={{ borderRadius: "10px" }}
              ></iframe>
            </Col>
            <VerticalLine />
            <Col sm={12} lg={5} className="d-flex align-items-center">
              <div className="text-center">
                <h3 className={`${MainCss.title} + my-4`}>Life In Army</h3>
                <p className={`${MainCss.title_para}`}>
                  Your arms are my shelter, Assuring me that it will be better.
                  Your hand in my comfort, Lifting me up when I fall short. Your
                  voice make me strong, Teaching me what’s right and wrong. Your
                  smile says it all, Father I love you more then all.
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        {/* /---------------------------end video and content------------------------/ */}
        <HorizontalLine />
        {/* /-------------------------------army video start------------------------------/ */}

        <Container
          className="py-5 fadeInOnScroll"
          style={{ textAlign: "center" }}
        >
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/3t5M10gBVCc?si=_yIRk874r0IaIrf0&amp;controls=0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
        {/* /-------------------------------army video end------------------------------/ */}
      </div>
    </Fragment>
  );
};

export default SubContent;
