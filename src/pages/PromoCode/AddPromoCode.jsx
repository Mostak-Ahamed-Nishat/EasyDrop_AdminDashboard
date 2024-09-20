import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";
import { Input } from "@/components/ui/input";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotifications } from "react-icons/io5"

import DatePickerPromo from "../PromoCode/DatePickerPromo"    
import { Textarea } from "@/components/ui/textarea";
    
function AddPromoCode() {
    return (
        <section className="p-5">

        {/* Header Avatar */}
        <div className="flex items-center gap-2 justify-end p-4 lg:p-5">
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
            
        <div className="flex items-center gap-10 md:pt-10 pb-5 w-4/6">
             <div className="grid w-full max-w-sm items-center gap-1.5 col-span-6">
                    <Label htmlFor="name" className="pb-2">Name</Label>
                    <Input type="text" id="name" placeholder="Name" className="py-6" />
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5
             ">
                    <Label htmlFor="name" className="pb-2">Amount</Label>
                    <Input type="text" id="name" placeholder="Name" className="py-6" />
                </div>

            </div>
               
            <div >
                    <Label >Date</Label>
                    <DatePickerPromo className="mt-2"/>
            </div>
            
            <div className="grid w-4/6  items-center gap-1.5 mt-5">
                    <Label htmlFor="name" className="pb-2">Description</Label>
                    <Textarea type="text" id="name" placeholder="Give a description    " className="" />
                </div>
            
      
        </section>
    )
}

export default AddPromoCode;
