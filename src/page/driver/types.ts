interface DriverRow {
  deliveryId: number;
  trackingNumber: string;
  name: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  city: string;
  buttton: JSX.Element;
}

interface DriverCol {
  id: string;
  label: string;
  minWidth: number;
}

interface DriverOrderTS {
  order_by: "delivery_id" | "detailed_address" | "customer_name";
}

export { DriverRow, DriverCol, DriverOrderTS };
