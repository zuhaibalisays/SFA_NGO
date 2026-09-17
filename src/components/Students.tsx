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
    <section id="students" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            Student Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Faces of Hope
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every child we support carries a dream. These are some of the stories that inspire us to keep going.
          </p>
        </div>

        {/* Stories */}
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <div key={i} className="bg-gradient-to-b from-white to-gray-50 rounded-3xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Avatar area */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-center">
                <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <span className="text-3xl">
                    {story.name === 'Student of the Week' ? '⭐' : '👦'}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg">{story.name}</h3>
                {story.age && <p className="text-blue-200 text-sm">Age: {story.age}</p>}
                <span className="inline-block mt-2 px-3 py-1 bg-white/20 rounded-full text-white text-xs font-medium">
                  {story.status}
                </span>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {story.story}
                </p>
                <blockquote className="border-l-4 border-amber-400 pl-4 italic text-gray-700 text-sm">
                  {story.quote}
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 border border-amber-200">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Every Child Deserves a Chance
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            There are many more children like Guhram and Jawad waiting for support. 
            Your contribution can change a child's life forever.
          </p>
          <a
            href="#get-involved"
            className="inline-block px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-full text-lg transition-all shadow-lg hover:shadow-xl"
          >
            Sponsor a Student
          </a>
        </div>
      </div>
    </section>
  );
}
