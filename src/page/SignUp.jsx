import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupAddress, signupUser } from "../api/userApi";
import { useRecoilValue } from "recoil";
import { authState } from "../state/auth";

const SignUp = () => {
  const { accessToken } = useRecoilValue(authState);
  const [openModal, setOpenModal] = useState(false); // 모달 열림 여부
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("CUSTOMER");
  const [city, setCity] = useState("");
  const [town, setTown] = useState("");
  const [village, setVillage] = useState("");
  const navigate = useNavigate();

  // ID 중복검사 (추후 구현)
  const handleDubplicateID = () => {
    console.log("ID 중복검사");
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // 도시 변경
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  // 읍/면/동 변경
  const handleTownChange = (event) => {
    setTown(event.target.value);
  };

  // 리/마을 변경
  const handleVillageChange = (event) => {
    setVillage(event.target.value);
  };

  const handleAddressSelection = async () => {
    const fullAddress = `${city} ${town} ${village}`;
    setAddress(fullAddress); // 주소 자동 입력

    // 주소 ID를 API 호출 후 받아오기
    const addressData = { city, town, village };
    try {
      const result = await signupAddress(addressData, accessToken);
      console.log("Address added successfully:", result);
      alert("주소가 등록되었습니다.");
      // 주소 ID 업데이트
      const addressId = result.address_id; // API 응답에서 address_id 추출
      setAddress(addressId); // 주소 ID 상태 변수 업데이트
    } catch (error) {
      console.error("Failed to add address:", error);
      alert("주소 등록에 실패했습니다.");
    }

    handleCloseModal(); // 모달 닫기
  };
  const handleLogin = async (event) => {
    event.preventDefault();

    const signupData = {
      name: username,
      phone_number: phoneNumber,
      role: role,
      address_id: address, // 주소 ID는 별도로 받아와야 합니다. 예시로 1을 넣음.
      login_id: id,
      password: password,
    };

    try {
      const result = await signupUser(signupData);
      console.log("Signup successful:", result);
      // 회원가입 성공 후, 예: 로그인 화면으로 이동
      alert("회원가입이 완료되었습니다.");
      navigate("/login"); // React Router 사용시
    } catch (error) {
      console.error("Signup failed:", error);
      alert("회원가입에 실패했습니다.");
    }
  };

  return (
    <div className="w-fit mx-auto my-20">
      <div className="flex justify-between w-fit gap-16">
        <div className="flex flex-col w-fit gap-8">
          <p className="text-blue text-5xl">회원가입</p>
          <p>
            계정을 가지고 있으신가요? <br />
            <a href="/login" className="text-blueDark font-bold">
              로그인
            </a>
            을 진행해주세요
          </p>
          <div className="flex flex-col w-96 mb-8 gap-8">
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                역할군을 선택해주세요
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={(e) => setRole(e.target.value)}
                value={role}
              >
                <FormControlLabel
                  value="CUSTOMER"
                  control={<Radio />}
                  label="고객"
                />
                <FormControlLabel
                  value="SELLER"
                  control={<Radio />}
                  label="판매자"
                />
                <FormControlLabel
                  value="LOGISTIC"
                  control={<Radio />}
                  label="물류회사"
                />
                <FormControlLabel
                  value="DRIVER"
                  control={<Radio />}
                  label="배달기사"
                />
              </RadioGroup>
            </FormControl>
            <div className="flex w-96 items-center gap-4">
              <TextField
                id="id"
                label="ID를 입력해주세요"
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
              label="비밀번호를 입력해주세요"
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
            <div className="flex w-96 items-center gap-4">
              <TextField
                id="address"
                label="주소를 작성해주세요"
                variant="standard"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="flex-1"
              />
              <Button variant="outlined" onClick={handleOpenModal}>
                주소찾기
              </Button>

              <Dialog open={openModal} onClose={handleCloseModal}>
                <DialogTitle>주소를 선택해주세요</DialogTitle>
                <DialogContent>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>도시</InputLabel>
                    <Select value={city} onChange={handleCityChange}>
                      <MenuItem value="서울특별시">서울특별시</MenuItem>
                      <MenuItem value="부산광역시">부산광역시</MenuItem>
                      <MenuItem value="인천광역시">인천</MenuItem>
                      {/* 추가적인 도시 옵션을 여기에 추가 */}
                    </Select>
                  </FormControl>

                  <FormControl fullWidth margin="normal">
                    <InputLabel>읍/면/동</InputLabel>
                    <Select value={town} onChange={handleTownChange}>
                      <MenuItem value="강남">강남</MenuItem>
                      <MenuItem value="해운대">해운대</MenuItem>
                      <MenuItem value="중구">중구</MenuItem>
                      {/* 추가적인 읍/면/동 옵션을 여기에 추가 */}
                    </Select>
                  </FormControl>

                  <FormControl fullWidth margin="normal">
                    <InputLabel>리/마을</InputLabel>
                    <Select value={village} onChange={handleVillageChange}>
                      <MenuItem value="삼성">삼성</MenuItem>
                      <MenuItem value="장산">장산</MenuItem>
                      <MenuItem value="부전">부전</MenuItem>
                      {/* 추가적인 리/마을 옵션을 여기에 추가 */}
                    </Select>
                  </FormControl>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseModal} color="primary">
                    취소
                  </Button>
                  <Button onClick={handleAddressSelection} color="primary">
                    주소 선택
                  </Button>
                </DialogActions>
              </Dialog>
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
