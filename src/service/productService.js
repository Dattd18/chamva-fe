import api from "../utils/baseApi.js";

export const productService = {
    // Lấy danh sách sản phẩm
    getProducts: async () => {
        try {
            const response = await api.get('/products');
            return response.data;
        } catch (error) {
            throw error.response ? error.response.data : error;
        }
    },
    // Lấy thông tin sản phẩm
    getProductById: async (id) => {
        try {
            const response = await api.get(`/products/${id}`);
            return response.data;
        } catch (error) {
            throw error.response ? error.response.data : error;
        }
    }
    
}
