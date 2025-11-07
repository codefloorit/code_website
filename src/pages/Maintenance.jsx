import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function Maintenance() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is included in Ecommerce website maintenance services?",
      answer:
        "Ecommerce website maintenance services typically include tasks such as software updates, security monitoring, malware removal, performance optimisation, backup management, broken link fixes, and SEO audits. These ensure your store runs smoothly, stays secure, and delivers a seamless shopping experience. Considering that 88% of online shoppers won’t return after a bad experience, proactive maintenance becomes a direct driver of customer retention.",
    },
    {
      question: "Why does your online store need regular website maintenance?",
      answer:
        "Regular maintenance ensures your ecommerce site stays fast, secure, and up-to-date. It prevents downtime, improves SEO, and keeps your customers’ trust intact.",
    },
    {
      question: "How much does Ecommerce website maintenance cost?",
      answer:
        "Pricing depends on your store’s complexity, technology stack, and maintenance requirements. We offer flexible packages designed to fit your business size and budget.",
    },
    {
      question: "Ecommerce maintenance packages vs one-time fixes: which is better?",
      answer:
        "Maintenance packages ensure long-term performance and security, while one-time fixes handle short-term issues. For consistent reliability, ongoing packages are always a better investment.",
    },
    {
      question: "Are You Dedicated to Offering Custom Website Maintenance Packages?",
      answer:
        "Absolutely! We create tailor-made maintenance plans to match your goals, budget, and platform. Every business is unique, and so should be your maintenance strategy.",
    },
    {
      question: "Can I Switch Maintenance Packages If My Business Requirements Change?",
      answer:
        "Yes. Our plans are completely flexible — you can upgrade, downgrade, or customize anytime as your business evolves.",
    },
  ];

  return (
    <PageWrapper
      title="E-Commerce Maintenance"
      subtitle="Keep your online store secure, updated, and running smoothly 24/7."
    >
      <motion.div
        className="max-w-5xl mx-auto text-gray-300 space-y-12 text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* --- Intro Section --- */}
        <section className="space-y-6">
          <p className="text-lg leading-relaxed">
            Our maintenance services ensure your eCommerce platform performs flawlessly — 
            so you can focus on growing your business while we handle the technical side.
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>Security monitoring and updates</li>
            <li>Backup management and performance optimization</li>
            <li>Bug fixes, patching, and uptime tracking</li>
            <li>New feature implementation and support</li>
          </ul>
        </section>

        {/* --- Call to Action --- */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
          >
            Schedule Maintenance
          </Link>
        </div>

        

        {/* --- Benefits --- */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-teal-400 mb-6">
            What You Gain From Our Ecommerce Website Maintenance
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Boost Sales & Conversions",
                desc: "Sites with optimized performance can see conversion rates improve by up to 30%.",
              },
              {
                title: "Stronger Security & Trust",
                desc: "Regular updates safeguard your store and build lasting customer confidence.",
              },
              {
                title: "Faster Store Performance",
                desc: "A 1-second improvement in load time can increase conversions by 7%.",
              },
              {
                title: "Reduced Downtime & Hassle",
                desc: "Proactive management minimizes disruptions and costly fixes.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gray-50 border border-gray-700 rounded-xl"
              >
                <h4 className="text-xl font-bold text-teal-900 mb-2">{item.title}</h4>
                <p className="text-gray-800">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- FAQ Section --- */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-teal-400 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border rounded-lg bg-white shadow-sm">
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  {activeIndex === i ? (
                    <ChevronUp className="text-teal-600" />
                  ) : (
                    <ChevronDown className="text-teal-600" />
                  )}
                </button>

                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      className="px-5 pb-5 text-gray-700"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* --- Final CTA --- */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-semibold text-teal-400 mb-4">
            Start Your Project with Us
          </h3>
          <p className="text-gray-400 mb-6">
            Work with experts in Ecommerce website maintenance. Get personalized strategy 
            and support to keep your online store at its best.
          </p>
          <Link
            to="/contact"
            className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-500 transition"
          >
            Let’s Talk →
          </Link>
        </div>
      </motion.div>
    </PageWrapper>
  );
}
