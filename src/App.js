import Home from "pages/home/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Card3 from "components/card/card2/Card3";
import Card4 from "components/card/Card4";
import Card5 from "components/card/Card5";
import Login from "components/card/card2/Login";
import Aboutus from "components/card/card2/Aboutus";


function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
  
        <Route path='/' element={  <Home />}/>
        <Route path='/Admission Form' element={ <Card3 />}/>
        <Route path="/Contact Us" element={<Card4 />}/>
        <Route path="/Search" element={<Card5 />}/>
        <Route path="Login" element={<Login />}/>
        <Route path="About Us" element={<Aboutus />}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
