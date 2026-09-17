import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Impact from './components/Impact';
import Students from './components/Students';
import GetInvolved from './components/GetInvolved';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';

export type LegalType = 'privacy' | 'terms' | 'disclaimer' | null;

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [legalModal, setLegalModal] = useState<LegalType>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (legalModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [legalModal]);

  return (
    <div className="min-h-screen bg-stone-50 text-slate-800 font-sans antialiased">
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <Programs />
      <Impact />
      <Students />
      <GetInvolved />
      <Contact />
      <Footer onLegalOpen={setLegalModal} />
      {legalModal && (
        <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
      )}
    </div>
  );
}

export default App;
