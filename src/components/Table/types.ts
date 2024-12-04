import { SelectChangeEvent } from "@mui/material";
import {
  CustomerCol,
  CustomerRow,
} from "../../page/customer/CustomerPage/types";
import { SellerCol, SellerRow } from "../../page/seller/SellerPage/types";

interface InfoTableTS {
  rows: CustomerRow[] | SellerRow[];
  cols: CustomerCol[] | SellerCol[];
}

interface HandleChange {
  event: SelectChangeEvent<number>;
  index: number;
}

interface LogisticSelector {
  id: string;
  index: number;
}

export { InfoTableTS, HandleChange, LogisticSelector };
