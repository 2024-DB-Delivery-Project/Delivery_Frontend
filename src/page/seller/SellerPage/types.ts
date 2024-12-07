interface SellerRow {
  order_id: number;
  name: string;
  price: number;
  description: string;
  customer_id: number;
  address_id: number;
  logistic_id: number;
}

interface SellerCol {
  id: string;
  label: string;
  minWidth: number;
}

export { SellerRow, SellerCol };
