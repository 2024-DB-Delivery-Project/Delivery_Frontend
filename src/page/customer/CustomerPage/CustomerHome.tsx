import InfoTable from "../../../components/Table/Table";

const CustomerHome = () => {
  return (
    <div className="flex flex-col w-full px-16 py-8 gap-4">
      <div className="flex flex-col gap-2 mb-4">
        <div className="text-2xl font-bold">물품구매</div>
        <div className="text-sm text-gray-500">
          물품은 한번에 하나만 구매 가능합니다. 구매하고자 하는 상품을 선택한 후
          물품 구매 버튼을 눌러주세요
        </div>
      </div>
      <InfoTable />
    </div>
  );
};

export default CustomerHome;
