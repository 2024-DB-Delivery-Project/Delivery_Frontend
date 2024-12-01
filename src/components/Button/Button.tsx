import { Button } from "@mui/material";
import { RedButtonProps } from "./types";

const RedButton = ({ buttonText }: RedButtonProps) => {
  return (
    <div>
      <Button
        variant="contained"
        style={{ backgroundColor: "#FF7474", color: "#FFF", fontWeight: 800 }}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export { RedButton };
