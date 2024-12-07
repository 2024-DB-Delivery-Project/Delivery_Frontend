import { useEffect, useState } from "react";
import { RedButton } from "../../../components/Button/Button";
import InfoTable from "../../../components/Table/Table";
import { SellerCol, SellerRow } from "./types";
import { useRecoilValue } from "recoil";
import { authState } from "../../../state/auth";
import { getSellerOrders, selectLogistic } from "../../../api/sellerApi";

const SellerHome = () => {
  const [rows, setRows] = useState<SellerRow[]>([]);
  const { accessToken } = useRecoilValue(authState);
  const [complete, setComplete] = useState<boolean>(false);

  const cols: SellerCol[] = [
    { id: "name", label: "상품명", minWidth: 100 },
    { id: "price", label: "가격", minWidth: 100 },
    { id: "description", label: "상품 설명", minWidth: 150 },
    { id: "customer_id", label: "고객 ID", minWidth: 100 },
    { id: "address_id", label: "주소 ID", minWidth: 100 },
    { id: "logistic_id", label: "운송회사 ID", minWidth: 100 },
    { id: "tracking_number", label: "운송장번호", minWidth: 100 },
  ];

  const mockClickFunction = async () => {
    try {
      for (const row of rows) {
        await selectLogistic(row.order_id);
      }
      console.log("모든 주문의 물류 정보가 성공적으로 업데이트되었습니다.");
      setComplete(true);
    } catch (error) {
      console.error("일괄 업데이트 중 오류가 발생했습니다.", error);
    }
  };

  useEffect(() => {
    if (accessToken) {
      const fetchPurchasedProducts = async () => {
        try {
          const response = await getSellerOrders(accessToken); // 상품 목록 가져오기 API 호출
          const newRows = response.map((order: any) => {
            return {
              order_id: order.order_id,
              name: order.product.name,
              price: order.product.price,
              description: order.product.description,
              customer_id: order.customer_id,
              address_id: order.address_id,
              logistic_id: order.logistic_id,
              tracking_number: order.tracking_number,
            };
          });
          setRows(newRows);
        } catch (error) {
          console.error("구매한 상품을 가져오는 데 실패했습니다.", error);
        }
      };
      fetchPurchasedProducts();
    }
  }, [accessToken, complete]);

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
      <RedButton
        buttonText="물류 회사로 정보 전송 >>"
        onClick={mockClickFunction}
      />
    </div>
  );
};

export default SellerHome;
