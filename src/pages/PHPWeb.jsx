// src/pages/PHPWeb.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPhp,
  FaDatabase,
  FaServer,
  FaLaptopCode,
  FaRocket,
  FaLock,
  FaCloud,
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaUserShield,
  FaShoppingCart,
  FaTools,
} from "react-icons/fa";
import heroImg from "../images/php-hero.jpg";
import feature1 from "../images/php-feature1.jpg";
import project1 from "../images/php-project1.jpg";
import project2 from "../images/php-project2.jpg";
import project3 from "../images/php-project3.jpg"; // additional project image

const faqs = [
  {
    question: "What is PHP web development?",
    answer:
      "PHP web development involves creating dynamic websites and web applications using PHP scripting language combined with HTML, CSS, and JavaScript.",
  },
  {
    question: "Which PHP frameworks do you use?",
    answer:
      "We use Laravel, CodeIgniter, Symfony, and CakePHP to build secure and scalable web applications.",
  },
  {
    question: "Can you integrate databases?",
    answer:
      "Yes, we integrate MySQL, PostgreSQL, and MongoDB databases to ensure seamless data handling.",
  },
  {
    question: "Do you provide maintenance support?",
    answer:
      "Absolutely! We provide post-launch support, security updates, and optimization to keep your site performing perfectly.",
  },
  {
    question: "Do you handle CMS development?",
    answer:
      "Yes, we create custom CMS solutions or work with popular platforms like WordPress, Joomla, and Drupal for PHP projects.",
  },
  {
    question: "Can you optimize PHP websites for SEO?",
    answer:
      "Yes, our PHP developers implement SEO-friendly code, meta tags, schema, and optimized performance to improve search rankings.",
  },
  {
    question: "Do you provide responsive web design?",
    answer:
      "Absolutely! Every PHP website we develop is fully responsive, mobile-friendly, and cross-browser compatible.",
  },
  {
    question: "Can you integrate APIs?",
    answer:
      "Yes, we integrate RESTful and third-party APIs for enhanced functionalities and modern web experiences.",
  },
  {
    question: "Do you provide e-commerce solutions?",
    answer:
      "Yes, we develop PHP-based e-commerce websites with shopping cart, payment gateway, and secure checkout features.",
  },
  {
    question: "What is the typical project delivery time?",
    answer:
      "Depending on complexity, a PHP website can be delivered within 2-6 weeks, including testing and revisions.",
  },
  {
    question: "Do you offer scalable solutions?",
    answer:
      "Yes, all our PHP projects are built to be scalable for future growth, accommodating more users and features as needed.",
  },
  {
    question: "Do you provide user-friendly dashboards?",
    answer:
      "Absolutely! We build intuitive admin dashboards for easy content management and site analytics.",
  },
];

const technologies = [
    { icon: FaPhp, name: "PHP", color: "text-purple-600" },
    { icon: FaDatabase, name: "MySQL", color: "text-blue-500" },
    { icon: FaServer, name: "Apache Server", color: "text-green-500" },
    { icon: FaCode, name: "Laravel", color: "text-red-500" },
    { icon: FaCloud, name: "Cloud Hosting", color: "text-yellow-500" },
    { icon: FaLaptopCode, name: "CodeIgniter", color: "text-indigo-500" },
    { icon: FaPaintBrush, name: "CSS3", color: "text-pink-500" },
    { icon: FaMobileAlt, name: "Responsive Design", color: "text-teal-500" },
  ];

export default function PHPWeb() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="text-gray-900 overflow-hidden font-sans">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#002a42] via-[#004e7c] to-[#00bcd4] text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 animate-fadeInLeft">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 animate-pulse">
              Professional PHP Web Development
            </h1>
            <p className="mb-8 text-lg md:text-xl">
              We craft dynamic, scalable, and secure PHP websites and web applications to power your business online.
            </p>
            <Link
            to="/contact"
            className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-purple-700 hover:text-white transition duration-500 shadow-lg animate-bounce"
            >
              Get Started
            </Link>
          </div>
          <div className="flex-1 animate-fadeInRight">
            <img
              src={heroImg}
              alt="PHP Web Development"
              className="rounded-xl shadow-xl w-full hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* Technologies Section */}
  <section className="py-20 bg-gray-50 text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-fadeInUp">
    Technologies We Use
  </h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center p-2">
    {technologies.map((tech, idx) => (
      <div
        key={idx}
        className="flex flex-col items-center justify-center p-6 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition duration-500 bg-white animate-fadeInUp"
        style={{ animationDelay: `${idx * 0.15}s`, minHeight: "100px", maxWidth: "200px" }}
      >
        <tech.icon size={50} className={`${tech.color} mb-3`} />
        <h3 className="font-semibold text-center">{tech.name}</h3>
      </div>
    ))}
  </div>
</section>

  
      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#001f2c] via-[#00364c] to-[#004a64] text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-fadeInUp text-white">
          Why Choose Our PHP Development Services?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: FaRocket,
              title: "Performance Optimized",
              desc:
                "Fast, secure, and optimized PHP websites that perform seamlessly.",
              bg: "bg-purple-50",
              color: "text-purple-600",
            },
            {
              icon: FaLock,
              title: "Secure & Reliable",
              desc:
                "Top-notch security measures to protect your website and user data.",
              bg: "bg-blue-50",
              color: "text-blue-600",
            },
            {
              icon: FaLaptopCode,
              title: "Custom Solutions",
              desc:
                "Tailored PHP solutions for your unique business requirements.",
              bg: "bg-green-50",
              color: "text-green-600",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className={`p-8 ${feature.bg} rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 animate-fadeInUp`}
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <feature.icon size={50} className={`${feature.color} mx-auto mb-4`} />
              <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fadeInUp">
          Our PHP Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[project1, project2, project3].map((project, idx) => (
            <div
              key={idx}
              className="rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-500 animate-fadeInUp"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <img src={project} alt={`Project ${idx + 1}`} className="w-full h-64 object-cover" />
              <div className="p-6 bg-white">
                <h3 className="font-bold text-xl mb-2">
                  {idx === 0
                    ? "E-commerce Web App"
                    : idx === 1
                    ? "Custom CMS Development"
                    : "Business Web Portal"}
                </h3>
                <p>
                  {idx === 0
                    ? "Secure and scalable PHP-based e-commerce platform with payment integration."
                    : idx === 1
                    ? "Fully customized content management system for dynamic content handling."
                    : "Comprehensive web portal for business operations and client management."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#f0f9ff] via-white to-[#e8f7fb]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fadeInUp">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-3 cursor-pointer hover:bg-gray-50 transition duration-300 p-4 rounded-lg animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h3 className="flex justify-between items-center font-semibold text-lg">
                {faq.question} <span>{openIndex === index ? "−" : "+"}</span>
              </h3>
              {openIndex === index && <p className="mt-3 text-gray-700">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Client Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#00bcd4] via-[#004e7c] to-[#002a42] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-fadeInUp">
          Benefits of Working With Us
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { icon: FaUserShield, title: "Trusted Experts" },
            { icon: FaShoppingCart, title: "E-commerce Ready" },
            { icon: FaTools, title: "Custom Features" },
            { icon: FaMobileAlt, title: "Mobile Friendly" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 animate-fadeInUp"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <item.icon size={40} className="mx-auto mb-4 text-purple-600" />
              <h3 className="font-bold text-lg">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#002a42] via-[#004e7c] to-[#00bcd4] text-white text-center animate-fadeInUp">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your PHP Website?</h2>
        <p className="mb-8 text-lg md:text-xl">
          Contact us today and let's start developing your custom PHP web solution.
        </p>
        <Link
        to="/contact"
        className="bg-white text-purple-700 px-8 py-4 rounded-full font-semibold hover:bg-purple-700 hover:text-white transition duration-500 shadow-lg animate-bounce"
        >
          Get a Quote
        </Link>
      </section>
    </div>
  );
}
