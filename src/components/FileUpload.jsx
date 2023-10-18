import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { storage } from "./Firebase";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import toast, { Toaster } from "react-hot-toast";
import MainCss from "../css/MainCss.module.css";
import { Button } from "@mui/material";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageList, setimageList] = useState([]);

  const handleSelectedFile = (event) => {
    let file = event.target.files[0];
    setSelectedFile(file);
  };

  const notify = (msg, type) => {
    type === "success" ? toast.success(msg) : toast.error(msg);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const imageRef = ref(storage, `images/${selectedFile.name + v4()}`);
      uploadBytes(imageRef, selectedFile)
        .then((snapshot) => getDownloadURL(snapshot.ref))
        .then((url) => {
          setimageList((prev) => [...prev, url]);
          notify("Image uploaded", "success");
          setSelectedFile(null);
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
          notify("Error uploading file. Please try again.", "error");
        });
    } else {
      notify(
        <div>
          Please select a file to upload! &nbsp;
          <i class="fa-solid fa-envelope fa-shake fa-lg"></i>
        </div>,
        "error"
      );
    }
  };

  return (
    <div>
      <Card className={`${MainCss.card_display}`}>
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title style={{ color: "#06038D" }}>Upload Image</Card.Title>
          <Card.Text style={{ color: "#06038D" }}>
            Choose an image to upload
          </Card.Text>
          <input
            type="file"
            id="chooseFile"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleSelectedFile}
          />
          <Button
            variant="contained"
            onClick={() => document.getElementById("chooseFile").click()}
            style={{ margin: "2vh", backgroundColor: "#06038D" }}
          >
            Choose Image &nbsp;
            <i class="fa-solid fa-envelope fa-bounce fa-lg"></i>
          </Button>
          <Button
            variant="contained"
            onClick={handleFileUpload}
            style={{ margin: "2vh", backgroundColor: "#06038D" }}
          >
            Upload Image &nbsp;
            <i class="fa-solid fa-truck fa-beat fa-lg"></i>
          </Button>
          {selectedFile && <div>Selected Image: {selectedFile.name}</div>}
        </Card.Body>
      </Card>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default FileUpload;
