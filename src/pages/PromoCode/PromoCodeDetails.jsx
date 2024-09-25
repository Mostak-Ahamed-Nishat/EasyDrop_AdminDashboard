import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";
import { Input } from "@/components/ui/input";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import DatePickerPromo from "./DatePickerPromo";
import { Textarea } from "@/components/ui/textarea";
import { PencilLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const PromoCodeDetails =() => {
  const location = useLocation();
  const { promoCodeData, combinedData } = location.state || {};

  const [promoName, setPromoName] = useState(promoCodeData?.[0]?.promo_code || "");
  const [promoAmount, setPromoAmount] = useState(promoCodeData?.[0]?.deduct_amount || "");
  const [promoDate, setPromoDate] = useState(combinedData?.[0]?.register_date || new Date());
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (promoCodeData?.[0]) {
      setPromoName(promoCodeData[0].promo_code);
      setPromoAmount(promoCodeData[0].deduct_amount);
    }
    if (combinedData?.[0]) {
      setPromoDate(combinedData[0].register_date);
    }
  }, [promoCodeData, combinedData]);



  return (
    <section className="md:p-5 p-1">
      {/* Header Avatar */}
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

      <div className="md:p-4 px-1 md:px-0 ">
        <div className="flex justify-end pb-5 pt-5 md:p-4">
          <div className="bg-[#EEF2F7] md:w-[50px] w-[30px] md:h-[45px] h-[30px] flex items-center justify-center rounded-md">
            <PencilLine />
          </div>
        </div>

        <div className="md:grid grid-cols-6 gap-10 md:pt-10 pb-5 md:w-5/6">
          {/* Name input with default value */}
          <div className="grid w-full pb-5 md:pb-0 gap-1.5 col-span-3">
            <Label htmlFor="name" className="pb-2">Name</Label>
            <Input
              type="text"
              id="name"
              placeholder="Name"
              className="py-6"
              value={promoName}
              onChange={(e) => setPromoName(e.target.value)}
            />
          </div>

          {/* Amount input with default value */}
          <div className="grid w-full pb-5 md:pb-0 items-center gap-1.5 col-span-3">
            <Label htmlFor="amount" className="pb-2">Amount</Label>
            <Input
              type="number"
              id="amount"
              placeholder="Amount"
              className="py-6"
              value={promoAmount}
              onChange={(e) => setPromoAmount(e.target.value)}
            />
          </div>
          {/* Date----- */}
          <div className="w-full col-span-3">
          <Label>Date</Label>
          <DatePickerPromo
            className="mt-2"
            selectedDate={promoDate}  
          />
        </div>
        </div>

        {/* Description input */}
        <div className="grid md:w-5/6 items-center gap-1.5 md:mt-5">
          <Label htmlFor="description" className="pb-2">Description</Label>
          <Textarea
            id="description"
            placeholder="Give a description"
            className=""
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Action buttons */}
        <div className="pt-5 flex gap-2 justify-end w-5/6">
          <Button variant="outline" className="px-10">Cancel</Button>
          <Button className="bg-[#139FAD] px-10">Create</Button>
        </div>
      </div>
    </section>
  );
}

export default PromoCodeDetails;
