import { DriverRow } from "../../page/driver/types";

interface RedButtonProps {
  buttonText: string;
  onClick: () => void;
}

interface DisableButtonTS {
  buttonText: string;
}

interface DeliverMarkButtonTS {
  buttonText: string; // 버튼에 표시될 텍스트
  // onClick: () => void; // 버튼 클릭 시 실행할 함수
  driverStatus: string; // 배송 상태 (예: 'Delivered', 'In Transit' 등)
  deliveryId: number; // 배송 ID
  setRows: (prevRows: DriverRow[]) => void;
  row: DriverRow[];
}
export { RedButtonProps, DeliverMarkButtonTS, DisableButtonTS };
