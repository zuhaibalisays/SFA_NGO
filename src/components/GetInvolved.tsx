import { UserPlus, Gift, Building, Share2, Pencil, Footprints, Shirt, BookOpen, Backpack, Ruler } from 'lucide-react';

export default function GetInvolved() {
  const donationItems = [
    { Icon: Pencil, name: 'Stationery', desc: 'Pens, pencils, notebooks, erasers, rulers' },
    { Icon: Footprints, name: 'Shoes', desc: 'School shoes in various sizes' },
    { Icon: Shirt, name: 'Uniforms', desc: 'School uniforms for boys and girls' },
    { Icon: BookOpen, name: 'Books', desc: 'Textbooks and storybooks for all ages' },
    { Icon: Backpack, name: 'Bags', desc: 'School bags and backpacks' },
    { Icon: Ruler, name: 'Supplies', desc: 'Geometry sets, art supplies, craft materials' },
  ];

  const waysToHelp = [
    {
      title: 'Sponsor a Student',
      description: 'Cover a child\'s tuition fees and annual school essentials for an entire year.',
      Icon: UserPlus,
    },
    {
      title: 'Donate Supplies',
      description: 'Send educational items directly — stationery, uniforms, shoes, and books.',
      Icon: Gift,
    },
    {
      title: 'Support Construction',
      description: 'Help us build new school facilities to serve more children in underserved areas.',
      Icon: Building,
    },
    {
      title: 'Spread the Word',
      description: 'Share our mission with your network and help us reach more potential supporters.',
      Icon: Share2,
    },
  ];

  return (
    <section id="get-involved" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-600 mb-3">
            Get Involved
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
            How You Can Help
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            There are many ways to support our mission. Every contribution, big or small, makes a real difference in a child's life.
          </p>
        </div>

        {/* Ways to Help */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {waysToHelp.map((way, i) => (
            <div key={i} className="bg-stone-50 rounded-xl p-6 border border-stone-200/60 hover:border-stone-300 transition-colors">
              <div className="w-11 h-11 rounded-lg bg-slate-900 flex items-center justify-center mb-4">
                <way.Icon className="w-5 h-5 text-amber-400" strokeWidth={1.8} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2 text-sm">{way.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{way.description}</p>
            </div>
          ))}
        </div>

        {/* Donation Items */}
        <div className="bg-stone-50 rounded-2xl p-8 md:p-12 border border-stone-200/60">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
              Items We Need Most
            </h3>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">
              Instead of monetary gifts, consider donating these educational items directly to children in need:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {donationItems.map((item, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-white border border-stone-200/60 hover:border-stone-300 transition-colors">
                <item.Icon className="w-5 h-5 text-slate-600 mx-auto mb-2.5" strokeWidth={1.5} />
                <h4 className="font-semibold text-slate-900 text-xs">{item.name}</h4>
                <p className="text-slate-400 text-[11px] mt-1 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">Ready to Make a Difference?</h3>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
              Contact us to learn more about how you can contribute. Whether it's sponsoring a student, 
              donating supplies, or volunteering your time — every act of kindness counts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-lg text-sm tracking-wide transition-all"
              >
                Contact Us
              </a>
              <a
                href="mailto:info@schoolforall.org"
                className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/15 text-white font-medium rounded-lg text-sm tracking-wide hover:bg-white/10 transition-all"
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
