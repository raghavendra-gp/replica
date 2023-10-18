import React from "react";
import { Container } from "react-bootstrap";

const HorizontalLine = () => {
  return (
    <>
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
    </>
  );
};

export default HorizontalLine;
