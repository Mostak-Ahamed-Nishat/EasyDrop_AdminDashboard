import { useState } from "react";
import { CircleX } from 'lucide-react';
import { FileUploader } from "react-drag-drop-files";
import jpgIcon from '../assets/Icon/jpgIcon.png';
import pngIcon from '../assets/Icon/png.png';
import uploadIcon from '../assets/Icon/upload.png';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch"


const categories = [
    { value: "women_clothing", label: "Women Clothing" },
    { value: "gadgets_it_acce", label: "Gadgets & IT Accessories" },
    { value: "health_beauty", label: "Health & Beauty" },
    { value: "home_lifestyle", label: "Home & Lifestyle" },
    { value: "jewlries_acce", label: "Jewelries & Accessories" },
    { value: "kitchen_appaliances", label: "Kitchen Appliances" },
    { value: "ladies_shoes", label: "Ladies Shoes" },
    { value: "men_shoes", label: "Men's Shoes" },
    { value: "sunglass_collection", label: "Sunglass Collection" },
    { value: "gifts", label: "Gifts" },
    { value: "men_clothing", label: "Men Clothing" },
    { value: "men_acce", label: "Men Accessories" },
    { value: "consumer_electronics", label: "Consumer Electronics" },
    { value: "drop_shoulder_tshirt", label: "Drop Shoulder T-Shirt" },
    { value: "sports_kids", label: "Sports & Kids" },
];

const fileTypes = ["JPG", "PNG", "JPEG"];
const fileIcons = {
  JPG: jpgIcon,
  PNG: pngIcon,
  JPEG: jpgIcon
};

const AddProduct = () => {
    const [toggleStates, setToggleStates] = useState({
        Red: false,
        Blue: false,
        Green: false,
      });
    
    const [files, setFiles] = useState([]);

    const [showVariants, setShowVariants] = useState(false);

    const [formData, setFormData] = useState({
        name: '', 
        category: '',
        stock: '',
        low_stock: '',
        buying_price: '',
        reselling_price: '',
        retail_price: '',
        suggested_price: '',
        description: '',
        external_product: false,
        featured_product: false,
        externalProduct: false,
        featuredProduct: false,

    })
    
      const handleToggle = (color) => {
        setToggleStates((prevState) => ({
          ...prevState,
          [color]: !prevState[color],
        }));
      };
  
 

    const toggleVariants = () => {
        setShowVariants(!showVariants);
    }
  

  const handleChange = (newFiles) => {
    setFiles([...files, ...newFiles]);
  };

  const getFileIcon = (fileName) => {
    const fileExtension = fileName.split('.').pop().toUpperCase();
    return fileIcons[fileExtension] || null;
    };

// input chages handaling---------
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [id]: value,
        }));
    };
// category select changes handaling---------
    const handleSelectChange = (value) => {
        setFormData((prevState) => ({
          ...prevState,
          category: value,
        }));
    };
    
    // handle switch chages--------
    const handleSwitchChange = (id, value) => {
        setFormData((prevState) => ({
          ...prevState,
          [id]: value,
        }));
    };
    //  submit product handaling------------
    const handleSubmitProductDetails = () => {
        const productData = {
          ...formData,
          files: files,
          variants: showVariants ? toggleStates : null,
        };
        console.log("Submitting product data:", productData);
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
      <>
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
            <div className="mt-20 mr-4 sm:mt-32">
            <p className="text-xs sm:text-lg">No files uploaded yet</p>
            </div>
        )}
        </div>

        </div>
                  {/* Input content here-------------- */}
              
                    <div className="grid sm:grid-cols-12 mt-8 gap-2 sm:gap-11 mr-10 sm:mr-0">
                        {[
                        { label: "Name", id: "name", placeholder: "Product name", type: "text" },
                        { label: "Category", id: "category", placeholder: "Select a category", type: "select" },
                        { label: "Stock", id: "stock", placeholder: "Number of stock", type: "number" },
                        { label: "Low Stock", id: "low_stock", placeholder: "Number of low stock", type: "number" },
                        { label: "Buying Price", id: "buying_price", placeholder: "Buying price", type: "number" },
                        { label: "Reselling Price", id: "reselling_price", placeholder: "Reselling price", type: "number" },
                        { label: "Retail Price", id: "retail_price", placeholder: "Retail price", type: "number" },
                        { label: "Suggested Price", id: "suggested_price", placeholder: "Suggested price", type: "number" },
                        { label: "Description", id: "description", placeholder: "product details", type: "description" }
                        ].map(({ label, id, placeholder, type }) => (
                        <div key={id} className={type === "description" ? "sm:col-span-12 w-full" : "sm:col-span-3 w-full max-w-[267px]"}>
                            <Label className="flex text-left ml-1 text-md sm:text-lg" htmlFor={id}>{label}</Label>
                            {type === "description" ? (
                                <>
                                    <Textarea
                                    id={id}
                                    placeholder="Type your product description here."
                                    className="sm:col-span-12 w-full"
                                    value={formData[id]}
                                    onChange={handleInputChange}
                                    required
                                    />
                                </>
                                ) : type === "select" ? (
                                <Select onValueChange={handleSelectChange}>
                                    <SelectTrigger className="w-[260px]">
                                    <SelectValue placeholder={placeholder} />
                                    </SelectTrigger>
                                    <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel className="text-gray-300">Category</SelectLabel>
                                        {categories.map((category) => (
                                        <SelectItem key={category.value} value={category.value}>
                                            {category.label}
                                        </SelectItem>
                                        ))}
                                    </SelectGroup>
                                    </SelectContent>
                                </Select>
                                ) : (
                                <Input
                                    className="text-md"
                                    type={type}
                                    id={id}
                                    placeholder={placeholder}
                                    value={formData[id]}
                                    onChange={handleInputChange}
                                    required
                                />
                                )}
                        </div>
                        ))}
                  </div>
                     
                  {/* ----Add Variant -Button with visible nonvisible items */}
                  <div className="flex mt-11 gap-2 sm:gap-10">
                        <div className="">
                                <button
                                    onClick={toggleVariants}
                                    className="text-xs sm:text-sm font-semibold py-1 sm:py-2 bg-[#139FAD] border shadow rounded-lg px-2 sm:px-3   text-white"
                                >
                                Add Variant
                                </button>
                      </div>
                      <div className="flex items-center space-x-2">
                          {[
                              { label: "External Product", id: "externalProduct", state: formData.externalProduct },
                              { label: "Featured Product", id: "featuredProduct", state: formData.featuredProduct }
                            ].map(({ label, id, state }) => (
                                 <div key={id} className="flex items-center space-x-2">
                                    <Switch
                                        id={id}
                                    
                                        checked={state}
                                        onCheckedChange={(value) => handleSwitchChange(id, value)}
                                    />
                                    <Label className="text-xs sm:text-sm" htmlFor={id}>{label}</Label>
                                </div>
                            ))}
                      </div>
                        
                  </div>
                   {/* ------Toggle items----- */}
                        <div className="space-y-4 mt-8">
                                    {showVariants && (
                                        <div className="flex flex-col space-y-4">
                                        {["White","Black", "Blue", "Green", 'yellow'].map((color) => (
                                            <div key={color} className="flex items-center justify-between space-x-4">
                                            {/* Color Label */}
                                                <div className="flex items-center space-x-2 shadow-2xl rounded bg-gray-100 p-1">
                                                <span className="w-4 h-4 rounded-full"
                                                    style={{
                                                        backgroundColor:
                                                            color.toLowerCase(),
                                                    }}
                                                ></span>
                                                {/* <label className="text-xs sm:text-md font-medium">{color}</label> */}
                                            </div>

                                            {/* Toggle */}
                                            <div className="flex items-center space-x-4">
                                                <div
                                                onClick={() => handleToggle(color)}
                                                className="relative w-20 sm:w-16 h-6 bg-[#e2e8f0] rounded-md p-1 cursor-pointer flex items-center"
                                                >
                                                <div
                                                    className={`absolute w-6 h-4 bg-white rounded-md shadow-md flex items-center justify-center font-bold text-white transition-transform duration-300 transform ${
                                                    toggleStates[color] ? 'translate-x-4 sm:translate-x-8 bg-green-500' : 'translate-x-0 bg-red-500'
                                                    }`}
                                                ></div>
                                                </div>
                                                <span className={`font-normal sm:font-semibold ${toggleStates[color] ? 'text-green-500' : 'text-gray-500'}`}>
                                                {toggleStates[color] ? <button className="border shadow rounded px-1 sm:px-2 py-.1 sm:py-.4 bg-green-500 text-white">Setected</button> : <button className="border shadow rounded px-1 sm:px-2 py-.1 sm:py-.4 bg-[#e2e8f0] text-white">Setected</button>}
                                                    </span>
                                                    <div className="border shadow-sm rounded px-1 py-.5">
                                                        <span className="text-xs sm:text-lg">TODO</span>
                                                    </div>
                                                    <div className="border shadow-sm rounded px-1 py-.5">
                                                        <span className="text-xs sm:text-lg">TODO</span>
                                                    </div>
                                            </div>
                                            </div>
                                        ))}
                                        </div>
                                    )}
                        </div>
                        <div className="mt-6 flex gap-4">
                            <button
                                onClick={() => setFiles([])}
                                className="bg-[#F1F1F1] hover:bg-gray-200 text-gray-500 text-sm px-3 py-2 shadow-2xl rounded-lg"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmitProductDetails}
                                className="text-sm px-3 py-2 shadow-2xl text-white rounded-lg bg-[#522F8F]"
                            >
                                Submit
                            </button>
                        </div>
              </div>
              
          </div>
          
            
      </>
  );
};

export default AddProduct;
