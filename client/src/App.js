import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Category from "./components/category/Category";
import Footer from "./components/footer/Footer"
import Categories from "./pages/categories/Categories";
import ProductDetail from "./pages/products/ProductDetail";

function App() {
  return (
    <div className="conatiner">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId?" element={<Categories />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/categories" element={<Category />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
