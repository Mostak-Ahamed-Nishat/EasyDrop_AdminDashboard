import {Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger} from "@/components/ui/dialog"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./select";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { data } from "@/api/userList/userDetails";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./table";
import { userDetailTable } from "@/api/userList/userTableApi";
import profile from '../../assets/images/user/116808961_2481364412168538_151698124801764199_n.jpg'
import { ScrollArea } from "./scroll-area";

 

const DialogForUserListAdmin = () => {
    return (
        <Dialog>
        <DialogTrigger asChild>
          <button className="border rounded px-3">...</button>
            </DialogTrigger>
                <DialogContent className="sm:max-w-[1080px] sm:h-screen">
          <DialogHeader>
            <DialogTitle>User Details</DialogTitle>
            <DialogDescription>
             
            </DialogDescription>
                </DialogHeader>
                <ScrollArea className=" rounded-md">
                <div className="grid">
                <div className="container mx-auto ">
                {/* Main grid layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            
                        {/* Left Sidebar: Profile Card */}
                            <div className="col-span-1 rounded-lg space-y-4 md:w-full w-[323px]">
                                <div className="shadow-md rounded-lg p-3 border">
                                    <div className="space-y-6">
                                        <div>
                                            <img src={profile} className="w-[82px] h-[84px] rounded-full mx-auto"></img>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="font-semibold text-xs">Name: Shakil</p>
                                            <p className="text-gray-500 font-semibold text-xs">ID: #32452</p>
                                            <p className="font-semibold text-xs">Email: shakil...@gmail.com</p>
                                            <p className="font-semibold text-xs">Phone: 01878997887</p>
                                        </div>
                                        <div>
                                            <button className="bg-blue-500 w-full rounded text-white font-semibold">Send Message</button>
                                        </div>
                                    </div>
                                </div> 
                                <div className="shadow-md rounded-lg p-4 space-y-2 border">
                                    <h1 className="text:md sm:text-xl font-semibold">User Details</h1>
                                    <div className="space-y-2">
                                        <p className="font-semibold text-xs">Last Ordered: 13/08/2024</p>
                                        <p className="font-semibold text-xs">Refferred by: @24456</p>
                                        <p className="font-semibold text-xs">Avg Order Value: Tk. 2,025</p>
                                        <p className="font-semibold text-xs">Address: Mohammadpur, dhaka</p>
                                        <p className="font-semibold text-xs">Balance Details: Tk. 1,500</p>
                                        <p className="font-semibold text-xs">Company Name: Yellow</p>
                                    </div>
                                </div> 
                                <div className="shadow-md rounded-lg p-4 border">
                                    <div className="space-y-2">
                                        <p className="font-semibold text-xs">Subscribtion fee: Tk 2,000</p>
                                        <p className="font-semibold text-xs">Subscribtion expiry date: 13/08/2024</p>
                                       
                                    </div>
                                </div> 
                            </div>
                            
                        
                        <div className="col-span-2 ">
                            {/* Payment History Table */}
                                <div className=" grid grid-flow-col rounded-lg gap-3">
                                    <div className="row-span-3 shadow-md rounded-lg p-4">
                                        <h1 className="text-xs sm:text-lg font-semibold">Current Balance</h1>
                                        <h1 className="text-md sm:text-lg font-bold">200</h1>
                                    </div>
                                    <div className="row-span-3 shadow-md rounded-lg p-4">
                                        <h1 className="text-xs sm:text-lg font-semibold">Running Order</h1>
                                        <h1 className="text-md sm:text-lg font-bold">200</h1>
                                    </div>
                                    <div className="row-span-3 shadow-md rounded-lg p-4">
                                        <h1 className="text-xs sm:text-lg font-semibold">Total Order</h1>
                                        <h1 className="text-md sm:text-lg font-bold">200</h1>
                                    </div>
                                    <div className="row-span-3 shadow-md rounded-lg p-4">
                                        <h1 className="text-xs sm:text-lg font-semibold">Cancled</h1>
                                        <h1 className="text-md sm:text-lg font-bold">200</h1>
                                    </div>
                                    
                                </div>

                            {/* Performance Chart */}
                                <div className="mt-4 shadow-md rounded-lg p-4">
                                     {/* heading--- */}
                                <div className="flex justify-between items-center">
                                     <h1 className="font-bold sm:font-semibold text-md text-md sm:text-lg">Market Overview</h1>
                                <div className="flex gap-4">
                                    <Select>
                                        <SelectTrigger className="w-[90px] sm:w-[100px]">
                                            <SelectValue placeholder="Year" />
                                        </SelectTrigger>
                                        <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Years</SelectLabel>
                                            {[2024, 2023, 2022, 2021, 2020].map((year) => (
                                                <SelectItem key={year} value={year.toString()}>
                                                    {year}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                    </Select>
                                    <Select>
                                            <SelectTrigger className="w-[90px] sm:w-[110px]">
                                                <SelectValue placeholder="Month" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                <SelectLabel>Months</SelectLabel>
                                                <SelectItem value="apple">Jan - April</SelectItem>
                                                <SelectItem value="pineapple">May- Aug</SelectItem>
                                                <SelectItem value="mango">Sep - Dec</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                    </Select>        
                                </div>
                                    </div>
                                    <div className="h-44">
                                         {/* Graph chart ---------------------- */}
                                    <ResponsiveContainer width="100%" height="85%">
                                                <AreaChart width={730} height={250} data={data}
                                                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                                    <defs>
                                                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#FF0080" stopOpacity={0.8}/>
                                                        <stop offset="95%" stopColor="#522F8F" stopOpacity={0}/>
                                                        </linearGradient>
                                                        
                                                    </defs>
                                                    <XAxis dataKey="name" />
                                                    <YAxis />
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <Tooltip />
                                                    <Area type="monotone" dataKey="uv" stroke="#FF0080" fillOpacity={1} fill="url(#colorUv)" />
                                                
                                                    </AreaChart>
                                                            {/* <Area type="monotone" dataKey="uv" stroke="#FF0080" fill="#522F8F"/> */}
                                    </ResponsiveContainer>
                                     </div>
                                    
                            </div>
                                <div className="mt-4 shadow-md rounded-lg p-4">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[150px] text-xs py-1">Order Id</TableHead>
                                            <TableHead className="text-xs  py-2">Status</TableHead>
                                            <TableHead className="text-xs  text-center py-1">Total amount</TableHead>
                                            <TableHead className="text-xs  text-center py-1">Delivery date</TableHead>
                                            <TableHead className="text-xs  text-end py-1">Payment method</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {userDetailTable.map((data) => (
                                            <TableRow key={data.invoice}>
                                            <TableCell className='py-1 text-xs'>{data.order_id}</TableCell>
                                                <TableCell  className={`py-1 text-xs ${data.status === 'completed' ? 'text-[#33CF3A]' : data.status === 'pending' ? 'text-[#eed246]' : ''}`}><button className="border py-1 px-1.5 shadow-sm rounded-md">{data.status}</button></TableCell>
                                                <TableCell className="text-center py-1 text-xs">{data.total_amount}</TableCell>
                                                <TableCell className="text-center py-1 text-xs">{data.delivery_date}</TableCell>
                                                <TableCell className="text-end py-1 text-xs">{data.payment_method}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                                </div>
                        </div>
                    </div>
                </div>
                </div>
                </ScrollArea>
          <DialogFooter>
            {/* <Button type="submit">Save changes</Button> */}
          </DialogFooter>
                </DialogContent>
            </Dialog>
    );
};

export default DialogForUserListAdmin;