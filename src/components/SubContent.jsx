import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import SubContentCss from "./MainContentCss.module.css";

const SubContent = () => {
  return (
    <Fragment>
      <div style={{ paddingTop: "5%", paddingBottom: "5%" }}>
        <div style={{ padding: "3rem 1.5rem" }}>
          <iframe
            width="800px"
            height="400px"
            src="https://www.youtube.com/embed/J3usOwPYRbA?si=CK3bh4fpUhbXfAz5"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style={{ borderRadius: "10px" }}
          ></iframe>
        </div>

        <div className="container">
          <div className="row" style={{ paddingTop: "5%" }}>
            <div
              className={`${SubContentCss.flag_video}col d-flex col-lg-6 col-sm-12-items-center`}
            >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ADfivEQV24U?si=Kcodr1UpePGRzNTw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                style={{ borderRadius: "10px" }}
              ></iframe>
            </div>
            <div className="text-center col-lg-5 col-sm-12 offset-lg-1">
              <div className="row">
                <h3 className={`${SubContentCss.vid_title} my-4`}>
                  Har Ghar Tiranga
                </h3>
                <p className={SubContentCss.video_text}>
                  The Tri-colour flag is a symbol of pride for every Indian. It
                  represents national integrity and signifies the hopes and
                  aspirations of the Indian people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SubContent;
