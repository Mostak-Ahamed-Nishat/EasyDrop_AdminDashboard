import { promoDataApi as data } from "@/api/PromoDataApi";
import TablePagination from "@/components/TablePagination";

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
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { PencilLine, Trash2 } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function PromoCodeOne() {
  const navigate = useNavigate();

  const goToProductEditPage = () => {
    navigate("/admin-dashboard/product/edit-product");
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get data for the current page
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  console.log(currentData);

  return (
    <>
      {/* Main Table Content */}
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

                        <PencilLine
                          onClick={goToProductEditPage}
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
    </>
  );
}

export default PromoCodeOne;
