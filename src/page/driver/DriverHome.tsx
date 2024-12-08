import InfoTable from "../../components/Table/Table";
import { RedButton } from "../../components/Button/Button";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { authState } from "../../state/auth";
import { DriverCol, DriverOrderTS, DriverRow } from "./types";
import { getDriverDeliveries, markDelivered } from "../../api/driverApi";

const DriverHome = () => {
  const { accessToken } = useRecoilValue(authState);
  const [rows, setRows] = useState<DriverRow[]>([]);
  const [updatePage, setUpdatePage] = useState<boolean>(false);
  const [order, setOrder] = useState<
    "delivery_id" | "detailed_address" | "customer_name"
  >("delivery_id");

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

  const fetchData = async (
    sortBy: "delivery_id" | "detailed_address" | "customer_name" = "delivery_id"
  ) => {
    if (accessToken) {
      try {
        // Pass sortBy to getDriverDeliveries
        const data = await getDriverDeliveries(accessToken, sortBy);
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
      } catch (error) {
        console.error("Error in fetchData:", error);
        alert("물품 데이터를 불러오는 데 실패했습니다.");
      }
    }
  };

  const handleSortByDeliveryId = () => {
    setOrder("delivery_id");
    fetchData("delivery_id");
  };

  const handleSortByCustomerName = () => {
    setOrder("customer_name");
    fetchData("customer_name");
  };

  const handleSortByAddress = () => {
    setOrder("detailed_address");
    fetchData("detailed_address");
  };

  useEffect(() => {
    fetchData(order);
    console.log("Fetching data...", order);
  }, [accessToken, updatePage, order]);

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
          배송이 필요한 물품들의 리스트입니다. 원하는 옵션 기준으로 정렬 버튼을
          눌러주세요
        </div>
      </div>

      <InfoTable cols={cols} rows={rows} />
      <div className="flex gap-8">
        <RedButton buttonText="지역별 정렬" onClick={handleSortByAddress} />

        <RedButton
          buttonText="배송 ID로 정렬"
          onClick={handleSortByDeliveryId}
        />

        <RedButton
          buttonText="고객 이름으로 정렬"
          onClick={handleSortByCustomerName}
        />
      </div>
    </div>
  );
};

export default DriverHome;
