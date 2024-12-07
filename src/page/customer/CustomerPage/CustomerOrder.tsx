import { TextField } from "@mui/material";
import { RedButton } from "../../../components/Button/Button";
import { useState } from "react";
import { getBoughtList } from "../../../api/customerApi";

const CustomerOrder = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [boughtList, setBoughtList] = useState<any[]>([]); // 구매한 물품 목록 상태

  const handleAddToBoughtList = async () => {
    try {
      // API 호출: name과 phoneNumber는 고정값 또는 사용자 입력값으로 설정 가능
      const orders = await getBoughtList("customer1", "010-1111-1111");
      setBoughtList(orders); // 응답 데이터를 상태로 설정
      console.log("구매한 물품 목록:", orders);
    } catch (error) {
      console.error("구매한 물품 조회 실패:", error);
    }
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
            onChange={(e) => setPhone(e.target.value + "  ")}
            style={{ width: "80%" }}
          />
        </div>
        <div className="w-1/2">
          <div>전화번호</div>
          <TextField
            id="phone"
            label="'-'를 포함한 11자리 전화번호를 입력하세요"
            variant="standard"
            onChange={(e) => setName(e.target.value)}
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
    </div>
  );
};
export default CustomerOrder;
