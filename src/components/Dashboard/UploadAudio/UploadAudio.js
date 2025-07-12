import React, { useState } from 'react';

function UploadAudio() {
  const [selectedFile, setSelectedFile] = useState(null);

  // Function to handle file selection
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Function to handle file upload
  const handleFileUpload = () => {
    // Add your file upload logic here
    if (selectedFile) {
      console.log("Uploading file:", selectedFile.name);
      // You can use selectedFile to upload to your server or perform other operations
    } else {
      console.log("No file selected.");
    }
  };

  return (
    <div className="upload-audio">
      <h3>Upload Audio</h3>
      <input
        type="file"
        accept="audio/*"
        onChange={handleFileSelect}
      />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
}

export default UploadAudio;
