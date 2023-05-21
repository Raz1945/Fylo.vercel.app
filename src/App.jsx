import { Navbar } from './components/Navbar'
import { Header } from './components/Header'
import { Feature } from './components/Feature'
import { Productive } from './components/Productive'
import { Testimonials } from './components/Testimonials'
import { GetEarly } from './components/Others/GetEarly/getEarly'
import { Footer } from './components/Footer'
import './styles/css/other/normalize.css'
import './styles/css/App.css'

function App() {
  return (
    <>
      <Navbar/>
      <main className="wrapper-main">
        <Header/>
        <Feature/>
        <Productive/>
        <Testimonials/>
        <GetEarly/>
      </main> 
      <Footer/>
    </>
  )
}

export default App
