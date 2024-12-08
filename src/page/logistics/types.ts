interface LogisticsRow {
  trackingNumber: string;
  name: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  city: string;
}

interface LogisticsCol {
  id: string;
  label: string;
  minWidth: number;
}

interface PurchaseButtonTS {
  ispurchased: boolean;
  product_id: number;
  onPurchaseSuccess: (productId: number) => void;
}

export { LogisticsRow, LogisticsCol, PurchaseButtonTS };
