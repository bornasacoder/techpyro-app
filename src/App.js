import Navbar from "components/navbar/Navbar";
import Home from "pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import TravelBlog from "travelBlog/TravelBlog";


function App() {

  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path='/travel-blog' element={<TravelBlog/>} />

      </Routes>
    </Router>
    </>
  );
}

export default App
