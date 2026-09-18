import { X } from 'lucide-react';
import type { LegalType } from '../App';

interface LegalModalProps {
  type: LegalType;
  onClose: () => void;
}

const content: Record<string, { title: string; sections: { heading: string; text: string }[] }> = {
  privacy: {
    title: 'Privacy Policy',
    sections: [
      {
        heading: '1. Introduction',
        text: 'School for All Welfare Organization (SFA) is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with us.',
      },
      {
        heading: '2. Information We Collect',
        text: 'We may collect personal information that you voluntarily provide to us when you fill out our contact form, express interest in our programs, or otherwise communicate with us. This may include your name, email address, phone number, and any other information you choose to provide.',
      },
      {
        heading: '3. How We Use Your Information',
        text: 'We use the information we collect to: respond to your inquiries and provide customer support; send you information about our programs and initiatives; improve our website and services; comply with legal obligations. We do not sell, trade, or rent your personal information to third parties.',
      },
      {
        heading: '4. Data Security',
        text: 'We implement appropriate technical and organizational security measures to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.',
      },
      {
        heading: '5. Third-Party Links',
        text: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.',
      },
      {
        heading: '6. Children\'s Privacy',
        text: 'As an organization focused on child welfare, we take extra care to protect the privacy of the children we serve. We do not knowingly collect personal information from children without parental consent and only share such information as necessary for educational purposes.',
      },
      {
        heading: '7. Changes to This Policy',
        text: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated revision date.',
      },
      {
        heading: '8. Contact Us',
        text: 'If you have questions about this Privacy Policy, please contact us at info@schoolforall.org or visit our office in Balochistan, Pakistan.',
      },
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        text: 'By accessing and using this website, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website.',
      },
      {
        heading: '2. About SFA',
        text: 'School for All Welfare Organization (SFA) is a registered non-profit organization based in Balochistan, Pakistan, established on October 1, 2020. Our mission is to expand access to quality education for underprivileged children.',
      },
      {
        heading: '3. Use of Website',
        text: 'You may use this website for lawful purposes only. You agree not to use this website in any way that could damage, disable, overburden, or impair our servers or networks, or interfere with any other party\'s use of the website.',
      },
      {
        heading: '4. Donations and Contributions',
        text: 'All donations made through or in connection with SFA are voluntary and non-refundable. Donations are used exclusively for our educational programs and initiatives as described on this website. We reserve the right to decline any donation that does not align with our mission or values.',
      },
      {
        heading: '5. Intellectual Property',
        text: 'All content on this website, including text, graphics, logos, images, and software, is the property of SFA and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.',
      },
      {
        heading: '6. Student Information',
        text: 'Any student stories, photographs, or information shared on this website are published with appropriate consent. We are committed to protecting the dignity and privacy of the children we serve.',
      },
      {
        heading: '7. Limitation of Liability',
        text: 'SFA shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of or inability to use this website or our services.',
      },
      {
        heading: '8. Governing Law',
        text: 'These Terms and Conditions shall be governed by and construed in accordance with the laws of Pakistan. Any disputes shall be subject to the exclusive jurisdiction of the courts in Balochistan, Pakistan.',
      },
      {
        heading: '9. Changes to Terms',
        text: 'We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to this website. Your continued use of the website constitutes acceptance of the modified terms.',
      },
    ],
  },
  disclaimer: {
    title: 'Disclaimer',
    sections: [
      {
        heading: '1. General Disclaimer',
        text: 'The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.',
      },
      {
        heading: '2. No Professional Advice',
        text: 'The content on this website does not constitute professional advice. If you need specific advice related to education, legal matters, or financial contributions, please consult with appropriate professionals.',
      },
      {
        heading: '3. External Links',
        text: 'Through this website, you may be able to link to other websites which are not under the control of SFA. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.',
      },
      {
        heading: '4. Donation Transparency',
        text: 'While SFA is committed to transparency in the use of donations, the specific allocation of funds may vary based on the most pressing needs at any given time. We provide regular updates on our programs and impact through our website and communications.',
      },
      {
        heading: '5. Student Stories',
        text: 'Student stories and testimonials shared on this website are real accounts of children we have supported. Names may be changed or details modified to protect the privacy and safety of the children involved.',
      },
      {
        heading: '6. Website Availability',
        text: 'We strive to ensure that this website is available at all times. However, we take no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.',
      },
      {
        heading: '7. Limitation of Liability',
        text: 'In no event shall SFA, its directors, employees, partners, agents, suppliers, or affiliates be liable for any damages arising out of the use or inability to use this website or its content.',
      },
      {
        heading: '8. Contact',
        text: 'For any questions regarding this disclaimer, please contact us at info@schoolforall.org.',
      },
    ],
  },
};

export default function LegalModal({ type, onClose }: LegalModalProps) {
  if (!type) return null;
  const data = content[type];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-slate-900/60"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-stone-200 px-6 py-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">{data.title}</h2>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg bg-stone-100 hover:bg-stone-200 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-slate-600" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(85vh-80px)] px-6 py-6">
          <div className="space-y-6">
            {data.sections.map((section, i) => (
              <div key={i}>
                <h3 className="font-semibold text-slate-900 text-sm mb-2">{section.heading}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-stone-200">
            <p className="text-xs text-slate-400">
              Last updated: January 2025 • School for All Welfare Organization (SFA)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
