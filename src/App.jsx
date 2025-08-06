import "./index.css";
import Header from "./component/header";
import Footer from "./component/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./page/Home";
// import About from "./page/About";
function App() {
  return (
    <div>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router> */}
      <Header />
      <Footer />
    </div>
  );
}

export default App;
