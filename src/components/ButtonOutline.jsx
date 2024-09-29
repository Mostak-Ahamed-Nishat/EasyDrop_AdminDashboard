import { Button } from "./ui/button";

function ButtonOutline({ label, onclick, color = "bg-none" }) {
  return (
    <Button variant="outline" onclick={onclick}>
      {label}
    </Button>
  );
}

export default ButtonOutline;
