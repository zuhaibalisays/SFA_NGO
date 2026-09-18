import { BookOpen, MapPin, Mail, Phone, Clock, Facebook, Instagram, Youtube, ChevronRight, Check, ExternalLink } from 'lucide-react';
import type { LegalType } from '../App';

interface FooterProps {
  onLegalOpen: (type: LegalType) => void;
}

const LOGO_URL = 'https://raw.githubusercontent.com/zuhaibalisays/SFA_NGO/main/SFA%20Logo.png';

// X (Twitter) icon component — kept available for future use when profile URL is added
// function XIcon({ className }: { className?: string }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//     </svg>
//   );
// }

export default function Footer({ onLegalOpen }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white flex items-center justify-center">
                <img
                  src={LOGO_URL}
                  alt="SFA Logo"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
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
                { href: 'https://sfadailyarticles.blogspot.com/', label: 'Blog', external: true },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    {...('external' in link && link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 transition-colors" />
                    {link.label}
                    {'external' in link && link.external && (
                      <ExternalLink className="w-3 h-3 text-slate-600" />
                    )}
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
                <a href="mailto:info@schoolforall.org" className="text-slate-400 text-sm hover:text-white transition-colors">
                  info@schoolforall.org
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                <a href="tel:03222773334" className="text-slate-400 text-sm hover:text-white transition-colors">
                  0322 2773334
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                <span className="text-slate-400 text-sm">Est. October 1, 2020</span>
              </li>
            </ul>

            {/* Social Links — only active profiles are shown */}
            <div className="flex gap-2 mt-6">
              <a
                href="https://www.facebook.com/SchoolForAllWelfareOrganization"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors border border-slate-700/50"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-slate-400" strokeWidth={1.8} />
              </a>
              {/* X (Twitter) icon hidden — no active profile URL provided yet */}
              <a
                href="https://www.instagram.com/school_for_all_welfare_org/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors border border-slate-700/50"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-slate-400" strokeWidth={1.8} />
              </a>
              <a
                href="https://www.youtube.com/@schoolforallwelfareorganiz2602"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors border border-slate-700/50"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 text-slate-400" strokeWidth={1.8} />
              </a>
            </div>

            {/* Blog Link */}
            <a
              href="https://sfadailyarticles.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700/50 transition-colors group"
            >
              <BookOpen className="w-4 h-4 text-amber-400" strokeWidth={1.8} />
              <span className="text-slate-300 text-xs font-medium group-hover:text-white transition-colors">Read Our Blog</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
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
