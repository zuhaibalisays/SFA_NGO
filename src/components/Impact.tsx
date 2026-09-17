import { useEffect, useState, useRef } from 'react';
import { GraduationCap, Users, School, Calendar } from 'lucide-react';

function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
      {count}{suffix}
    </div>
  );
}

export default function Impact() {
  const stats = [
    { number: 100, suffix: '+', label: 'Students Supported', Icon: GraduationCap },
    { number: 50, suffix: '+', label: 'Families Helped', Icon: Users },
    { number: 5, suffix: '+', label: 'Partner Schools', Icon: School },
    { number: 4, suffix: '', label: 'Years of Service', Icon: Calendar },
  ];

  const milestones = [
    { year: '2020', event: 'SFA founded in Balochistan with initial student sponsorship program' },
    { year: '2021', event: 'Expanded to support 30+ students; launched donation drive campaigns' },
    { year: '2022', event: 'Established Zant Academy Raeesabad as a community learning center' },
    { year: '2023', event: 'Initiated school construction project; reached 80+ students' },
    { year: '2024', event: 'Celebrated 100+ students supported; expanded infrastructure plans' },
  ];

  return (
    <section id="impact" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-600 mb-3">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
            Changing Lives, One Student at a Time
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Since 2020, we've been steadily growing our reach and deepening our impact across Balochistan.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="bg-stone-50 border border-stone-200/60 rounded-2xl p-6 md:p-8 text-center">
              <stat.Icon className="w-6 h-6 text-slate-400 mx-auto mb-4" strokeWidth={1.5} />
              <AnimatedCounter end={stat.number} suffix={stat.suffix} />
              <p className="text-slate-500 mt-2 text-xs font-medium tracking-wide uppercase">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-12 tracking-tight">Our Journey</h3>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-stone-200 -translate-x-1/2"></div>
            
            {milestones.map((milestone, i) => (
              <div key={i} className={`relative flex items-center mb-8 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-amber-500 rounded-full border-2 border-white shadow-sm -translate-x-1/2 z-10"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-stone-50 border border-stone-200/60 rounded-xl p-5">
                    <span className="text-amber-600 font-bold text-sm tracking-wide">{milestone.year}</span>
                    <p className="text-slate-600 mt-1.5 text-sm leading-relaxed">{milestone.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
