import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import Location from "./page/Location";
import ChamvaLoginPage from "./page/Login";
import ProductsByCategory from "./page/ListProduct";
import ProductDetail from "./page/ProductDetail";
import Cart from "./page/Cart";
import Process from "./page/Process";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
        <Route path="/login" element={<ChamvaLoginPage />} />
        <Route path="/products" element={<ProductsByCategory />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/check-out" element={<Process />} />
      </Routes>
    </div>
  );
}

export default App;
