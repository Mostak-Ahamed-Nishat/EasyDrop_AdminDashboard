import { useState } from "react";
import { productCategory as data } from "@/api/products/ProductCategoryApi.js";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, PencilLine, Trash2 } from "lucide-react";
import ButtonFill from "@/components/ButtonFill";
import TablePagination from "@/components/TablePagination";

function ProductCategoryList() {
  //  ***** Pagination Logic start****
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
  //  ***** Pagination Logic End****

  return (
    <div className="pr-8 mt-8">
      {/* Container for controlling table width */}
      {/* <div className="w-full float-left lg:w-1/2 mx-auto"> */}
        <div className="flex justify-end">
          <ButtonFill label="Add Category" />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left">Image</TableHead>
              <TableHead className="text-center">Category</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((item) => (
              <TableRow key={item.id}>
                {/* Image */}
                <TableCell className="font-medium text-[#000000] text-left">
                  <img
                    src="../../../public/images/products/pro-2.jpg"
                    alt="Product Image"
                    className="h-[70px] w-[110px] object-center object-cover rounded-md"
                  />
                </TableCell>

                {/* Category  */}
                <TableCell className="text-[#000000] text-center">
                  {item.category}
                </TableCell>

                <TableCell className="text-right">
                  <div className="flex justify-end items-center gap-4">
                    <Eye
                      className="bg-[#EEF2F7] rounded-sm py-[5px] px-[8px] flex items-center justify-center"
                      size={30}
                    />
                    <PencilLine
                      className="bg-[#dbfae8] rounded-sm py-[5px] px-[8px] flex items-center justify-center"
                      size={30}
                    />
                    <Trash2
                      className="bg-[#ebc8c3] rounded-sm py-[5px] px-[8px] flex items-center justify-center"
                      size={30}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="text-right py-4">
          <TablePagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
            maxPageNumbersToShow={3}
          />
        </div>
      </div>
    // </div>
  );
}

export default ProductCategoryList;
