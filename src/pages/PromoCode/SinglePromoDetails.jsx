import { Ellipsis } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut,MenubarTrigger } from "@/components/ui/menubar";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PromoCodeUserList } from '@/api/promoCode/PromoCodeUserData';
import { promoDataApi } from '@/api/promoCode/PromoDataApi';


const SinglePromoDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  
  const promoCodeData = location.state?.selectedPromoCode ? [location.state.selectedPromoCode] : [];

  const handlePromoCode = () => {
    if (promoCodeData.length > 0) {
      navigate("/admin-dashboard/promo-code-details", { state: { promoCodeData, combinedData } });
    }
  };

  
  const combinedData = [...promoCodeData, ...PromoCodeUserList, ...promoDataApi];

  // console.log(combinedData);
  // console.log(promoCodeData);

  return (
    <section>
      {/* Header */}
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
              <MenubarContent className="mt-5">
                <MenubarItem>Settings <MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
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

      {/* Promo Code Info */}
      <div className="md:p-5">
        <div className="grid grid-cols-2 pb-5">
          <h1 className="font-extrabold">Promo Code: <span className='text-gray-500'>{promoCodeData.length > 0 ? promoCodeData[0].promo_code : "N/A"}</span></h1>
          <div className="flex justify-end">
            <button
              onClick={handlePromoCode}
              className="bg-[#EEF2F7] md:w-[50px] w-[30px] md:h-[45px] h-[30px] flex items-center justify-center rounded-md">
              <Ellipsis />
            </button>
          </div>
        </div>

        {/* Promo Code Data Table */}
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
            
            {PromoCodeUserList.map((singleP) => (
              <TableRow key={singleP.id}>
                <TableCell>{singleP.userId || "N/A"}</TableCell>
                <TableCell>{singleP.user_nameL || "N/A"}</TableCell>
                <TableCell>{singleP.company_name || "N/A"}</TableCell>
                <TableCell>{singleP.status || "N/A"}</TableCell>
                <TableCell>{singleP.register_date || "N/A"}</TableCell>
              </TableRow>
            ))}
            
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default SinglePromoDetails;
