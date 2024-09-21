import { promoDataApi as data } from "@/api/PromoDataApi";
import TablePagination from "@/components/TablePagination";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Ellipsis, Eye, Filter,  Trash2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function PromoCodeOne() {

 

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  console.log(currentData);

  return (
    <div className=" px-5">
      {/* Main Table Content */}
      <div className="grid grid-cols-2 py-10">
       
        <div className="flex items-center gap-2 col-span-1 ">
          <Input className="py-5 md:w-2/3" placeholder="Search" />
          <div className="bg-[#139FAD] p-2 rounded-md"> 
           <Filter className=" text-white"  />
          </div>
        </div>
       
        <Link  to='/admin-dashboard/addpromo-code'  className="flex justify-end">
           <Button className="col-span-1  bg-[#139FAD]">Add Code</Button>
      </Link>
      </div>


      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>SI</TableHead>
            <TableHead>Promo Code</TableHead>
            <TableHead>Deduct Amount</TableHead>
            <TableHead>Active Users</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {currentData.map((product) => (
            <TableRow key={product.id}>
              {/* Product Info */}
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.promo_code}</TableCell>
              <TableCell>{product.deduct_amount}</TableCell>
              <TableCell>{product.active_users}</TableCell>
              

              <TableCell className="text-right">
                <div className="flex gap-2 items-center">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        {/* navigate to the product edit page */}

                        <Eye 
                        className="bg-[#EEF2F7] rounded-sm py-[5px] px-[8px]"
                          size={30}
                        />
                      </TooltipTrigger>
                 
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger>
                        <Trash2
                          className="bg-[#FDEFEF] text-red-500 rounded-sm py-[5px] px-[8px]"
                          size={30}
                        />
                      </TooltipTrigger>
                     
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger>
                        <Link to={`/admin-dashboard/promo-code/${product.promo_code}`}>
                        <Ellipsis
                          className="bg-[#EEF2F7] rounded-sm py-[5px] px-[8px]"
                          size={30}
                        />
                        </Link>
                      </TooltipTrigger>
                     
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* Pagination */}
      <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
        maxPageNumbersToShow={3}
      />
    </div>
  );
}

export default PromoCodeOne;
