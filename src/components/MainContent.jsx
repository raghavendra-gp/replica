import React, { Fragment } from "react";
import MainContentCss from "./MainContentCss.module.css";
import HeadBarCss from "./HeadBarCss.module.css";
import dgbgs from "./images/img.svg";
import azadi from "./images/aka.svg";

const MainContent = () => {
  return (
    <Fragment>
      <div>
        <img
          className={HeadBarCss.navLinks}
          src={azadi}
          alt="logo"
          style={{ marginTop: "4vh", height: "20vh", width: "auto" }}
        />
        <p style={{ color: "#fff", marginTop: "2vh" }}>
          Hoist a flag at your house from
        </p>
        <p>
          <span style={{ color: "orange", padding: "2px" }}>13-15</span>
          <span style={{ color: "#fff", padding: "2px" }}>August</span>
          <span style={{ color: "green", padding: "2px" }}>2023</span>
        </p>
        <div className="Cotainer" style={{ padding: "5% 5% 1%" }}>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 col-sm-12">
              <div className="row mt-3 mb-2 d-flex align-items-center ">
                <a href="#">
                  <div style={{ position: "relative", textAlign: "center" }}>
                    <img
                      src={dgbgs}
                      alt="Digital Tiranga"
                      style={{ height: "7vh" }}
                    />
                    <div
                      className={`${MainContentCss.centered} ${MainContentCss.white} ${MainContentCss.btn_pin}`}
                    >
                      DIGITAL TIRANGA
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="justify-content-md-center row">
            <div className={`${MainContentCss.selfi_counter} col`}>
              <h3 className={MainContentCss.total_selfi}>102393166</h3>
              <p
                className={`${MainContentCss.globe_text} ${MainContentCss.text_nowrap} ${MainContentCss.py_2}`}
              >
                SELFIES SO FAR
              </p>
            </div>
          </div>
          <div className="row">
            <h3
              className={`${MainContentCss.user_text_q} ${
                MainContentCss.text_center
              } ${MainContentCss.user_bold} ${MainContentCss.py - 3}`}
            >
              Get featured in Digital Tiranga Art by uploading a selfie with a
              flag.
            </h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainContent;
