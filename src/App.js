import Navbar from "components/navbar/Navbar";
import Home from "pages/home/Home";
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
      </Routes>
    </Router>
  );
}

export default App
