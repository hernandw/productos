
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/NavBar/Navbar'
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Contact from './components/pages/Contact/Contact';
import NotFound from './components/pages/NotFound/NotFound';

const App = () => {
  return (
   
      <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
        
      </div>
   
  );
}

export default App
