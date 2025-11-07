import React from "react";
import { motion } from "framer-motion";
import UIUX1 from "../images/UIUX1.jpg";
import UIUX2 from "../images/UIUX2.jpg";
import UIUX3 from "../images/UIUX3.jpg";
import UIUX4 from "../images/UIUX4.png";
import { Link } from "react-router-dom";

const UIUXDesignPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-800 font-poppins overflow-hidden">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#004a64] via-[#036b8f] to-[#0488b3] text-white text-center py-24 px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Crafting Exceptional UI/UX Experiences
        </motion.h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-100 leading-relaxed">
          We transform ideas into intuitive, visually stunning digital experiences that engage users and drive results.
          From wireframes to prototypes, we design for both beauty and usability.
        </p>
        <motion.img
          src={UIUX1}
          alt="UI/UX Design Banner"
          className="mx-auto mt-8 rounded-3xl shadow-2xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 hover:scale-105 transition-transform duration-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        />
      </section>

      {/* About UI/UX */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <img
          src={UIUX2}
          alt="About UI/UX"
          className="rounded-2xl shadow-xl w-full object-cover hover:scale-105 transition-all duration-500"
        />
        <div>
          <h2 className="text-4xl font-bold mb-4 text-[#004a64]">
            What is UI/UX Design?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            UI/UX design bridges creativity and functionality, ensuring your users enjoy every interaction. We focus on human-first design that merges aesthetic beauty with usability and performance.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>🎯 User Research & Persona Development</li>
            <li>🖌️ Wireframes, Mockups & Interactive Prototypes</li>
            <li>📱 Responsive & Mobile-first UI Design</li>
            <li>💡 Intuitive Navigation & Information Architecture</li>
            <li>📈 Conversion-Driven Design Strategy</li>
          </ul>
        </div>
      </section>

      {/* Our Design Process */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#004a64] mb-12">
          Our Design Process
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-12">
          Every great product begins with understanding the user. Our design process ensures each interface is engaging, efficient, and crafted to deliver meaningful experiences.
        </p>

        <div className="grid md:grid-cols-4 gap-10">
          {[
            { step: "01", title: "Research", desc: "Understanding user behavior, goals, and pain points." },
            { step: "02", title: "Wireframing", desc: "Creating the foundation for smooth user journeys." },
            { step: "03", title: "Prototyping", desc: "Developing interactive models for real testing." },
            { step: "04", title: "Testing", desc: "Refining based on feedback for flawless usability." },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-5xl font-bold text-[#004a64] mb-3">{item.step}</h3>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4 text-[#004a64]">
            Why Choose Our UI/UX Design Services?
          </h2>
          <p className="text-gray-600 mb-6">
            Our experienced design team focuses on innovation and usability, creating seamless digital journeys that deliver measurable results and long-lasting impressions.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>💼 Expert Designers & Creative Strategists</li>
            <li>🚀 Pixel-Perfect & Conversion-Optimized Design</li>
            <li>🎨 Consistent Branding Across All Platforms</li>
            <li>📊 Data-Driven Design & Analytics Insights</li>
            <li>🌍 Following Global UI/UX Standards</li>
          </ul>
        </div>
        <img
          src={UIUX3}
          alt="Why Choose Us"
          className="rounded-2xl shadow-xl w-full hover:scale-105 transition-all duration-500"
        />
      </section>

      {/* Tools & Technologies */}
      <section className="bg-gradient-to-r from-[#e0f4fa] to-[#f0fbff] py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#004a64] mb-10">Tools & Technologies We Use</h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-12">
          We use industry-leading design tools to craft user interfaces that are beautiful, scalable, and precise.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "Figma",
            "Adobe XD",
            "Sketch",
            "Photoshop",
            "Illustrator",
            "Framer",
            "Zeplin",
            "InVision",
          ].map((tool, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-md rounded-xl px-6 py-3 text-[#004a64] font-semibold hover:bg-[#004a64] hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              {tool}
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
              name: "Ritika Sharma",
              feedback:
                "Our mobile app’s UI has transformed completely! It's sleek, intuitive, and user-focused — just what we needed.",
            },
            {
              name: "Aman Joshi",
              feedback:
                "Outstanding creativity! Their UI/UX team delivered beyond expectations and increased user engagement by 40%.",
            },
            {
              name: "Meera Patel",
              feedback:
                "They perfectly captured our brand’s tone through elegant design and seamless user flow. Highly recommend!",
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
      <section className="text-center py-20 px-6 bg-gradient-to-r from-[#004a64] via-[#036b8f] to-[#0488b3] text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Elevate Your Digital Experience?
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Partner with us to design stunning, user-focused interfaces that connect with your audience and enhance engagement.
        </p>
        <Link
        to="/contact"
        className="bg-white text-[#004a64] px-10 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
        >
          Let’s Start Your Project
        </Link>
      </section>
    </div>
  );
};

export default UIUXDesignPage;
