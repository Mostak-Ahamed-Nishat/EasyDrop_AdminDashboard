import { Plus } from "lucide-react";
import ButtonProduct from "./ButtonProduct";
import { Input } from "./ui/input";
import { useNavigate } from "react-router-dom";
function TokenHeader() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between mt-4 px-4">
      <ButtonProduct
        icon={Plus}
        label="Open Ticket"
        onClick={() => {
          navigate("/admin-dashboard/support/create");
        }}
      />
      <span className="flex items-center gap-2">
        <label htmlFor="Search" className="text-[#777777] font-semibold">
          Search
        </label>
        <Input type="text" id="Search" placeholder="Search" />
      </span>
    </div>
  );
}

export default TokenHeader;
