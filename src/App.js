
// import Home from "./pages/home/Home";

// import Products from "./pages/category/products/Products";
// import Product from "./pages/category/product/Product";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Cart from "./pages/cart/Cart";
// import Orders from "./pages/orders/Orders";
// import CheckOut from "./pages/checkout/CheckOut";
// import OrderDetails from "./pages/orders/OrderDetails";
// import Profile from "./pages/profile/Profile";
// import Search from "./pages/search/Search";
// import Login from "./pages/auth/Login";
// import Signup from "./pages/auth/Signup";
import Navbar from "./components/Navbar/Navbar"
import Block1 from "./contents/home/block1/Block1";
import Block2 from "./contents/home/block2/Block2";
import Block3 from "./contents/home/block3/Block3";
import Block4 from "./contents/home/block4/Block4";
import Block5 from "./contents/home/block5/Block5";
import Block6 from "./contents/home/block6/Block6";
import Block7 from "./contents/home/block7/Block7";
import Block8 from "./contents/home/block8/Block8";
import Block9 from "./contents/home/block9/Block9";
import Block10 from "./contents/home/block10/Block10";
import Block11 from "./contents/home/block11/Block11";
import Block12 from "./contents/home/block12/Block12";
import Block13 from "./contents/home/block13/Block13";
import Block14 from "./contents/home/block14/Block14";
import Block15 from "./contents/home/block15/Block15";
import Block16 from "./contents/home/block16/Block16";
import Block17 from "./contents/home/Block17/Block17";
import Footer from "./contents/home/Footer/Footer";

function App() {
  return (
    <>
    
    <Navbar/>
    <Block1/>
    <Block2/>
    <Block3/>
    <Block4/>
    <Block5/>
    <Block6/>
    <Block7/>
    <Block9/>
    <Block8/>
    <Block10/>
    <Block11/>
    <Block12/>
    <Block13/>
    <Block14/>
    <Block15/>
    <Block16/>
    <Block17/>
    <Footer/>

    <Router>
      <Routes>
        {/* <Route exact path="/" element={<Home/>} />
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
        <Route exact path="/signup" element={<Signup/>} /> */
        
        }
      </Routes>
    </Router>
  
    </>);
}

export default App
