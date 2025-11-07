import React from "react";
import { motion } from "framer-motion";
import Figma1 from "../images/Figma1.png";
import Figma2 from "../images/Figma2.jpg";
import Figma3 from "../images/Figma3.jpg";
import Figma4 from "../images/Figma4.png";

const FigmaDesignPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#e6f2f5] to-white text-gray-800 font-poppins overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative text-center bg-[#004a64] text-white py-24 px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Figma Design — Where Creativity Meets Functionality
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl mb-8 text-blue-100 leading-relaxed">
          We bring your ideas to life through interactive, scalable, and user-focused Figma designs.
          Every frame we craft blends creativity, usability, and technology — ensuring your product
          not only looks stunning but works seamlessly.
        </p>
        <motion.img
          src={Figma1}
          alt="Figma Design Hero"
          className="mx-auto rounded-3xl shadow-2xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 hover:scale-105 transition-transform duration-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        />
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <img
          src={Figma2}
          alt="About Figma"
          className="rounded-2xl shadow-xl w-full object-cover hover:scale-105 transition-all duration-500"
        />
        <div>
          <h2 className="text-4xl font-bold mb-4 text-[#004a64]">
            Why Figma is the Future of Modern UI/UX
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Figma is the collaborative design platform of the future — cloud-based, fast,
            and powerful. It enables real-time collaboration, reusable components, and seamless
            developer handoff. Our Figma-driven workflow accelerates product delivery and
            guarantees design consistency.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>🚀 Real-Time Team Collaboration & Feedback</li>
            <li>🎨 Component-Based Scalable Design Systems</li>
            <li>📱 Adaptive Layouts for All Devices</li>
            <li>🧠 Auto Layouts & Smart Components</li>
            <li>⚡ Faster Iterations with Live Prototypes</li>
          </ul>
        </div>
      </section>

      {/* ================= BENEFITS SECTION ================= */}
      <section className="bg-[#f0f8fa] py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#004a64] mb-10">
          Key Benefits of Figma Design
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-12">
          We harness Figma’s full potential to design experiences that connect emotionally and function perfectly.
          Here’s how our design approach benefits your business:
        </p>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
          {[
            {
              title: "Consistent Branding",
              desc: "Maintain visual harmony across every platform with reusable components.",
            },
            {
              title: "Faster Turnaround",
              desc: "Real-time collaboration helps speed up design reviews and approvals.",
            },
            {
              title: "Responsive Design",
              desc: "Ensure every design looks flawless across devices and resolutions.",
            },
            {
              title: "Seamless Developer Handoff",
              desc: "Easily export assets and CSS directly from Figma to code.",
            },
            {
              title: "Efficient Prototyping",
              desc: "Interactive prototypes that mimic real-user journeys.",
            },
            {
              title: "Team Productivity",
              desc: "Centralized workspace enhances communication and feedback loops.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-2xl font-semibold text-[#004a64] mb-3">
                {item.title}
              </h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-[#004a64] mb-10">
          Our Figma Design Process
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-16">
          Every successful design begins with strategy and insight.
          Here’s how we build your product from idea to interface:
        </p>
        <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-8">
          {[
            { step: "1", title: "Research", desc: "Understanding user needs, goals, and competition." },
            { step: "2", title: "Wireframe", desc: "Structuring ideas into clear user journeys." },
            { step: "3", title: "Prototype", desc: "Creating interactive mockups for real experience." },
            { step: "4", title: "Design System", desc: "Building consistent UI libraries for scalability." },
            { step: "5", title: "Testing", desc: "Gathering feedback and refining for excellence." },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-[#004a64] mb-2">{item.step}</h3>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CASE STUDY SECTION ================= */}
      <section className="bg-[#004a64] text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Real Success Stories</h2>
        <p className="max-w-3xl mx-auto text-blue-100 mb-12">
          Discover how our Figma design transformed digital products for clients around the world.
        </p>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {[
            {
              img: Figma3,
              title: "SaaS Dashboard UI",
              desc: "We designed a modular dashboard system improving UX flow and analytics clarity.",
            },
            {
              img: Figma4,
              title: "Mobile App UI",
              desc: "Created a vibrant, user-centric mobile app prototype for better retention.",
            },
            {
              img: Figma2,
              title: "E-Commerce UX",
              desc: "Enhanced navigation and checkout UX, increasing conversions by 38%.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white text-[#004a64] rounded-2xl shadow-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-2xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-[#004a64] mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {[
            {
              q: "How long does a Figma design project take?",
              a: "It depends on project complexity. Typically, our full design cycles range from 2 to 6 weeks.",
            },
            {
              q: "Do you provide developer handoff assets?",
              a: "Yes, we deliver all Figma files, prototypes, and asset exports optimized for front-end development.",
            },
            {
              q: "Can I request design revisions?",
              a: "Absolutely! We value collaboration and offer multiple rounds of design iterations.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-md p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              <h4 className="text-xl font-semibold text-[#004a64] mb-2">{item.q}</h4>
              <p className="text-gray-700">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-[#004a64] to-[#00708a] text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Design Your Next Product in Figma?
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Partner with our expert designers to build digital experiences that engage,
          inspire, and convert.
        </p>
        <a
        href="/contact"
        className="bg-white text-[#004a64] px-10 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
        >
          Start Your Figma Project
        </a>
      </section>
    </div>
  );
};

export default FigmaDesignPage;
