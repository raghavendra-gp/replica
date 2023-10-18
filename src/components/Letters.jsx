import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { storage } from "./Firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { Button, CircularProgress } from "@mui/material";

const Letters = () => {
  const [imageURLs, setImageURLs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // Step 1

  useEffect(() => {
    const storageRef = ref(storage, "images/");
    listAll(storageRef)
      .then((res) => {
        const promises = res.items.map((item) => getDownloadURL(item));
        return Promise.all(promises);
      })
      .then((urls) => {
        setImageURLs(urls);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
        setLoading(false);
      });
  }, []);

  const handleBackToHome = () => {
    window.history.back();
  };

  const filteredImages = imageURLs.filter((url) => {
    // Step 3
    const fileNameWithExtension = url.substring(url.lastIndexOf("/") + 1);
    const fileName = fileNameWithExtension.substring(
      0,
      fileNameWithExtension.indexOf(".")
    );
    return fileName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={6} lg={4} className="mb-2">
            {" "}
            {/* Added className */}
            <Button
              variant="contained"
              onClick={handleBackToHome}
              className="d-flex align-items-center justify-content-center"
              style={{ backgroundColor: "#06038D", width: "100%" }}
            >
              <i className="fa-solid fa-arrow-left fa-shake fa-lg me-2"></i>
              Back To Home
            </Button>
          </Col>
          <Col md={6} lg={4}>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="outline-secondary">Search</Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>

      <Container className="py-5">
        {loading ? (
          <div style={{ textAlign: "center" }}>
            <CircularProgress />
          </div>
        ) : (
          <Row xs={1} md={2} lg={3} className="g-4">
            {filteredImages.length > 0 ? (
              filteredImages.map((url, index) => {
                const fileNameWithExtension = url.substring(
                  url.lastIndexOf("/") + 1
                );
                const fileName = fileNameWithExtension.substring(
                  0,
                  fileNameWithExtension.indexOf(".")
                );
                return (
                  <Col key={index}>
                    <Card
                      style={{
                        height: "300px",
                        borderRadius: "20px",
                        overflow: "hidden",
                      }}
                    >
                      <div style={{ height: "200px", overflow: "hidden" }}>
                        <Card.Img
                          variant="top"
                          src={url}
                          style={{ width: "100%", objectFit: "cover" }}
                        />
                      </div>
                      <Card.Body>
                        <Card.Title>{fileName}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            ) : (
              <div style={{ textAlign: "center" }}>Image not found</div> // step 4
            )}
          </Row>
        )}
      </Container>
    </>
  );
};

export default Letters;
