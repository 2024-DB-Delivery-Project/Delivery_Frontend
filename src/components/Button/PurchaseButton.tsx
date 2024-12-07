import { Button } from "@mui/material";
import { PurchaseButtonTS } from "../../page/logistics/types";
import { buyProduct } from "../../api/customerApi";
import { useRecoilValue } from "recoil";
import { authState } from "../../state/auth";

export const PurchaseButton = ({
  ispurchased,
  product_id,
  onPurchaseSuccess,
}: PurchaseButtonTS) => {
  const { accessToken } = useRecoilValue(authState); // Recoil에서 accessToken을 가져옵니다.
  const handlePurchase = async () => {
    if (!accessToken) {
      alert("로그인이 필요합니다.");
      return;
    }

    try {
      const response = await buyProduct(product_id, accessToken); // API 호출
      alert(`상품 구매가 완료되었습니다. 주문 ID: ${response.order_id}`);

      onPurchaseSuccess(product_id);
    } catch (error) {
      alert("상품 구매에 실패했습니다.");
    }
  };
  return (
    <Button
      style={{
        backgroundColor: ispurchased ? "#CFCFCF" : "#FF7474",
        color: "#FFF",
        fontWeight: 800,
      }}
      onClick={ispurchased ? undefined : handlePurchase} // 구매 버튼 클릭 시 handlePurchase 실행
    >
      상품 구매하기
    </Button>
  );
};
