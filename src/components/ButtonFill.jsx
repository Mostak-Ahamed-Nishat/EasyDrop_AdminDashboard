import { Button } from "./ui/button";

function ButtonFill({
  label,
  onClick,
  color = "bg-[#139FAD] hover:bg-[#139FAD]",
}) {
  return (
    <Button
      onClick={onClick}
      className={` ${color} text-white text-md font-medium`}
    >
      {label}
    </Button>
  );
}

export default ButtonFill;
