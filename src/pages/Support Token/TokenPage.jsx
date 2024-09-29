import { tokenListDataApi as data } from "@/api/token/tokenListDataApi";
import ButtonFill from "@/components/ButtonFill";
import TablePagination from "@/components/TablePagination";
import TokenHeader from "@/components/TokenHeader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TokenPage() {
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

  const navigate = useNavigate();

  return (
    <div className="p-4">
      <TokenHeader />
      <div className="border-2 rounded-lg mt-4 mx-4 shadow-[#aaa3a3] shadow-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ticket Number</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Last response</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((token) => (
              <TableRow key={token.id}>
                <TableCell className="font-medium">
                  {token.token_number}
                </TableCell>
                <TableCell className="font-medium">{token.subject}</TableCell>
                <TableCell className="font-medium">
                  {token.last_response}
                </TableCell>
                <TableCell className="font-medium">{token.priority}</TableCell>
                <TableCell>
                  <span className="border-2 p-2 rounded-md font-medium">
                    {token.status}
                  </span>
                </TableCell>
                <TableCell>
                  <ButtonFill
                    label="View Details"
                    onClick={() => {
                      return navigate(
                        `/admin-dashboard/support/details/${token.token_number}`
                      );
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="text-right py-4 mt-4">
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

export default TokenPage;
