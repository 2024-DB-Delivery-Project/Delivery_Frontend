import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import axios from "axios";
import { authState } from "../state/auth";
import deliveryLogo from "../assets/deliverLogo.png";
import deliveryTitle from "../assets/deliverTitle.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const setAuthState = useSetRecoilState(authState);

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/login`, // .env 파일에서 API URL을 가져옴
        {
          login_id: id,
          password: password,
        }
      );

      setAuthState({
        isAuthenticated: true,
        accessToken: "Bearer " + response.data.access_token,
        role: response.data.role,
        userId: response.data.user_id,
        username: response.data.user,
      });
      const userRole = response.data.role;

      if (userRole === "CUSTOMER") {
        navigate("/customer");
      } else if (userRole === "SELLER") {
        navigate("/seller");
      } else if (userRole === "LOGISTIC") {
        navigate("/logistics");
      } else if (userRole === "DRIVER") {
        navigate("/driver");
      } else {
        throw new Error("알 수 없는 사용자 역할입니다.");
      }
    } catch (err) {
      setError("로그인 실패: ID 또는 비밀번호를 확인하세요.");
      console.error("로그인 오류:", err);
    }
  };

  return (
    <div className="h-screen w-fit gap-16 mx-auto flex items-center">
      <div className="flex justify-between w-fit gap-16">
        <div className="flex flex-col w-fit gap-8">
          <p className="text-blueLight text-5xl">로그인</p>
          <p>
            계정을 가지고 있지 않으신가요? <br />
            <div className="text-blueDark" onClick={handleSignup}>
              회원가입
            </div>
            을 진행해주세요
          </p>

          <div className="flex flex-col w-80 mb-8 gap-4">
            <TextField
              id="id"
              label="ID를 입력해주세요"
              variant="standard"
              onChange={(e) => setId(e.target.value)}
            />
            <TextField
              id="password"
              label="비밀번호를 입력해주세요"
              variant="standard"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <Button variant="contained" type="submit" onClick={handleLogin}>
            Login
          </Button>
        </div>
      </div>
      <div className=" flex flex-col gap-4">
        <img src={deliveryTitle} alt="deliveryTitle" className="w-96 mx-auto" />
        <img src={deliveryLogo} alt="deliveryLogo" className="w-96 mx-auto" />
      </div>
    </div>
  );
};

export default LoginPage;
