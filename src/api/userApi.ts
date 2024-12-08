import axios from "axios";
import { AddressInfo, SignupData } from "./types";

const API_URL = process.env.REACT_APP_API_URL;

const signupUser = async (signupData: SignupData) => {
  try {
    const response = await axios.post(`${API_URL}/users/signup`, signupData, {
      headers: {
        "Content-Type": "application/json", // JSON 형식으로 요청
      },
    });
    console.log("User signed up successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error during user signup", error);
    throw new Error("Failed to sign up user");
  }
};

const signupAddress = async (addressData: AddressInfo, token: string) => {
  try {
    const response = await axios.post(
      `${API_URL}/users/signup/address`,
      addressData,
      {
        headers: {
          Authorization: `${token}`, // 토큰 인증
        },
      }
    );
    console.log("Address successfully added:", response.data);
    return response.data; // 성공 시 응답 반환
  } catch (error) {
    console.error("Error adding address:", error);
    throw new Error("Failed to add address");
  }
};
export { signupUser, signupAddress };
