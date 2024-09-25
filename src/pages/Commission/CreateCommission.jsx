import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";
import { Textarea } from '@/components/ui/textarea'
import { IoIosArrowDown } from 'react-icons/io';
import { IoNotifications } from 'react-icons/io5'

function CreateCommission() {
    return (
        <section className='p-6'>
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

        <div className=" md:pt-10  md:w-2/6">
             <div className="grid w-full pb-5  gap-1.5 col-span-3">
                    <Label htmlFor="name" className="pb-2">Name</Label>
                    <Input type="text" id="name" placeholder="Name" className="py-6" />
                </div>

                <div className="grid w-full pb-5  items-center gap-1.5 col-span-3">
                    <Label htmlFor="amount" className="pb-2 ">Amount</Label>
                    <Input type="number" id="amount" placeholder="Amount" className="py-6" />
          </div>
          
          <div className="grid  items-center gap-1.5 pb-5">
                    <Label htmlFor="description" className="pb-2">Description</Label>
                    <Textarea type="text" id="description" placeholder="Give a description    " className="" />
                </div>

          <div className="w-full col-span-3" >
                    <Label >Date</Label>
                    {/* <DatePickerPromo className="mt-2"/> */}
            </div>

            </div>

            <div className="pt-5 flex gap-2 justify-end">
              <Button variant="outline" className="px-10">Cancle</Button>
              <Button className="bg-[#139FAD] px-10">Create</Button>
          </div>

        </section>
    )
}

export default CreateCommission
