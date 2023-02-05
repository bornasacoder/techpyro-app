
import Home from "./pages/home/Home";
import Category from "./pages/category/category/Category";
import Products from "./pages/category/products/Products";
import Product from "./pages/category/product/Product";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Orders from "./pages/orders/Orders";
import CheckOut from "./pages/checkout/CheckOut";
import OrderDetails from "./pages/orders/OrderDetails";
import Profile from "./pages/profile/Profile";
import Search from "./pages/search/Search";
import Login from "./pages/auth/Login";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/websites" element={<Category/>} />
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/product" element={<Product/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/checkout" element={<CheckOut/>} />
        <Route exact path="/orders" element={<Orders/>} />
        <Route exact path="/orderdetails" element={<OrderDetails/>} />
        <Route exact path="/my-account/profile" element={<Profile/>} />
        <Route exact path="/search" element={<Search/>} />
        <Route exact path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App
