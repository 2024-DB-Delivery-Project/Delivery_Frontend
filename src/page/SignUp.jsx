import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useState } from "react";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(phoneNumber);
    console.log(address);
    console.log(id);
    console.log(password);
  };

  const handleFindAddress = () => {
    console.log("주소찾기");
  };

  const handleDubplicateID = () => {
    console.log("ID 중복검사");
  };

  return (
    <div class=" w-fit mx-auto my-20">
      <div class="flex justify-between w-fit gap-16">
        <div class="flex flex-col w-fit gap-8">
          <p class="text-blue text-5xl">회원가입</p>
          <p>
            계정을 가지고 있으신가요? <br />
            <a href="/login" class="text-blueDark font-bold">
              로그인
            </a>
            을 진행해주세요
          </p>
          <div class="flex flex-col w-96 mb-8 gap-8">
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                역할군을 선택해주세요
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="customer"
                  control={<Radio />}
                  label="고객"
                />
                <FormControlLabel
                  value="seller"
                  control={<Radio />}
                  label="판매자"
                />
                <FormControlLabel
                  value="logistics"
                  control={<Radio />}
                  label="물류회사"
                />
                <FormControlLabel
                  value="dirver"
                  control={<Radio />}
                  label="배달기사"
                />
              </RadioGroup>
            </FormControl>
            <div class="flex w-96 items-center gap-4">
              <TextField
                id="id"
                label="id를 입력해주세요"
                variant="standard"
                onChange={(e) => setId(e.target.value)}
                className="flex-1"
              />
              <Button variant="outlined" onClick={handleDubplicateID}>
                ID 중복검사
              </Button>
            </div>
            <TextField
              id="password"
              label="비밀번호를 입력헤주세요"
              variant="standard"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              id="username"
              label="사용자 이름을 작성해주세요"
              variant="standard"
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              id="phoneNumber"
              label=" '-' 를 포함하여 휴대폰 번호를 입력해주세요."
              variant="standard"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div class="flex w-96 items-center gap-4">
              <TextField
                id="address"
                label="주소를 작성해주세요"
                variant="standard"
                onChange={(e) => setAddress(e.target.value)}
                className="flex-1"
              />
              <Button variant="outlined" onClick={handleFindAddress}>
                주소찾기
              </Button>
            </div>
          </div>

          <Button
            variant="contained"
            type="submit"
            onClick={handleLogin}
            size="small"
          >
            SignUp
          </Button>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
