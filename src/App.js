import About from "components/card/card2/About";
import Contact from "components/card/card2/Contact";
import Gallery from "components/card/card2/Gallery";
import Packages from "components/card/card2/Packages";
import Pricing from "components/card/card2/Pricing";
import Home from "pages/home/Home";
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
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About />}/>
        <Route path="/Packages" element={<Packages />}/>
        <Route path="/Gallery" element={<Gallery />}/>
        <Route path="/Pricing" element={<Pricing />}/>
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App
