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

export { DriverRow, DriverCol };
