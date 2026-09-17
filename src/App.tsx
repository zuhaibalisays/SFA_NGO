import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Impact from './components/Impact';
import Students from './components/Students';
import GetInvolved from './components/GetInvolved';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <Programs />
      <Impact />
      <Students />
      <GetInvolved />
      <Footer />
    </div>
  );
}

export default App;
