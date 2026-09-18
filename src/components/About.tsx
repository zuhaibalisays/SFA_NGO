import { Clock, Heart, Eye, BookOpen, Users, Shield, Sprout, Target, Compass } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-600 mb-3">
            About SFA
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
            Who We Are
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            A grassroots non-profit organization working to transform lives through education in Balochistan, Pakistan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Story */}
          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <div className="w-11 h-11 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-slate-700" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-lg mb-2">Our Story</h3>
                <p className="text-slate-500 leading-relaxed">
                  Founded on <strong className="text-slate-700">October 1, 2020</strong>, School for All Welfare Organization (SFA) began as a small initiative 
                  to help children in Balochistan who had been forced to drop out of school due to financial hardship. 
                  What started as helping a few students has grown into a movement that touches hundreds of lives.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-11 h-11 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 text-slate-700" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-lg mb-2">Our Mission</h3>
                <p className="text-slate-500 leading-relaxed">
                  To expand access to quality education, support out-of-school and underprivileged children, 
                  pay outstanding tuition fees, provide learning materials, and operate local educational centers 
                  that nurture young minds and build brighter futures.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-11 h-11 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5 text-slate-700" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-lg mb-2">Our Vision</h3>
                <p className="text-slate-500 leading-relaxed">
                  A Balochistan where every child — regardless of economic background — has access to quality 
                  education, the tools to learn, and the opportunity to build a meaningful future.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Values */}
          <div className="bg-stone-50 rounded-2xl p-8 md:p-10 border border-stone-200/60">
            <h3 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">Our Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: BookOpen, title: 'Education First', desc: 'Every child deserves the right to learn and grow.' },
                { icon: Users, title: 'Community', desc: 'We work hand-in-hand with local communities.' },
                { icon: Shield, title: 'Transparency', desc: 'Full accountability in how we use resources.' },
                { icon: Sprout, title: 'Sustainability', desc: 'Building lasting solutions, not temporary fixes.' },
                { icon: Compass, title: 'Compassion', desc: 'Every decision is guided by empathy and care.' },
                { icon: Target, title: 'Impact', desc: 'Measurable outcomes that change real lives.' },
              ].map((value, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-stone-200/60 hover:border-stone-300 transition-colors">
                  <value.icon className="w-5 h-5 text-slate-600 mb-2.5" strokeWidth={1.8} />
                  <h4 className="font-semibold text-slate-900 text-sm">{value.title}</h4>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
