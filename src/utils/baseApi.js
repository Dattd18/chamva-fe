import axios from "axios";

// 👉 Sử dụng biến môi trường từ Vite
const baseURL = `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_PREFIX || ''}`;

// Tạo instance Axios
export const api = axios.create({
  baseURL: baseURL,
  validateStatus: () => true, // cho phép handle mọi status code
});
// Thêm token vào request nếu có
api.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
