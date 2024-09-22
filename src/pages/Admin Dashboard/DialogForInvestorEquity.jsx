import TablePagination from "@/components/TablePagination";
import {Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogTrigger,} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { UserRound } from "lucide-react";
import { useState } from "react";
import DialogForVendor from "./DialogForVendor";



const vendorDialogData = [
    { index: 1, name: 'Shakil', equity:'5%', amount:'25,000', details: '..' },
    { index: 2, name: 'Shakil', equity:'5%', amount:'25,000', details: '..' },
    { index: 3, name: 'Shakil', equity:'5%', amount:'25,000', details: '..' },
    { index: 4, name: 'Shakil', equity:'5%', amount:'75,000', details: '..' },
    { index: 5, name: 'Shakil', equity:'5%', amount:'75,000', details: '..' },
    { index: 6, name: 'Shakil', equity:'5%', amount:'75,000', details: '..' },
    { index: 7, name: 'Bijoy', equity:'5%', amount:'75,000', details: '..' },
    { index: 8, name: 'Bijoy', equity:'5%', amount:'25,000', details: '..' },
    { index: 9, name: 'Bijoy', equity:'5%', amount:'25,000', details: '..' },
    { index: 10, name: 'Shakil', equity:'5%', amount:'25,000', details: '..' },
    { index: 11, name: 'Shakil', equity:'5%', amount:'30,000', details: '..' },
    { index: 12, name: 'Shakil', equity:'5%', amount:'30,000', details: '..' },
    { index: 13, name: 'Nill', equity:'5%', amount:'2530,0', details: '..' },
    { index: 14, name: 'Nill', equity:'5%', amount:'230,00', details: '..' },
    { index: 15, name: 'Nill', equity:'5%', amount:'25,000', details: '..' },
    { index: 16, name: 'Shakil', equity:'5%', amount:'25,000', details: '..' },
];
  
const DialogForInvestorEquity = () => {
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
            <DialogTitle  className="text-md sm:text-2xl font-semibold text-start">Investor (Equity)</DialogTitle>
            <DialogDescription>
                <p className="flex items-center gap-2"><UserRound className="size-4"></UserRound><span className="font-bold text-start">50</span></p>
            </DialogDescription>
                </DialogHeader>
                <ScrollArea className="w-full rounded-md">
                
                    <div className="">
                        <Table className='w-full'>
                            <TableHeader>
                            <TableRow>
                                    <TableHead className="text-xs sm:text-sm hidden">Serial</TableHead>
                                        <TableHead className=" text-xs sm:text-sm ">Name</TableHead>
                                        <TableHead className="text-xs sm:text-sm text-center">Equity</TableHead>
                                        <TableHead className="text-xs sm:text-sm text-center">Amount</TableHead>
                                    <TableHead className="text-xs sm:text-sm text-center">Details</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {currentData.map((investorEquity, index) => (
                                    <TableRow key={investorEquity.index}>
                                    <TableCell className='text-xs sm:text-sm hidden '>{(currentPage - 1) * itemsPerPage + index + 1}</TableCell>
                                    <TableCell className=" text-xs sm:text-sm">{investorEquity.name}</TableCell>
                                    <TableCell className=" text-xs sm:text-sm text-center">{investorEquity.equity}</TableCell>
                                    <TableCell className=" text-xs sm:text-sm text-center">{investorEquity.amount}</TableCell>
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

export default DialogForInvestorEquity;