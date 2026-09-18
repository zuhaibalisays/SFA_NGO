import { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-sm shadow-sm border-b border-stone-200/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <BookOpen className="w-5 h-5 md:w-5.5 md:h-5.5 text-amber-400" strokeWidth={1.8} />
            </div>
            <div className="leading-tight">
              <span className={`font-semibold text-lg tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                SFA
              </span>
              <span className={`hidden sm:block text-[11px] font-medium tracking-wide uppercase ${scrolled ? 'text-slate-500' : 'text-white/70'}`}>
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
                className={`px-4 py-2 rounded-lg text-[13px] font-medium tracking-wide transition-colors ${
                  scrolled
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-stone-100'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg text-[13px] tracking-wide transition-all shadow-sm hover:shadow-md"
            >
              Donate Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2.5 rounded-lg transition-colors ${scrolled ? 'text-slate-700 hover:bg-stone-100' : 'text-white hover:bg-white/10'}`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-stone-200 shadow-xl">
          <div className="px-4 py-5 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 rounded-lg text-slate-700 hover:bg-stone-100 hover:text-slate-900 font-medium text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center mt-4 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg text-sm transition-all"
            >
              Donate Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
