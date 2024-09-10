import { userList } from "@/api/userList/userList";
import TablePagination from "@/components/TablePagination";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DialogForUserListAdmin from "@/components/ui/DialogForUserListAdmin";
import { Input } from "@/components/ui/input";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";

 
const UserList = () => {
    // search functionality---------
    

     // pagination-------
     const [currentPage, setCurrentPage] = useState(1);
     const itemsPerPage = 8;
     const totalPages = Math.ceil(userList.length / itemsPerPage);
   
     // Get data for the current page
     const currentData = userList.slice(
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
        <div className="p-3">
            <h1 className=" ml-3 text-3xl font-semibold mb-4">User List</h1>
                {/* search section------ & filter button ------ */}
                <div className="p-3 flex justify-between items-center gap-2">
                    <Input
                        type="text"
                        className="border border-gray-300 rounded-md p-2 w-36 sm:w-72"
                        placeholder="search by username or userId"
                    
                    />
                    <div className="flex gap-2">
                        <div>
                            <button className="border border-[#139FAD] text-xs sm:text-lg font-semibold px-1 py-.05 sm:px-2 sm:py-1 rounded">Filter by:</button>
                        </div>
                        <div>
                            <button className="border border-[#139FAD] text-xs sm:text-lg font-semibold px-1 py-.05 sm:px-2 sm:py-1 rounded">Filter Remarks:</button>
                        </div>
                    </div>
                   
               </div>
           <div></div>
            {/* Table Section */}
            <ScrollArea className="grid sm:grid-cols-1 sm:w-full whitespace-nowrap">
                <div className="p-3 grid sm:grid-cols-10">
                <div className="sm:col-span-10 col-span-1 w-full min-h-[100px] rounded p-4 shadow-md">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[150px] text-md sm:text-lg">SL</TableHead>
                                <TableHead className="text-md sm:text-lg text-center">Date Time</TableHead>
                                <TableHead className="text-md sm:text-lg text-center">Username</TableHead>
                                <TableHead className="text-md sm:text-lg">User Id</TableHead>
                                <TableHead className="text-md sm:text-lg text-center">Subscribtion <br></br> expired date</TableHead>
                                <TableHead className="text-md sm:text-lg text-center">Status</TableHead>
                                <TableHead className="text-md sm:text-lg text-center">Remark</TableHead>
                                <TableHead className="text-md sm:text-lg ">Details</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {currentData.map((data, index) => (
                                <TableRow key={data.index}>
                                <TableCell>{(currentPage - 1) * itemsPerPage + index + 1}</TableCell>
                                    <TableCell className='text-center'>{data.date}</TableCell>
                                    <TableCell className='text-center'>{data.customer_name}</TableCell>
                                    <TableCell>{data.userId}</TableCell>
                                    <TableCell className="text-center">{data.expired_date}</TableCell>
                                    <TableCell className='text-center'>
                                        <Select>
                                            <SelectTrigger className="w-[85px] sm:w-[110px] py-.5">
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
                                     </TableCell>
                                    <TableCell className='text-center'>
                                        <Select>
                                            <SelectTrigger className="w-[110px] sm:w-[140px] py-.5">
                                                <SelectValue placeholder="NO Remark" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    {['Call not picked', 'Interested', 'Opt-Out','message'].map((status) => (
                                                        <SelectItem key={status} value={status}>
                                                            {status}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                     </TableCell>
                                    
                                    {/* <TableCell className={`text-right ${data.status === 'active' ? 'text-[#33CF3A]' : data.status === 'deactive' ? 'text-[#f73232]' : data.status === 'pending' ? 'text-[#FAAD13]' : ''}`}
                                     ><button className="border p-1 rounded bg-slate-100 text-xs font-bold">{data.status}</button></TableCell> */}
                                    <TableCell className="text-end"><DialogForUserListAdmin></DialogForUserListAdmin></TableCell>
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

export default UserList;