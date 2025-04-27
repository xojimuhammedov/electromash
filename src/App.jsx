import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Services from './components/Services'
import ContactPage from './pages/ContactPage'
import ProjectCards from './components/Projects'
import About from './components/About'
import ServicesAboutPage from './pages/ServicesAboutPage'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <About />
            <Services />
          </>
        } />
        <Route path='/contact' element={
          <>
            <ContactPage />
          </>
        } />
        <Route path='/project' element={
          <>
            <ProjectCards />
          </>
        } />
        <Route path='/services/:id' element={<ServicesAboutPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
