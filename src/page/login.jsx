import { Button, TextField } from "@mui/material";
import deliverLogo from "../assets/deliverLogo.png";
import deliverTitle from "../assets/deliverTitle.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    if (id === "customer" || password === "customer") {
      navigate("/customer");
    }
    event.preventDefault();
    console.log(id);
    console.log(password);
    //TODO: 로그인 api 로직 구현 필요
  };

  return (
    <div class="h-screen w-fit mx-auto flex items-center">
      <div class="flex justify-between w-fit gap-16">
        <div class="flex flex-col w-fit gap-8">
          <p class="text-blueLight text-5xl">로그인</p>
          <p>
            계정을 가지고 있지 않으신가요? <br />
            <a href="/signup" class="text-blueDark">
              회원가입
            </a>
            을 진행해주세요
          </p>

          <div class="flex flex-col w-80 mb-8 gap-4">
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
          <Button variant="contained" type="submit" onClick={handleLogin}>
            Login
          </Button>
        </div>
        <div>
          <img src={deliverTitle} alt="deliverLogo" class="w-80 mx-auto" />
          <img src={deliverLogo} alt="deliverLogo" class="w-96" />
        </div>
      </div>
    </div>
  );
};
export default Login;
