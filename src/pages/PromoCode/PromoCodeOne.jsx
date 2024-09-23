import { promoDataApi } from "@/api/promoCode/PromoDataApi";
import TablePagination from "@/components/TablePagination";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow,} from "@/components/ui/table";
import {Tooltip,TooltipProvider,TooltipTrigger} from "@radix-ui/react-tooltip";
import { Ellipsis, Eye, Filter,  Trash2 } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const PromoCodeOne= () => {
  const navigate = useNavigate();

  const handleActionClick = (data) => {
    navigate("/admin-dashboard/single-promo-code", { state: { selectedPromoCode: data } });
  };

  // pagination-------
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(promoDataApi.length / itemsPerPage);

  // Get data for the current page
  const currentData = promoDataApi.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    };

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
          {currentData.map((promo) => (
            <TableRow key={promo.idForList}>
              {/* Product Info */}
              <TableCell>{promo.idForList}</TableCell>
              <TableCell>{promo.promo_code}</TableCell>
              <TableCell>{promo.deduct_amount}</TableCell>
              <TableCell>{promo.active_users}</TableCell>
              

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
                      <div
                          onClick={() => handleActionClick(promo)}
                          className="bg-[#EEF2F7] rounded-sm py-[5px] px-[8px]"
                        >
                          <Ellipsis size={20} />
                        </div>
                      </TooltipTrigger>
                     
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableCell>
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
  );
}

export default PromoCodeOne;
