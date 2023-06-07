
import './App.css';
import Navbar from './components/navbar';
import TwoByTwo from './components/twobytwo';
import THREECARD from './components/threecardgrid';
import ThreeIntoTwoGrid from './components/threeintotwo';
import TwoFlexBoxesWithThreeCards from './components/cardplsyoutubevisection';
import DifferentShapeComponent from './components/differentshapesec';
import TwoFlexBoxes from './components/sectionwithbgC';
import Footer from './components/footer';


function App() {
  return (
    <div className="App" style={{overflowX:"hidden"}}>
      <Navbar />
       < TwoByTwo />
       < THREECARD />
       < ThreeIntoTwoGrid />
       < TwoFlexBoxesWithThreeCards />
       < DifferentShapeComponent />
       < TwoFlexBoxes />
       <Footer />
    </div>
  )
};

export default App;
