import { useState, useEffect } from 'react';
import SEO from './SEO';

function PrivacyPolicy() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const getFaviconUrl = () => {
    return isDarkMode ? '/icon.png' : '/iconLight.png';
  };

  return (
    <div
      className={`min-h-screen ${isDarkMode ? 'dark' : ''
        } bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans`}
    >
      <SEO
        title="Privacy Policy | ExpenseGauge"
        description="Read the ExpenseGauge privacy policy to understand how your information is collected, used, and protected."
        path="/privacy"
      />
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-black/5 dark:border-white/10 bg-white/80 dark:bg-slate-950/70 backdrop-blur supports-backdrop-filter:bg-white/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
          <div className="flex items-center gap-3">
            <img
              src={getFaviconUrl()}
              alt="ExpenseGauge Logo"
              className="h-8 w-10"
            />

            <h1 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              ExpenseGauge
            </h1>
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
            {/* 1. Introduction */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                1. Introduction
              </h2>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                ExpenseGauge ("ExpenseGauge", "we", "our", or "us") is an
                expense and personal finance management application developed
                by Prathmesh Jain. This Privacy Policy explains what
                information ExpenseGauge collects, how we use and protect that
                information, when information may be processed by service
                providers, and the choices available to you.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                ExpenseGauge is designed primarily to help users record,
                organize, synchronize, and analyze their own expenses and
                account balances. We do not sell your personal information and
                we do not use your expense information for advertising or for
                training artificial intelligence models.
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                2. Information We Collect
              </h2>

              <h3 className="text-lg font-medium text-slate-900 dark:text-white mt-4 mb-2">
                2.1 Account Information
              </h3>

              <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                <li>
                  <strong>Email and password:</strong> When you create an
                  ExpenseGauge account using email and password authentication,
                  we collect your email address and a securely hashed version
                  of your password. We do not store your password in plain
                  text.
                </li>

                <li>
                  <strong>Google Sign-In:</strong> If you choose to sign in
                  using Google, we receive account information provided through
                  Google authentication, such as your name and email address,
                  as permitted by your Google account and authentication
                  settings.
                </li>

                <li>
                  <strong>Profile information:</strong> You may provide
                  optional information such as your name.
                </li>
              </ul>

              <h3 className="text-lg font-medium text-slate-900 dark:text-white mt-4 mb-2">
                2.2 Expense and Account Information
              </h3>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                When you use ExpenseGauge, you may provide financial
                information needed to track your expenses and balances. This
                may include transaction amounts, categories, dates,
                descriptions, account names or identifiers, balances, and
                related bookkeeping information.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                This information is used to provide the core functionality of
                ExpenseGauge, including expense tracking, account management,
                balance calculations, statistics, and reports.
              </p>

              <h3 className="text-lg font-medium text-slate-900 dark:text-white mt-4 mb-2">
                2.3 Technical and Log Information
              </h3>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                When you use the application, our backend infrastructure may
                process technical information necessary to operate, secure,
                troubleshoot, and maintain the service. Depending on the
                request and server configuration, this may include IP address,
                request information, access times, application version,
                platform information, and related server logs.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                ExpenseGauge does not intentionally collect precise location,
                contacts, photos, microphone recordings, or camera data as
                part of its expense-tracking functionality.
              </p>

              <h3 className="text-lg font-medium text-slate-900 dark:text-white mt-4 mb-2">
                2.4 Local Storage and Offline Data
              </h3>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                ExpenseGauge stores certain information locally on your device
                to support offline use and improve reliability. This may
                include expense and account data, application settings,
                authentication information, and queued operations waiting to
                synchronize with our backend.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                Sensitive authentication information is protected using
                platform-secure storage mechanisms such as Expo Secure Store.
                Expense data may also be stored locally so that you can
                continue using the application when an internet connection is
                unavailable.
              </p>

              <h3 className="text-lg font-medium text-slate-900 dark:text-white mt-4 mb-2">
                2.5 Local Expense Category Prediction
              </h3>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                ExpenseGauge includes a bundled category-prediction model that
                runs locally on your device to suggest expense categories.
                This prediction is performed on the device rather than by
                sending your expense descriptions to an external AI service
                for categorization.
              </p>
            </section>

            {/* 3. How We Use Information */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                3. How We Use Your Information
              </h2>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                We use information collected through ExpenseGauge only for
                purposes related to operating, securing, and providing the
                application's functionality. These purposes include:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                <li>
                  Creating and maintaining your ExpenseGauge account
                </li>

                <li>
                  Authenticating you and protecting your account
                </li>

                <li>
                  Storing and synchronizing your expenses and account data
                </li>

                <li>
                  Processing expense transactions and calculating account
                  balances
                </li>

                <li>
                  Providing monthly statistics, summaries, and financial
                  reports
                </li>

                <li>
                  Generating requested PDF reports
                </li>

                <li>
                  Sending account-related emails, such as password recovery
                  messages and requested reports
                </li>

                <li>
                  Supporting offline functionality and synchronizing queued
                  operations when connectivity is restored
                </li>

                <li>
                  Detecting, preventing, and addressing security issues,
                  abuse, errors, and technical problems
                </li>

                <li>
                  Maintaining the availability and reliability of the service
                </li>

                <li>
                  Responding to support requests and communications
                </li>

                <li>
                  Complying with applicable legal obligations
                </li>
              </ul>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                We do not use your expense data to train artificial
                intelligence models, and we do not sell your personal or
                financial information.
              </p>
            </section>

            {/* 4. Data Sharing */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                4. Data Sharing and Third-Party Services
              </h2>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                We do not sell, rent, or trade your personal or financial
                information. We only disclose or allow access to information
                when necessary to operate ExpenseGauge, provide a service you
                requested, maintain security, or comply with legal
                requirements.
              </p>

              <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                <li>
                  <strong>Google:</strong> If you choose Google Sign-In, Google
                  processes your authentication information in accordance with
                  Google's own privacy policies. ExpenseGauge receives the
                  information necessary to create and authenticate your
                  ExpenseGauge account.
                </li>

                <li>
                  <strong>Brevo:</strong> We use Brevo as an email delivery
                  service for certain application emails, including password
                  recovery and requested PDF reports. Information necessary to
                  deliver those emails, such as your email address and the
                  content required to send the requested message, may be
                  processed by Brevo.
                </li>

                <li>
                  <strong>Database and hosting providers:</strong> ExpenseGauge
                  uses third-party infrastructure to host the backend and
                  database. Information stored or processed by the application
                  may therefore be handled by those infrastructure providers
                  on our behalf.
                </li>

                <li>
                  <strong>Legal requirements:</strong> We may disclose
                  information when required to do so by applicable law,
                  regulation, legal process, or a valid request from a
                  governmental authority.
                </li>

                <li>
                  <strong>Protection of rights and security:</strong> We may
                  disclose information when reasonably necessary to protect the
                  security, rights, property, or safety of ExpenseGauge, our
                  users, or others, or to investigate fraud, abuse, or security
                  incidents.
                </li>

                <li>
                  <strong>Business transfers:</strong> If ExpenseGauge or
                  substantially all of its assets are involved in a merger,
                  acquisition, financing, reorganization, or sale, user
                  information may be transferred as part of that transaction,
                  subject to applicable law.
                </li>
              </ul>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                Third-party service providers are permitted to process
                information only as necessary to provide their services to
                ExpenseGauge or as otherwise permitted by applicable law.
              </p>
            </section>

            {/* 5. Data Security */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                5. Data Security
              </h2>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                We use reasonable technical and organizational measures
                designed to protect your information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>

              <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300 mt-3">
                <li>
                  HTTPS/TLS encryption for data transmitted between the
                  application and backend
                </li>

                <li>
                  Secure password hashing using bcrypt
                </li>

                <li>
                  JWT-based authentication and refresh-token security
                  mechanisms
                </li>

                <li>
                  Secure device storage for sensitive authentication
                  information
                </li>

                <li>
                  Server-side authorization checks to restrict access to
                  protected user data
                </li>

                <li>
                  Database-level safeguards designed to prevent duplicate
                  financial transactions during offline synchronization
                </li>
              </ul>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                No method of electronic transmission or storage is completely
                secure. Although we take reasonable measures to protect your
                information, we cannot guarantee absolute security.
              </p>
            </section>

            {/* 6. Data Retention and Deletion */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                6. Data Retention and Account Deletion
              </h2>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                We retain account and expense information for as long as
                necessary to provide ExpenseGauge and its features, maintain
                account functionality, resolve disputes, prevent abuse,
                maintain security, or comply with legal obligations.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                You may request deletion of your ExpenseGauge account and
                associated data through the account deletion functionality
                provided by ExpenseGauge or through our public account
                deletion webpage.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                When an account deletion request is confirmed, we delete the
                account and associated data maintained by ExpenseGauge,
                including the user's expenses, accounts, and user record,
                subject to information that we are legally required or
                otherwise permitted to retain.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                For administrator accounts, deletion may also remove users and
                financial data that are managed by that administrator where
                applicable to the account structure.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                Some information may remain temporarily in backups, logs, or
                systems maintained by service providers until those systems
                expire or are securely overwritten, or where retention is
                required by law.
              </p>
            </section>

            {/* 7. Your Rights */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                7. Your Rights and Choices
              </h2>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                Depending on where you live and applicable law, you may have
                rights concerning your personal information, including:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                <li>
                  <strong>Access:</strong> Request access to personal
                  information we hold about you
                </li>

                <li>
                  <strong>Correction:</strong> Request correction of
                  inaccurate information
                </li>

                <li>
                  <strong>Deletion:</strong> Request deletion of your account
                  and personal information
                </li>

                <li>
                  <strong>Portability:</strong> Request a copy of your
                  information where required by applicable law
                </li>

                <li>
                  <strong>Restriction or objection:</strong> Request
                  restriction of or object to certain processing where
                  applicable
                </li>
              </ul>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                To exercise applicable privacy rights or ask questions about
                our data practices, contact us using the information in the
                Contact Us section below.
              </p>
            </section>

            {/* 8. Children's Privacy */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                8. Children's Privacy
              </h2>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                ExpenseGauge is intended for a general audience and is not
                directed to children under 13. We do not knowingly collect
                personal information from children under 13.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                If we learn that we have collected personal information from a
                child under 13 without the legally required authorization, we
                will take reasonable steps to delete that information.
                Parents or guardians who believe that a child has provided
                personal information to ExpenseGauge may contact us using the
                contact information below.
              </p>
            </section>

            {/* 9. International Transfers */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                9. International Data Processing
              </h2>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                ExpenseGauge and its service providers may process or store
                information in countries other than the country where you
                live. Where applicable, we take reasonable steps to ensure
                that personal information receives appropriate protection
                consistent with this Privacy Policy and applicable law.
              </p>
            </section>

            {/* 10. No Advertising / No Sale */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                10. Advertising and Data Sales
              </h2>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                ExpenseGauge does not sell or rent your personal information.
                We do not use your expense information for targeted
                advertising, and we do not provide your financial information
                to advertisers.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                ExpenseGauge also does not use your expense information to
                train artificial intelligence or machine-learning models. The
                expense category prediction feature included in the application
                operates locally on the device.
              </p>
            </section>

            {/* 11. Changes */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                11. Changes to This Privacy Policy
              </h2>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect
                changes to ExpenseGauge, our data practices, applicable laws,
                or our services. When we make material changes, we will update
                the "Last updated" date on this page and, where appropriate,
                provide additional notice.
              </p>
            </section>

            {/* 12. Contact */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                12. Contact Us
              </h2>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                If you have questions, concerns, privacy requests, or requests
                relating to your personal information, please contact us at:
              </p>

              <div className="mt-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Email:</strong> expensegauge@gmail.com
                </p>

                <p className="text-slate-600 dark:text-slate-300 mt-1">
                  <strong>Developer:</strong> Prathmesh Jain
                </p>

                <p className="text-slate-600 dark:text-slate-300 mt-1">
                  <strong>Application:</strong> ExpenseGauge
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