import { TextField } from "@mui/material";
import { RedButton } from "../../../components/Button/Button";
import { useEffect, useState } from "react";
import OrderStepper from "../../../components/Stepper/OrderStepper";
import step1 from "../../../assets/step/step1.png";
import step2 from "../../../assets/step/step2.png";
import step3 from "../../../assets/step/step3.png";
import step4 from "../../../assets/step/step4.png";

const SellerOrder = () => {
  const [trackingNumber, setTrackingNumber] = useState<string>("");
  const [deliveryInfo, setDeliveryInfo] = useState<boolean>(false);
  const submitTrackingNumber = () => {
    if (trackingNumber === "1234") {
      setDeliveryInfo(true);
    } else {
      alert("운송장번호가 일치하지 않습니다.");
      setDeliveryInfo(false);
    }
  };

  useEffect(() => {
    console.log("trackingNumber : ", trackingNumber);
    console.log("deliveryInfo : ", deliveryInfo);
  }, [trackingNumber, deliveryInfo]);

  const stepInfo = [
    { step: 1, img: { step1 }, title: "step 1 : 주문이 접수되었습니다." },
    {
      step: 2,
      img: { step2 },
      title: "step 2 : 배송 회사에서 물품 처리중입니다.",
    },
    { step: 3, img: { step3 }, title: "step 3 : 물품이 배송중입니다." },
    { step: 4, img: { step4 }, title: "step 4 : 물품이 배송 완료되었습니다." },
  ];

  return (
    <div className="flex flex-col w-full px-16 py-8 gap-4">
      <div className="flex flex-col gap-2 mb-4">
        <div className="text-2xl font-bold">물품조회</div>
        <div className="text-sm text-gray-500">
          판매하신 물품은 운송장번호로 조회 가능합니다. <br /> 운송장번호를
          입력해주세요
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-2/3 flex gap-4">
          <TextField
            id="trackingNumber"
            label="운송장번호를 입력해주세요"
            variant="standard"
            onChange={(e) => setTrackingNumber(e.target.value)}
            style={{ width: "70%" }}
          />
          <RedButton buttonText="물품 조회" onClick={submitTrackingNumber} />
        </div>
      </div>
      <div
        className={`${
          deliveryInfo === true ? "visible" : "hidden"
        } mt-8 flex flex-col gap-8`}
      >
        <div className="mx-auto px-auto text-gray-400">
          물품조회 결과 입니다. 아래를 확인해주세요
        </div>
        <OrderStepper step={3} />
        <div className="flex flex-col gap-4 border border-backgroundBlue p-4">
          {stepInfo.map((step, index) => (
            <div className="flex gap-2 items-center">
              <img
                src={Object.values(step.img)[0]}
                alt="step"
                className="w-8"
              />
              <div>{step.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SellerOrder;
