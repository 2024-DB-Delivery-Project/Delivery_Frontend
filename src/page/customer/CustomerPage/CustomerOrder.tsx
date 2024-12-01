import { TextField } from "@mui/material";
import { RedButton } from "../../../components/Button/Button";
import { useState } from "react";

const CustomerOrder = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

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
            onChange={(e) => setPhone(e.target.value)}
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
      <RedButton buttonText="주문한 물품 조회" />
    </div>
  );
};
export default CustomerOrder;
