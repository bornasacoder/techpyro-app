import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Career from "./pages/career/Career";
import Home from "./pages/home/Home";
import University from "./pages/university/University";
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
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/career" element={<Career/>} />
        <Route exact path="/university" element={<University/>} />
      </Routes>
    </Router>
  );
}

export default App
