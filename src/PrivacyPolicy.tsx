import { useState, useEffect } from 'react';

function PrivacyPolicy() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const getFaviconUrl = () => {
    return isDarkMode ? '/icon.png' : '/iconLight.png';
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""} bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans`}>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-black/5 dark:border-white/10 bg-white/80 dark:bg-slate-950/70 backdrop-blur supports-backdrop-filter:bg-white/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
          <div className="flex items-center gap-3">
            <img src={getFaviconUrl()} alt="ExpenseGauge Logo" className="h-8 w-10" />
            <h1 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">ExpenseGauge</h1>
          </div>
          <a
            href="/"
            className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Back to Home
          </a>
        </div>
      </nav>

      {/* Privacy Policy Content */}
      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-slate-900/40">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-6">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
            Last updated: October 6, 2026
          </p>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">1. Introduction</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                ExpenseGauge ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the ExpenseGauge mobile application. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">2. Information We Collect</h2>
              
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mt-4 mb-2">2.1 Information You Provide</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                <li><strong>Account Information:</strong> When you create an account, we collect your email address and password (encrypted). If you use Google Sign-In, we receive information from Google, including your name and email address.</li>
                <li><strong>Expense Data:</strong> You may input transaction details including amounts, categories, dates, descriptions, and account information.</li>
                <li><strong>Profile Information:</strong> You may provide your name and other optional profile information.</li>
              </ul>

              <h3 className="text-lg font-medium text-slate-900 dark:text-white mt-4 mb-2">2.2 Information Collected Automatically</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                <li><strong>Device Information:</strong> We collect information about your device, including device type, operating system version, and unique device identifiers (app version, platform type).</li>
                <li><strong>Usage Data:</strong> We collect information about how you use the application, including features accessed and interaction patterns.</li>
                <li><strong>Log Data:</strong> Our servers automatically record log data when you access the application, including IP address, browser type, and access times.</li>
              </ul>

              <h3 className="text-lg font-medium text-slate-900 dark:text-white mt-4 mb-2">2.3 Local Storage</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                ExpenseGauge uses local storage on your device to store your expense data, authentication tokens, and app settings. This allows the application to function offline. This data remains on your device unless you choose to sync it with our servers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">3. How We Use Your Information</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                <li>To provide, maintain, and improve our services</li>
                <li>To process and store your expense transactions and account balances</li>
                <li>To authenticate your account and provide secure access</li>
                <li>To synchronize your data across devices (if enabled)</li>
                <li>To generate reports and analytics based on your expense data</li>
                <li>To send you important notifications about your account</li>
                <li>To respond to your comments, questions, and customer service requests</li>
                <li>To detect, prevent, and address technical issues and security threats</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">4. Data Sharing and Disclosure</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">We do not sell your personal information. We may share your information only in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                <li><strong>With Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf (e.g., cloud hosting, email services, authentication providers). These providers have access to your information only to perform these tasks and are obligated not to disclose or use it for any other purpose.</li>
                <li><strong>Google Sign-In:</strong> If you use Google Sign-In, we receive information from Google in accordance with their privacy policy.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to lawful requests by public authorities.</li>
                <li><strong>Protection of Rights:</strong> We may disclose information to protect our rights, property, or safety, or that of our users or others.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">5. Data Security</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300 mt-3">
                <li>Encryption of data in transit using HTTPS/TLS</li>
                <li>Secure storage of passwords using bcrypt hashing</li>
                <li>JWT-based authentication with token rotation</li>
                <li>Secure local storage using Expo Secure Store for sensitive data</li>
                <li>Regular security reviews and updates</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">6. Data Retention</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                We retain your information for as long as necessary to provide our services and fulfill the purposes outlined in this privacy policy. When you delete your account, we will delete your personal information from our servers within a reasonable time period, except where we are required by law to retain certain information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">7. Your Rights and Choices</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
                <li><strong>Objection:</strong> Object to our processing of your personal information</li>
                <li><strong>Restriction:</strong> Request restriction of the processing of your personal information</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                To exercise these rights, please contact us at the email address provided below. We will respond to your request in accordance with applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">8. Children's Privacy</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                ExpenseGauge is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">9. International Data Transfers</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy and applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">10. Changes to This Privacy Policy</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any material changes by posting the new privacy policy on this page and updating the "Last updated" date. You are advised to review this privacy policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">11. Contact Us</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                If you have any questions, concerns, or requests regarding this privacy policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Email:</strong> support@expensegauge.com
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-1">
                  <strong>Developer:</strong> Prathmesh Jain
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>© 2026 ExpenseGauge. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
