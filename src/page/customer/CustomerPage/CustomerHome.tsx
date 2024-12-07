import { Button } from "@mui/material";
import InfoTable from "../../../components/Table/Table";
import { CustomerCol, CustomerRow, CustomerTS, Product } from "./types";
import { useEffect, useState } from "react";
import { PurchaseButton } from "../../../components/Button/PurchaseButton";
import { useRecoilValue } from "recoil";
import { authState } from "../../../state/auth";

const CustomerHome = ({ productList }: CustomerTS) => {
  const { accessToken, userId } = useRecoilValue(authState); // Recoil에서 accessToken과 userId 가져오기
  const [rows, setRows] = useState<CustomerRow[]>([]); // rows 상태 관리
  const [purchasedProducts, setPurchasedProducts] = useState<number[]>([]);

  const cols: CustomerCol[] = [
    { id: "name", label: "상품명", minWidth: 120 },
    { id: "price", label: "가격", minWidth: 120 },
    { id: "description", label: "상품 설명", minWidth: 170 },
    { id: "button", label: "구매하기", minWidth: 170 },
  ];

  useEffect(() => {
    if (Array.isArray(productList)) {
      const newRows = productList.map((product: Product) => ({
        product_id: product.product_id,
        name: product.name,
        price: product.price,
        description: product.description,
        button: (
          <PurchaseButton ispurchased={false} product_id={product.product_id} />
        ),
      }));
      setRows(newRows);
    }
    console.log("productList", productList);
  }, [productList, purchasedProducts]);

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
