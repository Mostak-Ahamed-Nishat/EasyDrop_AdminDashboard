import { ProductListAdminApi as data } from "@/api/ProductListAdminApi.js";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Badge } from "@/components/ui/badge";

import { Eye, PencilLine, Trash2, Ellipsis, Star } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import prodImage from "../assets/images/prod.jpg"; // Update as needed
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";

function ProductPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Define how many items per page
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const maxPageNumbersToShow = 3; // Number of pages to show at a time

  // Get data for the current page
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate page numbers to display
  const pageNumbers = [];
  const halfMaxPages = Math.floor(maxPageNumbersToShow / 2);
  let startPage = Math.max(1, currentPage - halfMaxPages);
  let endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

  if (endPage - startPage < maxPageNumbersToShow - 1) {
    startPage = Math.max(1, endPage - maxPageNumbersToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
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
    {/* main content here----------------------- */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Variant</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="min-w-[280px]">
                <p className="mb-1">{product.id}</p>
                <span className="flex items-center">
                  <img
                    src={prodImage} // Replace this with product.image if you have dynamic images
                    alt="Product Image"
                    className="h-[90px] w-[140px] "
                  />
                  <p className="font-bold ml-2">{product.productName}</p>
                </span>
                <span className="flex gap-2 items-center mt-1">
                  <span className="flex items-center gap-1 bg-[#EEF2F7] rounded-sm p-[3px]">
                    <Star size={18} fill="#FFC700" color="#FFC700" />
                    {product.rating}
                  </span>
                  <p>{product.reviews} reviews</p>
                </span>
              </TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>
                <div className="flex flex-col gap-1 text-center items-start">
                  {product.variant.map((v, index) => (
                    <Badge
                      key={index}
                      className="rounded-sm bg-[#E4E2E2] text-[14px] text-[#262626] hover:bg-[#E4E2E2] cursor-pointer"
                    >
                      {v.color} {v.quantity}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell className="min-w-[180px]">
                <p className="text-[14px]">
                  Buying Price Tk {product.price.buying}
                </p>
                <p className="text-[14px]">
                  Resell Price Tk {product.price.resell}
                </p>
                <p className="text-[14px]">
                  Retail Price Tk {product.price.retail}
                </p>
                <p className="text-[14px]">
                  Suggested Price Tk {product.price.suggested}
                </p>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex gap-2 items-center">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Eye
                          className="bg-[#EEF2F7] rounded-sm py-[5px] px-[8px]"
                          size={30}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View Details</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger>
                        <PencilLine
                          className="bg-[#b5d0f0] rounded-sm py-[5px] px-[8px]"
                          size={30}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Edit Product</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger>
                        <Trash2
                          className="bg-[#f0c6b5] rounded-sm py-[5px] px-[8px]"
                          size={30}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Delete Product</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger>
                        <Ellipsis
                          className="bg-[#a1d6bc] rounded-sm py-[5px] px-[8px]"
                          size={30}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Settings</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* *******Pagination*********** */}
      <div className="text-right py-4">
        <Pagination>
          <PaginationContent className="inline-flex">
            <PaginationItem className="border-2 rounded-md">
              <PaginationPrevious
                href="#"
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              />
            </PaginationItem>

            {/* Display first page and ellipsis */}
            {startPage > 1 && (
              <>
                <PaginationItem>
                  <PaginationLink href="#" onClick={() => handlePageChange(1)}>
                    1
                  </PaginationLink>
                </PaginationItem>
                {startPage > 2 && <PaginationEllipsis />}
              </>
            )}

            {/* Display page numbers */}
            {pageNumbers.map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  onClick={() => handlePageChange(page)}
                  className={`${
                    currentPage === page
                      ? "bg-[#64449B] text-white"
                      : "hover:bg-[#64449B] hover:text-white"
                  }`}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            {/* Display ellipsis and last page */}
            {endPage < totalPages && (
              <>
                {endPage < totalPages - 1 && <PaginationEllipsis />}
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    onClick={() => handlePageChange(totalPages)}
                  >
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}

            <PaginationItem className="border-2 rounded-md">
              <PaginationNext
                href="#"
                onClick={() =>
                  handlePageChange(Math.min(currentPage + 1, totalPages))
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}

export default ProductPage;
