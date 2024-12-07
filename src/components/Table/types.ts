import {
  CustomerCol,
  CustomerRow,
} from "../../page/customer/CustomerPage/types";
import { SellerCol, SellerRow } from "../../page/seller/SellerPage/types";
import { LogisticsCol, LogisticsRow } from "../../page/logistics/types";

interface InfoTableTS {
  rows: CustomerRow[] | SellerRow[] | LogisticsRow[];
  cols: CustomerCol[] | SellerCol[] | LogisticsCol[];
}

export { InfoTableTS };
