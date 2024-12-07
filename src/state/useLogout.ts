import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { authState } from "./auth";

const useLogout = () => {
  const setAuthState = useSetRecoilState(authState);
  const navigate = useNavigate();

  const logout = () => {
    setAuthState({
      isAuthenticated: false,
      accessToken: null,
      role: null,
      userId: null,
      username: null,
    });

    localStorage.removeItem("accessToken");
    sessionStorage.removeItem("accessToken");

    navigate("/login");
  };

  return logout;
};

export default useLogout;
