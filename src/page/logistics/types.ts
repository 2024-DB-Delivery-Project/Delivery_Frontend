interface LogisticsRow {
  name: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  trackingNumber: string;
}

interface LogisticsCol {
  id: string;
  label: string;
  minWidth: number;
}

interface PurchaseButtonTS {
  ispurchased: boolean;
  product_id: number;
}

export { LogisticsRow, LogisticsCol, PurchaseButtonTS };
