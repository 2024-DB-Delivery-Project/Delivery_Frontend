import { atom } from "recoil";

export const authState = atom({
  key: "authState",
  default: {
    isAuthenticated: false,
    accessToken: null, // API 호출에 필요한 토큰
    role: null, // 사용자 역할 (CUSTOMER, SELLER 등)
    userId: null, // 사용자 ID
    username: null, // 사용자 이름
  },
});
