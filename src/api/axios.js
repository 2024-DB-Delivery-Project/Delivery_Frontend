import axios from "axios";

const api = axios.create({
  baseURL: "http://211.213.193.67:8000", // 서버의 실제 IP
  withCredentials: true, // CORS 인증 쿠키 지원
});

export default api;
