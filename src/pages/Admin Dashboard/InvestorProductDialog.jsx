import TablePagination from "@/components/TablePagination";
import {Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogTrigger,} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { UserRound } from "lucide-react";
import { useState } from "react";
import InvestorProductProfile from "./InvestorProductProfile";



const InvestorProductDialogData = [
    { index: 1, name: 'HeadPhone mi 2', productQut:'02', amount:'25,555',  details: '..' },
    { index: 2, name: 'HeadPhone mi 2', productQut:'02', amount:'25,555',  details: '..' },
    { index: 3, name: 'HeadPhone mi 2', productQut:'02', amount:'25,555',  details: '..' },
    { index: 4, name: 'HeadPhone mi 2', productQut:'02', amount:'25,555',  details: '..' },
    { index: 5, name: 'Charger xyz mini', productQut:'08', amount:'25,555',  details: '..' },
    { index: 6, name: 'HeadPhone mi 2', productQut:'02', amount:'25,555',  details: '..' },
    { index: 7, name: 'HeadPhone mi 2', productQut:'02', amount:'25,555',  details: '..' },
    { index: 8, name: 'Fan mini light', productQut:'02', amount:'25,555',  details: '..' },
    { index: 9, name: 'Fan mini light', productQut:'02', amount:'25,555',  details: '..' },
    { index: 10, name: 'Fan mini light', productQut:'02', amount:'25,555',  details: '..' },
    { index: 11, name: 'Fan mini light', productQut:'02', amount:'25,555',  details: '..' },
    { index: 12, name: 'Fan mini light', productQut:'03', amount:'25,555',  details: '..' },
    { index: 13, name: 'Fan mini light', productQut:'02', amount:'25,555',  details: '..' },
    { index: 14, name: 'Fan mini light', productQut:'02', amount:'25,555',  details: '..' },
    { index: 15, name: 'Fan mini light', productQut:'02', amount:'25,555',  details: '..' },
    { index: 16, name: 'HeadPhone mi 2', productQut:'04', amount:'25,555',  details: '..' },
  ];

const InvestorProductDialog = () => {
    // pagination-------
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const totalPages = Math.ceil(InvestorProductDialogData.length / itemsPerPage);
  
    // Get data for the current page
    const currentData = InvestorProductDialogData.slice(
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
            <DialogTitle  className="text-md sm:text-2xl font-semibold text-start">Investor (Product)</DialogTitle>
            <DialogDescription>
                <p className="flex items-center gap-2"><UserRound className="size-4"></UserRound><span className="font-bold text-start">10</span></p>
            </DialogDescription>
                </DialogHeader>
                <ScrollArea className="w-full rounded-md">
                
                    <div className="">
                        <Table className='w-full'>
                            <TableHeader>
                            <TableRow>
                                    <TableHead className="text-xs sm:text-sm hidden">Serial</TableHead>
                                        <TableHead className=" text-xs sm:text-sm ">Name</TableHead>
                                        <TableHead className="text-xs sm:text-sm">Product Qut</TableHead>
                                        <TableHead className="text-xs sm:text-sm ">Amount</TableHead>
                                    <TableHead className="text-xs sm:text-sm text-center">Details</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {currentData.map((investorProduct, index) => (
                                    <TableRow key={investorProduct.index}>
                                    <TableCell className='text-xs sm:text-sm hidden '>{(currentPage - 1) * itemsPerPage + index + 1}</TableCell>
                                    <TableCell className=" text-xs sm:text-sm">{investorProduct.name}</TableCell>
                                    <TableCell className=" text-xs sm:text-sm max-w-10 truncate">{investorProduct.productQut}</TableCell>
                                    <TableCell className=" text-xs sm:text-sm ">{investorProduct.amount}</TableCell>
                                    
                                        <TableCell className="text-center text-xs">
                                            {/* dialogForverdor--------popup TODO here another popUp */}
                                            <InvestorProductProfile></InvestorProductProfile>
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

export default InvestorProductDialog;