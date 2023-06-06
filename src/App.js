
import Login from "../../components/pages/Login";
import Offers from "../../components/pages/Offers";
import Product from "../../components/pages/Product";
import Search from "../../components/pages/Search";
import Signup from "../../components/pages/Signup";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  return (
    <>
    
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/search" element={<Search/>} />
     
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/offers" element={<Offers/>} />
        <Route exact path="/product/:id" element={<Product/>} />
        <Route exact path="/signup" element={<Signup/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App
