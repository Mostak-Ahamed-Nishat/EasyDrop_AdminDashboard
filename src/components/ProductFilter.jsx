import { Filter } from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";
import { Printer, PackagePlus, PackageSearch } from "lucide-react";
import ButtonProduct from "./ButtonProduct";

export default function ProductFilter() {
  const [filterData, setFilterData] = useState("");

  const onSubmitHandler = () => {
    console.log(filterData);
  };

  return (
    <>
      <form action="" onSubmit={onSubmitHandler}>
        <div className="flex mt-2 justify-between p-4 gap-2 flex-wrap">
          {/* Search input and filter button */}
          <span className="flex items-center gap-2 flex-1">
            <Input
              type="search"
              name="search_product"
              placeholder="Search Product"
              id="search_product"
              className="max-w-full md:max-w-[350px] w-full"
              onChange={(e) => setFilterData(e.target.value)}
            />
            <div className="bg-[#139FAD] p-1 rounded-md h-full cursor-pointer">
              <Filter className="m-1" color="#fff" onClick={onSubmitHandler} />
            </div>
          </span>

          {/* Button group */}
          <div className="flex gap-2 flex-wrap">
            <ButtonProduct label="Print View" icon={Printer} />
            <ButtonProduct label="Add Product" icon={PackagePlus} />
            <ButtonProduct label="Print Stock" icon={PackageSearch} />
          </div>
        </div>
      </form>
    </>
  );
}
