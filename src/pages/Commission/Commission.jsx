import { CommissionDataApi as data } from "@/api/CommissionDataApi";
import { Button } from "@/components/ui/button";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";
import { IoIosArrowDown } from 'react-icons/io';
import { IoNotifications } from 'react-icons/io5'
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
import { Ellipsis, Eye,   Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Commission() {


const navigate = useNavigate()
 
const handleEllipsisClick = (commissionId) => {
    navigate(`/admin-dashboard/commission-details/${commissionId}`);
    };
    

  return (
      <div className=" px-5">
          
          {/* header section */}
          <div className="flex items-center gap-2 justify-end md:p-4 p-2 lg:p-5">
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
            <div>
              <IoNotifications />
            </div>
          </div>

          <div className="hidden sm:block">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger><IoIosArrowDown /></MenubarTrigger>
                <MenubarContent className='mt-5'>
                  <MenubarItem>
                    Settings <MenubarShortcut>⌘T</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
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
            {/* header section */}
      {/* Main Table Content */}
      <div className="grid grid-cols-1 py-10">
       
        <Link  to='/admin-dashboard/create_commission'  className="flex justify-end">
           <Button className="col-span-1  bg-[#139FAD]">Create Commission</Button>
              </Link>
              
      </div>


      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>SI</TableHead>
            <TableHead>Commission Name</TableHead>
            <TableHead>Commission Amount</TableHead>
            
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((commission) => (
            <TableRow key={commission.id}>
              {/* Product Info */}
              <TableCell>{commission.id}</TableCell>
              <TableCell>{commission.commission_name}</TableCell>
              <TableCell>{commission.commission_amount}</TableCell>
              
              

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
                      <Link onClick={() => handleEllipsisClick(commission.id)}>
                          <Ellipsis className="bg-[#EEF2F7] rounded-sm py-[5px] px-[8px]" size={30} />
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
     
    </div>
  );
}

export default Commission;
