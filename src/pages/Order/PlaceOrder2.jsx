
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
import SummaryOrder from './SummaryOrder';


const productsData = [
  { id: 1, name: 'T-Shirts', price: 250, img: 'https://static.vecteezy.com/system/resources/thumbnails/028/252/048/small_2x/men-s-t-shirt-realistic-mockup-in-different-colors-ai-generated-photo.jpg' },
  { id: 2, name: 'Pants', price: 550, img: 'https://textilevaluechain.in/wp-content/uploads/2020/06/denim.jpg' },
  { id: 3, name: 'Women Clothes', price: 850, img: 'https://i.guim.co.uk/img/media/588fa5e41e3d7df36a0a1e9552137e18a1e0dee2/0_0_3024_4032/master/3024.jpg?width=445&dpr=1&s=none' },
  { id: 4, name: 'Accessories', price: 630, img: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtczczLXBhaS0xNjMtbW9ja3VwLmpwZw.jpg' },
  { id: 5, name: 'Shoes', price: 1250, img: 'https://img.freepik.com/premium-photo/colorful-sport-shoes-green_151013-4554.jpg' },
]

export default function PlaceOrder2() {
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

// shakil vai
  const selectedProducts = filteredProducts
  .filter(product => 
    quantities[product.id] > 1 || 
    selectedVariants[product.id] || 
    (additionalVariants[product.id] && additionalVariants[product.id].length > 0)
  )
  .map(product => ({
    ...product,
    quantity: quantities[product.id] || 1,
    selectedVariant: selectedVariants[product.id] || '',
    additionalVariants: additionalVariants[product.id] || [],
    totalPrice: calculateTotalPrice(product),
  }));
// shakil vai

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
    <TabsTrigger value="MHRint">MHR International</TabsTrigger>
  </TabsList>


  <TabsContent value="Shobkini">

  <section>
     <div className="md:p-4">
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
                <div className='grid sm:grid-cols-12 gap-4'>
                  {/* product searched----- */}
                    <div className="sm:col-span-7 space-y-4">
            {filteredProducts.map(product => {
              const quantity = quantities[product.id] || 1
              const selectedVariant = selectedVariants[product.id] || ''
              const additionalForProduct = additionalVariants[product.id] || []
              const totalPrice = calculateTotalPrice(product)

              return (
                <div key={product.id} className="border p-2 md:p-4 rounded-lg">
                  <div className="flex items-start gap-4">
                    <img src={product.img} alt={product.name} className="w-10 h-10 md:w-20 md:h-20 object-cover rounded" />
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      <div className='flex items-center justify-between mr-14'>
                          <p className="text-gray-500 font-semibold text-xs">Price: {product.price}Tk</p>
                          <p className="font-semibold md:-mr-12 mr-2 ">Total: {totalPrice}Tk</p>
                      </div>


  <div className="flex flex-col items-start justify-between gap-2 mt-10 md:flex-row md:items-center -ml-10">
    {/* Quantity Section */}
    <div className="flex items-center gap-4 w-full md:w-auto mb-4 md:mb-0 md:ml-8 ml-2">
      <span className="font-semibold">Qty:</span>
        <div className='md:ml-1 md:space-x-4 space-x-3'>
          <Button variant="outline"  size="icon" onClick={() => handleQuantityChange(product.id, -1)}>
          <Minus className="h-4 w-4" />
        </Button>
        <span className="font-semibold">{quantity}</span>
        <Button variant="outline" size="icon" onClick={() => handleQuantityChange(product.id, 1)}>
          <Plus className="h-4 w-4" />
        </Button>                  
      </div>
    </div>

    {/* Rest of the Elements */}
    <div className="flex flex-wrap items-center gap-1 md:gap-2 w-full md:w-auto">
    <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
      <div className="flex flex-row items-center gap-2 w-full md:w-auto">
        <Select value={selectedVariant} onValueChange={(variant) => handleVariantChange(product.id, variant)}>
          <SelectTrigger className="w-[100px]  md:w-[120px]">
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

        <button className=" btn w-[65px] md:w-[100px] text-xs  border py-3 bg-[#139FAD] text-white font-semibold rounded-md" onClick={() => handleAddMore(product.id)}>Add More</button>
        <Button variant="outline" size="icon" className="hover:bg-[#FDEFEF] bg-teal-50 hover:text-red-500 text-black" onClick={() => handleResetMainVariant(product.id)}>
          <Trash2 className="h-4 w-4" />
        </Button>
        <button className=" btn w-[63px] md:w-[100px] text-xs  border py-3 bg-[#139FAD] text-white font-semibold rounded-md" onClick={() => handleRemove(product.id)}>Remove</button>
      </div>
    </div>
  </div>

                        
  </div>



                      {additionalForProduct.map((additional, index) => (
                        <div key={index} className="flex items-center gap-2 md:w-3/5 justify-between mt-5 -ml-2">
                          <span className="font-semibold md:mr-3 md:-ml-0 -ml-6">Qty:</span>
                          <div className='flex items-center md:gap-4 gap-2 mr-14 mr:mr-0'>
                          <Button variant="outline" size="icon" onClick={() => handleAdditionalQuantityChange(product.id, index, -1)}>
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="font-semibold">{additional.quantity}</span>
                          <Button variant="outline" className='md:mr-14' size="icon" onClick={() => handleAdditionalQuantityChange(product.id, index, 1)}>
                            <Plus className="h-4 w-4" />
                          </Button>
                            <div className='md:-ml-8 ml-0'>
                              <Select 
                              value={additional.variant} 
                              onValueChange={(variant) => handleAdditionalVariantChange(product.id, index, variant)}
                            >
                              <SelectTrigger className="w-[90px] md:w-[120px]">
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
                          </div>
                          <Button variant="outline" className='md:-ml-2 ml-0 hover:bg-[#FDEFEF] bg-teal-50 hover:text-red-500 text-black' size="icon" onClick={() => handleRemoveAdditional(product.id, index)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
                  </div>
                  {/* Order Summary -------------------NOTE- productData use for img only in this case */}
                  <div className='sm:col-span-5'>
                    <SummaryOrder products={selectedProducts} productsData={productsData}></SummaryOrder>
                  </div>
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


  <TabsContent value="Easydrop">EasyDrop info</TabsContent>
  <TabsContent value="MHRint">MHR info</TabsContent>
</Tabs>

    

   </section>
  )
};