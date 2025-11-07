import React from "react";
import { motion } from "framer-motion";
import SPA1 from "../images/SPA1.jpg";
import SPA2 from "../images/SPA2.webp";
import SPA3 from "../images/SPA3.jpg";
import SPA4 from "../images/SPA4.jpg";

const SinglePageApp = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-800 font-poppins overflow-hidden">

      {/* Hero Section */}
      <section className="relative bg-[#004a64] text-white text-center py-24 px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Single Page Applications (SPA)
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl mb-10 text-blue-100">
          Build lightning-fast, seamless web experiences with modern Single Page Applications.
          We develop dynamic, responsive, and interactive SPAs using advanced front-end frameworks.
        </p>
        <motion.img
          src={SPA1}
          alt="Single Page Application Design"
          className="mx-auto rounded-3xl shadow-2xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 hover:scale-105 transition-transform duration-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        />
      </section>

      {/* About SPA */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <img
          src={SPA2}
          alt="About SPA"
          className="rounded-2xl shadow-xl w-full object-cover hover:scale-105 transition-all duration-500"
        />
        <div>
          <h2 className="text-4xl font-bold mb-4 text-[#004a64]">
            What is a Single Page Application?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A Single Page Application (SPA) loads a single HTML page and dynamically updates
            its content as users interact with the app. This enables instant navigation,
            smoother transitions, and a mobile-app-like experience.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>⚡ Super-fast performance with dynamic loading</li>
            <li>📱 Fully responsive and mobile-first design</li>
            <li>🧠 Seamless user experience without reloads</li>
            <li>🔐 Built with secure, scalable frameworks</li>
            <li>🌐 SEO-optimized and performance-driven</li>
          </ul>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#e6f4f7] py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#004a64] mb-10">Our SPA Development Features</h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-12">
          We craft SPAs that deliver speed, scalability, and an exceptional user journey.
          Every interaction feels smooth and instantaneous.
        </p>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {[
            { title: "Real-Time Updates", desc: "Experience live data updates without page reloads." },
            { title: "SEO Optimization", desc: "Optimized for search visibility and ranking." },
            { title: "Offline Support", desc: "Keep your app functional even without internet." },
            { title: "API Integration", desc: "Seamlessly connect with backend and third-party APIs." },
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

      {/* Technology Stack */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4 text-[#004a64]">Technologies We Use</h2>
          <p className="text-gray-700 mb-6">
            We rely on proven and powerful technologies to ensure your Single Page Application is fast,
            reliable, and scalable — ready for long-term success.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>⚛️ React.js — Component-based, reusable, and lightning-fast</li>
            <li>🟩 Node.js — Efficient server-side communication</li>
            <li>🧩 Redux — Centralized state management</li>
            <li>💅 Tailwind CSS — Beautiful, responsive, modern UI</li>
            <li>🚀 Next.js — SEO-optimized and production-ready framework</li>
          </ul>
        </div>
        <img
          src={SPA3}
          alt="Technology Stack"
          className="rounded-2xl shadow-xl w-full object-cover hover:scale-105 transition-all duration-500"
        />
      </section>

      {/* Workflow Section */}
      <section className="bg-[#d9eef2] py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#004a64] mb-10">Our SPA Development Workflow</h2>
        <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-8">
          {[
            { step: "1", title: "Research & Planning" },
            { step: "2", title: "UI/UX Wireframing" },
            { step: "3", title: "Frontend Development" },
            { step: "4", title: "API Integration" },
            { step: "5", title: "Testing & Deployment" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-5xl font-extrabold text-[#004a64] mb-2">{item.step}</h3>
              <p className="text-gray-600 font-semibold">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4 text-[#004a64]">
            Why Choose Us for SPA Development?
          </h2>
          <p className="text-gray-700 mb-6">
            From startups to enterprises, we build high-performing SPAs that reflect your brand,
            engage your audience, and scale effortlessly with your growth.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>⚙️ Performance-driven architecture</li>
            <li>🧭 Intuitive, engaging user experience</li>
            <li>📈 Scalable, maintainable codebase</li>
            <li>💡 Agile development process</li>
            <li>🎯 Timely delivery with transparent reporting</li>
          </ul>
        </div>
        <img
          src={SPA4}
          alt="SPA Benefits"
          className="rounded-2xl shadow-xl w-full object-cover hover:scale-105 transition-all duration-500"
        />
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-[#004a64] mb-10">What Our Clients Say</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Ankit Sharma",
              feedback: "Our SPA built by their team performs flawlessly — smooth, fast, and visually stunning!",
            },
            {
              name: "Neha Joshi",
              feedback: "They delivered a top-quality app that boosted our engagement by 40%.",
            },
            {
              name: "James Lee",
              feedback: "An incredible combination of design, performance, and innovation!",
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
          Ready to Build Your Next Single Page Application?
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Let’s create a high-performing, scalable, and user-friendly single-page web experience for your business.
        </p>
        <a
        href="/contact"
        className="bg-white text-[#004a64] px-10 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
        >
          Get Started Now
        </a>
      </section>
    </div>
  );
};

export default SinglePageApp;
