import Footer from '@/Components/footer/Footer'
import Navbar from '@/Components/navbar/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  
  return (
  <>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}
