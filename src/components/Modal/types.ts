import { LogisticsRow } from "../../page/logistics/types";

interface MatchingDriverTS {
  open: boolean;
  handleClose: () => void;
  deliverCity: string[];
  rows: LogisticsRow[];
}

export default MatchingDriverTS;
