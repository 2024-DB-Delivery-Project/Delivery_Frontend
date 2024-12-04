import { Button } from "@mui/material";
import InfoTable from "../../../components/Table/Table";
import { CustomerCol, CustomerRow, PurchaseButton } from "./types";

const CustomerHome = () => {
  const purchaseButton = ({ ispurchased }: PurchaseButton) => {
    return (
      <Button
        style={{
          backgroundColor: ispurchased ? "#CFCFCF" : "#FF7474",
          color: "#FFF",
          fontWeight: 800,
        }}
        onClick={
          ispurchased ? undefined : () => alert("상품을 구매하였습니다.")
        }
      >
        상품 구매하기
      </Button>
    );
  };

  const cols: CustomerCol[] = [
    { id: "img", label: "이미지", minWidth: 120 },
    { id: "name", label: "상품명", minWidth: 120 },
    { id: "price", label: "가격", minWidth: 170 },
    { id: "button", label: "구매하기", minWidth: 170 },
  ];

  const rows: CustomerRow[] = [
    {
      img: "🍔",
      name: "상품A",
      price: 3000,
      button: purchaseButton({ ispurchased: false }),
    },
    {
      img: "⚽",
      name: "상품B",
      price: 10000,
      button: purchaseButton({ ispurchased: false }),
    },
    {
      img: "🧢",
      name: "상품C",
      price: 15000,
      button: purchaseButton({ ispurchased: false }),
    },
    {
      img: "💼",
      name: "상품D",
      price: 40000,
      button: purchaseButton({ ispurchased: true }),
    },
  ];

  return (
    <div className="flex flex-col w-full px-16 py-8 gap-4">
      <div className="flex flex-col gap-2 mb-4">
        <div className="text-2xl font-bold">물품구매</div>
        <div className="text-sm text-gray-500">
          물품은 한번에 하나만 구매 가능합니다. 구매하고자 하는 상품을 선택한 후
          물품 구매 버튼을 눌러주세요
        </div>
      </div>
      <InfoTable cols={cols} rows={rows} />
    </div>
  );
};

export default CustomerHome;
