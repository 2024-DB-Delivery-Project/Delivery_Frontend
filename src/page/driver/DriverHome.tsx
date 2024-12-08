import InfoTable from "../../components/Table/Table";
import { DisableButton, RedButton } from "../../components/Button/Button";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { authState } from "../../state/auth";
import { DriverCol, DriverRow } from "./types";
import { getDriverDeliveries, markDelivered } from "../../api/driverApi";

const DriverHome = () => {
  const { accessToken } = useRecoilValue(authState);
  const [rows, setRows] = useState<DriverRow[]>([]);
  const [updatePage, setUpdatePage] = useState<boolean>(false);
  const [deliverCity, setDeliverCity] = useState<string[]>([]);

  const handleMarkDelivered = async (deliveryId: number) => {
    console.log(`배송완료 상태 변경: ${deliveryId}`);
    if (accessToken) {
      try {
        const response = await markDelivered(accessToken, deliveryId);
        setRows((prevRows) =>
          prevRows.map((row) =>
            row.deliveryId === deliveryId
              ? { ...row, deliveryStatus: response.delivery_status } // 배송 상태를 'Delivered'로 업데이트
              : row
          )
        );
        alert("배송 완료 상태가 변경되었습니다.");
      } catch (error) {
        console.error("Error marking delivery as delivered", error);
        alert("배송 완료 상태 변경에 실패했습니다.");
      }
    }
    setUpdatePage((prev) => !prev);
  };

  const fetchData = async () => {
    if (accessToken) {
      try {
        const data = await getDriverDeliveries(accessToken);
        const { deliveries } = data;

        const updatedRows: DriverRow[] = deliveries
          .filter((delivery: any) => delivery.delivery_status !== "Delivered") // "Delivered"인 항목을 제외
          .map((delivery: any) => ({
            deliveryId: delivery.delivery_id,
            name: delivery.product_name,
            customerName: delivery.customer_name,
            customerPhone: delivery.customer_phone,
            customerAddress: delivery.detailed_address,
            trackingNumber: delivery.tracking_number || "-",
            deliveryStatus: delivery.delivery_status,
            button: (
              <RedButton
                buttonText="배송완료 상태 변경"
                onClick={() => handleMarkDelivered(delivery.delivery_id)}
              />
            ),
          }));

        setRows(updatedRows);
        const cities = deliveries.map(
          (delivery: any) => delivery.detailed_address.split(",")[0]
        );
        setDeliverCity(cities);
      } catch (error) {
        console.error("Error in fetchData:", error);
        alert("물품 데이터를 불러오는 데 실패했습니다.");
      }
    }
  };

  const orderbyRegion = () => {
    console.log("지역별로 정렬하기");
  };

  useEffect(() => {
    fetchData();
  }, [accessToken, updatePage]);

  const cols: DriverCol[] = [
    { id: "name", label: "상품명", minWidth: 100 },
    { id: "customerName", label: "구매자 이름", minWidth: 100 },
    { id: "customerPhone", label: "구매자 전화번호", minWidth: 120 },
    { id: "customerAddress", label: "구매자 주소", minWidth: 120 },
    { id: "trackingNumber", label: "운송장번호", minWidth: 100 },
    { id: "deliveryStatus", label: "배송상태", minWidth: 100 },
    { id: "button", label: "배송 완료 처리", minWidth: 150 }, // 버튼 추가
  ];

  return (
    <div className="flex flex-col w-full px-16 py-8 gap-4">
      <div className="flex flex-col gap-2 mb-4">
        <div className="text-2xl font-bold">배송 물품</div>
        <div className="text-sm text-gray-500">
          배송이 필요한 물품들의 list 입니다. 지역별로 정렬을 하시려면 아래
          "지역별 정렬" 버튼을 눌러주세요.
        </div>
      </div>
      <InfoTable cols={cols} rows={rows} />
      <RedButton buttonText="지역별 정렬" onClick={orderbyRegion} />
    </div>
  );
};

export default DriverHome;
