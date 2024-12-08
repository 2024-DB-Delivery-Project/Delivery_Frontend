import InfoTable from "../../components/Table/Table";
import { LogisticsCol, LogisticsRow } from "./types";
import { RedButton } from "../../components/Button/Button";
import { useEffect, useState } from "react";
import MatchingDriver from "../../components/Modal/MatchingDriver";
import { getLogisticDeliveries } from "../../api/sellerApi";
import { useRecoilValue } from "recoil";
import { authState } from "../../state/auth";

const LogisticsHome = () => {
  const { accessToken } = useRecoilValue(authState);
  const [rows, setRows] = useState<LogisticsRow[]>([]);
  const [open, setOpen] = useState(false);
  const [deliverCity, setDeliverCity] = useState<string[]>([]);

  const fetchData = async () => {
    if (accessToken) {
      try {
        const data = await getLogisticDeliveries(accessToken);
        const { grouped_deliveries } = data;
        const cities = grouped_deliveries.map((group: any) => group.city);
        setDeliverCity(cities);

        const updatedRows: LogisticsRow[] = grouped_deliveries.flatMap(
          (group: any) =>
            group.deliveries.map((delivery: any) => ({
              name: delivery.product_name,
              customerName: delivery.customer_name,
              customerPhone: delivery.customer_phone,
              customerAddress: delivery.detailed_address,
              trackingNumber: delivery.tracking_number || "-",
              city: group.city,
            }))
        );

        setRows(updatedRows);
      } catch (error) {
        console.error("Error in fetchData:", error);
        alert("물품 데이터를 불러오는 데 실패했습니다.");
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        <div className="text-2xl font-bold">배송 가능 물품</div>
        <div className="text-sm text-gray-500">
          사용자들의 구매 내역을 확인하고 배송을 진행해주세요. 지역별로 배송
          기사를 지정 가능합니다.
        </div>
      </div>
      <InfoTable cols={cols} rows={rows} />
      <RedButton buttonText="배송기사 지정" onClick={handleClickOpen} />
      <MatchingDriver
        rows={rows}
        open={open}
        handleClose={handleClose}
        deliverCity={deliverCity}
      />
    </div>
  );
};

export default LogisticsHome;
