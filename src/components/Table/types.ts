interface Rows {
  img: string;
  name: string;
  price: number;
  button: React.ReactNode;
}

interface Cols {
  id: string;
  label: string;
  minWidth: number;
}

interface PurchaseButton {
  ispurchased: boolean;
}

export { Rows, Cols, PurchaseButton };
