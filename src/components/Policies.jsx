// src/pages/PrivacyPolicy.jsx
import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Introduction",
      content: `At Codefloor IT Tech, your privacy is our highest priority. 
We are a professional IT and software development company specializing in web, app, and digital transformation solutions. 
This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website, engage with our services, or communicate with us.

By accessing or using our services, you agree to this Privacy Policy. If you do not agree, please discontinue using our website or services.`,
    },
    {
      title: "Information We Collect",
      content: `We collect information to provide, personalize, and improve our services.`,
      subContent: [
        {
          subTitle: "Personal Information",
          subText: `Your name, email, phone number, company name, billing details, and communication records.`,
        },
        {
          subTitle: "Technical Information",
          subText: `Browser type, IP address, device information, operating system, cookies, and analytics data to enhance user experience.`,
        },
        {
          subTitle: "Third-Party Data",
          subText: `Information from public databases, business directories, or marketing partners to improve our outreach and service personalization.`,
        },
      ],
    },
    {
      title: "How We Use Your Information",
      content: `We use your data for legitimate business purposes including:
- Delivering and maintaining our IT services.
- Managing client communication, invoices, and contracts.
- Providing customer support and technical assistance.
- Sending important notifications and service updates.
- Conducting analytics to improve our offerings.
- Marketing our new services (only with your consent).`,
    },
    {
      title: "Data Protection and Security",
      content: `Your security is our responsibility. We implement:
- SSL encryption on all websites and client portals.
- Firewall and malware protection for hosting environments.
- Two-factor authentication (2FA) for data access.
- Regular data backups and encrypted storage solutions.
Despite our robust measures, no online platform is 100% secure, but we continuously update our systems to ensure maximum protection.`,
    },
    {
      title: "Cookies and Tracking Technologies",
      content: `We use cookies, tracking pixels, and similar technologies to:
- Remember user preferences.
- Measure website traffic and performance.
- Analyze user interactions to improve navigation.
You can disable cookies in your browser settings, but this may limit some website features.`,
    },
    {
      title: "Information Sharing and Disclosure",
      content: `We never sell or rent your data. 
However, we may share data only with trusted third parties who assist in:
- Website hosting and infrastructure.
- Payment gateways (Stripe, PayPal, Razorpay).
- Analytics and marketing (Google Analytics, Meta Pixel).
All partners comply with strict confidentiality and GDPR standards.`,
    },
    {
      title: "International Data Transfers",
      content: `As a global IT company, we may process data outside your country. 
We ensure such transfers comply with international data protection laws (GDPR, CPRA, and India’s DPDP Act 2023).`,
    },
    {
      title: "Retention of Information",
      content: `We retain personal information as long as required to fulfill business, legal, or compliance purposes.
Once data is no longer needed, it is securely deleted or anonymized.`,
    },
    {
      title: "Your Rights Under Privacy Laws",
      content: `Depending on your location, you may have the right to:
- Access and correct your data.
- Withdraw consent at any time.
- Request deletion of your personal information.
- Object to data processing.
- Receive your data in a portable format.
To exercise your rights, contact: codefloorit@gmail.com.com`,
    },
    {
      title: "Third-Party Websites",
      content: `Our website may link to third-party platforms like LinkedIn, Google, GitHub, or YouTube.
We are not responsible for the privacy or security practices of these external sites. Please review their individual privacy policies.`,
    },
    {
      title: "Children’s Privacy",
      content: `Our services are not intended for users under the age of 13 (or 16 where applicable). 
We do not knowingly collect or store data from children. If you believe a child has provided us information, contact us immediately.`,
    },
    {
      title: "Marketing and Communication Preferences",
      content: `We may send promotional emails or newsletters only if you opt-in. 
You can unsubscribe anytime by clicking “Unsubscribe” or contacting us directly.`,
    },
    {
      title: "Policy Updates and Notifications",
      content: `We may periodically update this Privacy Policy to reflect legal, operational, or service-related changes.
All updates will be posted on this page with a revised “Last Updated” date.`,
    },
    {
      title: "Data Breach Policy",
      content: `In the unlikely event of a data breach, we will:
- Notify affected users within 72 hours.
- Provide full details of the breach and corrective measures.
- Work with authorities to ensure compliance with applicable laws.`,
    },
    {
      title: "Contact Us",
      content: `📧 Email: info@codefloorit.com
🌐 Website: www.codefloorit.com
🏢 Company: Codefloor IT Tech
📍 Address: Satellite, Ahmedabad, Gujarat, India
📞 Phone: +91-9928965676`,
    },
    {
      title: "Consent",
      content: `By using our website or submitting information, you consent to our Privacy Policy and the terms outlined herein.`,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#f0faff] via-white to-[#e6faff] min-h-screen font-[Poppins] text-gray-800 px-6 md:px-20 py-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#003b53] mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-lg">
          Effective Date: October 10, 2025 | Company:{" "}
          <strong className="text-[#00bcd4]">Codefloor IT Tech</strong>
        </p>
        <div className="mt-6 w-20 h-1 bg-[#00bcd4] mx-auto rounded-full"></div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto space-y-10">
        {sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.03 }}
            className="bg-white shadow-md hover:shadow-lg transition rounded-2xl p-6 md:p-8 border border-gray-100"
          >
            <h2 className="text-2xl font-semibold mb-3 text-[#003b53]">
              {section.title}
            </h2>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
              {section.content}
            </p>

            {section.subContent && (
              <div className="mt-5 space-y-4">
                {section.subContent.map((sub, idx) => (
                  <div key={idx} className="ml-3 border-l-4 border-[#00bcd4] pl-4">
                    <h3 className="text-xl font-medium text-[#006b77] mb-1">
                      {sub.subTitle}
                    </h3>
                    <p className="text-gray-600">{sub.subText}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-center mt-20 bg-[#003b53] text-gray-300 py-8 rounded-t-2xl">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">
            Codefloor IT Tech
          </span>{" "}
          — All Rights Reserved | Privacy First | Built with Integrity 💙
        </p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
