export default function GetInvolved() {
  const donationItems = [
    { icon: '📝', name: 'Stationery', desc: 'Pens, pencils, notebooks, erasers, rulers' },
    { icon: '👟', name: 'Shoes', desc: 'School shoes in various sizes' },
    { icon: '👔', name: 'Uniforms', desc: 'School uniforms for boys and girls' },
    { icon: '📚', name: 'Books', desc: 'Textbooks and storybooks for all ages' },
    { icon: '🎒', name: 'Bags', desc: 'School bags and backpacks' },
    { icon: '📐', name: 'Supplies', desc: 'Geometry sets, art supplies, craft materials' },
  ];

  const waysToHelp = [
    {
      title: 'Sponsor a Student',
      description: 'Cover a child\'s tuition fees and annual school essentials for an entire year.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: 'blue',
    },
    {
      title: 'Donate Supplies',
      description: 'Send educational items directly — stationery, uniforms, shoes, and books.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      color: 'amber',
    },
    {
      title: 'Support Construction',
      description: 'Help us build new school facilities to serve more children in underserved areas.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'green',
    },
    {
      title: 'Spread the Word',
      description: 'Share our mission with your network and help us reach more potential supporters.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      ),
      color: 'purple',
    },
  ];

  const colorClasses: Record<string, { bg: string; iconBg: string; text: string }> = {
    blue: { bg: 'bg-blue-50', iconBg: 'bg-blue-100', text: 'text-blue-700' },
    amber: { bg: 'bg-amber-50', iconBg: 'bg-amber-100', text: 'text-amber-700' },
    green: { bg: 'bg-green-50', iconBg: 'bg-green-100', text: 'text-green-700' },
    purple: { bg: 'bg-purple-50', iconBg: 'bg-purple-100', text: 'text-purple-700' },
  };

  return (
    <section id="get-involved" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-rose-100 text-rose-700 rounded-full text-sm font-semibold mb-4">
            Get Involved
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How You Can Help
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            There are many ways to support our mission. Every contribution, big or small, makes a real difference in a child's life.
          </p>
        </div>

        {/* Ways to Help */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {waysToHelp.map((way, i) => {
            const colors = colorClasses[way.color];
            return (
              <div key={i} className={`${colors.bg} rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                <div className={`${colors.iconBg} ${colors.text} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                  {way.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{way.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{way.description}</p>
              </div>
            );
          })}
        </div>

        {/* Donation Items */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Items We Need Most
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              Instead of monetary gifts, consider donating these educational items directly to children in need:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {donationItems.map((item, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors border border-gray-100">
                <span className="text-3xl mb-2 block">{item.icon}</span>
                <h4 className="font-semibold text-gray-900 text-sm">{item.name}</h4>
                <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-700 to-indigo-700 rounded-3xl p-8 md:p-12 text-white max-w-3xl w-full">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              Contact us to learn more about how you can contribute. Whether it's sponsoring a student, 
              donating supplies, or volunteering your time — every act of kindness counts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-white text-blue-700 font-bold rounded-full text-lg hover:bg-blue-50 transition-all shadow-lg"
              >
                Contact Us
              </a>
              <a
                href="mailto:info@schoolforall.org"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-full text-lg hover:bg-white/20 transition-all"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
