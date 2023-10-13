import React from "react";
import HeadBar from "./HeadBar";
import { Card, Row, Col, Container } from "react-bootstrap";

const Selfi = () => {
  return (
    <>
      <HeadBar />
      <div>
        <Container>
          <Row>
            <Col md={4}>
              <Card style={{ width: "18rem", height: "12rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>name</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/1484806/pexels-photo-1484806.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>name</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>name</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>name</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>name</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>name</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Selfi;
