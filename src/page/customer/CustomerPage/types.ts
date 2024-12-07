interface CustomerRow extends Product {
  button: React.ReactNode;
}

interface CustomerCol {
  id: string;
  label: string;
  minWidth: number;
}

interface PurchaseButton {
  ispurchased: boolean;
}

interface Product {
  product_id: number;
  name: string;
  price: number;
  description: string;
}

interface CustomerTS {
  productList: Product[];
}

interface CustomerDeliveryInfoTS {
  order_id: number;
  delivery_status: "Received" | "Processing" | "Shipped" | "Delivered";
}

export {
  CustomerRow,
  CustomerCol,
  PurchaseButton,
  CustomerTS,
  Product,
  CustomerDeliveryInfoTS,
};
