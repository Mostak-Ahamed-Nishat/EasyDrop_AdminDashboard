import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";
import { IoNotifications } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight } from 'lucide-react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { NavLink } from "react-router-dom";
import { totalRevenue } from "@/api/dashboard/totalRevenue";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { UserRound } from 'lucide-react';
import topSellerImg from '../../assets/images/user/116808961_2481364412168538_151698124801764199_n.jpg'
import { COLORS, renderCustomizedLabel, salesByCategory, style } from "@/api/dashboard/salesByCategory";
import DialogForVendor from "./DialogForVendor";
import InvestorProductDialog from "./InvestorProductDialog";
import DialogForInvestorEquity from "./DialogForInvestorEquity";

const vendorData = [
    { shopName: 'EasyDrop', details: '..' },
    { shopName: 'ShopTwo', details: '..' },
    { shopName: 'ShopThree', details: '..' },
    { shopName: 'ShopFour', details: '..' },
    { shopName: 'ShopFive', details: '..' },
  ];
  const investorProductData = [
    { name: 'Shakil Ahmed', productQty: 5, amount: '50,000', details: '...' },
    { name: 'Shakil', productQty: 5, amount: '50,000', details: '...' },
    { name: 'Shakil', productQty: 5, amount: '50,000', details: '...' },
    { name: 'Shakil', productQty: 5, amount: '50,000', details: '...' },
    { name: 'Shakil', productQty: 5, amount: '50,000', details: '...' },
    { name: 'Shakil', productQty: 5, amount: '50,000', details: '...' }
  ];

  const investorEquityData = [
    { name: 'Shakil Ahmed', equity: '5%', amount: '50,000', details: '...' },
    { name: 'Shakil', equity: '5%', amount: '50,000', details: '...' },
    { name: 'Shakil', equity: '5%', amount: '50,000', details: '...' },
    { name: 'Shakil', equity: '5%', amount: '50,000', details: '...' },
    { name: 'Shakil', equity: '5%', amount: '50,000', details: '...' },
    { name: 'Shakil', equity: '5%', amount: '50,000', details: '...' }
  ];
  const topSellerData = [
    { image: topSellerImg, name: 'Shakil', amount: 'TK 10,000' },
    { image: topSellerImg, name: 'Shakil', amount: 'TK 10,000' },
    { image: topSellerImg, name: 'Shakil', amount: 'TK 10,000' },
  ];

const Home = () => {
    return (
        <>
            {/* Header Section------------- */}
            {/* --------Header Avater */}
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
                                        <p className="text-[#8F8F8F] font-semibold">User Id2: TODO</p>
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
                                    <MenubarSeparator/>
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
            {/* Main Content goes here */}
            <div className="p-3">
                <h1 className=" ml-3 text-2xl font-semibold mb-4">Admin Dashboard</h1>
                <div className="grid sm:grid-cols-12 gap-4">
                    {/* Left Section card--------------- */}
                    <div className="sm:col-span-6 grid grid-cols-2 gap-4">
                        {/* Total Revenue */}
                        <div className="col-span-1 rounded-lg border p-4 shadow-md">
                            <h1 className="text-md sm:text-xl font-semibold">Total Revenue</h1>
                            <h1 className="text-xl sm:text-3xl font-bold">TK 200</h1>
                                <div className="flex items-end justify-end w-full">
                                    <NavLink to='/home'></NavLink>
                                    <ArrowRight className="w-auto" />
                                </div>
                        </div>

                        {/* Total Purchase */}
                        <div className="col-span-1 rounded-lg border p-4 shadow-md">
                            <h1 className="text-md sm:text-xl font-semibold">Total Purchase</h1>
                            <h1 className="text-xl sm:text-3xl font-bold">TK 20</h1>
                        </div>
                        {/* Total Inventory */}
                        <div className="col-span-1 rounded-lg border p-4 shadow-md">
                            <h1 className="text-md sm:text-xl font-semibold">Total Inventory</h1>
                            <h1 className="text-xl sm:text-3xl font-bold">TK 20</h1>
                        </div>
                        {/* Total expense */}
                        <div className="col-span-1 rounded-lg border p-4 shadow-md">
                        <h1 className="text-md sm:text-xl font-semibold">Total expense</h1>
                        <h1 className="text-xl sm:text-3xl font-bold">TK 200</h1>
                            <div className="flex items-end justify-end w-full">
                                <NavLink to='/home'></NavLink>
                                <ArrowRight className="w-auto" />
                            </div>
                        </div>
                    </div>

                    {/* Right Section graph--------- */}
                    <div className="sm:col-span-6 grid grid-cols-2 gap-4">
                        <div className="col-span-8 rounded-lg border p-4 shadow-md">
                            {/* heading--- */}
                            <div className="flex justify-between items-center">
                                <h1 className=" text-xl font-bold sm:font-semibold text-md sm:text-2xl">Sales Growth</h1>
                                <Select>
                                    <SelectTrigger className="w-[90px] sm:w-[150px]">
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

                            </div>
                                {/* Graph chart ---------------------- */}
                            <ResponsiveContainer width="100%" height="80%">
                                    <AreaChart width={730} height={250} data={totalRevenue}
                                       margin={{
                                        top: 10,
                                        right: 0,
                                        left: 0,
                                        bottom: 0,
                                    }}>
                                        <defs>
                                            <linearGradient id="colorUv1" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#139FAD" stopOpacity={0.8}/>
                                                <stop offset="95%" stopColor="#139FAD" stopOpacity={0}/>
                                            </linearGradient>
                                            
                                        </defs>
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <Tooltip />
                                        <Area type="monotone" dataKey="uv" stroke="#139FAD" fillOpacity={1} fill="url(#colorUv1)" />
                                    
                                        </AreaChart>
                                                {/* <Area type="monotone" dataKey="uv" stroke="#FF0080" fill="#522F8F"/> */}
                                </ResponsiveContainer>
                               </div> 
                            
                   
                    </div>
                </div>

            </div>
            {/* section 2 top to down---------- */}
            <div className="p-3 grid sm:grid-cols-12 gap-4">
                    {/* vendor */}
                    <div className="sm:col-span-4 rounded-lg border p-4 shadow-md max-w-[302px] sm:max-w-full">
                        {/* heading */}
                        <div className="flex justify-between items-center">
                            <div>
                                <h1 className="text-md sm:text-2xl font-semibold">Vendor</h1>
                                <p className="flex items-center gap-2"><UserRound className="size-4"></UserRound><span className="font-bold">200</span></p>
                            </div>
                            <div className="">
                                <button className="bg-[#139FAD] px-1.5 py-0.5 rounded text-white text-xs font-semibold shadow-lg">View More</button>
                            </div>
                        </div>
                        <div className="">
                        <Table>
                            <TableHeader>
                            <TableRow>
                                    <TableHead className="w-[150px] text-xs py-1">Shope Name</TableHead>
                                    <TableHead className="text-xs text-end py-1">Details</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {vendorData.map((shop, index) => (
                                <TableRow key={index}>
                                    <TableCell className="py-1 text-xs">{shop.shopName}</TableCell>
                                        <TableCell className="text-end py-1 text-xs">
                                            {/* dialogForverdor--------popup */}
                                            <DialogForVendor></DialogForVendor>
                                    </TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        </div>
                    </div>
                    {/* Investor (Product) */}
                    <div className="sm:col-span-4 rounded-lg border p-4 shadow-md max-w-[302px] sm:max-w-full">
                        {/* heading */}
                        <div className="flex justify-between items-center">
                            <div>
                                <h1 className="text-md sm:text-2xl font-semibold">Investor (product)</h1>
                                <p className="flex items-center gap-2"><UserRound className="size-4"></UserRound><span className="font-bold">50</span></p>
                            </div>
                            <div className="">
                                <button className="bg-[#139FAD] px-1.5 py-0.5 rounded text-white text-xs font-semibold shadow-lg">View More</button>
                            </div>
                        </div>
                    <div className="">
                        <Table>
                        <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[120px] text-xs py-1">Name</TableHead>
                                    <TableHead className="text-xs  py-2">Product(Qut) </TableHead>
                                    <TableHead className="text-xs  text-center py-1">Amount</TableHead>
                                    <TableHead className="text-xs  text-end py-1">Details</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {investorProductData.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell className="py-1 text-xs">{row.name}</TableCell>
                                    <TableCell className="py-1 text-xs text-center text-[#33CF3A] shadow-sm">{row.productQty}</TableCell>
                                    <TableCell className="text-center py-1 text-xs">{row.amount}</TableCell>
                                    <TableCell className="text-end py-1 text-xs">
                                            {/* dialogForInvestorProduct--------popup */}
                                            <InvestorProductDialog></InvestorProductDialog>
                                    </TableCell>
                                    
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        </div>
                    </div>
                    {/* Investor (Equity) */}
                    <div className="sm:col-span-4 rounded-lg border p-4 shadow-md max-w-[302px] sm:max-w-full">
                        {/* heading */}
                        <div className="flex justify-between items-center">
                            <div>
                                <h1 className="text-md sm:text-2xl font-semibold">Investor (Equity)</h1>
                                <p className="flex items-center gap-2"><UserRound className="size-4"></UserRound><span className="font-bold">200</span></p>
                            </div>
                            <div className="">
                                <button className="bg-[#139FAD] px-1.5 py-0.5 rounded text-white text-xs font-semibold shadow-lg">View More</button>
                            </div>
                        </div>
                        <div className="">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[120px] text-xs py-1">Name</TableHead>
                                    <TableHead className="text-xs  py-2">Equity</TableHead>
                                    <TableHead className="text-xs  text-center py-1">Amount</TableHead>
                                    <TableHead className="text-xs  text-end py-1">Details</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {investorEquityData.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell className="py-1 text-xs">{row.name}</TableCell>
                                    <TableCell className="py-1 text-xs text-center text-[#33CF3A] shadow-sm">{row.equity}</TableCell>
                                    <TableCell className="text-center py-1 text-xs">{row.amount}</TableCell>
                                    <TableCell className="text-end py-1 text-xs">
                                            {/* dialogForInvestorEquity--------popup */}
                                            <DialogForInvestorEquity></DialogForInvestorEquity>
                                    </TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        </div>
                    </div>
            </div>
            {/* section 2 top to down---------- */}
            <div className="p-3 grid sm:grid-cols-12 gap-4">
                {/* Order -------- */}
                <div className="sm:col-span-4 rounded-lg border p-4 shadow-md max-w-[302px] sm:max-w-full">
                        {/* heading */}
                        <div className="flex justify-between items-center">
                            <div>
                                <h1 className="text-md sm:text-2xl font-semibold">Investor (Equity)</h1>
                                <p className="flex items-center gap-2"><UserRound className="size-4"></UserRound><span className="font-bold">200</span></p>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="flex items-center gap-2">
                                    <p className="bg-[#139FAD] rounded size-2 text-xs"></p>
                                    <span className="text-xs">Complete order</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className="bg-[#0e6f78] rounded size-2 text-xs"></p>
                                    <span className="text-xs">Cancle order</span>
                                </div>
                            </div>
                        </div>
                        <ResponsiveContainer width="100%" height="80%">
                            <BarChart
                            width={500}
                            height={300}
                            data={totalRevenue}
                            margin={{
                                top: 5,
                                right: 1,
                                left: 0,
                                bottom: 0,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                           
                            <Bar dataKey="pv" fill="#139FAD" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                            <Bar dataKey="uv" fill="#0e6f78" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                            </BarChart>
                        </ResponsiveContainer>
                </div>
                {/* Top Seller -------- */}
                <div className="sm:col-span-4 rounded-lg border p-4 shadow-md max-w-[302px] sm:max-w-full">
                        {/* heading */}
                        <div className="flex justify-between items-center mb-1">
                        <h1 className="font-bold sm:font-semibold text-md sm:text-2xl">Top Seller</h1>
                        <Select>
                            <SelectTrigger className="w-[90px] sm:w-[150px]">
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
                         {/* product here----------------- */}
                    <div>
                        <Table>
                            <TableHeader>
                            <TableRow>
                                    <TableHead className="w-[120px] text-xs py-1">Image</TableHead>
                                    <TableHead className=" text-xs py-1">Name</TableHead>
                                <TableHead className=" text-xs text-end py-1">Amount</TableHead>
                            </TableRow>
                            </TableHeader>
                            <TableBody>
                                {topSellerData.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell className="py-1 text-xs">
                                    <img src={row.image} className="w-14 h-14 rounded" alt={row.name} />
                                    </TableCell>
                                    <TableCell className="py-1 text-xs">{row.name}</TableCell>
                                    <TableCell className="py-1 text-end text-xs">{row.amount}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <div>
                            
                        </div>
                    </div>
                </div>
                {/* Sales by category -------- */}
                <div className="sm:col-span-4 rounded border p-4 shadow-md max-w-[302px] sm:max-w-full">
                     {/* heading--- */}
                     <div className="flex justify-between items-center">
                        <h1 className="font-bold sm:font-semibold text-md sm:text-2xl">Sales By Category</h1>
                        <Select>
                            <SelectTrigger className="w-[90px] sm:w-[120px]">
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

                     <div style={{ width: '100%', height: 250 }}>
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={salesByCategory}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {salesByCategory.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Legend iconSize={12} layout="horizontal" horizOriginX="bottom" wrapperStyle={style} />
                            </PieChart>
                        </ResponsiveContainer>
                        
                    </div>

                    
                
                </div>
            </div>
        </>
    );
};

export default Home;