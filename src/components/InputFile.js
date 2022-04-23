import React, { useRef } from "react";

const InputFile = ({ label, error, file, setFile }) => {
  const inputFile = useRef(null);
  let inputFileClasses = "input-file";
  if (error) {
    inputFileClasses += " error-input-file";
    label = error;
  }
  let placeholder = "Upload your photo";
  if (file) {
    placeholder = file.name;
  }

  const handleFileSelected = (e) => {
    const files = Array.from(e.target.files);
    setFile(files[0]);
  };

  return (
    <div className={inputFileClasses}>
      <input
        onChange={handleFileSelected}
        ref={inputFile}
        type="file"
        placeholder="something"
        hidden
      />
      <div className="decorator">
        <div
          onClick={() => {
            inputFile.current.click();
          }}
          className="decorator-left"
        >
          Upload
        </div>
        <div
          onClick={() => inputFile.current.click()}
          className="decorator-right"
        >
          {placeholder}
        </div>
      </div>
      {label && <label>{label}</label>}
    </div>
  );
};

export default InputFile;
