import { useEffect, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import deliverTitle from "../../assets/deliverTitle.png";
import SellerHome from "./SellerPage/SellerHome";
import SellerOrder from "./SellerPage/SellerOrder";

const SellerHandler = () => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    console.log("selected : ", selected);
  }, [selected]);

  const sellerSideOptions = [
    {
      name: "주문목록",
    },
    {
      name: "물품조회",
    },
  ];

  return (
    <div className="flex">
      <SideBar
        setSelected={setSelected}
        selected={selected}
        options={sellerSideOptions}
      />
      <div className="w-4/5">
        <div className="w-full bg-white py-2 border-b-2 border-backgroundBlue ">
          <img src={deliverTitle} alt="deliverLogo" className="h-8 mx-auto" />
        </div>
        {selected === 0 && <SellerHome />}
        {selected === 1 && <SellerOrder />}
      </div>
    </div>
  );
};
export default SellerHandler;
