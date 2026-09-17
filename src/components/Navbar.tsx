import { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#programs', label: 'Programs' },
    { href: '#impact', label: 'Impact' },
    { href: '#students', label: 'Students' },
    { href: '#get-involved', label: 'Get Involved' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <span className={`font-bold text-lg md:text-xl ${scrolled ? 'text-blue-900' : 'text-white'}`}>
                SFA
              </span>
              <span className={`hidden sm:block text-xs ${scrolled ? 'text-gray-500' : 'text-blue-100'}`}>
                School for All
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#get-involved"
              className="ml-3 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Donate Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-xl border-t">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#get-involved"
              onClick={() => setMobileOpen(false)}
              className="block text-center mt-3 px-5 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition-all"
            >
              Donate Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
