import { useEffect, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import deliverTitle from "../../assets/deliverTitle.png";
import DriverHome from "./DriverHome";

const DriverHandelr = () => {
  const [selected, setSelected] = useState(0);

  const customerSideOptions = [
    {
      name: "배송 물품 리스트",
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
        {selected === 0 && <DriverHome />}
      </div>
    </div>
  );
};
export default DriverHandelr;
