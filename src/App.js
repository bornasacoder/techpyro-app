import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import TwoByTwo from './components/twobytwo';
import THREECARD from './components/threecardgrid';
import ThreeIntoTwoGrid from './components/threeintotwo';
import TwoFlexBoxesWithThreeCards from './components/cardplsyoutubevisection';
import DifferentShapeComponent from './components/differentshapesec';
import TwoFlexBoxes from './components/sectionwithbgC';
import Footer from './components/footer';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
const theme = createTheme({
  // define your theme here
});
function App() {
  return (
    <div className="App" style={{overflowX:"hidden"}}>
         <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
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
