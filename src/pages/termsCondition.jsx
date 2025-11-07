import React from "react";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  return (
    <div className="font-poppins bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-[#003b53] text-white py-24 px-6 md:px-12 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms and Conditions
          </h1>
          <p className="text-gray-300 text-lg"> 
            Effective Date: October 10, 2025
          </p>
          <p className="mt-3 text-gray-300 text-lg font-medium">
            Welcome to Codefloor IT Tech — Where Innovation Meets Integrity
          </p>
        </motion.div>

        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-10"></div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 md:px-12 space-y-12 leading-relaxed">
        {/* 1. Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[#003b53] mb-3">
            1. Introduction
          </h2>
          <p className="text-gray-700">
            Welcome to <strong>Codefloor IT Tech</strong>. These Terms and
            Conditions outline the rules and regulations for the use of our
            website, mobile applications, and related services. By accessing our
            site or engaging with our services, you accept these terms in full.
            If you do not agree, please do not continue using our services.
          </p>
        </motion.div>

        {/* 2. Company Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[#003b53] mb-3">
            2. About Codefloor IT Tech
          </h2>
          <p className="text-gray-700">
            Codefloor IT Tech is a leading IT solutions company based in
            Ahmedabad, Gujarat, India. We specialize in:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
            <li>Web and Mobile App Development</li>
            <li>Custom Software Development</li>
            <li>Digital Marketing and SEO Optimization</li>
            <li>UI/UX Design and Prototyping</li>
            <li>Cloud and Hosting Solutions</li>
          </ul>
          <p className="mt-2 text-gray-700">
            Our commitment is to deliver innovative, scalable, and secure
            technology solutions that help clients achieve digital success.
          </p>
        </motion.div>

        {/* 3. Acceptance of Terms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[#003b53] mb-3">
            3. Acceptance of Terms
          </h2>
          <p className="text-gray-700">
            By using our website or services, you confirm that you are at least
            18 years of age and have the legal authority to enter into these
            Terms and Conditions. Continued use of the platform constitutes
            acceptance of all terms, policies, and future updates.
          </p>
        </motion.div>

        {/* 4. Services and Availability */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[#003b53] mb-3">
            4. Service Availability and Modifications
          </h2>
          <p className="text-gray-700">
            Codefloor IT Tech reserves the right to modify, suspend, or
            discontinue any of its services at any time without prior notice. We
            aim to provide continuous access, but we cannot guarantee
            uninterrupted availability due to technical or maintenance issues.
          </p>
        </motion.div>

        {/* 5. User Responsibilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[#003b53] mb-3">
            5. User Responsibilities
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Users must provide accurate and complete information.</li>
            <li>Do not engage in unauthorized access or hacking attempts.</li>
            <li>Refrain from using our services for illegal or fraudulent purposes.</li>
            <li>Respect all copyright, trademark, and proprietary rights.</li>
          </ul>
        </motion.div>

        {/* 6. Payment and Refund Policy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[#003b53] mb-3">
            6. Payment and Refunds
          </h2>
          <p className="text-gray-700">
            Payments for our services must be completed as per the agreed
            project contract or quotation. Refunds are applicable only in cases
            where services are not initiated or as per mutual agreement. We do
            not offer refunds for completed milestones or deliverables.
          </p>
        </motion.div>

        {/* 7. Intellectual Property */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[#003b53] mb-3">
            7. Intellectual Property Rights
          </h2>
          <p className="text-gray-700">
            All website content, including code, design, graphics, and
            trademarks, are the property of Codefloor IT Tech. You may not
            copy, modify, reproduce, or distribute any material without prior
            written consent.
          </p>
        </motion.div>

        {/* 8. Confidentiality */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[#003b53] mb-3">
            8. Confidentiality
          </h2>
          <p className="text-gray-700">
            We respect the confidentiality of our clients’ data, ideas, and
            projects. All client information shared with us will remain private
            and secure unless disclosure is required by law.
          </p>
        </motion.div>

        {/* 9. Privacy Policy Reference */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[#003b53] mb-3">
            9. Privacy and Data Security
          </h2>
          <p className="text-gray-700">
            We are committed to protecting your personal information. Please
            review our{" "}
            <a href="/Policies" className="text-[#00bcd4] hover:underline">
              Privacy Policy
            </a>{" "}
            to understand how we collect, store, and use your data.
          </p>
        </motion.div>

        {/* 10. Limitation of Liability */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[#003b53] mb-3">
            10. Limitation of Liability
          </h2>
          <p className="text-gray-700">
            Codefloor IT Tech shall not be held liable for any direct or
            indirect damages resulting from the use or inability to use our
            services, including loss of profits, data, or goodwill.
          </p>
        </motion.div>

        {/* 11. Termination */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[#003b53] mb-3">
            11. Termination of Services
          </h2>
          <p className="text-gray-700">
            We reserve the right to terminate or suspend access to our services
            without notice if any user violates these Terms or engages in
            harmful behavior towards our business or reputation.
          </p>
        </motion.div>

        {/* 12. Governing Law */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[#003b53] mb-3">
            12. Governing Law and Jurisdiction
          </h2>
          <p className="text-gray-700">
            These Terms shall be governed by the laws of India. Any disputes
            shall be resolved exclusively under the jurisdiction of the courts
            in Ahmedabad, Gujarat.
          </p>
        </motion.div>

        {/* 13. Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[#003b53] mb-3">
            13. Contact Us
          </h2>
          <p className="text-gray-700">
            For any questions, clarifications, or concerns regarding these Terms
            and Conditions, please contact us:
          </p>
          <p className="mt-3 text-gray-700">
            📧 <strong>Email:</strong> info@codefloorit.com <br />
            🌐 <strong>Website:</strong> www.codefloorit.com <br />
            📍 <strong>Address:</strong> Satellite, Ahmedabad, Gujarat, India
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003b53] text-gray-300 py-8 text-center">
        <p>
          © {new Date().getFullYear()}{" "}
          <strong className="text-white">Codefloor IT Tech</strong>. All
          Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
