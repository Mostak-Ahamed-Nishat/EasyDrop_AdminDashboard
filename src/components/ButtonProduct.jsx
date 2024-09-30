import React from "react";
import { Button } from "./ui/button";

function ButtonProduct({
  onClick,
  label,
  icon,
  color = "bg-[#139FAD] hover:bg-[#139FAD]",
}) {
  return (
    <Button
      onClick={onClick}
      className={` ${color} text-white text-md font-medium flex items-center justify-center`}
    >
      {/* Show only icon on small screens */}
      <span className="block sm:hidden">{React.createElement(icon)}</span>
      {/* Show only label on medium screens */}
      <span className="hidden sm:block md:hidden">{label}</span>
      {/* Show both label and icon on larger screens */}
      <span className="hidden md:flex items-center gap-2">
        {React.createElement(icon)} {label}
      </span>
    </Button>
  );
}

export default ButtonProduct;
