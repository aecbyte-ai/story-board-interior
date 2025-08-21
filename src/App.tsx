import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Contact_Page from './Pages/Contact_Page';
import Portfolio_Page from './Pages/Portfolio_Page';
import Testimonials_Page from './Pages/Testimonials_Page';
import About_Page from './Pages/About_Page';
import Services_Page from './Pages/Services_Page';
import Home_Page from './Pages/Home_Page';
import Decorative_Page from './Pages/Decorative_Page';

function App() {

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home_Page />} />
          <Route path="/portfolio" element={<Portfolio_Page />} />
          <Route path="/about" element={<About_Page />} />
          <Route path="/services" element={<Services_Page />} />
          <Route path="/testimonials" element={<Testimonials_Page />} />
          <Route path="/contact" element={<Contact_Page />} />
          <Route path="/decorative" element={<Decorative_Page />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
