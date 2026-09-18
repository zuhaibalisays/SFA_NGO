import { useState } from 'react';
import { Send, MapPin, Mail, Phone, CheckCircle } from 'lucide-react';

/**
 * Sanitizes user input to prevent XSS attacks.
 * Escapes HTML special characters so injected scripts cannot execute.
 */
function sanitizeInput(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // --- SPAM PROTECTION: Honeypot check ---
    // The hidden checkbox "botcheck" is invisible to real users.
    // If a bot auto-fills it, we silently discard the submission.
    const form = e.currentTarget;
    const honeypot = form.querySelector<HTMLInputElement>('input[name="botcheck"]');
    if (honeypot && honeypot.checked) {
      // Bot detected — discard silently without showing success
      console.warn('Form submission blocked: honeypot triggered.');
      return;
    }

    // --- INPUT SANITIZATION: Prevent XSS ---
    const sanitizedData = {
      name: sanitizeInput(formData.name.trim()),
      email: sanitizeInput(formData.email.trim()),
      subject: sanitizeInput(formData.subject.trim()),
      message: sanitizeInput(formData.message.trim()),
    };

    // Basic validation after sanitization
    if (!sanitizedData.name || !sanitizedData.email || !sanitizedData.subject || !sanitizedData.message) {
      return;
    }

    // In production, send `sanitizedData` to your backend here.
    // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify(sanitizedData) })
    console.log('Sanitized form submission:', sanitizedData);

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-600 mb-3">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Have questions or want to get involved? We'd love to hear from you. 
            Reach out and let's make a difference together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200/60">
              <h3 className="font-semibold text-slate-900 mb-5 text-sm tracking-wide uppercase">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4.5 h-4.5 text-slate-600" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Address</p>
                    <p className="text-sm text-slate-500 mt-0.5">Balochistan, Pakistan</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4.5 h-4.5 text-slate-600" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Email</p>
                    <p className="text-sm text-slate-500 mt-0.5">info@schoolforall.org</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4.5 h-4.5 text-slate-600" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Phone</p>
                    <p className="text-sm text-slate-500 mt-0.5">0322 2773334</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-3 text-sm tracking-wide uppercase">Our Mission</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Every contribution matters. Whether you want to sponsor a student, donate supplies, or simply spread the word — 
                your support helps us reach more children in need across Balochistan.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 border border-stone-200/60">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-green-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 text-sm">Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* SECURITY: Honeypot field — hidden from real users, catches bots */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-slate-700 mb-2 uppercase tracking-wide">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        maxLength={100}
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-slate-700 mb-2 uppercase tracking-wide">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        maxLength={150}
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-slate-700 mb-2 uppercase tracking-wide">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all"
                    >
                      <option value="">Select a topic</option>
                      <option value="sponsorship">Student Sponsorship</option>
                      <option value="donation">Donation Inquiry</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="partnership">Partnership</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-slate-700 mb-2 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      maxLength={2000}
                      rows={5}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all resize-none"
                      placeholder="Tell us how you'd like to help or ask your question..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg text-sm tracking-wide transition-all flex items-center justify-center gap-2.5"
                  >
                    <Send className="w-4 h-4" strokeWidth={2} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
