export default function Programs() {
  const programs = [
    {
      id: 1,
      title: 'Education Support & Student Sponsorship',
      description: 'We identify deserving and orphaned children who dropped out due to financial hardship and cover their tuition fees in partner schools. We also provide complete annual essentials including uniforms, shoes, bags, books, and stationery.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: 'blue',
      highlights: ['Tuition fee coverage', 'Annual school essentials', 'Orphan support', 'Partner school network'],
    },
    {
      id: 2,
      title: 'Zant Academy Raeesabad',
      description: 'Our local educational facility provides quality learning in the heart of the community. The academy features regular recognition of "Students of the Week" and hosts cultural and commemorative events to celebrate student achievements.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'amber',
      highlights: ['Student of the Week', 'Cultural events', 'Community learning hub', 'Local faculty'],
    },
    {
      id: 3,
      title: 'School Construction & Infrastructure',
      description: 'We are actively building new school facilities to expand our reach and capacity. These new schools will serve communities that currently lack adequate educational infrastructure, bringing quality learning environments closer to children.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'green',
      highlights: ['New facilities', 'Expanded capacity', 'Underserved areas', 'Long-term investment'],
    },
    {
      id: 4,
      title: 'Non-Monetary Donation Drives',
      description: 'We appeal to the public to donate educational items directly rather than monetary gifts. This ensures that resources go straight to the children who need them — stationery, shoes, uniforms, and books make a tangible difference.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      color: 'purple',
      highlights: ['Stationery drives', 'Uniform donations', 'Book collections', 'Shoe campaigns'],
    },
  ];

  const colorMap: Record<string, { bg: string; iconBg: string; text: string; border: string; badge: string }> = {
    blue: { bg: 'bg-blue-50', iconBg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700' },
    amber: { bg: 'bg-amber-50', iconBg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-200', badge: 'bg-amber-100 text-amber-700' },
    green: { bg: 'bg-green-50', iconBg: 'bg-green-100', text: 'text-green-700', border: 'border-green-200', badge: 'bg-green-100 text-green-700' },
    purple: { bg: 'bg-purple-50', iconBg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200', badge: 'bg-purple-100 text-purple-700' },
  };

  return (
    <section id="programs" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How We Make a Difference
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Through targeted programs and community partnerships, we're building pathways to education for every child in need.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program) => {
            const colors = colorMap[program.color];
            return (
              <div
                key={program.id}
                className={`${colors.bg} rounded-3xl p-8 border ${colors.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`${colors.iconBg} ${colors.text} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                  {program.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {program.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {program.highlights.map((highlight, i) => (
                    <span key={i} className={`${colors.badge} text-xs font-medium px-3 py-1 rounded-full`}>
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
