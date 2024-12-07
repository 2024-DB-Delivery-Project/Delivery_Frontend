interface SellerRow {
  order_id: number;
  name: string;
  price: number;
  description: string;
  customer_id: number;
  address_id: number;
  logistic_id: number;
  tracking_number: number | null;
}

interface SellerCol {
  id: string;
  label: string;
  minWidth: number;
}

export { SellerRow, SellerCol };
