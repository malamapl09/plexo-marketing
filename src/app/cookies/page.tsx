import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Cookie Policy | Plexo',
  description: 'Learn about cookies and tracking technologies used by Plexo. Understand how we use cookies and how to manage your preferences.',
};

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Cookie Policy</h1>
            <p className="text-slate-600">Last updated: February 17, 2026</p>
          </div>

          {/* Introduction */}
          <section className="mb-10">
            <p className="text-slate-600 leading-relaxed mb-4">
              Plexo Inc. (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;Company&quot;) uses cookies and similar tracking technologies to enhance your experience on our website and in our retail operations platform (the &quot;Service&quot;). This Cookie Policy explains what cookies are, why we use them, the types of cookies we deploy, and how you can manage your cookie preferences.
            </p>
            <p className="text-slate-600 leading-relaxed">
              This Cookie Policy should be read in conjunction with our <a href="/privacy" className="text-indigo-600 hover:text-indigo-700 font-medium">Privacy Policy</a> and <a href="/terms" className="text-indigo-600 hover:text-indigo-700 font-medium">Terms of Service</a>.
            </p>
          </section>

          {/* 1. What Are Cookies? */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">1. What Are Cookies?</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Cookies are small text files that are placed on your device (computer, tablet, mobile phone, or other device) when you visit a website or use an application. Cookies allow websites and applications to:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
              <li>Remember information about your visit</li>
              <li>Recognize you on subsequent visits</li>
              <li>Understand how you use the platform</li>
              <li>Improve functionality and user experience</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              Some cookies are deleted when you close your browser (session cookies), while others remain on your device for a specified period or indefinitely (persistent cookies).
            </p>
          </section>

          {/* 2. Types of Cookies We Use */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">2. Types of Cookies We Use</h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Essential Cookies</h3>
              <p className="text-slate-600 leading-relaxed mb-3">
                These cookies are necessary for the Service to function properly. They enable core features such as:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                <li>User authentication and login sessions</li>
                <li>Account security and fraud prevention</li>
                <li>Security token generation and validation</li>
                <li>Memory of user preferences and selections</li>
                <li>Load balancing and server stability</li>
              </ul>
              <p className="text-slate-600 leading-relaxed text-sm bg-slate-50 p-4 rounded">
                <strong>Note:</strong> Essential cookies cannot be disabled without impeding the functionality of the Service. They do not require explicit consent as they are technically necessary.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Analytics Cookies</h3>
              <p className="text-slate-600 leading-relaxed mb-3">
                These cookies help us understand how you use the Plexo platform and website. They collect information about:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                <li>Pages visited and time spent on each page</li>
                <li>Features accessed and used</li>
                <li>User interactions and navigation patterns</li>
                <li>Device type and browser used</li>
                <li>Referral sources and campaign effectiveness</li>
              </ul>
              <p className="text-slate-600 leading-relaxed">
                <strong>Tools:</strong> We use Google Analytics and similar analytics services to collect and analyze this data. Your data is typically anonymized and aggregated. You can opt out of analytics tracking through your browser settings.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Preference Cookies</h3>
              <p className="text-slate-600 leading-relaxed mb-3">
                These cookies remember your choices and preferences to enhance your experience:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                <li>Language and regional preferences</li>
                <li>Display and layout preferences</li>
                <li>Notification and communication preferences</li>
                <li>Theme selection (light/dark mode)</li>
                <li>Customized dashboard configurations</li>
              </ul>
              <p className="text-slate-600 leading-relaxed">
                These cookies enhance your user experience by reducing the need to re-enter preferences on each visit.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Marketing Cookies</h3>
              <p className="text-slate-600 leading-relaxed mb-3">
                These cookies track your interaction with our marketing campaigns and advertisements:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                <li>Tracking campaign performance and conversion rates</li>
                <li>Displaying targeted advertisements based on interests</li>
                <li>Retargeting to show relevant ads across platforms</li>
                <li>Understanding which marketing channels are effective</li>
              </ul>
              <p className="text-slate-600 leading-relaxed">
                <strong>Note:</strong> You can generally opt out of marketing cookies through your browser settings or the &quot;Do Not Track&quot; feature.
              </p>
            </div>
          </section>

          {/* 3. Third-Party Cookies */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">3. Third-Party Cookies</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              In addition to our own cookies, we allow certain third-party service providers to place cookies on your device. These include:
            </p>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Analytics Providers</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li><strong>Google Analytics:</strong> Tracks website traffic and user behavior. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">Google&apos;s Privacy Policy</a></li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Payment Processors</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li><strong>Stripe:</strong> Processes payments securely. <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">Stripe&apos;s Privacy Policy</a></li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Communication Tools</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li><strong>SendGrid:</strong> Email delivery and tracking. <a href="https://sendgrid.com/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">SendGrid&apos;s Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Social Media Platforms</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li><strong>Meta (Facebook/Instagram):</strong> For tracking and advertising. <a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">Meta&apos;s Privacy Policy</a></li>
                <li><strong>LinkedIn:</strong> For B2B targeting and analytics. <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">LinkedIn&apos;s Privacy Policy</a></li>
              </ul>
            </div>
          </section>

          {/* 4. Similar Tracking Technologies */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">4. Similar Tracking Technologies</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              In addition to cookies, we use similar tracking technologies that serve similar functions:
            </p>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Local Storage</h3>
              <p className="text-slate-600 leading-relaxed">
                Web storage mechanisms that allow websites to store data locally on your device. These are often used for caching and improving performance.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Pixels and Beacons</h3>
              <p className="text-slate-600 leading-relaxed">
                Small transparent images embedded in emails or pages that track whether a message was opened or a page was viewed.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Device Identifiers</h3>
              <p className="text-slate-600 leading-relaxed">
                Unique identifiers for mobile devices used to recognize your device on return visits and for attribution purposes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Tags and Scripts</h3>
              <p className="text-slate-600 leading-relaxed">
                Code snippets that track user interactions and enable third-party services to function on our platform.
              </p>
            </div>
          </section>

          {/* 5. How to Manage Cookies */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">5. How to Manage Cookies</h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Browser Settings</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Most browsers allow you to control cookies through settings. You can typically:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                <li>Accept or reject all cookies</li>
                <li>Accept only certain types of cookies</li>
                <li>Clear cookies from your device</li>
                <li>Receive a warning before a cookie is stored</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-2">
                For instructions specific to your browser:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">Apple Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/windows/delete-cookies-in-microsoft-edge-63947406" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">Microsoft Edge</a></li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Do Not Track</h3>
              <p className="text-slate-600 leading-relaxed">
                If your browser supports the &quot;Do Not Track&quot; feature, you can enable it to send signals requesting that websites not track your activity. While Plexo respects these signals where technically feasible, we cannot guarantee that all third-party services honor Do Not Track requests.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Opt-Out Tools</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Several organizations provide opt-out tools for tracking:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li><a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">Digital Advertising Alliance (DAA)</a></li>
                <li><a href="https://www.networkadvertising.org/managing/opt_out.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">Network Advertising Initiative (NAI)</a></li>
                <li><a href="https://www.youradchoices.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">Your Ad Choices</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Impact of Disabling Cookies</h3>
              <p className="text-slate-600 leading-relaxed">
                Disabling essential cookies may impair the functionality of the Plexo platform and website. You may not be able to log in, maintain your session, or use certain features. We recommend keeping essential cookies enabled while managing marketing and analytics cookies according to your preferences.
              </p>
            </div>
          </section>

          {/* 6. Cookies by Jurisdiction */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">6. Cookies by Jurisdiction</h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">European Union (GDPR)</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Under the General Data Protection Regulation (GDPR), we require your explicit consent before deploying non-essential cookies. When you visit our website from the EU, you will receive a cookie consent banner allowing you to:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Accept all cookies</li>
                <li>Reject all non-essential cookies</li>
                <li>Customize your cookie preferences</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-4">
                You can update your preferences at any time through our cookie management tool.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">California (CCPA)</h3>
              <p className="text-slate-600 leading-relaxed">
                Under the California Consumer Privacy Act (CCPA), you have the right to know what personal information is collected, used, and shared. You can exercise these rights through your account settings or by contacting us at <a href="mailto:privacy@plexoapp.com" className="text-indigo-600 hover:text-indigo-700">privacy@plexoapp.com</a>.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Other Jurisdictions</h3>
              <p className="text-slate-600 leading-relaxed">
                Plexo complies with applicable privacy laws in all jurisdictions where we operate. Please refer to our <a href="/privacy" className="text-indigo-600 hover:text-indigo-700 font-medium">Privacy Policy</a> for jurisdiction-specific information.
              </p>
            </div>
          </section>

          {/* 7. Security of Cookie Data */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">7. Security of Cookie Data</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We take the security of cookie data seriously and implement appropriate safeguards:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Session cookies are encrypted when transmitted</li>
              <li>Sensitive authentication tokens are marked as secure and httpOnly</li>
              <li>We use secure, encrypted connections (HTTPS) to transmit cookie data</li>
              <li>Cookie data is stored securely on our servers and protected from unauthorized access</li>
            </ul>
          </section>

          {/* 8. Retention of Cookie Data */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">8. Retention of Cookie Data</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Cookie retention periods vary based on type and purpose:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-3">
              <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
              <li><strong>Essential Cookies:</strong> Typically retained for the duration of your account or up to 2 years</li>
              <li><strong>Analytics Cookies:</strong> Typically retained for up to 24 months</li>
              <li><strong>Preference Cookies:</strong> Retained until explicitly cleared or after 2 years of inactivity</li>
              <li><strong>Marketing Cookies:</strong> Retained for up to 12 months or until you opt out</li>
            </ul>
          </section>

          {/* 9. Updates to This Cookie Policy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">9. Updates to This Cookie Policy</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our cookie practices, new technologies, legal requirements, or other factors. We will notify you of material changes by:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
              <li>Updating the &quot;Last updated&quot; date at the top of this policy</li>
              <li>Posting the updated policy on our website</li>
              <li>Sending you an email notification if changes materially affect your privacy</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              Your continued use of the Service after updates become effective constitutes your acceptance of the updated Cookie Policy.
            </p>
          </section>

          {/* 10. Contact Us */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">10. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you have questions about our use of cookies, how to manage your preferences, or wish to exercise your cookie-related rights, please contact us:
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
