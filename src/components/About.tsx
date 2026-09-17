export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            About SFA
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A grassroots non-profit organization working to transform lives through education in Balochistan, Pakistan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Story */}
          <div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Our Story</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Founded on <strong>October 1, 2020</strong>, School for All Welfare Organization (SFA) began as a small initiative 
                    to help children in Balochistan who had been forced to drop out of school due to financial hardship. 
                    What started as helping a few students has grown into a movement that touches hundreds of lives.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To expand access to quality education, support out-of-school and underprivileged children, 
                    pay outstanding tuition fees, provide learning materials, and operate local educational centers 
                    that nurture young minds and build brighter futures.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A Balochistan where every child — regardless of economic background — has access to quality 
                    education, the tools to learn, and the opportunity to build a meaningful future.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Values */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-10 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '📚', title: 'Education First', desc: 'Every child deserves the right to learn and grow.' },
                { icon: '🤝', title: 'Community', desc: 'We work hand-in-hand with local communities.' },
                { icon: '💡', title: 'Transparency', desc: 'Full accountability in how we use resources.' },
                { icon: '🌱', title: 'Sustainability', desc: 'Building lasting solutions, not temporary fixes.' },
                { icon: '❤️', title: 'Compassion', desc: 'Every decision is guided by empathy and care.' },
                { icon: '🎯', title: 'Impact', desc: 'Measurable outcomes that change real lives.' },
              ].map((value, i) => (
                <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <span className="text-2xl mb-2 block">{value.icon}</span>
                  <h4 className="font-semibold text-gray-900 text-sm">{value.title}</h4>
                  <p className="text-gray-500 text-xs mt-1">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
