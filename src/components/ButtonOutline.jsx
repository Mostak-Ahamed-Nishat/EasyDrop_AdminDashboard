import { Button } from "./ui/button";

function ButtonOutline({ label, onclick }) {
  return <Button onclick={onclick}>{label}</Button>;
}

export default ButtonOutline;
