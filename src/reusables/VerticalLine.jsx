import React from "react";
import { Col } from "react-bootstrap";
import ComponentCss from "./MainContentCss.module.css";

const VerticalLine = () => {
  return (
    <>
      <Col lg={1} className="d-none d-lg-block">
        <div className={`${ComponentCss.vertical_line}`}></div>
      </Col>
    </>
  );
};

export default VerticalLine;
