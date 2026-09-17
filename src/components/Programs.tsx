import { BookOpen, Building2, HardHat, Gift } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      id: 1,
      title: 'Education Support & Student Sponsorship',
      description: 'We identify deserving and orphaned children who dropped out due to financial hardship and cover their tuition fees in partner schools. We also provide complete annual essentials including uniforms, shoes, bags, books, and stationery.',
      Icon: BookOpen,
      highlights: ['Tuition fee coverage', 'Annual school essentials', 'Orphan support', 'Partner school network'],
    },
    {
      id: 2,
      title: 'Zant Academy Raeesabad',
      description: 'Our local educational facility provides quality learning in the heart of the community. The academy features regular recognition of "Students of the Week" and hosts cultural and commemorative events to celebrate student achievements.',
      Icon: Building2,
      highlights: ['Student of the Week', 'Cultural events', 'Community learning hub', 'Local faculty'],
    },
    {
      id: 3,
      title: 'School Construction & Infrastructure',
      description: 'We are actively building new school facilities to expand our reach and capacity. These new schools will serve communities that currently lack adequate educational infrastructure, bringing quality learning environments closer to children.',
      Icon: HardHat,
      highlights: ['New facilities', 'Expanded capacity', 'Underserved areas', 'Long-term investment'],
    },
    {
      id: 4,
      title: 'Non-Monetary Donation Drives',
      description: 'We appeal to the public to donate educational items directly rather than monetary gifts. This ensures that resources go straight to the children who need them — stationery, shoes, uniforms, and books make a tangible difference.',
      Icon: Gift,
      highlights: ['Stationery drives', 'Uniform donations', 'Book collections', 'Shoe campaigns'],
    },
  ];

  return (
    <section id="programs" className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-600 mb-3">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
            How We Make a Difference
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Through targeted programs and community partnerships, we're building pathways to education for every child in need.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-2xl p-8 border border-stone-200/60 hover:border-stone-300 hover:shadow-sm transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-6">
                <program.Icon className="w-5.5 h-5.5 text-amber-400" strokeWidth={1.8} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                {program.title}
              </h3>
              <p className="text-slate-500 leading-relaxed mb-6 text-sm">
                {program.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {program.highlights.map((highlight, i) => (
                  <span key={i} className="bg-stone-100 text-slate-600 text-xs font-medium px-3 py-1.5 rounded-md">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
