
import Home from "./pages/home/Home"; 
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <>
  {/*<Navbar />*/}
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </Router>
    {/*<Footer />*/}
    </>
  );
}

export default App
