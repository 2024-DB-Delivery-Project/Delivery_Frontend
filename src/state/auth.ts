import { atom } from "recoil";
import { AuthState } from "./types";

export const authState = atom<AuthState>({
  key: "authState",
  default: {
    isAuthenticated: false,
    accessToken: null,
    role: null,
    userId: null,
    username: null,
  },
});
