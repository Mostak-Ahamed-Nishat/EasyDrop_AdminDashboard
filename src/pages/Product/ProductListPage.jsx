import { ProductListAdminApi as data } from "@/api/ProductListAdminApi.js";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prodImage from "../../assets/images/prod.jpg";

import { Badge } from "@/components/ui/badge";
import { Ellipsis, Eye, PencilLine, Star, Trash2 } from "lucide-react";
import TablePagination from "@/components/TablePagination";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { NavLink } from "react-router-dom";

function ProductListPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
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

  return (
    <>
      {/* Main Table Content */}
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
              {/* Product Info */}
              <TableCell className="min-w-[280px]">
                <p className="mb-1">{product.id}</p>
                <span className="flex items-center">
                  <img
                    src={prodImage}
                    alt="Product Image"
                    className="h-[90px] w-[140px]"
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

              {/* Variant Info */}
              <TableCell>
                <div className="flex flex-col gap-1 text-center items-start">
                  {product.variant.map((v, index) => (
                    <Badge
                      key={index}
                      className="rounded-sm bg-[#E4E2E2] text-[14px] text-[#262626]"
                    >
                      {v.color} {v.quantity}
                    </Badge>
                  ))}
                </div>
              </TableCell>

              {/* Price Info */}
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
                        <NavLink to="/admin-dashboard/product/details">
                          <Ellipsis
                            className="bg-[#a1d6bc] rounded-sm py-[5px] px-[8px]"
                            size={30}
                          />
                        </NavLink>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Details</p>
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

export default ProductListPage;
