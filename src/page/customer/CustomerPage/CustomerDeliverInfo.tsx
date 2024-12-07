import OrderStepper from "../../../components/Stepper/OrderStepper";
import step1 from "../../../assets/step/step1.png";
import step2 from "../../../assets/step/step2.png";
import step3 from "../../../assets/step/step3.png";
import step4 from "../../../assets/step/step4.png";
import { CustomerDeliveryInfoTS } from "./types";

const CustomerDeliveryInfo = ({
  order_id,
  delivery_status,
}: CustomerDeliveryInfoTS) => {
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

  const getStepFromStatus = (status: string) => {
    switch (status) {
      case "Received":
        return 1;
      case "Processing":
        return 2;
      case "Shipped":
        return 3;
      case "Delivered":
        return 4;
      default:
        return 1; // 기본값: 주문 접수 상태
    }
  };

  return (
    <div key={order_id} className="mb-8 flex flex-col gap-8 pt-8">
      <OrderStepper step={getStepFromStatus(delivery_status)} />
      <div className="flex flex-col gap-4 border border-backgroundBlue p-4">
        {stepInfo.map((step, index) => (
          <div key={step.step} className="flex gap-2 items-center">
            <img src={Object.values(step.img)[0]} alt="step" className="w-8" />
            <div>{step.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerDeliveryInfo;
