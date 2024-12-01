import { useEffect, useState } from "react";
import CustomerHome from "./CustomerPage/CustomerHome";
import CustomerOrder from "./CustomerPage/CustomerOrder";
import CustomerDeliveryInfo from "./CustomerPage/CustomerDeliverInfo";
import SideBar from "../../components/SideBar";

const CustomerHandler = () => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    console.log("selected : ", selected);
  }, [selected]);

  return (
    <div className="flex">
      <SideBar setSelected={setSelected} selected={selected} />
      <div className="w-4/5 bg-red-200">
        {selected === 0 && <CustomerHome />}
        {selected === 1 && <CustomerOrder />}
        {selected === 2 && <CustomerDeliveryInfo />}
      </div>
    </div>
  );
};
export default CustomerHandler;
