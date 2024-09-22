import { promoDataApi } from "@/api/promoCode/PromoDataApi";
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
import { Link, useNavigate } from "react-router-dom";

const PromoCodeOne= () => {
  
  

  const navigate = useNavigate();

  const handleActionClick = (data) => {
    navigate("/admin-dashboard/single-promo-code", { state: { selectedPromoCode: data } });
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
          {promoDataApi.map((promo) => (
            <TableRow key={promo.id}>
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
                        <button
                         onClick={() => handleActionClick(promo)}
                         >
                          <Ellipsis
                           
                          className="bg-[#EEF2F7] rounded-sm py-[5px] px-[8px]"
                          size={30}
                        />
                        </button>
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
      {/* <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
        maxPageNumbersToShow={3}
      /> */}
    </div>
  );
}

export default PromoCodeOne;
