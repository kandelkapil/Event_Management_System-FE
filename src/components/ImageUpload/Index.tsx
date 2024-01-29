import React, { useState, useRef } from "react";
import {
  Wrapper,
  AvatarOverlay,
  FileInput,
  ErrorMessage,
  AvatarImage,
} from "./ImageUpload.styled"; // Import your styles

const FileUploadComponent = ({
  onFileSelect,
  image,
}: {
  onFileSelect: (file: File) => void;
  image: undefined | string;
}) => {
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef<any>(null);
  const acceptedTypes = ["image/jpeg", "image/png", "image/jpg"];

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (acceptedTypes.includes(file.type)) {
        setError("");
        onFileSelect(file);
        setSelectedImage(URL.createObjectURL(file));
      } else {
        setError("Please select a JPEG, PNG, or JPG file.");
      }
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Wrapper>
      <AvatarOverlay onClick={handleAvatarClick}>
        {selectedImage || image ? (
          <img
            src={selectedImage || image}
            alt="image"
            style={{
              width: "100%",
              height: "100%",
              fill: "#d3d3d3",
              objectFit: "cover",
              cursor: "pointer",
              userSelect: "none",
              pointerEvents: "none",
            }}
          />
        ) : (
          <AvatarImage style={error ? { fill: "#ff7f7f" } : {}} />
        )}
      </AvatarOverlay>
      <FileInput
        type="file"
        onChange={handleFileChange}
        ref={fileInputRef}
        accept={acceptedTypes?.join(",")}
        name="image"
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  );
};

export default FileUploadComponent;
