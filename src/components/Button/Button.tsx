import { Button } from "@mui/material";
import { RedButtonProps } from "./types";

const RedButton = ({ buttonText, onClick }: RedButtonProps) => {
  return (
    <div>
      <Button
        variant="contained"
        style={{ backgroundColor: "#FF7474", color: "#FFF", fontWeight: 800 }}
        onClick={onClick}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export { RedButton };
