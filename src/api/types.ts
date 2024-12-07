interface Order {
  order_id: number;
  product_name: string;
  product_price: number;
  customer_name: string;
  customer_phone_number: string;
  city: string;
  town: string;
  village: string;
}

interface BoughtListResponse {
  orders: Order[];
}
export { Order, BoughtListResponse };
