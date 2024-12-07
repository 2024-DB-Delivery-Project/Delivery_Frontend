import { atom } from "recoil";

export const authState = atom({
  key: "authState",
  default: {
    isAuthenticated: false,
    accessToken: null,
    role: null,
    userId: null,
    username: null,
  },
});