import { TextField, Modal, Box, Typography, Button } from "@mui/material";
import { RedButton } from "../../../components/Button/Button";
import { useState, useEffect } from "react";
import { getBoughtList } from "../../../api/customerApi";
import { getDeliveryStatus } from "../../../api/customerApi"; // 배송 상태 가져오는 API 함수
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../../../state/auth";
import CustomerDeliveryInfo from "./CustomerDeliverInfo";

const CustomerOrder = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [boughtList, setBoughtList] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [orderId, setOrderId] = useState<number | null>(null);
  const [deliveryStatus, setDeliveryStatus] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { accessToken } = useRecoilValue(authState);

  const handleAddToBoughtList = async () => {
    try {
      const orders = await getBoughtList("customer1", "010-1111-1111");
      setBoughtList(orders);
      console.log("구매한 물품 목록:", orders);
    } catch (error) {
      console.error("구매한 물품 조회 실패:", error);
    }
  };

  const handleOrderClick = async (orderId: number) => {
    setOrderId(orderId); // 클릭된 주문 ID 설정
    setOpen(true); // 모달 열기

    setLoading(true);
    if (accessToken) {
      try {
        const data = await getDeliveryStatus(accessToken);
        const orderStatus = data.delivery_statuses.find(
          (status: any) => status.order_id === orderId
        );

        if (orderStatus) {
          setDeliveryStatus(orderStatus);
        } else {
          setDeliveryStatus(null);
        }
      } catch (error) {
        setError("배송 상태를 가져오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleCloseModal = () => {
    setOpen(false); // 모달 닫기
    setOrderId(null); // 주문 ID 초기화
    setDeliveryStatus(null); // 배송 상태 초기화
  };

  return (
    <div className="flex flex-col w-full px-16 py-8 gap-4">
      <div className="flex flex-col gap-2 mb-4">
        <div className="text-2xl font-bold">물품조회</div>
        <div className="text-sm text-gray-500">
          구매하신 물품은 이름 및 전화번호로 조회 가능합니다. <br /> 사용자 이름
          또는 전화번호를 입력해주세요
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-1/2">
          <div>사용자 이름</div>
          <TextField
            id="name"
            label="이름을 입력해주세요"
            variant="standard"
            onChange={(e) => setName(e.target.value)}
            style={{ width: "80%" }}
          />
        </div>
        <div className="w-1/2">
          <div>전화번호</div>
          <TextField
            id="phone"
            label="'-'를 포함한 11자리 전화번호를 입력하세요"
            variant="standard"
            onChange={(e) => setPhone(e.target.value)}
            style={{ width: "80%" }}
          />
        </div>
      </div>
      <RedButton
        buttonText="주문한 물품 조회"
        onClick={handleAddToBoughtList}
      />
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          구매한 물품 목록
        </h3>
        <ul className="space-y-2 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {boughtList.map((item) => (
            <li
              key={item.order_id}
              className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              onClick={() => handleOrderClick(item.order_id)}
            >
              <div>
                <span className="text-gray-900 font-medium">
                  {item.product_name}
                </span>
                <span className="text-gray-500 text-sm block">
                  {item.product_price}원
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* MUI Modal */}
      <Modal open={open} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            배송 상태
          </Typography>
          {loading ? (
            <Typography>로딩 중...</Typography>
          ) : error ? (
            <Typography>{error}</Typography>
          ) : deliveryStatus ? (
            <CustomerDeliveryInfo
              delivery_status={deliveryStatus.delivery_status}
              order_id={deliveryStatus.order_id}
            />
          ) : (
            <Typography>해당 주문의 배송 상태를 찾을 수 없습니다.</Typography>
          )}
          <Button onClick={handleCloseModal} sx={{ mt: 2 }}>
            닫기
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default CustomerOrder;
