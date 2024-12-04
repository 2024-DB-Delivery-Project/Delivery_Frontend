interface SellerRow {
  img: string;
  name: string;
  price: number;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  logistic: string | null;
  trackingNumber: string;
}

interface SellerCol {
  id: string;
  label: string;
  minWidth: number;
}

export { SellerRow, SellerCol };
