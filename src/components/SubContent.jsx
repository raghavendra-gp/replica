import React, { Fragment } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import SubContentCss from "./MainContentCss.module.css";
import { FileUpload } from "primereact/fileupload";

const SubContent = () => {
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
              dolores nesciunt similique perspiciatis animi consequatur beatae
              provident aut, in, facilis et inventore repudiandae eius
              accusamus. Quasi ullam reiciendis consequatur quis facilis, natus
              quisquam eaque qui soluta earum. Ipsa consequuntur officia iste.
              Dicta quos dolorem numquam sequi quia alias eligendi iste,
              incidunt molestias harum at quis aliquid dolores.
            </p>
          </div>
        </Container>
        <Container>
          <hr />
        </Container>

        {/* <iframe
                width="100%"
                height="400px"
                src="https://www.youtube.com/embed/J3usOwPYRbA?si=CK3bh4fpUhbXfAz5"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className={SubContentCss.videoIframe}
                style={{ borderRadius: "10px" }}
              ></iframe> */}
        {/* </Col> */}
        <Container className="py-5">
          <div className="text-center">
            <h2 className={`${SubContentCss.title_para}`}>
              Your Compassionate
            </h2>
            <div className="text-center">
              <input
                type="file"
                name="Choose"
                id=""
                style={{ padding: "8px" }}
              />
            </div>
          </div>
        </Container>
        <Container>
          <hr />
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
