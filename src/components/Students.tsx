import { Star, User, Quote } from 'lucide-react';

export default function Students() {
  const stories = [
    {
      name: 'Guhram Niyaz',
      age: 12,
      story: 'Guhram had to leave school when his family faced financial difficulties. Through SFA\'s sponsorship program, his tuition fees were covered and he received all necessary school supplies. Today, he is one of the top performers in his class.',
      quote: '"I want to become a doctor so I can help my community."',
      status: 'Sponsored Student',
    },
    {
      name: 'Jawad Altaf',
      age: 10,
      story: 'Jawad is an orphan who was struggling to continue his education. SFA stepped in to provide full educational support including tuition, uniform, books, and stationery. His attendance and grades have improved remarkably.',
      quote: '"Education is my path to a better tomorrow."',
      status: 'Sponsored Student',
    },
    {
      name: 'Student of the Week',
      age: null,
      story: 'Every week at Zant Academy Raeesabad, we recognize outstanding students who demonstrate exceptional dedication, improvement, and character. These celebrations motivate all students to strive for excellence.',
      quote: '"Recognition inspires us to work even harder."',
      status: 'Zant Academy',
    },
  ];

  return (
    <section id="students" className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-600 mb-3">
            Student Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
            Faces of Hope
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Every child we support carries a dream. These are some of the stories that inspire us to keep going.
          </p>
        </div>

        {/* Stories */}
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, i) => (
            <div key={i} className="bg-white rounded-2xl border border-stone-200/60 overflow-hidden hover:shadow-sm transition-all duration-300">
              {/* Header */}
              <div className="bg-slate-900 p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-3 border border-white/10">
                  {story.name === 'Student of the Week' ? (
                    <Star className="w-7 h-7 text-amber-400" strokeWidth={1.5} />
                  ) : (
                    <User className="w-7 h-7 text-white/70" strokeWidth={1.5} />
                  )}
                </div>
                <h3 className="text-white font-semibold text-base">{story.name}</h3>
                {story.age && <p className="text-white/40 text-xs mt-0.5">Age: {story.age}</p>}
                <span className="inline-block mt-3 px-3 py-1 bg-white/10 border border-white/10 rounded-md text-white/80 text-xs font-medium">
                  {story.status}
                </span>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {story.story}
                </p>
                <div className="flex items-start gap-3 border-t border-stone-100 pt-4">
                  <Quote className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="italic text-slate-600 text-sm leading-relaxed">
                    {story.quote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 md:p-12 border border-stone-200/60">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
            Every Child Deserves a Chance
          </h3>
          <p className="text-slate-500 max-w-2xl mx-auto mb-8">
            There are many more children like Guhram and Jawad waiting for support. 
            Your contribution can change a child's life forever.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg text-sm tracking-wide transition-all shadow-sm"
          >
            Sponsor a Student
          </a>
        </div>

        {/* Child Protection Disclosure */}
        <div className="mt-10 max-w-3xl mx-auto">
          <p className="text-center text-xs text-slate-400 leading-relaxed italic border-t border-stone-200/60 pt-6">
            <strong className="text-slate-500 not-italic">Child Protection Notice:</strong> All student images, names, and stories featured on this website are published with explicit, written consent from parents or legal guardians. The privacy, dignity, and safety of the children we serve remain our highest priority.
          </p>
        </div>
      </div>
    </section>
  );
}
