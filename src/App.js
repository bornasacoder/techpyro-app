
import Home from "./pages/home/Home";
import Category from "./pages/category/category/Category";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/websites" element={<Category/>} />
      </Routes>
    </Router>
  );
}

export default App
