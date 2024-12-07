import InfoTable from "../../components/Table/Table";
import { LogisticsCol, LogisticsRow } from "./types";
import { RedButton } from "../../components/Button/Button";
import { useEffect, useState } from "react";
import MatchingDriver from "../../components/Modal/MatchingDriver";

const LogisticsHome = () => {
  const defalutRows: LogisticsRow[] = [
    {
      name: "상품A",
      customerName: "customerA",
      customerPhone: "010-1234-5678",
      customerAddress: "서울시 강남구",
      trackingNumber: "-",
    },
    {
      name: "상품A",
      customerName: "customerB",
      customerPhone: "010-1234-5678",
      customerAddress: "부산시 금정구",
      trackingNumber: "-",
    },
    {
      name: "상품D",
      customerName: "customerB",
      customerPhone: "010-1234-5678",
      customerAddress: "부산시 금정구",
      trackingNumber: "2134",
    },
  ];

  const [rows, setRows] = useState<LogisticsRow[]>(defalutRows);
  const [open, setOpen] = useState(false);
  const [logisticBtnInfo, setLogisticBtnInfo] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTrackingNumber = () => {
    setRows((prev) =>
      prev.map((prevRow) =>
        prevRow.trackingNumber === "-"
          ? { ...prevRow, trackingNumber: "1234" }
          : prevRow
      )
    );
    setLogisticBtnInfo(true);
  };

  const cols: LogisticsCol[] = [
    { id: "name", label: "상품명", minWidth: 100 },
    { id: "customerName", label: "구매자 이름", minWidth: 100 },
    { id: "customerPhone", label: "구매자 전화번호", minWidth: 120 },
    { id: "customerAddress", label: "구매자 주소", minWidth: 120 },
    { id: "trackingNumber", label: "운송장번호", minWidth: 100 },
  ];

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
        buttonText={
          logisticBtnInfo === false ? "운송장 번호 일괄 지정" : "배송기사 지정"
        }
        onClick={
          logisticBtnInfo === false ? handleTrackingNumber : handleClickOpen
        }
      />
      <MatchingDriver open={open} handleClose={handleClose} />
    </div>
  );
};

export default LogisticsHome;
