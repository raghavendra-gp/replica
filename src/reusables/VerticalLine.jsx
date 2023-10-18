import React from "react";
import { Col } from "react-bootstrap";
import MainCss from "../css/MainCss.module.css";

const VerticalLine = () => {
  return (
    <>
      <Col lg={1} className="d-none d-lg-block">
        <div className={`${MainCss.vertical_line}`}></div>
      </Col>
    </>
  );
};

export default VerticalLine;
