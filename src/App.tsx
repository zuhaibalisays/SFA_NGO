import { useState, useEffect, Component, type ReactNode, type ErrorInfo } from 'react';
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

/**
 * Error Boundary — catches React rendering errors and displays a
 * friendly fallback instead of a blank screen.
 * Does NOT expose stack traces or internal details to users.
 */
interface ErrorBoundaryProps {
  children: ReactNode;
}
interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Log to console for developers — never expose to users
    console.error('SFA Application Error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-stone-50 flex items-center justify-center px-6">
          <div className="max-w-md text-center">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Something went wrong</h1>
            <p className="text-slate-500 mb-8 text-sm leading-relaxed">
              We're sorry — an unexpected error occurred. Please try refreshing the page or contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg text-sm tracking-wide transition-all"
              >
                Refresh Page
              </button>
              <a
                href="mailto:info@schoolforall.org"
                className="w-full sm:w-auto px-6 py-3 bg-stone-100 hover:bg-stone-200 text-slate-700 font-medium rounded-lg text-sm tracking-wide transition-all"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function AppContent() {
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

function App() {
  return (
    <ErrorBoundary>
      <AppContent />
    </ErrorBoundary>
  );
}

export default App;
