
import Home from "./pages/home/Home";
import Category from "./pages/category/category/Category";
import Products from "./pages/category/products/Products";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Orders from "./pages/orders/Orders";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/websites" element={<Category/>} />
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/orders" element={<Orders/>} />
      </Routes>
    </Router>
  );
}

export default App
