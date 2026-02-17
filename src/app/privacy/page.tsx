import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Plexo',
  description: 'Learn how Plexo protects your data and privacy. Our comprehensive privacy policy covers data collection, usage, and your rights.',
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
            <p className="text-slate-600">Last updated: February 17, 2026</p>
          </div>

          {/* Introduction */}
          <section className="mb-10">
            <p className="text-slate-600 leading-relaxed mb-4">
              Plexo (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;Company&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at plexoapp.com and use our retail operations platform (the &quot;Service&quot;).
            </p>
            <p className="text-slate-600 leading-relaxed">
              Please read this Privacy Policy carefully. By accessing and using Plexo, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy. If you do not agree with our privacy practices, please do not use our Service.
            </p>
          </section>

          {/* 1. Information We Collect */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">1. Information We Collect</h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Account Information</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                When you create a Plexo account, we collect information such as:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                <li>Full name and email address</li>
                <li>Company name and industry</li>
                <li>Business address and phone number</li>
                <li>Payment and billing information (processed securely by third-party providers)</li>
                <li>Passwords and authentication credentials</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Usage Data</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                We automatically collect information about how you interact with our Service:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                <li>Tasks created, assigned, and completed</li>
                <li>Audit logs and compliance records</li>
                <li>Training module progress and completion</li>
                <li>Campaign creation and performance data</li>
                <li>Checklist submissions and status updates</li>
                <li>Login times and duration of service usage</li>
                <li>Features accessed and feature usage patterns</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Device Information</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                We collect information about the devices you use to access Plexo:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                <li>Device type, operating system, and browser type</li>
                <li>IP address and geolocation data</li>
                <li>Device identifiers and mobile advertising IDs</li>
                <li>Mobile app version and SDK information</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Communications</h3>
              <p className="text-slate-600 leading-relaxed">
                We collect and retain records of your communications with us, including support emails, feedback, and customer service interactions.
              </p>
            </div>
          </section>

          {/* 2. How We Use Your Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">2. How We Use Your Information</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-3">
              <li><strong>Service Delivery:</strong> Providing, maintaining, and improving the Plexo platform and its features</li>
              <li><strong>Account Management:</strong> Creating and managing your account, processing payments, and handling transactions</li>
              <li><strong>Communication:</strong> Sending you updates, newsletters, security alerts, and responding to your inquiries</li>
              <li><strong>Analytics:</strong> Analyzing usage patterns to improve our Service and understand user behavior</li>
              <li><strong>Compliance:</strong> Meeting legal obligations and auditing requirements</li>
              <li><strong>Marketing:</strong> Sending promotional content and product updates (with your consent)</li>
              <li><strong>Fraud Prevention:</strong> Detecting, investigating, and preventing fraudulent transactions and security incidents</li>
              <li><strong>Customization:</strong> Personalizing your experience and providing tailored recommendations</li>
            </ul>
          </section>

          {/* 3. How We Share Your Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">3. How We Share Your Information</h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Service Providers</h3>
              <p className="text-slate-600 leading-relaxed">
                We share your information with third-party service providers who perform services on our behalf, including:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mt-4">
                <li>Cloud hosting and storage providers</li>
                <li>Payment processors and financial institutions</li>
                <li>Email delivery and communication services</li>
                <li>Analytics and business intelligence providers</li>
                <li>Customer support and ticketing systems</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-4">
                These service providers are contractually obligated to use your information only as necessary to provide services to us and are bound by confidentiality agreements.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Legal Requirements</h3>
              <p className="text-slate-600 leading-relaxed">
                We may disclose your information when required by law, including in response to court orders, government requests, or when we believe in good faith that disclosure is necessary to:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mt-4">
                <li>Comply with applicable laws, regulations, or legal processes</li>
                <li>Enforce our Terms of Service and other agreements</li>
                <li>Protect the security or integrity of our Service</li>
                <li>Protect the rights, privacy, safety, or property of Plexo, our users, or the public</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">No Sale of Data</h3>
              <p className="text-slate-600 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We will never share your data with marketers or advertisers without your explicit consent.
              </p>
            </div>
          </section>

          {/* 4. Data Retention */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">4. Data Retention</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We retain your personal information for as long as your account is active and as needed to provide our Services. The retention period varies depending on the type of data:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
              <li><strong>Account Information:</strong> Retained during your subscription and for a reasonable period afterward for legal and business purposes</li>
              <li><strong>Usage Data:</strong> Typically retained for up to 24 months for analytics and compliance purposes</li>
              <li><strong>Audit Logs:</strong> Retained according to industry standards and compliance requirements, typically 5-7 years</li>
              <li><strong>Backup Data:</strong> Retained for disaster recovery purposes, typically 30-90 days</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              You may request deletion of your data at any time, subject to legal and contractual obligations to retain certain information.
            </p>
          </section>

          {/* 5. Your Privacy Rights */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">5. Your Privacy Rights</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Right to Access</h3>
              <p className="text-slate-600 leading-relaxed">
                You have the right to request a copy of the personal information we hold about you.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Right to Correction</h3>
              <p className="text-slate-600 leading-relaxed">
                You have the right to request that we correct inaccurate or incomplete information.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Right to Deletion</h3>
              <p className="text-slate-600 leading-relaxed">
                You have the right to request deletion of your personal information, subject to certain exceptions for legal compliance and legitimate business purposes.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Right to Data Portability</h3>
              <p className="text-slate-600 leading-relaxed">
                You have the right to request your data in a portable, machine-readable format.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Right to Object</h3>
              <p className="text-slate-600 leading-relaxed">
                You have the right to object to processing of your information for marketing or certain business purposes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Exercising Your Rights</h3>
              <p className="text-slate-600 leading-relaxed">
                To exercise any of these rights, please contact us at <a href="mailto:privacy@plexoapp.com" className="text-indigo-600 hover:text-indigo-700 font-medium">privacy@plexoapp.com</a>. We will respond to your request within 30 days or as required by applicable law.
              </p>
            </div>
          </section>

          {/* 6. Data Security */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">6. Data Security</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We implement comprehensive technical, administrative, and physical security measures to protect your personal information, including:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
              <li>End-to-end encryption for data in transit (TLS/SSL)</li>
              <li>Encryption at rest for sensitive data</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and role-based permissions</li>
              <li>Secure backup and disaster recovery procedures</li>
              <li>Multi-factor authentication options</li>
              <li>Regular software updates and security patches</li>
              <li>Employee training on data protection and privacy practices</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              While we strive to protect your information using reasonable security measures, no system is completely secure. We cannot guarantee absolute security of your data. If you become aware of any security breach, please contact us immediately at <a href="mailto:privacy@plexoapp.com" className="text-indigo-600 hover:text-indigo-700 font-medium">privacy@plexoapp.com</a>.
            </p>
          </section>

          {/* 7. Children's Privacy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">7. Children&apos;s Privacy</h2>
            <p className="text-slate-600 leading-relaxed">
              Plexo is not intended for individuals under the age of 16, and we do not knowingly collect personal information from children under 16. If we become aware that we have collected information from a child under 16 without verifiable parental consent, we will delete such information promptly. If you believe we have collected information from a child under 16, please contact us at <a href="mailto:privacy@plexoapp.com" className="text-indigo-600 hover:text-indigo-700 font-medium">privacy@plexoapp.com</a>.
            </p>
          </section>

          {/* 8. International Data Transfers */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">8. International Data Transfers</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Plexo operates from the Dominican Republic. If you access our Service from outside the Dominican Republic, your personal information may be transferred to, stored in, and processed in the Dominican Republic and other countries where we or our service providers operate.
            </p>
            <p className="text-slate-600 leading-relaxed">
              By using Plexo, you consent to the transfer of your information to countries outside your country of residence, which may have different data protection laws. We ensure that any international transfers are conducted in compliance with applicable privacy laws and that adequate safeguards are in place to protect your information.
            </p>
          </section>

          {/* 9. Third-Party Links */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">9. Third-Party Links</h2>
            <p className="text-slate-600 leading-relaxed">
              Our website and Service may contain links to third-party websites and services that are not operated by Plexo. This Privacy Policy does not apply to third-party services, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party services before providing your information.
            </p>
          </section>

          {/* 10. Cookies and Tracking */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">10. Cookies and Tracking</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your experience, remember your preferences, and analyze how you use our Service. For detailed information about our use of cookies, please refer to our <a href="/cookies" className="text-indigo-600 hover:text-indigo-700 font-medium">Cookie Policy</a>.
            </p>
            <p className="text-slate-600 leading-relaxed">
              You can control cookie preferences through your browser settings. However, disabling cookies may impact the functionality of our Service.
            </p>
          </section>

          {/* 11. Changes to This Privacy Policy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">11. Changes to This Privacy Policy</h2>
            <p className="text-slate-600 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by updating the &quot;Last updated&quot; date at the top of this policy. Your continued use of Plexo after any changes constitutes your acceptance of the updated Privacy Policy.
            </p>
          </section>

          {/* 12. Contact Us */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">12. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you have questions about this Privacy Policy, our privacy practices, or wish to exercise your privacy rights, please contact us:
            </p>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <p className="text-slate-900 font-semibold mb-3">Plexo Inc.</p>
              <p className="text-slate-600 mb-2">
                <strong>Email:</strong> <a href="mailto:privacy@plexoapp.com" className="text-indigo-600 hover:text-indigo-700">privacy@plexoapp.com</a>
              </p>
              <p className="text-slate-600 mb-2">
                <strong>Website:</strong> <a href="https://plexoapp.com" className="text-indigo-600 hover:text-indigo-700">plexoapp.com</a>
              </p>
              <p className="text-slate-600">
                <strong>Location:</strong> Dominican Republic
              </p>
            </div>
            <p className="text-slate-600 leading-relaxed mt-6">
              We will respond to your inquiry within 30 days or as required by applicable law.
            </p>
          </section>

          {/* Legal Disclaimer */}
          <section className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500 italic">
              This is a template for informational purposes. Consult with a qualified attorney for legal advice specific to your situation.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
