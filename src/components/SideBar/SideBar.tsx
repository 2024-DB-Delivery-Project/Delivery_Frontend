import { useNavigate } from "react-router-dom";
import deliverLogoDBG from "../../assets/deliverLogo_DBG.png";
import { SideBarTS } from "./types";
import useLogout from "../../state/useLogout";

const SideBar = ({ setSelected, selected, options, username }: SideBarTS) => {
  const logout = useLogout();
  const navigate = useNavigate(); // 리디렉션을 위한 navigate 사용

  const handleLogout = () => {
    logout(); // 로그아웃 처리
    navigate("/login"); // 로그인 페이지로 리디렉션
  };
  return (
    <div className="bg-backgroundBlue w-1/5 h-screen flex flex-col items-center py-8 justify-between">
      <div className="w-full flex flex-col gap-4 items-center">
        <img src={deliverLogoDBG} alt="logo" className="w-32" />
        <div className="font-bold text-blueLight">{username}</div>

        {options.map((option, key) => (
          <div
            className={` px-2 py-2 rounded-md w-4/5 text-sm font-bold ${
              selected === key
                ? `bg-blueLight text-white`
                : `text-blue bg-white`
            }  hover:text-white hover:bg-blueLight active:text-white active:bg-blueLight`}
            onClick={() => setSelected(key)}
          >
            {option.name}
          </div>
        ))}
      </div>
      <button
        onClick={handleLogout}
        className="bg-white px-2 py-2 rounded-md w-4/5 text-sm font-bold text-blue hover:text-white hover:bg-blueLight active:text-white active:bg-blueLight"
      >
        <div>로그아웃</div>
      </button>
    </div>
  );
};
export default SideBar;
