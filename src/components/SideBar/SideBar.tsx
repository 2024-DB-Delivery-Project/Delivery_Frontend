import deliverLogoDBG from "../../assets/deliverLogo_DBG.png";
import { SideBarTS } from "./types";

const SideBar = ({ setSelected, selected, options }: SideBarTS) => {
  console.log("selected : ", selected);

  return (
    <div className="bg-backgroundBlue w-1/5 h-screen flex flex-col items-center py-8 justify-between">
      <div className="w-full flex flex-col gap-4 items-center">
        <img src={deliverLogoDBG} alt="logo" className="w-32" />
        <div className="font-bold text-blueLight">CUSTOMER1</div>

        {options.map((option, key) => (
          <div
            className={` px-2 py-2 rounded-md w-4/5 text-sm font-bold ${
              selected === key
                ? `bg-blueLight text-white`
                : `text-blue bg-white`
            }  hover:text-white hover:bg-blueLight active:text-white active:bg-blueLight`}
            onClick={() => setSelected(key)} // 사용자가 선택한 key 값을 저장
          >
            {option.name}
          </div>
        ))}
      </div>
      <a
        href={"/login"}
        className="bg-white px-2 py-2 rounded-md w-4/5 text-sm font-bold text-blue hover:text-white hover:bg-blueLight active:text-white active:bg-blueLight"
      >
        <div>로그아웃</div>
      </a>
    </div>
  );
};
export default SideBar;
