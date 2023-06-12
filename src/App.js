
import Home from './pages/Home/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className='h-[100vh] w-[100vw]'>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App;
