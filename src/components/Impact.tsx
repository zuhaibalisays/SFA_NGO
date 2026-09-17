import { useEffect, useState, useRef } from 'react';

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
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-white">
      {count}{suffix}
    </div>
  );
}

export default function Impact() {
  const stats = [
    { number: 100, suffix: '+', label: 'Students Supported', icon: '🎓' },
    { number: 50, suffix: '+', label: 'Families Helped', icon: '👨‍👩‍👧‍👦' },
    { number: 5, suffix: '+', label: 'Partner Schools', icon: '🏫' },
    { number: 4, suffix: '', label: 'Years of Service', icon: '📅' },
  ];

  const milestones = [
    { year: '2020', event: 'SFA founded in Balochistan with initial student sponsorship program' },
    { year: '2021', event: 'Expanded to support 30+ students; launched donation drive campaigns' },
    { year: '2022', event: 'Established Zant Academy Raeesabad as a community learning center' },
    { year: '2023', event: 'Initiated school construction project; reached 80+ students' },
    { year: '2024', event: 'Celebrated 100+ students supported; expanded infrastructure plans' },
  ];

  return (
    <section id="impact" className="py-20 md:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-64 h-64 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-semibold mb-4 border border-white/20">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Changing Lives, One Student at a Time
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Since 2020, we've been steadily growing our reach and deepening our impact across Balochistan.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8">
              <span className="text-3xl mb-3 block">{stat.icon}</span>
              <AnimatedCounter end={stat.number} suffix={stat.suffix} />
              <p className="text-blue-200 mt-2 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-10">Our Journey</h3>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/20 -translate-x-1/2"></div>
            
            {milestones.map((milestone, i) => (
              <div key={i} className={`relative flex items-center mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-amber-400 rounded-full border-4 border-blue-900 -translate-x-1/2 z-10"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-5">
                    <span className="text-amber-400 font-bold text-lg">{milestone.year}</span>
                    <p className="text-white/90 mt-1 text-sm md:text-base">{milestone.event}</p>
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
