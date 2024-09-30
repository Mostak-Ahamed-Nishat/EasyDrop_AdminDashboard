import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";
import { Textarea } from '@/components/ui/textarea'
import { IoIosArrowDown } from 'react-icons/io';
import { IoNotifications } from 'react-icons/io5';


import { useState } from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,

} from "@/components/ui/popover"
import Header from '../Header/Header';


function CreateCommission() {

  const [date, setDate] = useState()
  const [enddate, setEndDate] = useState()

    return (
        <section className='md:p-6 p-2'>
{/* header section */}
           <Header />
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

          <div className="w-full col-span-3 grid gap-1.5 pb-5" >
                    <Label htmlFor="description" className="pb-2">Start Date</Label>
                    <Popover>
                     <PopoverTrigger asChild>
                       <Button
                        variant="outline"
                        className={cn("justify-start text-left font-normal", !date && "text-muted-foreground" )}>
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick starting date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
                      </Popover>
          </div>
          
          
          <div className="w-full col-span-3 grid gap-1.5" >
                    <Label htmlFor="description" className="pb-2">End Date</Label>
                    <Popover>
                     <PopoverTrigger asChild>
                       <Button
                        variant="outline"
                        className={cn("justify-start text-left font-normal", !enddate && "text-muted-foreground" )}>
          <CalendarIcon className="mr-2 h-4 w-4" />
          {enddate ? format(enddate, "PPP") : <span>Pick ending date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={enddate}
          onSelect={setEndDate}
          initialFocus
        />
      </PopoverContent>
                      </Popover>
            </div>

            </div>

            <div className="pt-5 flex gap-2  justify-end">
              <Button variant="outline" className="px-10">Cancle</Button>
              <Button className="bg-[#139FAD] px-10">Create</Button>
          </div>

        </section>
    )
}

export default CreateCommission
