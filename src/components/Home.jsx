import React , { useState, useEffect }from 'react';
import Navbar from './navbar';
import Mycarousel from './Mycarousel';
import MyComponent from './MyComponent';
import Testimonial from './Testimonial';
import Footer from './Footer';
import MySecondComponent from './MySecondComponent';
import  useMedia  from 'react-media';
import Hambar from './Hambar';

export default  function Home  ()  {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  return (
    <div style={{ maxwidth:'100%',
    overflowx: 'hidden',  backgroundImage: "url(https://wallpaperaccess.com/full/1288325.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",}}>
       

      <Mycarousel/>
      {!matches && (<Hambar />)}
      {matches && ( <Navbar />)} 
      <MyComponent />
      <MySecondComponent/>
      <Testimonial/>
      <Footer/>
    </div>
  )

};

