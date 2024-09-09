import { useState } from "react";
import { AnnouncementDataApi as data } from "@/api/AnnouncementDataApi.js";
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
import { NavLink } from "react-router-dom";

function AnnouncementPage() {
  //  ***** Pagination Logic start****
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
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
        <NavLink to="/admin-dashboard/create-announccement">
          <ButtonFill label="Create Announcement" />
        </NavLink>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left">SL</TableHead>
            <TableHead className="text-center">Announcement</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map((item) => (
            <TableRow key={item.id}>
              {/* Image */}
              <TableCell className="font-medium text-[#000000] text-left">
                {item.sl}
              </TableCell>

              {/* Category  */}
              <TableCell className="text-[#000000] text-center">
                {item.announcement}
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

export default AnnouncementPage;
