import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { storage } from "./Firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { Button, CircularProgress } from "@mui/material";
import HorizontalLine from "../reusables/HorizontalLine";
import Modal from "@mui/material/Modal";
import MainCss from "../css/MainCss.module.css";

const Letters = () => {
  const [imageURLs, setImageURLs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [open, setOpen] = useState(false);

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

  const handleImageClick = (url) => {
    setSelectedImage(url);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const filteredImages = imageURLs.filter((url) => {
    const decodedUrl = decodeURIComponent(url);
    const fileNameWithExtension = decodedUrl.substring(
      decodedUrl.lastIndexOf("/") + 1
    );
    const fileName = fileNameWithExtension
      .replace(/^.*[\\/]/, "")
      .split(".")[0];
    return fileName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col xs={12} md={8} className="text-center">
            <h2 className={`${MainCss.title}`}>Letters Of Compassionate</h2>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col
            xs="12"
            lg="2"
            className="mb-3 mb-lg-0 text-center  d-none d-lg-block"
          >
            <Button
              variant="contained"
              onClick={handleBackToHome}
              className="d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#CD6688",
                width: "100%",
                height: "auto",
              }}
            >
              <i className="fa-solid fa-arrow-left fa-shake fa-lg me-2"></i>
              Back
            </Button>
          </Col>
          <Col xs="12" lg="8" className="mb-3 mb-lg-0">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  borderTopLeftRadius: "10px",
                }}
              />
            </InputGroup>
          </Col>
        </Row>
      </Container>

      <HorizontalLine />
      <Container className="py-5">
        {loading ? (
          <div style={{ textAlign: "center" }}>
            <CircularProgress />
          </div>
        ) : (
          <Row xs={1} md={2} lg={3} className="g-4">
            {filteredImages.length > 0 ? (
              filteredImages.map((url, index) => {
                const decodedUrl = decodeURIComponent(url);
                const fileNameWithExtension = decodedUrl.substring(
                  decodedUrl.lastIndexOf("/") + 1
                );
                const fileName = fileNameWithExtension
                  .replace(/^.*[\\/]/, "")
                  .split(".")[0];
                return (
                  <Col key={index}>
                    <Card
                      style={{
                        height: "250px",
                        borderRadius: "20px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{ height: "200px", overflow: "hidden" }}
                        onClick={() => handleImageClick(url)}
                      >
                        <Card.Img
                          variant="top"
                          src={url}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <Card.Body
                        style={{
                          backgroundColor: "#FF9B9B",
                          height: "2rem",
                          textAlign: "center",
                        }}
                      >
                        <Card.Title>{fileName}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            ) : (
              <Container className="d-flex justify-content-center align-items-center ">
                <div>
                  <div className={`${MainCss.title_para} + text-center`}>
                    Letters not found😢
                  </div>
                </div>
              </Container>
            )}
          </Row>
        )}
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
          backdropFilter: "blur(5px)",
        }}
      >
        <img
          src={selectedImage}
          alt="Selected"
          style={{ width: "90vw", maxWidth: "800px" }}
        />
      </Modal>
    </>
  );
};

export default Letters;
