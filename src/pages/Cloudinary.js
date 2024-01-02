// src/pages/Cloudinary.js
import { useState } from "react";
import CloudinaryUploadWidget from "../components/CloudinaryUploadWidget";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import cloudinaryConfig from "../imgStore";

export default function CloudinaryView() {

  // This publicId can be used to store the URL of image
  const [publicId, setPublicId] = useState("");

  // Replace with your own cloud name
  const cloudName = cloudinaryConfig.cloudName;

  // Replace with your own upload preset
  const uploadPreset = cloudinaryConfig.uploadPreset

  const [uwConfig] = useState({
    cloudName,
    uploadPreset
  });

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName
    }
  });

  const myImage = cld.image(publicId);

  return (
    <div className="App">
      <h3>Cloudinary Upload Widget Example</h3>
      <CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={setPublicId} />
      <h3>Show Cloudinary Uploaded Widget Example</h3>
      <div style={{ width: "800px" }}>
        <AdvancedImage
          style={{ width: "100px" }}
          cldImg={myImage}
          plugins={[responsive(), placeholder()]}
        />
      </div>
    </div>
  );
}
