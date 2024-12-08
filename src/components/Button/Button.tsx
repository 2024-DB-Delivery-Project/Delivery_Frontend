import { Button } from "@mui/material";
import { DisableButtonTS, RedButtonProps } from "./types";

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

const DisableButton = ({ buttonText }: DisableButtonTS) => {
  return (
    <div>
      <Button
        variant="contained"
        style={{ backgroundColor: "#CFCFCF", color: "#FFF", fontWeight: 800 }}
        onClick={() => {}}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export { RedButton, DisableButton };
