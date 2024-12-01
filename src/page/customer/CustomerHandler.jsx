import { useEffect, useState } from "react";
import CustomerHome from "./CustomerPage/CustomerHome";
import CustomerOrder from "./CustomerPage/CustomerOrder";
import CustomerDeliveryInfo from "./CustomerPage/CustomerDeliverInfo";
import SideBar from "../../components/SideBar/SideBar";
import deliverTitle from "../../assets/deliverTitle.png";

const CustomerHandler = () => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    console.log("selected : ", selected);
  }, [selected]);

  return (
    <div className="flex">
      <SideBar setSelected={setSelected} selected={selected} />
      <div className="w-4/5">
        <div className="w-full bg-white py-2 border-b-2 border-backgroundBlue ">
          <img src={deliverTitle} alt="deliverLogo" className="h-8 mx-auto" />
        </div>
        {selected === 0 && <CustomerHome />}
        {selected === 1 && <CustomerOrder />}
        {selected === 2 && <CustomerDeliveryInfo />}
      </div>
    </div>
  );
};
export default CustomerHandler;
