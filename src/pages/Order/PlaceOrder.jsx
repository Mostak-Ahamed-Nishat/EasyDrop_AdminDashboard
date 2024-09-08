
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoNotifications } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";


const PlaceOrder = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [orderSummary, setOrderSummary] = useState([]);


    const products = [
        { id: 1, name: 'T-Shirts',price:250, img: 'https://static.vecteezy.com/system/resources/thumbnails/028/252/048/small_2x/men-s-t-shirt-realistic-mockup-in-different-colors-ai-generated-photo.jpg' },
        { id: 2, name: 'Pants', price:550, img: 'https://textilevaluechain.in/wp-content/uploads/2020/06/denim.jpg' },
        { id: 3, name: 'women Cloths',price:850, img: 'https://i.guim.co.uk/img/media/588fa5e41e3d7df36a0a1e9552137e18a1e0dee2/0_0_3024_4032/master/3024.jpg?width=445&dpr=1&s=none' },
        { id: 4, name: 'Accessories',price:630, img: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtczczLXBhaS0xNjMtbW9ja3VwLmpwZw.jpg' },
        { id: 5, name: 'Shoes', price:1250, img: 'https://img.freepik.com/premium-photo/colorful-sport-shoes-green_151013-4554.jpg' },
      ];

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
    
        if (value.length > 0) {
          const filtered = products
            .filter(product => product.name.toLowerCase().includes(value.toLowerCase()))
            .slice(0, 3);  // Limit to 3 products
          setFilteredProducts(filtered);
        } else {
          setFilteredProducts([]);
        }
    };

    const handleProductClick = (product) => {
        const existingProduct = orderSummary.find(item => item.id === product.id);
        
        if (existingProduct) {
          setOrderSummary(orderSummary.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ));
        } else {
          setOrderSummary([...orderSummary, { ...product, quantity: 1 }]);
        }
        setFilteredProducts([]);
        setSearchTerm(product.name);
    };

    const handleIncreaseQuantity = (productId) => {
        setOrderSummary(orderSummary.map(product =>
          product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
        ));
    };
    
    const handleDecreaseQuantity = (productId) => {
        setOrderSummary(orderSummary.map(product =>
          product.id === productId && product.quantity > 1
            ? { ...product, quantity: product.quantity - 1 } : product
        ));
    };

    const handleRemoveProduct = (productId) => {
        setOrderSummary(orderSummary.filter(product => product.id !== productId));
    };

    const calculateTotal = () => {
        return orderSummary.reduce((total, product) => total + (product.price * product.quantity), 0);
    };

    return (
        <section className="p-3">
            {/* header section start*/}
            <div className="flex justify-center sm:justify-end">
                {/* --------Header Avatar */}
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
                            <div className="">
                                <IoNotifications></IoNotifications>
                            </div>
                    </div>
                    
                    <div className="hidden sm:block">
                            <Menubar>
                                <MenubarMenu>
                                    <MenubarTrigger><IoIosArrowDown></IoIosArrowDown></MenubarTrigger>
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
            {/* header section end*/}

            {/* tabls section start */}
            <div>
                <Tabs defaultValue="account" className="w-full">
                    <TabsList>
                        <TabsTrigger value="easyDrop">EasyDrop</TabsTrigger>
                        <TabsTrigger value="shobkini">Shobkini</TabsTrigger>
                        <TabsTrigger value="mhrInternational">MHR International</TabsTrigger>
                        <TabsTrigger value="royalImport">Royal Imports</TabsTrigger>
                    </TabsList>
                    <TabsContent value="easyDrop">Make changes to your account here.</TabsContent>
                    <TabsContent value="shobkini">
                        <div>
                            {/* Search Input */}
                            <div className="relative p-3 pt-10 pb-10">
                                <Input
                                    type="text"
                                    className="border border-gray-300 rounded-md p-2 w-1/3"
                                    placeholder="Search products..."
                                    value={searchTerm}
                                    onChange={handleSearch}
                                />
                                {filteredProducts.length > 0 && (
                                    <ul className="absolute left-0 right-0 border border-gray-300 bg-gray-200 mt-2 rounded-md p-3 w-1/3 ms-10">
                                        {filteredProducts.map(product => (
                                            <li 
                                                key={product.id} 
                                                className="flex items-center px-2 hover:bg-gray-100 rounded-sm py-2 cursor-pointer"
                                                onClick={() => handleProductClick(product)}
                                            >
                                                <img src={product.img} alt={product.name} className="w-10 h-10 mr-4 rounded-sm" />
                                                <span>{product.name}</span>
                                                <span>{product.price}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            
                            {/* Form Section */}
                            <form className="grid grid-cols-3 gap-6 p-3">
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
        <SelectItem value="light">Jamalpur</SelectItem>
        <SelectItem value="dark">Dhaka</SelectItem>
        <SelectItem value="system">Netrokona</SelectItem>
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
  <div className="flex flex-col ">
    <label htmlFor="deliveryType" className="mb-2">Delivery Type</label>
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Inside Dhaka</SelectItem>
        <SelectItem value="dark">Outside Dhaka</SelectItem>
        <SelectItem value="system">Express Delivery</SelectItem>
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

 {/* Showing Order History Start */}

        <div className="w-1/2">
                {orderSummary.length > 0 && (
                    <div className="mt-10 p-4  border-gray-300">
                        <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
                        <ul>
                            {orderSummary.map((product, index) => (
                                <li key={index} className="flex gap-5 py-3 px-2 border-b border-gray-200">
                                    <img src={product.img} alt={product.name} className="w-24 h-24 mr-4" />
                                    <div className="flex-1">
                                        <h3 className="font-semibold">{product.name}</h3>
                                        <p>Price: ${product.price} x {product.quantity} = ${product.price * product.quantity}</p>
                                        <div className="flex gap-2 mt-2 items-center">
                                            <Button onClick={() => handleDecreaseQuantity(product.id)} size="sm" variant="outline"><Minus size={18}/></Button>
                                            <span>{product.quantity}</span>
                                            <Button onClick={() => handleIncreaseQuantity(product.id)} size="sm" variant="outline"><Plus size={18}/></Button>
                                            <Button onClick={() => handleRemoveProduct(product.id)} size="sm" variant="destructive">Remove</Button>
                                        </div>
                                    </div>
                                </li>
                            ))} 
                        </ul>

                        {/* Total Price */}
                        <div className="flex justify-between mt-5 font-semibold text-lg">
                            <p>Total Price:</p>
                            <p>${calculateTotal()}</p>
                        </div>
                    </div>
                )}
            </div>
        
{/* Showing Order History Start */}


        
                        </div>
                    </TabsContent>
                    <TabsContent value="mhrInternational">MHR International's information</TabsContent>
                    <TabsContent value="royalImport">Royal Import's information</TabsContent>
                </Tabs>
            </div>

           
            
            {/* Showing Order History End */}
            
        </section>
    );
};

export default PlaceOrder;
