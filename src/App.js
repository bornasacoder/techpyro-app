import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import MainCarousel from './components/maincarousel';
import PrimaryCard from './components/topCourses/primarycard';
import SecondaryCard from './components/topCourses/secondarycard';
import TopCourses from './components/topCourses/topcourses';
import MasterStudyBlog from './components/masterstudyblog';
import Blog from './components/blog/blogcontainer';
import Footer from './components/footer';
import {RemoveScrollBar} from "react-remove-scroll-bar";

function App() {
  return (
    <div style={{overflowX:"hidden"}} >
       < Navbar />
       < MainCarousel />
       {/* < PrimaryCard /> */}
       {/* < SecondaryCard /> */}
       < TopCourses />
       < MasterStudyBlog />
       <  Blog />
<Footer />
    </div>
  );
}

export default App;
