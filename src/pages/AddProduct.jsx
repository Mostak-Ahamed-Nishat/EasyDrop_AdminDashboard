import { useState } from "react";
import { CircleX } from 'lucide-react';
import { FileUploader } from "react-drag-drop-files";
import jpgIcon from '../assets/Icon/jpgIcon.png';
import pngIcon from '../assets/Icon/png.png';
import uploadIcon from '../assets/Icon/upload.png';

const fileTypes = ["JPG", "PNG"];
const fileIcons = {
  JPG: jpgIcon,
  PNG: pngIcon,
};

const AddProduct = () => {
  const [files, setFiles] = useState([]);

  const handleChange = (newFiles) => {
    setFiles([...files, ...newFiles]);
  };

  const getFileIcon = (fileName) => {
    const fileExtension = fileName.split('.').pop().toUpperCase();
    return fileIcons[fileExtension] || null;
    };
    const handleTypeError = (error) => {
        console.log("Type error:", error);
    };

    const handleSizeError = (file) => {
        console.log("Size error:", file);
    };

    const handleDrop = (file) => {
        console.log("Dropped file:", file);
    };

    const handleSelect = (file) => {
        console.log("Selected file:", file);
        };

  const handleDelete = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const handleSubmit = () => {
    if (files.length > 0) {
      console.log("Submitting files:", files);
    }
  };

  return (
    <div className="p-3 grid sm:grid-cols-12 gap-4">
      <div className="sm:col-span-12 rounded-lg p-4 shadow-md w-full border-gray-300 mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="font-bold sm:font-semibold text-md sm:text-3xl mb-1">Add Product</h1>
        <p className="text-center text-sm font-semibold mb-4">File upload description</p>
        
        <div className="flex w-full justify-between items-start">
          {/* Drag & Drop Area */}
          <FileUploader
            multiple={true}
            handleChange={handleChange}
            name="myFiles"
            label="Upload or drop files right here"
            required={true}
            disabled={false}
            classes="w-[60%] flex flex-col items-center justify-center border border-dashed border-[#139FAD]"
            types={fileTypes}
            maxSize={20} // 20MB
            onTypeError={handleTypeError}
            onSizeError={handleSizeError}
            onDrop={handleDrop}
            onSelect={handleSelect}
            dropMessageStyle={{ backgroundColor: 'red' }}
          >
            {/* Custom children to replace default design */}
            <div className="flex flex-col items-center justify-center min-h-[200px] sm:min-h-[300px]">
              <img src={uploadIcon} alt="Upload Icon" />
              <p className="text-sm sm:text-md font-bold">Drag & drop files here, or click to select files</p>
              <p className="text-xs sm:text-sm font-light">Allowed file types: {fileTypes.join(", ")}</p>
            </div>
          </FileUploader>

          {/* Display Uploaded Files */}
          <div className="w-[35%] flex flex-wrap gap-3">
  {files.length > 0 ? (
    files.map((file, index) => (
      <div key={index} className="relative border border-dashed rounded-md p-2 bg-white shadow-md">
        {file.type.startsWith("image/") ? (
          <img src={URL.createObjectURL(file)} alt="Selected" className="w-20 h-14 object-cover" />
        ) : (
          <img src={getFileIcon(file.name)} alt="File Icon" className="w-10 h-10" />
        )}
        <button
          onClick={() => handleDelete(index)}
          className="absolute top-0 right-0 text-red-500 ml-3 hover:text-red-700"
        >
          <CircleX size={24} />
        </button>
      </div>
            ))
        ) : (
            <div className="mt-20 sm:mt-32">
            <p className="text-xs sm:text-lg">No files uploaded yet</p>
            </div>
        )}
        </div>

        </div>

        <div className="mt-6 flex gap-4">
          <button
            onClick={() => setFiles([])}
            className="bg-[#F1F1F1] hover:bg-gray-200 text-gray-500 text-sm px-3 py-2 shadow-2xl rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="text-sm px-3 py-2 shadow-2xl text-white rounded-lg bg-[#522F8F]"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
