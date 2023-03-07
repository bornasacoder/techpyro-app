import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import MenuBar from './components/menubar';
import Mycarousel from './components/carousel';
import TravelSearch from './components/dropdown';
import MyCardswithHeading from './components/headingwithFourboxes';
import Collage from './components/collage';
import Packages from './components/Packages';
import MYcard from './components/GuidesSlider/card';
import Guides from './components/Guides';
import Categories from './components/categories';
import Footer from './components/footer';

function App() {
  return (
    <div className="App" style={{overflowX:"hidden"}}>
     <Navbar />
     <MenuBar />
     < Mycarousel />
     < TravelSearch />
     < MyCardswithHeading />
     < Collage />
     < Packages />
     < Categories />
     < Guides />
     < Footer />
    </div>
  );
}

export default App;
