import { Ellipsis } from 'lucide-react';
import { Link, NavLink, useLocation, useParams } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotifications } from "react-icons/io5"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

import { PromoCodeUserList as userData } from "@/api/PromoCodeUserData";


function SinglePromoDetails({productInfoData}) {

  const location = useLocation();
  const { productInfoData } = location.state || {};

  console.log(productInfoData);
    const { code } = useParams();
    
    
    return (
        <section>

            {/* header */}
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
            {/* header */}
            
        <div className='md:p-5'>
            <div className='grid grid-cols-2 pb-5'>
                <h1 className='font-extrabold'>Promo Code: {code}</h1>
            <div className="flex justify-end ">
              
              <NavLink
                
                to='/admin-dashboard/promoCodeInfo'
                            className=" bg-[#EEF2F7] md:w-[50px] w-[30px] md:h-[45px] h-[30px] flex items-center justify-center rounded-md">
                            <Ellipsis  className="" />
                     </NavLink>
            

                </div>
                </div>
                

                <Table>
        <TableHeader>
          <TableRow>
            <TableHead>SI</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Company Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Register Date</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {userData.map((user) => (
            <TableRow key={user.userId}>
              {/* user Info */}
              <TableCell>{user.userId}</TableCell>
              <TableCell>{user.user_name}</TableCell>
              <TableCell>{user.company_name}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>{user.register_date}</TableCell>
              

             
            </TableRow>
          ))}
        </TableBody>
      </Table>

        </div>
            
        </section>
    )
}

export default SinglePromoDetails
