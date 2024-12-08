import { TextField } from "@mui/material";
import { RedButton } from "../../../components/Button/Button";
import { useState } from "react";
import OrderStepper from "../../../components/Stepper/OrderStepper";
import step1 from "../../../assets/step/step1.png";
import step2 from "../../../assets/step/step2.png";
import step3 from "../../../assets/step/step3.png";
import step4 from "../../../assets/step/step4.png";
import { getDeliveryStatus } from "../../../api/sellerApi";

const SellerOrder = () => {
  const [trackingNumber, setTrackingNumber] = useState<string>("");
  const [deliveryInfo, setDeliveryInfo] = useState<{
    tracking_number: number;
    delivery_status: string;
  } | null>(null);

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

  const submitTrackingNumber = async () => {
    try {
      const response = await getDeliveryStatus(Number(trackingNumber)); // API 호출
      setDeliveryInfo(response); // 배송 상태 업데이트
    } catch (error) {
      alert("운송장번호가 일치하지 않거나 조회할 수 없습니다.");
      setDeliveryInfo(null);
    }
  };

  const getStepFromStatus = (status: string) => {
    switch (status) {
      case "Processing":
        return 1;
      case "In Transit":
        return 2;
      case "Delivered":
        return 3;
      default:
        return 0;
    }
  };

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
          deliveryInfo ? "visible" : "hidden"
        } mt-8 flex flex-col gap-8`}
      >
        {deliveryInfo && (
          <>
            <div className="mx-auto px-auto text-gray-400">
              물품조회 결과 입니다. 아래를 확인해주세요
            </div>
            <OrderStepper
              step={getStepFromStatus(deliveryInfo.delivery_status)}
            />
            <div className="flex flex-col gap-4 border border-backgroundBlue p-4">
              {stepInfo.map((step) => (
                <div key={step.step} className="flex gap-2 items-center">
                  <img
                    src={Object.values(step.img)[0]}
                    alt="step"
                    className="w-8"
                  />
                  <div>{step.title}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SellerOrder;
