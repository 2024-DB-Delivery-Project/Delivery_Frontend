import { RedButton } from "../../../components/Button/Button";
import InfoTable from "../../../components/Table/Table";
import { SellerCol, SellerRow } from "./types";

const SellerHome = () => {
  const cols: SellerCol[] = [
    { id: "img", label: "이미지", minWidth: 100 },
    { id: "name", label: "상품명", minWidth: 100 },
    { id: "price", label: "가격", minWidth: 100 },
    { id: "customerName", label: "구매자 이름", minWidth: 100 },
    { id: "customerPhone", label: "구매자 전화번호", minWidth: 120 },
    { id: "customerAddress", label: "구매자 주소", minWidth: 120 },
    { id: "logistic", label: "운송회사", minWidth: 100 },
    { id: "trackingNumber", label: "운송장번호", minWidth: 100 },
  ];

  const rows: SellerRow[] = [
    {
      img: "🍔",
      name: "상품A",
      price: 3000,
      customerName: "customerA",
      customerPhone: "010-1234-5678",
      customerAddress: "서울시 강남구",
      logistic: null,
      trackingNumber: "-",
    },
    {
      img: "🍔",
      name: "상품A",
      price: 3000,
      customerName: "customerB",
      customerPhone: "010-1234-5678",
      customerAddress: "부산시 금정구",
      logistic: null,
      trackingNumber: "-",
    },
    {
      img: "💼",
      name: "상품D",
      price: 3000,
      customerName: "customerB",
      customerPhone: "010-1234-5678",
      customerAddress: "부산시 금정구",
      logistic: null,
      trackingNumber: "2134",
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
      <RedButton buttonText="물류 회사로 정보 전송 >>" />
    </div>
  );
};
export default SellerHome;
