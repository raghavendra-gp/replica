import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { storage } from "./Firebase";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import toast, { Toaster } from "react-hot-toast";
import FileCss from "./MainContentCss.module.css";

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
      notify("Please select a file to upload!", "error");
    }
  };

  return (
    <div>
      <Card className={`${FileCss.card_display}`}>
        <Card.Body>
          <Card.Title>Upload Image</Card.Title>
          <Card.Text>Choose an image to upload</Card.Text>
          <input
            type="file"
            id="chooseFile"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleSelectedFile}
          />
          <Button
            onClick={() => document.getElementById("chooseFile").click()}
            style={{ margin: "2vh" }}
          >
            Choose Image
          </Button>
          <Button onClick={handleFileUpload} style={{ margin: "2vh" }}>
            Upload Image
          </Button>
          {selectedFile && <div>Selected Image: {selectedFile.name}</div>}
        </Card.Body>
      </Card>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default FileUpload;
