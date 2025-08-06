import api from "../utils/baseApi.js";

export const authService = {
    // Đăng nhập
    login: async (userData) => {
        try {
            const response = await api.post('/auth/login', userData);
            return response.data;
        } catch (error) {
            throw error.response ? error.response.data : error;
        }
    },
    // Đăng ký
    register: async (userData) => {
        try {
            const response = await api.post('/auth/register', userData);
            return response.data;
        } catch (error) {
            throw error.response ? error.response.data : error;
        }
    },
    // Lấy thông tin người dùng
    getUserInfo: async () => {
        try {
            const response = await api.get('/auth/user-info');
            return response.data;
        } catch (error) {
            throw error.response ? error.response.data : error;
        }
    }
}