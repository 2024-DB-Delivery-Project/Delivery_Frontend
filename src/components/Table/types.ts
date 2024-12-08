import {
  CustomerCol,
  CustomerRow,
} from "../../page/customer/CustomerPage/types";
import { SellerCol, SellerRow } from "../../page/seller/SellerPage/types";
import { LogisticsCol, LogisticsRow } from "../../page/logistics/types";
import { DriverCol, DriverRow } from "../../page/driver/types";

interface InfoTableTS {
  rows: CustomerRow[] | SellerRow[] | LogisticsRow[] | DriverRow[];
  cols: CustomerCol[] | SellerCol[] | LogisticsCol[] | DriverCol[];
}

export { InfoTableTS };
