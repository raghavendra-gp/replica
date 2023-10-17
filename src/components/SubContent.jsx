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
        {/* /-----------------------About the app--------------------------/ */}
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
        {/* /-----------------------About the app end--------------------------/ */}

        {/* -----------------------file upload----------------------------- */}
        <Container className="py-5 fadeInOnScroll">
          {/* <div className={`${SubContentCss.saffron}`}></div> */}
          <FileUpload />
          {/* <div className={`${SubContentCss.green}`}></div>   */}
        </Container>

        {/* ----------------------end file upload--------------------------- */}

        {/* /---------------------------start video and content------------------------/ */}
        <Container className="py-5 fadeInOnScroll">
          <Row>
            <Col sm={12} lg={6} className="d-flex align-items-center">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/ev9pf8RjjRY?si=g7BRNqxgAFTvJIf6"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                style={{ borderRadius: "10px" }}
              ></iframe>
            </Col>
            <Col lg={1} className="d-none d-lg-block">
              <div className={`${SubContentCss.vertical_line}`}></div>
            </Col>
            <Col sm={12} lg={5} className="d-flex align-items-center">
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

        {/* /---------------------------end video and content------------------------/ */}
        <Container>
          <hr
            style={{
              border: "none",
              height: "5px",
              backgroundImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.15))",
            }}
          />
        </Container>

        {/* /-------------------------------army video start------------------------------/ */}

        <Container className="py-5 fadeInOnScroll">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3t5M10gBVCc?si=_yIRk874r0IaIrf0&amp;controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style={{
              width: "80%",
              borderRadius: "30px",
              height: "70vh",
            }}
          ></iframe>
        </Container>
        {/* /-------------------------------army video end------------------------------/ */}
      </div>
    </Fragment>
  );
};

export default SubContent;
