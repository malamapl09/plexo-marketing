import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service | Plexo',
  description: 'Read the Terms of Service for Plexo. Learn about account responsibilities, acceptable use, payment terms, and legal provisions.',
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms of Service</h1>
            <p className="text-slate-600">Last updated: February 17, 2026</p>
          </div>

          {/* Introduction */}
          <section className="mb-10">
            <p className="text-slate-600 leading-relaxed mb-4">
              These Terms of Service (&quot;Terms&quot;) constitute a legal agreement between you (individually or on behalf of an entity) and Plexo Inc. (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) governing your access to and use of the Plexo retail operations platform and related services (the &quot;Service&quot;).
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              By accessing, browsing, or using Plexo, you acknowledge that you have read, understood, and agree to be bound by all provisions of these Terms. If you do not agree to these Terms, you may not access or use our Service.
            </p>
            <p className="text-slate-600 leading-relaxed">
              <strong>By using this Service, you represent that you are at least 16 years of age and have the authority to enter into a binding agreement.</strong>
            </p>
          </section>

          {/* 1. Service Description */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">1. Service Description</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Plexo is a cloud-based retail operations platform designed to help retail chains manage their day-to-day operations, including:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Task management and assignment across multiple locations</li>
              <li>Audit and compliance tracking</li>
              <li>Employee training and development modules</li>
              <li>Campaign management and execution</li>
              <li>Digital checklists and quality assurance</li>
              <li>Regulatory compliance documentation</li>
            </ul>
          </section>

          {/* 2. Account Registration and Responsibility */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">2. Account Registration and Responsibility</h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Account Creation</h3>
              <p className="text-slate-600 leading-relaxed">
                To access Plexo, you must create an account by providing accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and password. You agree not to share your login information with unauthorized parties.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Account Holder Responsibility</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                You are responsible for all activities conducted through your account. This includes:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>All actions performed using your credentials</li>
                <li>Maintaining accurate account information</li>
                <li>Promptly notifying us of any unauthorized account access</li>
                <li>Ensuring compliance with these Terms by all account users</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Accurate Information</h3>
              <p className="text-slate-600 leading-relaxed">
                You warrant that all information provided during registration and account maintenance is accurate, truthful, and not misleading. You agree to update your account information as needed to maintain accuracy.
              </p>
            </div>
          </section>

          {/* 3. Acceptable Use Policy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">3. Acceptable Use Policy</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              You agree to use Plexo only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment. Prohibited behaviors include:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-3">
              <li>Harassing, threatening, defaming, or abusing others through the Service</li>
              <li>Uploading or transmitting viruses, malware, or harmful code</li>
              <li>Attempting to gain unauthorized access to our systems or networks</li>
              <li>Reverse-engineering, decompiling, or attempting to derive the source code of the Service</li>
              <li>Using automated scripts, bots, or tools to scrape data without authorization</li>
              <li>Attempting to circumvent security measures or bypass authentication mechanisms</li>
              <li>Interfering with or disrupting the infrastructure or normal operation of the Service</li>
              <li>Transmitting spam, unsolicited communications, or phishing attempts</li>
              <li>Using the Service for illegal activities or to violate any applicable laws</li>
              <li>Impersonating another person or entity</li>
              <li>Uploading content that infringes intellectual property rights</li>
              <li>Exporting or re-exporting our Service in violation of export control laws</li>
            </ul>
          </section>

          {/* 4. Intellectual Property Rights */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">4. Intellectual Property Rights</h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Plexo&apos;s Intellectual Property</h3>
              <p className="text-slate-600 leading-relaxed">
                The Service, including all content, features, functionality, software, trademarks, logos, design elements, and copyrightable material, is owned exclusively by Plexo Inc. or our licensors. You are granted a limited, non-exclusive, revocable license to access and use the Service for your internal business purposes only.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Your Content</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                You retain all ownership rights to content you upload, create, or submit through Plexo (&quot;Your Content&quot;). By uploading Your Content, you grant Plexo a non-exclusive, worldwide, royalty-free license to:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Store and host Your Content on secure servers</li>
                <li>Process and analyze Your Content to provide and improve the Service</li>
                <li>Display Your Content within your organization on the Service</li>
                <li>Use aggregated, anonymized versions of Your Content for analytics and improvement</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Restrictions</h3>
              <p className="text-slate-600 leading-relaxed">
                You agree not to copy, modify, distribute, transmit, display, perform, reproduce, or otherwise use any part of the Service (except Your Content) without express written permission from Plexo. You may not remove or obscure any copyright, trademark, or other proprietary notices.
              </p>
            </div>
          </section>

          {/* 5. Payment Terms and Billing */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">5. Payment Terms and Billing</h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Custom Pricing</h3>
              <p className="text-slate-600 leading-relaxed">
                Plexo pricing is customized based on your organization&apos;s needs, including the number of locations, users, and features required. Pricing will be provided through a formal quote or proposal prior to engagement.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Invoicing and Payment</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Payment for Plexo services is typically managed through monthly or annual invoicing based on the terms in your execution agreement. You agree to:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Pay all invoices in full within the timeframe specified in the invoice</li>
                <li>Pay in the currency specified by Plexo</li>
                <li>Ensure payment details and billing information are accurate and current</li>
                <li>Not dispute valid charges unreasonably</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Late Payments</h3>
              <p className="text-slate-600 leading-relaxed">
                If payment is not received by the due date, Plexo may impose a late fee of 1.5% per month (or the maximum rate allowed by law) on the outstanding balance, suspend your Service access, or pursue legal remedies.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Price Changes</h3>
              <p className="text-slate-600 leading-relaxed">
                Plexo reserves the right to change pricing with 30 days&apos; written notice. Price changes will take effect at the renewal of your subscription. Your continued use of the Service constitutes acceptance of new pricing.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Taxes</h3>
              <p className="text-slate-600 leading-relaxed">
                You are responsible for all applicable taxes, duties, and government fees related to your use of the Service, unless we are legally required to collect them. Invoices are provided on an as-is basis and may not include taxes.
              </p>
            </div>
          </section>

          {/* 6. Service Availability and SLA */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">6. Service Availability and SLA</h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Service Availability</h3>
              <p className="text-slate-600 leading-relaxed">
                We strive to maintain high availability of the Plexo platform. However, we do not guarantee uninterrupted or error-free service. The Service may be temporarily unavailable due to maintenance, updates, technical issues, or circumstances beyond our control.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Planned Maintenance</h3>
              <p className="text-slate-600 leading-relaxed">
                We may perform scheduled maintenance and updates that temporarily affect Service availability. We will provide reasonable notice of planned maintenance when possible. Emergency maintenance may be performed without prior notice to address security issues or critical system problems.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">No Guarantees</h3>
              <p className="text-slate-600 leading-relaxed">
                While we aim for high availability, Plexo is provided on an &quot;as-is&quot; basis without warranties regarding uptime, performance, or availability. Specific Service Level Agreements may be available for enterprise customers under separate agreements.
              </p>
            </div>
          </section>

          {/* 7. Limitation of Liability */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">7. Limitation of Liability</h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Disclaimer of Warranties</h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTY OF ANY KIND.</strong> PLEXO DISCLAIMS ALL EXPRESS, IMPLIED, AND STATUTORY WARRANTIES, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. PLEXO DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Liability Cap</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                <strong>EXCEPT FOR BREACHES OF CONFIDENTIALITY, INTELLECTUAL PROPERTY INFRINGEMENT, OR INDEMNIFICATION OBLIGATIONS, IN NO EVENT SHALL PLEXO BE LIABLE FOR:</strong>
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Indirect, incidental, special, consequential, punitive, or exemplary damages</li>
                <li>Loss of profits, revenue, data, or goodwill</li>
                <li>Business interruption or cost of substitute goods or services</li>
                <li>Any damages arising out of or related to the Service or these Terms</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-4">
                Even if advised of the possibility of such damages, Plexo&apos;s total cumulative liability shall not exceed the amount paid by you to Plexo in the 12 months preceding the claim.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Essential Terms</h3>
              <p className="text-slate-600 leading-relaxed">
                You acknowledge that these liability limitations are essential terms without which Plexo would not provide the Service.
              </p>
            </div>
          </section>

          {/* 8. Indemnification */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">8. Indemnification</h2>
            <p className="text-slate-600 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Plexo, its officers, directors, employees, agents, and successors from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys&apos; fees) arising from or related to:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mt-4">
              <li>Your use of or access to the Service</li>
              <li>Your breach of these Terms or any law or regulation</li>
              <li>Your violation of third-party rights, including intellectual property rights</li>
              <li>Your Content or data you upload to the Service</li>
              <li>Your conduct or actions in connection with the Service</li>
            </ul>
          </section>

          {/* 9. Termination */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">9. Termination</h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Termination by You</h3>
              <p className="text-slate-600 leading-relaxed">
                You may terminate your account and subscription at any time by providing written notice to Plexo. Termination becomes effective at the end of your current billing period. No refunds are issued for partial months unless otherwise agreed in writing.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Termination by Plexo</h3>
              <p className="text-slate-600 leading-relaxed">
                Plexo may terminate or suspend your access to the Service immediately without notice if:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mt-4">
                <li>You materially breach these Terms and fail to cure within 15 days of written notice</li>
                <li>You engage in illegal activities or violate applicable laws</li>
                <li>You violate the Acceptable Use Policy</li>
                <li>Payment is not received within 30 days of invoice</li>
                <li>We reasonably believe continued access poses a security risk</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Effect of Termination</h3>
              <p className="text-slate-600 leading-relaxed">
                Upon termination, your right to access the Service ceases immediately. You must cease all use of the Service. Sections regarding Intellectual Property Rights, Limitation of Liability, Indemnification, and Governing Law survive termination.
              </p>
            </div>
          </section>

          {/* 10. Data and Content */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">10. Data and Content</h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Data Backup</h3>
              <p className="text-slate-600 leading-relaxed">
                While we maintain regular backups of your data, you are responsible for maintaining independent copies of all important data, records, and content. Plexo is not liable for any loss or corruption of Your Content.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Data Retention Upon Termination</h3>
              <p className="text-slate-600 leading-relaxed">
                After account termination, we will retain your data for 30 days to allow data retrieval. After this period, your data will be deleted from active systems. Data may be retained in backups for an additional 90 days before permanent deletion.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">No Responsibility for Third-Party Content</h3>
              <p className="text-slate-600 leading-relaxed">
                Plexo is not responsible for any third-party content, links, or information accessible through the Service. Use third-party resources at your own risk.
              </p>
            </div>
          </section>

          {/* 11. Governing Law and Jurisdiction */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">11. Governing Law and Jurisdiction</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the Dominican Republic, without regard to its conflict of law principles. Any legal action or proceeding arising out of or related to these Terms shall be brought exclusively in the courts located in the Dominican Republic.
            </p>
            <p className="text-slate-600 leading-relaxed">
              You irrevocably consent to the jurisdiction and venue of these courts and waive any objections based on forum non conveniens or any similar doctrine.
            </p>
          </section>

          {/* 12. Changes to Terms */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">12. Changes to Terms</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Plexo reserves the right to modify these Terms at any time. Material changes will be communicated via email or through prominent notice on our website. Changes take effect 30 days after notice unless you terminate your account beforehand.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Your continued use of the Service after changes become effective constitutes your acceptance of the modified Terms.
            </p>
          </section>

          {/* 13. Severability */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">13. Severability</h2>
            <p className="text-slate-600 leading-relaxed">
              If any provision of these Terms is found to be invalid, illegal, or unenforceable, that provision shall be modified to the minimum extent necessary to make it valid, or if such modification is not possible, the provision shall be severed. The remaining provisions shall continue in full force and effect.
            </p>
          </section>

          {/* 14. Entire Agreement */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">14. Entire Agreement</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms, along with any separate written agreement you may have with Plexo, constitute the entire agreement between you and Plexo regarding the Service and supersede all prior agreements, understandings, and negotiations, whether written or oral.
            </p>
          </section>

          {/* 15. Contact Us */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">15. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you have questions about these Terms of Service or need to report a violation, please contact us:
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
