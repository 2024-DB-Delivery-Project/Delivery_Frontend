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

interface DeliveryStatus {
  order_id: number;
  delivery_status: "Received" | "Processing" | "Shipped" | "Delivered";
}

interface DeliveryStatusResponse {
  user_id: number;
  delivery_statuses: DeliveryStatus[];
}

interface SignupData {
  name: string;
  phone_number: string;
  role: string;
  address_id: number;
  login_id: string;
  password: string;
}

interface AddressInfo {
  city: string;
  town: string;
  village: string;
}

export {
  Order,
  BoughtListResponse,
  DeliveryStatus,
  DeliveryStatusResponse,
  SignupData,
  AddressInfo,
};
