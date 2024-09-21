import TablePagination from "@/components/TablePagination";
import {Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogTrigger,} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { UserRound } from "lucide-react";
import { useState } from "react";

const vendorDialogData = [
    { index: 1, shopName: 'EasyDrop', contactNum:'0170...**', runningOrder:'02', totalIncome: '25,000', details: '..' },
    { index: 2, shopName: 'ShopTwo', contactNum:'0170...**', runningOrder:'02', totalIncome: '25,000', details: '..' },
    { index: 3, shopName: 'ShopThree', contactNum:'0170...**', runningOrder:'02', totalIncome: '25,000', details: '..' },
    { index: 4, shopName: 'ShopFour', contactNum:'0170...**', runningOrder:'02', totalIncome: '25,000', details: '..' },
    { index: 5, shopName: 'ShopFive', contactNum:'0170...**', runningOrder:'02', totalIncome: '25,000', details: '..' },
    { index: 6, shopName: 'ShopFive', contactNum:'0170...**', runningOrder:'02', totalIncome: '25,000', details: '..' },
    { index: 7, shopName: 'ShopFive', contactNum:'0170...**', runningOrder:'02', totalIncome: '25,000', details: '..' },
    { index: 8, shopName: 'ShopFive', contactNum:'0170...**', runningOrder:'02', totalIncome: '25,000', details: '..' },
    { index: 9, shopName: 'ShopFive', contactNum:'0170...**', runningOrder:'02', totalIncome: '25,000', details: '..' },
    { index: 10, shopName: 'ShopFive', contactNum:'0170...**', runningOrder:'02', totalIncome: '25,000', details: '..' },
    { index: 11, shopName: 'ShopFive', contactNum:'0170...**', runningOrder:'02', totalIncome: '25,000', details: '..' },
    { index: 12, shopName: 'ShopFive', contactNum:'0170...**', runningOrder:'02', totalIncome: '25,000', details: '..' },
    { index: 13, shopName: 'ShopFive', contactNum:'0170...**', runningOrder:'02', totalIncome: '25,000', details: '..' },
    { index: 14, shopName: 'ShopFive', contactNum:'0170...**', runningOrder:'02', totalIncome: '25,000', details: '..' },
    { index: 15, shopName: 'ShopFive', contactNum:'0170...**', runningOrder:'02', totalIncome: '25,000', details: '..' },
    { index: 16, shopName: 'ShopFive', contactNum:'0170...**', runningOrder:'02', totalIncome: '25,000', details: '..' },
  ];
   
const DialogForVendor = () => {
     // pagination-------
     const [currentPage, setCurrentPage] = useState(1);
     const itemsPerPage = 8;
     const totalPages = Math.ceil(vendorDialogData.length / itemsPerPage);
   
     // Get data for the current page
     const currentData = vendorDialogData.slice(
       (currentPage - 1) * itemsPerPage,
       currentPage * itemsPerPage
    );
    
   
     // Handle page change
     const handlePageChange = (page) => {
       setCurrentPage(page);
       };
    return (
        <Dialog>
        <DialogTrigger asChild>
        <button className="rounded">...</button>
        </DialogTrigger>
        <DialogContent className="max-w-[550px] sm:max-w-[1080px] sm:h-screen">
          <DialogHeader>
            <DialogTitle  className="text-md sm:text-2xl font-semibold text-start">Vendor</DialogTitle>
            <DialogDescription>
                <p className="flex items-center gap-2"><UserRound className="size-4"></UserRound><span className="font-bold text-start">200</span></p>
            </DialogDescription>
                </DialogHeader>
                <ScrollArea className="w-full rounded-md">
                
                    <div className="">
                        <Table className='w-full'>
                            <TableHeader>
                            <TableRow>
                                    <TableHead className="text-xs sm:text-sm hidden">Serial</TableHead>
                                        <TableHead className=" text-xs sm:text-sm ">Shope Name</TableHead>
                                        <TableHead className="text-xs sm:text-sm">Contact Num</TableHead>
                                        <TableHead className="text-xs sm:text-sm ">Running Order</TableHead>
                                        <TableHead className="text-xs sm:text-sm ">Total Income</TableHead>
                                    <TableHead className="text-xs sm:text-sm text-center">Details</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {currentData.map((vendor, index) => (
                                    <TableRow key={vendor.index}>
                                    <TableCell className='text-xs sm:text-sm hidden '>{(currentPage - 1) * itemsPerPage + index + 1}</TableCell>
                                    <TableCell className=" text-xs sm:text-sm max-w-16 truncate">{vendor.shopName}</TableCell>
                                    <TableCell className=" text-xs sm:text-sm max-w-10 truncate">{vendor.contactNum}</TableCell>
                                    <TableCell className=" text-xs sm:text-sm ">{vendor.runningOrder}</TableCell>
                                    <TableCell className=" text-xs sm:text-sm">{vendor.totalIncome}</TableCell>
                                    
                                        <TableCell className="text-center text-xs">
                                            {/* dialogForverdor--------popup TODO here another popUp */}
                                            <DialogForVendor></DialogForVendor>
                                    </TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                    </Table>    
                        </div>
                        {/* Pagination Section */}
                        <div className="absolute bottom-0 right-8 ">
                            <TablePagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            handlePageChange={handlePageChange}
                            maxPageNumbersToShow={3}
                            />
                        </div>
               
                </ScrollArea>
        </DialogContent>
      </Dialog>
    );
};

export default DialogForVendor;