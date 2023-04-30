// import Navbar from "components/navbar/Navbar";
import Home from "pages/home/Home";
import Product from "pages/product/Product";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Product/:i" element={<Product/>} />
      </Routes>
    </Router>
  );
}

export default App
