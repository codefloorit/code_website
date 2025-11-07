
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaCode,
  FaRobot,
  FaHeadset,
  FaUsers,
  FaGlobe,
  FaIndustry,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa6"; // use fa6 for consistency
import { FaCheckCircle } from "react-icons/fa"; // Fixed import

const WhatsAppIntegration = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is WhatsApp Chatbot Integration?",
      answer:
        "WhatsApp Chatbot Integration connects your business WhatsApp account with an AI-powered chatbot to automate conversations, handle FAQs, and improve customer engagement instantly.",
    },
    {
      question: "How does the WhatsApp Business Chatbot improve customer service?",
      answer:
        "It allows customers to get quick responses 24/7, reducing wait times and improving satisfaction through automated replies and smart routing.",
    },
    {
      question: "Is the integration process complicated?",
      answer:
        "Not at all! The process is simple and our team helps with setup, testing, and deployment to ensure a smooth experience.",
    },
    {
      question: "Can the chatbot handle multiple customer queries simultaneously?",
      answer:
        "Yes, the AI chatbot can engage with thousands of customers at once, ensuring no one waits for a response.",
    },
    {
      question: "What kind of businesses can benefit from WhatsApp AI Chatbot?",
      answer:
        "Almost any business — from retail and healthcare to education and real estate — can benefit from instant customer communication via WhatsApp.",
    },
    {
      question: "How secure is the WhatsApp Chatbot for sensitive information?",
      answer:
        "The chatbot uses end-to-end encryption and complies with WhatsApp’s strict security protocols to protect user data.",
    },
    {
      question: "Can the chatbot be customized according to our business needs?",
      answer:
        "Absolutely! You can customize conversation flows, tone, and design to match your brand identity.",
    },
    {
      question: "What is the cost of implementing a WhatsApp Chatbot?",
      answer:
        "Pricing depends on your requirements, number of messages, and level of AI customization. Contact us for a tailored quote.",
    },
    {
      question: "How does AI Chatbot Integration work with existing CRM systems?",
      answer:
        "It can integrate seamlessly with popular CRMs like HubSpot, Salesforce, and Zoho to sync leads, conversations, and analytics.",
    },
    {
      question: "What kind of support can we expect post-integration?",
      answer:
        "We offer 24/7 technical support, regular updates, and training to ensure smooth chatbot performance.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* HERO SECTION */}
      <section className="bg-[#003b53] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
          >
            WhatsApp Chat Integration for Businesses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Engage your customers instantly through WhatsApp — the world’s most
            popular messaging app. We help your business connect, automate, and
            grow using secure, customized WhatsApp integration solutions.
          </motion.p>
          <a
            href="https://wa.me/+919928965676"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-[#003b53] font-semibold px-6 py-3 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <FaWhatsapp className="text-2xl" /> Chat with Us Now
          </a>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003b53] mb-3">
            What We Offer
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            From automated chatbots to advanced CRM integrations — our WhatsApp
            solutions are built to empower your brand communication and boost
            conversions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <FaRobot className="text-5xl text-[#25D366]" />,
              title: "Chatbot Automation",
              desc: "Set up AI-powered WhatsApp bots that reply instantly, capture leads, and handle customer inquiries 24/7.",
            },
            {
              icon: <FaUsers className="text-5xl text-[#25D366]" />,
              title: "Customer Support",
              desc: "Empower your team with real-time WhatsApp chat tools to offer faster, personalized support.",
            },
            {
              icon: <FaCode className="text-5xl text-[#25D366]" />,
              title: "Custom API Integration",
              desc: "Integrate WhatsApp with your existing CRM, ERP, or eCommerce systems using secure APIs.",
            },
            {
              icon: <FaGlobe className="text-5xl text-[#25D366]" />,
              title: "Global Messaging",
              desc: "Reach your audience worldwide with scalable WhatsApp Business API integration.",
            },
            {
              icon: <FaHeadset className="text-5xl text-[#25D366]" />,
              title: "Multichannel Support",
              desc: "Combine WhatsApp, Facebook Messenger, and website chat under one centralized dashboard.",
            },
            {
              icon: <FaWhatsapp className="text-5xl text-[#25D366]" />,
              title: "Verified Business Account",
              desc: "Get your business verified on WhatsApp to build customer trust and authenticity.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#003b53]">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY EVERY BUSINESS NEEDS A CHATBOT */}
      <section className="bg-[#003b53] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Why Every Business Needs a WhatsApp Chatbot
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "24/7 Customer Service",
            "Automated Responses",
            "Enhanced User Experience",
            "Cost-Effective",
            "Global Reach",
            "Instant Feedback Collection",
            "Sales Boost",
            "Efficient Lead Generation",
          ].map((label, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 p-6 rounded-lg text-center backdrop-blur-sm shadow-lg hover:bg-white/20 transition-all"
            >
              <FaCheckCircle className="text-[#25D366] text-3xl mx-auto mb-3" />
              <p className="font-semibold">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003b53] mb-6">
          Serving Clients Across Diverse Industries
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {[
            "Tiles",
            "Furniture",
            "Fashion",
            "Jewellery",
            "Healthcare",
            "Education",
            "Architecture & Interior",
            "Real Estate",
            "Travel",
            "Event Management",
            "LMS",
            "Groceries",
            "Beauty / Personal Care",
            "Food & Beverages",
            "Many More",
          ].map((industry, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-md hover:shadow-lg transition-all border border-gray-200"
            >
              <FaIndustry className="text-[#25D366]" />
              <span className="font-medium text-gray-800">{industry}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-6 bg-white text-[#003b53]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200 py-4">
              <button
                onClick={() => toggleFAQ(i)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
              >
                <h3 className="font-semibold text-lg">{faq.question}</h3>
                {openIndex === i ? (
                  <FaChevronUp className="text-[#003b53]" />
                ) : (
                  <FaChevronDown className="text-[#003b53]" />
                )}
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  openIndex === i ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="mt-3 text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 text-center bg-[#003b53] text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your WhatsApp Integration?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Let’s transform your communication strategy and make customer
          interactions faster, easier, and smarter.
        </p>
        <a
          href="https://wa.me/+919928965676"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-[#003b53] font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-[#003b53] hover:scale-105 transition-all duration-300"
        >
          <FaWhatsapp className="text-2xl" /> Connect on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default WhatsAppIntegration;
