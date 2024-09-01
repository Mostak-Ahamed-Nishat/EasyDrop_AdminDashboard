import { Button } from "./ui/button";

function ButtonFill({ label, onClick }) {
  return (
    <Button
      onClick={onClick}
      className="bg-[#139FAD] hover:bg-[#139FAD] text-white text-md font-medium"
    >
      {label}
    </Button>
  );
}

export default ButtonFill;
