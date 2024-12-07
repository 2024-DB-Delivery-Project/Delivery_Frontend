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

interface PurchaseButton {
  ispurchased: boolean;
}

export { LogisticsRow, LogisticsCol, PurchaseButton };
