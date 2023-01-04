import Home from "pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "components/navbar/Navbar";

function App() {

  return (
    <>
    <Navbar />
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App
