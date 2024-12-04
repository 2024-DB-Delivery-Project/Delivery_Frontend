interface CustomerRow {
  img: string;
  name: string;
  price: number;
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

export { CustomerRow, CustomerCol, PurchaseButton };
