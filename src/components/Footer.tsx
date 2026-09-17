import { BookOpen, MapPin, Mail, Clock, Facebook, Twitter, Instagram, MessageCircle, ChevronRight, Check } from 'lucide-react';
import type { LegalType } from '../App';

interface FooterProps {
  onLegalOpen: (type: LegalType) => void;
}

export default function Footer({ onLegalOpen }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700">
                <BookOpen className="w-5 h-5 text-amber-400" strokeWidth={1.8} />
              </div>
              <div className="leading-tight">
                <span className="font-semibold text-lg">SFA</span>
                <span className="block text-slate-500 text-[11px] tracking-wide uppercase">School for All</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              School for All Welfare Organization is a non-profit dedicated to expanding access to quality education 
              for underprivileged children in Balochistan, Pakistan.
            </p>
            <p className="text-amber-400/80 italic text-sm font-medium">
              "Education for Every Child. Hope for Every Future."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm tracking-wide uppercase mb-5 text-slate-300">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: '#about', label: 'About Us' },
                { href: '#programs', label: 'Our Programs' },
                { href: '#impact', label: 'Our Impact' },
                { href: '#students', label: 'Student Stories' },
                { href: '#get-involved', label: 'Get Involved' },
                { href: '#contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-sm tracking-wide uppercase mb-5 text-slate-300">Programs</h4>
            <ul className="space-y-3">
              {[
                'Student Sponsorship',
                'Zant Academy Raeesabad',
                'School Construction',
                'Donation Drives',
                'Community Events',
              ].map((item) => (
                <li key={item}>
                  <span className="text-slate-400 text-sm flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-amber-400/70" strokeWidth={2} />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm tracking-wide uppercase mb-5 text-slate-300">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                <span className="text-slate-400 text-sm">Balochistan, Pakistan</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                <span className="text-slate-400 text-sm">info@schoolforall.org</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                <span className="text-slate-400 text-sm">Est. October 1, 2020</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-2 mt-6">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: MessageCircle, label: 'WhatsApp' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-9 h-9 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors border border-slate-700/50"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 text-slate-400" strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legal Links */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} School for All Welfare Organization (SFA). All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onLegalOpen('privacy')}
              className="text-slate-500 hover:text-slate-300 text-xs transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={() => onLegalOpen('terms')}
              className="text-slate-500 hover:text-slate-300 text-xs transition-colors"
            >
              Terms & Conditions
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={() => onLegalOpen('disclaimer')}
              className="text-slate-500 hover:text-slate-300 text-xs transition-colors"
            >
              Disclaimer
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
