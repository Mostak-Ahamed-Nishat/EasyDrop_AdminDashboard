import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import TablePagination from "@/components/TablePagination";
import { orderList } from "@/api/order/orderListApi";


const OrderList = () => {
    const [date, setDate] = useState(new Date())
        // pagination-------
        const [currentPage, setCurrentPage] = useState(1);
        const itemsPerPage = 8;
        const totalPages = Math.ceil(orderList.length / itemsPerPage);
      
        // Get data for the current page
        const currentData = orderList.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        );
      
        // Handle page change
        const handlePageChange = (page) => {
          setCurrentPage(page);
          };
          
      
      
    return (
        <>   
            {/* header ---------- */}
             <div className="flex justify-center sm:justify-end">
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
            {/* Card section------- */}
            <div className="p-3">
                <h1 className="text-2xl sm:hidden font-semibold mb-4">Balance</h1>
                <div className="p-3 grid sm:grid-cols-12 gap-4">
                    <div className="sm:col-span-3 rounded-lg border p-4 shadow-md"></div>
                    <div className="sm:col-span-3 rounded-lg border p-4 shadow-md"></div>
                    <div className="sm:col-span-3 rounded-lg border p-4 shadow-md"></div>
                    <div className="sm:col-span-3 rounded-lg border p-4 shadow-md"></div>
                    <div className="sm:col-span-3 rounded-lg border p-4 shadow-md"></div>
                    <div className="sm:col-span-3 rounded-lg border p-4 shadow-md"></div>
                    <div className="sm:col-span-3 rounded-lg border p-4 shadow-md"></div>
                    <div className="sm:col-span-3 rounded-lg border p-4 shadow-md"></div>
                </div>
                <ScrollArea className="grid sm:grid-cols-1 sm:w-full whitespace-nowrap">
               
                    <div className="p-3 flex justify-end gap-4 overflow-x-auto">
                    <Select>
                        <SelectTrigger className="w-[85px] sm:w-[110px]">
                            <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {['Active', 'Deactivate', 'Pending'].map((status) => (
                                    <SelectItem key={status} value={status}>
                                        {status}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="w-[130px]">
                            <SelectValue placeholder="Selling Options" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {['Resell', 'Retail'].map((status) => (
                                    <SelectItem key={status} value={status}>
                                        {status}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="w-[140px] sm:w-[150px]">
                            <SelectValue placeholder="Inventory type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup className="mr-4">
                                {['External Product', 'Internal Product', 'Hidden Product'].map((status) => (
                                    <SelectItem key={status} value={status}>
                                        {status}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                        </Select>
                        {/* data--------------- */}
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-[190px] justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                    </div>
                <ScrollBar orientation="horizontal"/>
                </ScrollArea>
                {/* Table Section */}
                <ScrollArea className="grid sm:grid-cols-1 sm:w-full whitespace-nowrap">
                    <div className="p-3 grid sm:grid-cols-10">
                    <div className="sm:col-span-10 col-span-1 w-full min-h-[100px] rounded p-4 shadow-md">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[150px] text-md sm:text-lg">Order Id</TableHead>
                                    <TableHead className="text-md sm:text-lg text-center">Date</TableHead>
                                    <TableHead className="text-md sm:text-lg text-center">Customer Name</TableHead>
                                    <TableHead className="text-md sm:text-lg">Contact</TableHead>
                                    <TableHead className="text-md sm:text-lg">Order by</TableHead>
                                    <TableHead className="text-md sm:text-lg text-center">Cash on Delivery</TableHead>
                                    <TableHead className="text-md sm:text-lg text-end">Details</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {currentData.map((data, index) => (
                                    <TableRow key={data.index}>
                                    <TableCell>{(currentPage - 1) * itemsPerPage + index + 1}</TableCell>
                                        <TableCell className='text-center'>{data.date}</TableCell>
                                        <TableCell className='text-center'>{data.customer_name}</TableCell>
                                        <TableCell>{data.contact}</TableCell>
                                        <TableCell>{data.order_by}</TableCell>
                                        <TableCell className="text-center">{data.cashOn_delivary}</TableCell>
                                        <TableCell className="text-end">{data.details}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                        {/* Pagination Section */}
                    <div className="text-right py-4">
                        <TablePagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        handlePageChange={handlePageChange}
                        maxPageNumbersToShow={3}
                        />
                    </div>
                    </div>
                    </div>
                    <ScrollBar orientation="horizontal"/>
                </ScrollArea>
                
            </div>
        </>
    );
};

export default OrderList;