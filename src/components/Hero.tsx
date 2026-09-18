import { ArrowDown, Calendar, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}></div>
        {/* Subtle accent glow */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-32">
        <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 mb-10">
          <MapPin className="w-3.5 h-3.5 text-amber-400" strokeWidth={2} />
          <span className="text-white/80 text-xs font-medium tracking-wide">Balochistan, Pakistan</span>
          <span className="w-px h-3 bg-white/20"></span>
          <Calendar className="w-3.5 h-3.5 text-amber-400" strokeWidth={2} />
          <span className="text-white/80 text-xs font-medium tracking-wide">Est. October 2020</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
          Education for{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
            Every Child
          </span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-light text-white/60 mb-6 tracking-tight">
          Hope for Every Future
        </p>

        <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed">
          School for All Welfare Organization is dedicated to expanding access to quality education, 
          supporting out-of-school and underprivileged children across Balochistan, Pakistan.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-lg text-sm tracking-wide transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-400/30"
          >
            Support a Child Today
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-medium rounded-lg text-sm tracking-wide transition-all"
          >
            Learn Our Story
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 max-w-3xl mx-auto">
          {[
            { number: '2020', label: 'Founded' },
            { number: '100+', label: 'Students Supported' },
            { number: '1', label: 'Academy Running' },
            { number: '4+', label: 'Active Programs' },
          ].map((stat, i) => (
            <div key={i} className="bg-slate-900/80 p-5 md:p-6 text-center">
              <div className="text-xl md:text-2xl font-bold text-white tracking-tight">{stat.number}</div>
              <div className="text-white/40 text-xs mt-1 font-medium tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-white/30" />
      </div>
    </section>
  );
}
