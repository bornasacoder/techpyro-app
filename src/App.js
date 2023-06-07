import Navbar from "./components/navbar/Navbar";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Event from "./pages/events/Event";
import Home from "./pages/home/Home";
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
        <Route exact path="/blog" element={<Blog/>} />
        <Route exact path="/event" element={<Event/>} />
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App
