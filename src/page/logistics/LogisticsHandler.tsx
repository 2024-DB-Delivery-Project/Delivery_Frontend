import { useEffect, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import deliverTitle from "../../assets/deliverTitle.png";
import LogisticHome from "./LogisticsHome";

const LogisticsHandler = () => {
  const [selected, setSelected] = useState(0);

  const customerSideOptions = [
    {
      name: "배송 가능한 물품",
    },
  ];

  return (
    <div className="flex">
      <SideBar
        setSelected={setSelected}
        selected={selected}
        options={customerSideOptions}
        username="logistics1"
      />
      <div className="w-4/5">
        <div className="w-full bg-white py-2 border-b-2 border-backgroundBlue ">
          <img src={deliverTitle} alt="deliverLogo" className="h-8 mx-auto" />
        </div>
        {selected === 0 && <LogisticHome />}
      </div>
    </div>
  );
};
export default LogisticsHandler;
