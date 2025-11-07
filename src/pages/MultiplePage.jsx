import React from "react";
import { motion } from "framer-motion";
import MPA1 from "../images/MPA1.jpg";
import MPA2 from "../images/MPA2.jpg";
import MPA3 from "../images/MPA3.jpg";
import MPA4 from "../images/MPA4.webp";

const MultiplePageApp = () => {
  return (
    <div className="bg-gradient-to-b from-[#e6f2f5] to-white text-gray-800 font-poppins overflow-hidden">

      {/* Hero Section */}
      <section className="relative bg-[#004a64] text-white text-center py-24 px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Multiple Page Applications (MPA)
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl mb-10 text-blue-100">
          Build enterprise-grade, SEO-friendly, and secure multiple-page websites that grow with your business.
          Our MPAs are designed for scalability, reliability, and high performance.
        </p>
        <motion.img
          src={MPA1}
          alt="Multiple Page Application"
          className="mx-auto shadow-2xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 hover:scale-105 transition-transform duration-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        />
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <img
          src={MPA2}
          alt="About Multiple Page Applications"
          className="rounded-2xl shadow-xl w-full object-cover hover:scale-105 transition-all duration-500"
        />
        <div>
          <h2 className="text-4xl font-bold mb-4 text-[#004a64]">
            What is a Multiple Page Application?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A Multiple Page Application (MPA) is a traditional web architecture where each page loads independently.
            MPAs are ideal for large-scale platforms, eCommerce websites, blogs, corporate sites, and information portals.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>🌐 Best for large and content-rich websites</li>
            <li>📈 SEO-optimized and crawler-friendly</li>
            <li>🔒 Secure backend structure with server-side rendering</li>
            <li>⚙️ Easy navigation and multiple route management</li>
            <li>💼 Perfect for businesses, eCommerce, and corporate platforms</li>
          </ul>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#f0f8fa] py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#004a64] mb-10">Core Features of Our MPA Development</h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-12">
          We create powerful multiple-page applications that ensure performance, security, and exceptional user experience.
        </p>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {[
            { title: "Advanced SEO Optimization", desc: "Each page is optimized individually for higher search rankings." },
            { title: "Modular Architecture", desc: "Clean, organized structure for scalability and maintainability." },
            { title: "Secure Authentication", desc: "Enterprise-grade authentication and access control." },
            { title: "Dynamic Routing", desc: "Smart routing for seamless multi-page transitions." },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-2xl font-semibold text-[#004a64] mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Architecture Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4 text-[#004a64]">
            MPA Architecture — Power Behind the Pages
          </h2>
          <p className="text-gray-700 mb-6">
            We design MPAs with strong architecture that enhances flexibility, data management, and overall site reliability.
            Each page functions independently but shares core logic and design systems.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>🧩 Independent page rendering for stability</li>
            <li>🔗 RESTful API and microservices integration</li>
            <li>🧠 Smart caching for faster performance</li>
            <li>🧱 Modular components for reusable code</li>
            <li>💡 Centralized data management for scalability</li>
          </ul>
        </div>
        <img
          src={MPA3}
          alt="MPA Architecture"
          className="rounded-2xl shadow-xl w-full object-cover hover:scale-105 transition-all duration-500"
        />
      </section>

      {/* Benefits Section */}
      <section className="bg-[#e8f4f7] py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#004a64] mb-10">Why Choose Multiple Page Applications?</h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-12">
          MPAs are the foundation of most enterprise websites — offering superior SEO, 
          strong backend integration, and unmatched flexibility.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Better SEO", desc: "Each page can be optimized for specific keywords and metadata." },
            { title: "Scalable Design", desc: "Add new pages or sections easily as your business grows." },
            { title: "High Security", desc: "Independent page rendering ensures safer communication and access control." },
          ].map((benefit, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-2xl font-semibold text-[#004a64] mb-2">{benefit.title}</h4>
              <p className="text-gray-600">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Development Workflow */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-[#004a64] mb-10">
          Our MPA Development Process
        </h2>
        <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-8 text-center">
          {[
            { step: "1", title: "Requirement Analysis" },
            { step: "2", title: "Wireframe & Design" },
            { step: "3", title: "Development" },
            { step: "4", title: "Testing & QA" },
            { step: "5", title: "Launch & Maintenance" },
          ].map((step, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-5xl font-extrabold text-[#004a64] mb-2">{step.step}</h3>
              <p className="text-gray-600 font-semibold">{step.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-[#004a64] text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Technologies We Use for MPA Development</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "MySQL",
            "Next.js",
            "PHP",
            "Laravel",
            "Tailwind CSS",
            "Bootstrap",
          ].map((tech, i) => (
            <motion.div
              key={i}
              className="bg-white text-[#004a64] shadow-md rounded-xl px-6 py-3 font-semibold hover:bg-[#00394f] hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-[#004a64] mb-10">What Our Clients Say</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Aarav Mehta",
              feedback:
                "Their MPA solution was fast, SEO-friendly, and improved our lead conversions drastically.",
            },
            {
              name: "Sneha Kapoor",
              feedback:
                "We loved their attention to detail — every page was optimized and visually perfect.",
            },
            {
              name: "Mark Wilson",
              feedback:
                "The best multi-page web solution we’ve ever had. Truly professional and reliable team.",
            },
          ].map((review, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <p className="text-gray-600 mb-4 italic">“{review.feedback}”</p>
              <h4 className="text-[#004a64] font-semibold">{review.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-[#004a64] to-[#00708a] text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Build Your Multi-Page Application?
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Let’s create a scalable, SEO-optimized, and performance-driven multi-page experience 
          for your business or brand.
        </p>
        <a
        href="/contact"
        className="bg-white text-[#004a64] px-10 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
        >
          Start Your MPA Project
        </a>
      </section>
    </div>
  );
};

export default MultiplePageApp;
