import React from "react";
import { motion } from "framer-motion";
import ProfileImg from "../images/portfolioProfile.png";
import Project1 from "../images/portfolio1.png";
import Project2 from "../images/portfolio2.png";
import Project3 from "../images/portfolio3.webp";
import Project4 from "../images/portfolio4.webp";
import ClientImg from "../images/portfolioClient.png";
import { Link } from "react-router-dom";

const PortfolioPage = () => {
  return (
    <div className="font-poppins bg-gray-50 text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#003a52] to-[#006d91] text-white text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Hi, I’m <span className="text-[#ffd700]">CodeFloor IT Tech</span> — Creative Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto text-gray-200 text-lg md:text-xl"
        >
          I design and develop fast, responsive, and interactive web experiences
          that blend clean code with creative design.
        </motion.p>

        <motion.img
          src={ProfileImg}
          alt="Dipak Profile"
          className="w-40 h-40 mx-auto mt-8 rounded-full border-4 border-white shadow-xl object-cover hover:scale-105 transition"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        />
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src={Project1}
          alt="About Me"
          className="rounded-2xl shadow-lg w-full object-cover"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[#004a64] mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            I'm a passionate developer focused on modern front-end technologies
            like <span className="font-semibold text-[#004a64]">React.js</span>,{" "}
            <span className="font-semibold text-[#004a64]">Tailwind CSS</span>,
            and <span className="font-semibold text-[#004a64]">Node.js</span>.
            I create beautiful, functional digital products that merge aesthetics
            and performance seamlessly.
          </p>
          <p className="text-gray-600 leading-relaxed">
            My mission is to build user-friendly interfaces and efficient backend
            systems for businesses, startups, and creative portfolios worldwide.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="bg-[#f0f8fa] py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#004a64] mb-10">Skills & Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "React.js",
              "Tailwind CSS",
              "Node.js",
              "Express",
              "MySQL",
              "Figma",
              "WordPress",
              "JavaScript",
              "Git / GitHub",
              "REST API",
              "HTML5",
              "CSS3",
            ].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                className="bg-white py-4 px-3 rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                <p className="text-[#004a64] font-semibold">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-[#004a64] text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[Project1, Project2, Project3, Project4].map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
            >
              <img
                src={project}
                alt={`Project ${i + 1}`}
                className="w-full h-56 md:h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#004a64] mb-2">
                  Project {i + 1}
                </h3>
                <p className="text-gray-600 text-sm">
                  A responsive and dynamic web application featuring clean design,
                  optimized performance, and smooth user interaction.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="bg-[#004a64] py-20 text-white px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Experience Timeline</h2>
          <div className="relative border-l-2 border-[#00bcd4]/50 pl-6 space-y-10">
            {[
              {
                year: "2025 - Present",
                role: "React & WordPress Developer",
                desc: "Developing modern dashboards and websites with React.js, Node.js, and WordPress integration.",
              },
              {
                year: "2024",
                role: "Frontend Developer Intern",
                desc: "Enhanced UI/UX and built reusable components for scalable applications.",
              },
              {
                year: "2023",
                role: "Freelance Web Developer",
                desc: "Created personal and business websites optimized for SEO and performance.",
              },
            ].map((exp, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="left-3 top-2 w-6 h-6 bg-[#00bcd4] rounded-full border-2 border-white"></div>
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <span className="text-gray-300">{exp.year}</span>
                <p className="text-gray-200 mt-2">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#004a64] mb-8">What Clients Say</h2>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-8">
          {[1, 2].map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition-all"
            >
              <img
                src={ClientImg}
                alt="Client"
                className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-[#004a64]"
              />
              <p className="text-gray-600 italic mb-3">
                “Dipak built an incredible responsive website for our brand — fast,
                visually stunning, and SEO optimized.”
              </p>
              <h4 className="font-semibold text-[#004a64]">John Doe</h4>
              <p className="text-gray-500 text-sm">CEO, TechWorld</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-[#003a52] to-[#006d91] text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Build Something Amazing Together 🚀
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg text-gray-200">
          Have an idea or project in mind? Let’s collaborate and craft a
          visually appealing and responsive digital experience.
        </p>
        <Link
        to="/contact"
        className="bg-white text-[#004a64] px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all"
        >
          Contact Me
        </Link>
      </section>
    </div>
  );
};

export default PortfolioPage;
