import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Services from './components/Services'
import ContactPage from './pages/ContactPage'
import About from './components/About'
import ServicesAboutPage from './pages/ServicesAboutPage'
import ProjectsPage from './pages/ProjectsPage'

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
            <ProjectsPage />
          </>
        } />
        <Route path='/services/:id' element={<ServicesAboutPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
