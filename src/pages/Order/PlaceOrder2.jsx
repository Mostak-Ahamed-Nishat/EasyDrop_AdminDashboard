// import { useState } from 'react';
// import { 
//   Menubar, 
//   MenubarContent, 
//   MenubarItem, 
//   MenubarMenu, 
//   MenubarSeparator, 
//   MenubarShortcut, 
//   MenubarTrigger 
// } from "@/components/ui/menubar";
// import { 
//   Avatar, 
//   AvatarFallback, 
//   AvatarImage 
// } from "@/components/ui/avatar";
// import { IoNotifications } from "react-icons/io5";
// import { IoIosArrowDown } from "react-icons/io";
// import { Input } from "@/components/ui/input";
// import { 
//   Select, 
//   SelectContent, 
//   SelectGroup, 
//   SelectItem, 
//   SelectTrigger, 
//   SelectValue 
// } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Minus, Plus, Search, Trash2 } from "lucide-react";

// // Sample product data
//         const productsData = [
//                  { id: 1, name: 'T-Shirts', price: 250, img: 'https://static.vecteezy.com/system/resources/thumbnails/028/252/048/small_2x/men-s-t-shirt-realistic-mockup-in-different-colors-ai-generated-photo.jpg' },
//                 { id: 2, name: 'Pants', price: 550, img: 'https://textilevaluechain.in/wp-content/uploads/2020/06/denim.jpg' },
//                 { id: 3, name: 'Women Clothes', price: 850, img: 'https://i.guim.co.uk/img/media/588fa5e41e3d7df36a0a1e9552137e18a1e0dee2/0_0_3024_4032/master/3024.jpg?width=445&dpr=1&s=none' },
//                 { id: 4, name: 'Accessories', price: 630, img: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtczczLXBhaS0xNjMtbW9ja3VwLmpwZw.jpg' },
//                 { id: 5, name: 'Shoes', price: 1250, img: 'https://img.freepik.com/premium-photo/colorful-sport-shoes-green_151013-4554.jpg' },
// ];

// function PlaceOrder2() {


//     const [searchTerm, setSearchTerm] = useState('');
//     const [filteredProducts, setFilteredProducts] = useState([]);
//     const [quantities, setQuantities] = useState({});
//     const [selectedVariants, setSelectedVariants] = useState({});
//     const [additionalVariants, setAdditionalVariants] = useState({}); 




// //maintaining search
//     const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);

//     if (value.trim() === '') {
//       setFilteredProducts([]);
//     } else {
//       const filtered = productsData.filter(product =>
//         product.name.toLowerCase().includes(value.toLowerCase())
//       );
//       setFilteredProducts(filtered);
//     }
//   };

//   //changing products quantity and others
//   const handleQuantityChange = (productId, delta) => {
//     setQuantities(prevQuantities => {
//       const newQuantities = { ...prevQuantities };
//       newQuantities[productId] = (newQuantities[productId] || 0) + delta;
//       if (newQuantities[productId] <1) newQuantities[productId] = 1; // Prevent negative quantity
//       return newQuantities;
//     });
//   };
  

// //remove the all edit of products
// const handleRemove = (productId) => {
//     setFilteredProducts(filteredProducts.filter(product => product.id !== productId));
//     setQuantities(prevQuantities => {
//       const newQuantities = { ...prevQuantities };
//       delete newQuantities[productId];
//       return newQuantities;
//     });
//   };


 


// const handleReset = (productId) => {
 
//     // Reset selected variant to null or an empty string
//     setSelectedVariants(prevVariants => {
//         const newVariants = { ...prevVariants };
//         newVariants[productId] = ''; // Reset variant to empty or initial value
//         return newVariants;
//       });
//     };

//     const handleVariantChange = (productId, variant) => {
//         setSelectedVariants(prevVariants => ({
//           ...prevVariants,
//           [productId]: variant,
//         }));
//       };
    


//       const handleAddMore = (productId) => {
//         setAdditionalVariants(prevAdditional => {
//           const newAdditional = { ...prevAdditional };
//           if (!newAdditional[productId]) newAdditional[productId] = [];
//           newAdditional[productId].push({ variant: '', quantity: 1 }); // Add a new empty variant
//           return newAdditional;
//         });
//       };


//       const handleAdditionalQuantityChange = (productId, index, delta) => {
//         setAdditionalVariants(prevAdditional => {
//           const newAdditional = { ...prevAdditional };
//           const currentAdditional = newAdditional[productId][index];
//           currentAdditional.quantity += delta;
//           if (currentAdditional.quantity < 1) currentAdditional.quantity = 1;
//           return newAdditional;
//         });
//       };



//   return (
//     <section className='p-3'>
//       <div className="flex justify-center sm:justify-end">
//         {/* Header Avatar */}
//         <div className="flex items-center gap-2 justify-end p-4 lg:p-5">
//           <div className="flex items-center gap-28 md:gap-5 sm:flex-row-reverse">
//             <div className="flex gap-3">
//               <div className="flex sm:flex-row-reverse gap-3 items-center">
//                 <Avatar>
//                   <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
//                   <AvatarFallback>CN</AvatarFallback>
//                 </Avatar>
//                 <div>
//                   <p className="font-bold text-xl">Shakil</p>
//                   <p className="text-[#8F8F8F] font-semibold">User Id: TODO</p>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <IoNotifications />
//             </div>
//           </div>

//           <div className="hidden sm:block">
//             <Menubar>
//               <MenubarMenu>
//                 <MenubarTrigger><IoIosArrowDown /></MenubarTrigger>
//                 <MenubarContent className='mt-5'>
//                   <MenubarItem>
//                     Settings <MenubarShortcut>⌘T</MenubarShortcut>
//                   </MenubarItem>
//                   <MenubarSeparator />
//                   <MenubarItem>Print</MenubarItem>
//                   <MenubarSeparator />
//                   <MenubarItem>Share</MenubarItem>
//                   <MenubarSeparator />
//                   <MenubarItem>Logout</MenubarItem>
//                 </MenubarContent>
//               </MenubarMenu>
//             </Menubar>
//           </div>
//         </div>
//       </div>

//       <Tabs defaultValue="account" className="w-full">
//         <TabsList>
//           <TabsTrigger value="EasyDrop">EasyDrop</TabsTrigger>
//           <TabsTrigger value="Sobkini">Sobkini</TabsTrigger>
//           <TabsTrigger value="MHRINT">MHR International</TabsTrigger>
//           <TabsTrigger value="RoyalIMP">Royal Imports</TabsTrigger>
//         </TabsList>
        
//         <TabsContent value="EasyDrop">Make changes to your account here.</TabsContent>

//         <TabsContent value="Sobkini">



//  {/* Search input section */}
      

// <div className="pt-10">
//       <div className="flex items-center mb-4">
//         <div className="relative w-1/3">
//           <Input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearch}
//             placeholder="Search products..."
//             className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <div className="absolute left-2 top-2.5">
//             <Search className="w-5 h-5 text-gray-500" />
//           </div>
//         </div>
//       </div>
//       {searchTerm.trim() !== '' && filteredProducts.length > 0 && (
//         <div className="border rounded-md p-2 ml-10 w-2/4 bg-gray-100 cursor-pointer">
//           <div className="flex flex-col gap-4">
//             {filteredProducts.slice(0, 3).map(product => {
//               const quantity = quantities[product.id] || 1;
//               const selectedVariant = selectedVariants[product.id] || '';
//               const additionalForProduct = additionalVariants[product.id] || [];


//               // const totalPrice = quantity * product.price;
//               return (
//                 <div key={product.id} className="p-2 border-b-2 hover:bg-gray-200">
//                   <div className="flex items-start gap-5">
//                     <img src={product.img} alt={product.name} className="w-14 h-14 rounded-md object-cover mb-2" />
//                     <div>
//                       <h3 className="text-lg font-semibold">{product.name}</h3>
//                       <p className="text-gray-600 flex items-center justify-between font-semibold">Price: {product.price}Tk  <span>= {quantity * product.price} Tk</span></p>
//                       <div className="flex items-center pt-3 quantity_par">
//                         <h2 className='font-semibold'>Qty:</h2>
//                         <div className='flex items-center gap-2 ml-2 mr-10'>
//                            <Minus size={20} onClick={() => handleQuantityChange(product.id, -1)} className='bg-[#D9D9D9] cursor-pointer' />
                            
//                           <span className='font-semibold'>{quantity}</span>
//                           <Plus size={20} onClick={() => handleQuantityChange(product.id, 1)} className='bg-[#D9D9D9] cursor-pointer' />
//                         </div>
//                         {/* <Button className="ms-2  bg-[#139FAD] hover:bg-[#139FAD] px-2 py-1">Varitent</Button> */}
//                         <Select value={selectedVariant}
//                           onValueChange={(variant) => handleVariantChange(product.id, variant)}
                                    
//                                     >
//                                  <SelectTrigger className="w-[100px]">
//                                   <SelectValue placeholder={selectedVariant ||"Variants"   } />
//                                 </SelectTrigger>
//                                      <SelectContent>
//                                          <SelectGroup>
//                                             <SelectItem value="apple">Gray: 20</SelectItem>
//                                             <SelectItem value="banana">Blue: 20</SelectItem>
//                                              <SelectItem value="blueberry">Red: 31</SelectItem>
          
//                                         </SelectGroup>
//                                     </SelectContent>
//                         </Select>

//                         <Button 
//                       onClick={() => handleAddMore(product.id)}
//                         className="ms-2  bg-[#139FAD] hover:bg-[#139FAD]">Add More</Button>

//                         <Button 
//                         onClick={() => handleReset(product.id)}
//                         className="ms-2  bg-[#ecd5d5] text-[#D61D1D] hover:bg-[#ecd5d5] px-2 py-1">
//                           <Trash2 />
//                         </Button>
//                         <Button 
//                         className="ms-2 bg-[#139FAD] hover:bg-[#139FAD] px-2 py-1"
//                         onClick={() => handleRemove(product.id)}
//                         >Remove</Button>
//                       </div>

// {/* after click on add more button */}

//                      {additionalForProduct.map((additional, index) => (
                      
//   <div key={index} className="flex items-center pt-3 quantity_part">
//     <div className='flex items-center '>
//       <h1 className='font-semibold'>Qty:</h1>
//       <div className="flex items-center gap-2 ml-2 mr-10">
//         <Minus onClick={() => handleAdditionalQuantityChange(product.id, index, -1)} size={20} className='bg-[#D9D9D9] cursor-pointer' />
//         <span className='font-semibold'>{additional.quantity}</span>
//         <Plus onClick={() => handleAdditionalQuantityChange(product.id, index, 1)} size={20} className='bg-[#D9D9D9] cursor-pointer' />
//       </div>
//     </div>
//     <Select value={additional.variant}>
//       <SelectTrigger className="w-[100px]">
//         <SelectValue placeholder="Variants" />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectGroup>
//           <SelectItem value="Gray">Gray: 20</SelectItem>
//           <SelectItem value="Blue">Blue: 30</SelectItem>
//         </SelectGroup>
//       </SelectContent>
//     </Select>
//     <button className='ml-4'><Trash2 size={18} /></button>
//     <button className='ml-4' onClick={() => handleReset(product.id)}>Reset</button>
//   </div>
// ))}


//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//     </div>
       

//           {/* Form */}
//           <form className="grid grid-cols-3 gap-6 p-5">
//             {/* Customer Name */}
//             <div className="flex flex-col">
//               <label htmlFor="customerName" className="mb-2 font-semibold">Customer Name</label>
//               <Input
//                 type="text"
//                 id="customerName"
//                 placeholder="Enter customer name"
//               />
//             </div>

//             {/* Customer Phone Number */}
//             <div className="flex flex-col">
//               <label htmlFor="customerPhone" className="mb-2 font-semibold">Customer Phone Number</label>
//               <Input
//                 type="text"
//                 id="customerPhone"
//                 placeholder="Enter phone number"
//               />
//             </div>

//             {/* District */}
//             <div className="flex flex-col">
//               <label htmlFor="district" className="mb-2 font-semibold">District</label>
//               <Select>
//                 <SelectTrigger className="w-full">
//                   <SelectValue placeholder="Select District" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="Jamalpur">Jamalpur</SelectItem>
//                   <SelectItem value="Dhaka">Dhaka</SelectItem>
//                   <SelectItem value="Netrokona">Netrokona</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>

//             {/* City */}
//             <div className="flex flex-col">
//               <label htmlFor="city" className="mb-2 font-semibold">City</label>
//               <Input
//                 type="text"
//                 id="city"
//                 placeholder="Enter city"
//               />
//             </div>

//             {/* Street Address */}
//             <div className="flex flex-col">
//               <label htmlFor="streetAddress" className="mb-2 font-semibold">Street Address</label>
//               <Input
//                 type="text"
//                 id="streetAddress"
//                 placeholder="Enter street address"
//               />
//             </div>

//             {/* Delivery Type */}
//             <div className="flex flex-col">
//               <label htmlFor="deliveryType" className="mb-2">Delivery Type</label>
//               <Select>
//                 <SelectTrigger className="w-full">
//                   <SelectValue placeholder="Select Delivery Type" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="inside-dhaka">Inside Dhaka</SelectItem>
//                   <SelectItem value="outside-dhaka">Outside Dhaka</SelectItem>
//                   <SelectItem value="express">Express Delivery</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>

//             {/* Note and Generated Text */}
//             <div className="col-span-2 grid grid-cols-2 gap-6">
//               {/* Note */}
//               <div className="flex flex-col">
//                 <label htmlFor="note" className="mb-2 font-semibold">Note</label>
//                 <Textarea
//                   id="note"
//                   placeholder="Enter notes"
//                 />
//               </div>

//               {/* Generated Text */}
//               <div className="flex flex-col">
//                 <label htmlFor="generatedText" className="mb-2 font-semibold">Generated Text</label>
//                 <Textarea
//                   id="generatedText"
//                   placeholder="Generated text will appear here"
//                 />
//               </div>
//             </div>
//           </form>

//           {/* Buttons */}
//           <div className="flex justify-end gap-5 px-3 pt-20">
//             <Button variant="outline" className="px-10 text-gray-600 hover:text-gray-600">Cancel</Button>
//             <Button variant="outline" className="px-5 bg-[#139FAD] hover:bg-[#139FAD] hover:text-white text-white">Place Order</Button>
//           </div>
//         </TabsContent>
        
//         <TabsContent value="MHRINT">





//         </TabsContent>
//         <TabsContent value="RoyalIMP">Change your password here.</TabsContent>
//       </Tabs>
//     </section>
//   );
// }

// export default PlaceOrder2;



import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";
import { Minus, Plus, Search, Trash2 } from "lucide-react"
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoNotifications } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const productsData = [
  { id: 1, name: 'T-Shirts', price: 250, img: 'https://static.vecteezy.com/system/resources/thumbnails/028/252/048/small_2x/men-s-t-shirt-realistic-mockup-in-different-colors-ai-generated-photo.jpg' },
  { id: 2, name: 'Pants', price: 550, img: 'https://textilevaluechain.in/wp-content/uploads/2020/06/denim.jpg' },
  { id: 3, name: 'Women Clothes', price: 850, img: 'https://i.guim.co.uk/img/media/588fa5e41e3d7df36a0a1e9552137e18a1e0dee2/0_0_3024_4032/master/3024.jpg?width=445&dpr=1&s=none' },
  { id: 4, name: 'Accessories', price: 630, img: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtczczLXBhaS0xNjMtbW9ja3VwLmpwZw.jpg' },
  { id: 5, name: 'Shoes', price: 1250, img: 'https://img.freepik.com/premium-photo/colorful-sport-shoes-green_151013-4554.jpg' },
]

export default function Component() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])
  const [quantities, setQuantities] = useState({})
  const [selectedVariants, setSelectedVariants] = useState({})
  const [additionalVariants, setAdditionalVariants] = useState({})

  const handleSearch = (e) => {
    const value = e.target.value
    setSearchTerm(value)

    if (value.trim() === '') {
      setFilteredProducts([])
    } else {
      const filtered = productsData.filter(product =>
        product.name.toLowerCase().includes(value.toLowerCase())
      )
      setFilteredProducts(filtered)
    }
  }

  const handleQuantityChange = (productId, delta) => {
    setQuantities(prevQuantities => {
      const newQuantities = { ...prevQuantities }
      newQuantities[productId] = Math.max((newQuantities[productId] || 0) + delta, 1)
      return newQuantities
    })
  }

  const handleRemove = (productId) => {
    setFilteredProducts(filteredProducts.filter(product => product.id !== productId))
    setQuantities(prevQuantities => {
      const newQuantities = { ...prevQuantities }
      delete newQuantities[productId]
      return newQuantities
    })
    setSelectedVariants(prevVariants => {
      const newVariants = { ...prevVariants }
      delete newVariants[productId]
      return newVariants
    })
    setAdditionalVariants(prevAdditional => {
      const newAdditional = { ...prevAdditional }
      delete newAdditional[productId]
      return newAdditional
    })
  }

  const handleResetMainVariant = (productId) => {
    setSelectedVariants(prevVariants => ({
      ...prevVariants,
      [productId]: '',
    }))
  }

  const handleVariantChange = (productId, variant) => {
    setSelectedVariants(prevVariants => ({
      ...prevVariants,
      [productId]: variant,
    }))
  }

  const handleAddMore = (productId) => {
    setAdditionalVariants(prevAdditional => ({
      ...prevAdditional,
      [productId]: [...(prevAdditional[productId] || []), { variant: '', quantity: 1 }],
    }))
  }

  const handleAdditionalQuantityChange = (productId, index, delta) => {
    setAdditionalVariants(prevAdditional => {
      const newAdditional = { ...prevAdditional }
      const currentAdditional = newAdditional[productId][index]
      currentAdditional.quantity = Math.max(currentAdditional.quantity + delta, 1)
      return newAdditional
    })
  }

  const handleAdditionalVariantChange = (productId, index, variant) => {
    setAdditionalVariants(prevAdditional => {
      const newAdditional = { ...prevAdditional }
      newAdditional[productId][index].variant = variant
      return newAdditional
    })
  }

  const handleRemoveAdditional = (productId, index) => {
    setAdditionalVariants(prevAdditional => {
      const newAdditional = { ...prevAdditional }
      newAdditional[productId].splice(index, 1)
      if (newAdditional[productId].length === 0) {
        delete newAdditional[productId]
      }
      return newAdditional
    })
  }

  const calculateTotalPrice = (product) => {
    const mainQuantity = quantities[product.id] || 1
    const additionalQuantities = (additionalVariants[product.id] || []).reduce((sum, variant) => sum + variant.quantity, 0)
    return (mainQuantity + additionalQuantities) * product.price
  }



  return (
   <section className=''>

<div className="flex justify-center sm:justify-end">
        {/* Header Avatar */}
        <div className="flex items-center gap-2 justify-end p-4 lg:p-5">
          <div className="flex items-center gap-28 md:gap-5 sm:flex-row-reverse">
            <div className="flex gap-3">
              <div className="flex sm:flex-row-reverse gap-3 items-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-xl">Shakil</p>
                  <p className="text-[#8F8F8F] font-semibold">User Id: TODO</p>
                </div>
              </div>
            </div>
            <div>
              <IoNotifications />
            </div>
          </div>

          <div className="hidden sm:block">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger><IoIosArrowDown /></MenubarTrigger>
                <MenubarContent className='mt-5'>
                  <MenubarItem>
                    Settings <MenubarShortcut>⌘T</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Print</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Share</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Logout</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </div>

<Tabs defaultValue="account" className="w-full">
  <TabsList>
    <TabsTrigger value="Easydrop">Easydrop</TabsTrigger>
    <TabsTrigger value="Shobkini">Shobkini</TabsTrigger>
  </TabsList>


  <TabsContent value="Shobkini">

  <section>
     <div className="p-4">
      <div className="mb-4">
        <div className="relative w-full max-w-md">
          <Input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search products..."
            className="w-full pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      {searchTerm.trim() !== '' && filteredProducts.length > 0 && (
        <div className="space-y-4">
          {filteredProducts.map(product => {
            const quantity = quantities[product.id] || 1
            const selectedVariant = selectedVariants[product.id] || ''
            const additionalForProduct = additionalVariants[product.id] || []
            const totalPrice = calculateTotalPrice(product)

            return (
              <div key={product.id} className="border p-4 w-3/5 rounded-lg">
                <div className="flex items-start gap-4">
                  <img src={product.img} alt={product.name} className="w-20 h-20 object-cover rounded" />
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <div className='flex items-center justify-between'>
                         <p className="text-gray-600">Price: {product.price}Tk</p>
                        <p className="font-semibold">Total: {totalPrice}Tk</p>
                    </div>
                    <div className="flex items-center justify-between gap-2 mt-4">
                      <span className="font-semibold">Qty:</span>
                      <Button variant="outline" size="icon" onClick={() => handleQuantityChange(product.id, -1)}>
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="font-semibold">{quantity}</span>
                      <Button variant="outline" size="icon" onClick={() => handleQuantityChange(product.id, 1)}>
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Select value={selectedVariant} onValueChange={(variant) => handleVariantChange(product.id, variant)}>
                        <SelectTrigger className="w-[120px]">
                          <SelectValue placeholder="Variants" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="gray">Gray: 20</SelectItem>
                            <SelectItem value="blue">Blue: 20</SelectItem>
                            <SelectItem value="red">Red: 31</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <Button onClick={() => handleAddMore(product.id)}>Add More</Button>
                      <Button variant="outline" size="icon" onClick={() => handleResetMainVariant(product.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <Button variant="destructive" onClick={() => handleRemove(product.id)}>Remove</Button>
                    </div>
                    {additionalForProduct.map((additional, index) => (
                      <div key={index} className="flex items-center w-3/5 justify-between  gap-2  mt-2">
                        <span className="font-semibold me-3">Qty:</span>
                        <Button variant="outline" size="icon" onClick={() => handleAdditionalQuantityChange(product.id, index, -1)}>
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="font-semibold px-3">{additional.quantity}</span>
                        <Button variant="outline" size="icon" onClick={() => handleAdditionalQuantityChange(product.id, index, 1)}>
                          <Plus className="h-4 w-4" />
                        </Button>
                        <Select 
                        
                          value={additional.variant} 
                          onValueChange={(variant) => handleAdditionalVariantChange(product.id, index, variant)}
                        >
                          <SelectTrigger className="w-[120px]">
                            <SelectValue placeholder="Variants" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="gray">Gray: 20</SelectItem>
                              <SelectItem value="blue">Blue: 30</SelectItem>
                              <SelectItem value="red">Red: 25</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" size="icon" onClick={() => handleRemoveAdditional(product.id, index)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>

    <form className="grid grid-cols-3 gap-6 p-5">
            {/* Customer Name */}
            <div className="flex flex-col">
              <label htmlFor="customerName" className="mb-2 font-semibold">Customer Name</label>
              <Input
                type="text"
                id="customerName"
                placeholder="Enter customer name"
              />
            </div>

            {/* Customer Phone Number */}
            <div className="flex flex-col">
              <label htmlFor="customerPhone" className="mb-2 font-semibold">Customer Phone Number</label>
              <Input
                type="text"
                id="customerPhone"
                placeholder="Enter phone number"
              />
            </div>

            {/* District */}
            <div className="flex flex-col">
              <label htmlFor="district" className="mb-2 font-semibold">District</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select District" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Jamalpur">Jamalpur</SelectItem>
                  <SelectItem value="Dhaka">Dhaka</SelectItem>
                  <SelectItem value="Netrokona">Netrokona</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* City */}
            <div className="flex flex-col">
              <label htmlFor="city" className="mb-2 font-semibold">City</label>
              <Input
                type="text"
                id="city"
                placeholder="Enter city"
              />
            </div>

            {/* Street Address */}
            <div className="flex flex-col">
              <label htmlFor="streetAddress" className="mb-2 font-semibold">Street Address</label>
              <Input
                type="text"
                id="streetAddress"
                placeholder="Enter street address"
              />
            </div>

            {/* Delivery Type */}
            <div className="flex flex-col">
              <label htmlFor="deliveryType" className="mb-2">Delivery Type</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Delivery Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inside-dhaka">Inside Dhaka</SelectItem>
                  <SelectItem value="outside-dhaka">Outside Dhaka</SelectItem>
                  <SelectItem value="express">Express Delivery</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Note and Generated Text */}
            <div className="col-span-2 grid grid-cols-2 gap-6">
              {/* Note */}
              <div className="flex flex-col">
                <label htmlFor="note" className="mb-2 font-semibold">Note</label>
                <Textarea
                  id="note"
                  placeholder="Enter notes"
                />
              </div>

              {/* Generated Text */}
              <div className="flex flex-col">
                <label htmlFor="generatedText" className="mb-2 font-semibold">Generated Text</label>
                <Textarea
                  id="generatedText"
                  placeholder="Generated text will appear here"
                />
              </div>
            </div>
          </form>

          <div className="flex justify-end gap-5 px-3 pt-20 pb-8">
            <Button variant="outline" className="px-10 text-gray-600 hover:text-gray-600">Cancel</Button>
            <Button variant="outline" className="px-5 bg-[#139FAD] hover:bg-[#139FAD] hover:text-white text-white">Place Order</Button>
          </div>

   </section>

  </TabsContent>


  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>

    

   </section>
  )
}



