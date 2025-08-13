import khan1 from "../assets/khan1.JPG";
import khan4 from "../assets/khan4.jpg";
import khan2 from "../assets/khan2.jpg";
import khan3 from "../assets/khan3.jpg";
import khan5 from "../assets/khan5.jpg";
import khan6 from "../assets/khan6.jpg";
import khan9 from "../assets/_DSC3530.JPG";
import khan10 from "../assets/_DSC3543.JPG";
import tui1 from "../assets/tui1.png";
import tui2 from "../assets/tui2.png";
import tui3 from "../assets/tui3.png";
import tui4 from "../assets/tui4.png";

import spk1 from "../assets/spk1.png";
import spk2 from "../assets/spk2.jpg";
import spk3 from "../assets/spk3.png";
import spk4 from "../assets/spk4.png";


import cuonchi1 from "../assets/cuonchi1.jpg";
import cuonchi2 from "../assets/cuonchi2.jpg";
import cuonchi3 from "../assets/cuonchi3.jpg";
import cuonchi4 from "../assets/cuonchi4.jpg";
import cuonchi5 from "../assets/cuonchi5.jpg";
import cuonchi6 from "../assets/cuonchi6.jpg";
import cuonchi7 from "../assets/cuonchi7.jpg";

const productData = [
    // Cuộn chỉ
    {
        id: 1,
        name: "Cuộn Chỉ Sắc Trời Chăm An Giang",
        category: "thocam",
        description: "Cuộn chỉ thổ cẩm Chăm màu xanh trời, dệt thủ công tinh xảo, phù hợp may vá hoặc trang trí.",
        price: 150000,
        stock: 20,
        images: [cuonchi1, cuonchi2, cuonchi3],
        isActive: true
    },
    {
        id: 2,
        name: "Cuộn Chỉ Sắc Lửa Chăm An Giang",
        category: "thocam",
        description: "Cuộn chỉ đỏ rực như ngọn lửa, tượng trưng sức sống và nhiệt huyết của người Chăm.",
        price: 150000,
        stock: 15,
        images: [cuonchi2, cuonchi7, cuonchi6],
        isActive: true
    },
    {
        id: 3,
        name: "Cuộn Chỉ Sắc Mây Chăm An Giang",
        category: "thocam",
        description: "Cuộn chỉ màu trắng bạc, gợi hình mây trời miền Tây, mềm mịn và bền màu.",
        price: 150000,
        stock: 18,
        images: [cuonchi3, cuonchi1, cuonchi5],
        isActive: true
    },
    {
        id: 4,
        name: "Cuộn Chỉ Sắc Nắng Chăm An Giang",
        category: "thocam",
        description: "Cuộn chỉ vàng tươi như ánh nắng mùa hạ, mang lại sự rực rỡ cho từng đường may.",
        price: 150000,
        stock: 22,
        images: [cuonchi4, cuonchi2, cuonchi3],
        isActive: true
    },
    {
        id: 5,
        name: "Cuộn Chỉ Sắc Đêm Chăm An Giang",
        category: "tui",
        description: "Cuộn chỉ màu đen huyền bí, điểm xuyết cho sản phẩm thêm sang trọng.",
        price: 150000,
        stock: 12,
        images: [tui1, tui2, tui3],
        isActive: true
    },
    {
        id: 6,
        name: "Cuộn Chỉ Sắc Ngọc Chăm An Giang",
        category: "tui",
        description: "Cuộn chỉ xanh ngọc bích, tượng trưng cho sự may mắn và thịnh vượng.",
        price: 150000,
        stock: 16,
        images: [tui2, tui2, tui3],
        isActive: true
    },
    {
        id: 7,
        name: "Cuộn Chỉ Sắc Đào Chăm An Giang",
        category: "tui",
        description: "Cuộn chỉ hồng đào nhẹ nhàng, mang lại cảm giác ấm áp và tinh tế.",
        price: 150000,
        stock: 14,
        images: [tui3, tui4, tui2],
        isActive: true
    },
    {
        id: 8,
        name: "Cuộn Chỉ Sắc Biển Chăm An Giang",
        category: "tui",
        description: "Cuộn chỉ xanh biển sâu, đậm chất miền sông nước An Giang.",
        price: 150000,
        stock: 19,
        images: [tui4, tui1, tui3],
        isActive: true
    },

    {
        id: 9,
        name: "Khăn Choàng Sắc Hoa Chăm An Giang",
        category: "khan",
        description: "Khăn choàng thổ cẩm họa tiết hoa truyền thống, nhẹ và thoáng mát.",
        price: 250000,
        stock: 25,
        images: [khan1,khan10, khan9],
        isActive: true
    },
    {
        id: 10,
        name: "Khăn Choàng Sắc Hạ Chăm An Giang",
        category: "khan",
        description: "Khăn choàng vàng óng, gợi nắng mùa hạ vùng Chăm, phù hợp du lịch và dạo phố.",
        price: 250000,
        stock: 30,
        images: [khan2, khan3, khan4],
        isActive: true
    },
    {
        id: 11,
        name: "Khăn Choàng Sắc Biển Chăm An Giang",
        category: "khan",
        description: "Khăn choàng màu xanh biển, mát mắt và tinh tế, phù hợp cả nam và nữ.",
        price: 250000,
        stock: 20,
        images: [khan3, khan4, khan5],
        isActive: true
    },
    {
        id: 12,
        name: "Khăn Choàng Sắc Trăng Chăm An Giang",
        category: "khan",
        description: "Khăn choàng trắng ngà, tinh khôi và thanh lịch, thích hợp làm quà tặng.",
        price: 250000,
        stock: 15,
        images: [khan4, khan5, khan6],
        isActive: true
    },
    {
        id: 13,
        name: "Khăn Choàng Sắc Đêm Chăm An Giang",
        category: "dd",
        description: "Khăn choàng đen sang trọng, dễ phối đồ, giữ ấm tốt.",
        price: 250000,
        stock: 18,
        images: [spk1, spk2, spk3],
        isActive: true
    },
    {
        id: 14,
        name: "Khăn Choàng Sắc Ngọc Chăm An Giang",
        category: "dd",
        description: "Khăn choàng xanh ngọc quyến rũ, kết hợp từ sợi thổ cẩm mịn màng.",
        price: 250000,
        stock: 12,
        images: [spk2, spk3, spk4],
        isActive: true
    },
    {
        id: 15,
        name: "Khăn Choàng Sắc Đào Chăm An Giang",
        category: "dd",
        description: "Khăn choàng hồng đào, dịu dàng và nữ tính, điểm nhấn cho phong cách cá nhân.",
        price: 250000,
        stock: 14,
        images: [spk3, spk4, spk1],
        isActive: true
    },
     {
        id: 15,
        name: "Khăn Choàng Sắc Đào Chăm An Giang",
        category: "dd",
        description: "Khăn choàng hồng đào, dịu dàng và nữ tính, điểm nhấn cho phong cách cá nhân.",
        price: 250000,
        stock: 14,
        images: [spk4, spk1, spk2],
        isActive: true
    }
];

export default productData;
