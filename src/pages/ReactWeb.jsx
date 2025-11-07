// src/pages/ReactWeb.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCloud,
  FaLaptopCode,
  FaGithub,
  FaRocket,
  FaMobileAlt,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiFigma,
} from "react-icons/si";
import { Link } from "react-router-dom";
import BgImage from "../images/react-bg.jpg";
import ReactProject1 from "../images/Reactproject1.jpg";
import ReactProject2 from "../images/Reactproject2.jpg";
import ReactProject3 from "../images/Reactproject3.jpg";

const ReactWeb = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen font-[Poppins] text-gray-800 transition-all duration-500 overflow-hidden">
      {/* Hero Section */}
         <section
      className="text-center py-24 px-6 text-white relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
          url(${BgImage})
        `,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          React Web Development
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-blue-100 mb-8">
          We craft lightning-fast, dynamic, and user-friendly React applications
          that make your business stand out on every device.
        </p>
        <Link
          to="/contact"
          className="bg-white text-blue-800 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-blue-100 transition-all duration-300"
        >
          Get a Free Quote
        </Link>
      </motion.div>

      <motion.img
        src="https://cdn.dribbble.com/userupload/11371352/file/original-dc30577c8308ff8e0658d07a0401731e.png"
        alt="React Development Illustration"
        className="mx-auto mt-12 rounded-3xl shadow-2xl w-full max-w-5xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      />
    </section>

      {/* Services Section */}
      <section className="py-20 px-5 md:px-20 bg-white">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Our Core React Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: <FaLaptopCode size={60} className="mx-auto text-blue-600" />,
              title: "Custom Web Apps",
              desc: "Bespoke React-based applications built for exceptional speed and scalability.",
            },
            {
              icon: <FaCloud size={60} className="mx-auto text-cyan-500" />,
              title: "Cloud Integration",
              desc: "Easily connect with AWS, Firebase, or Azure for cloud-native performance.",
            },
            {
              icon: <FaDatabase size={60} className="mx-auto text-indigo-500" />,
              title: "Full-Stack Solutions",
              desc: "Powerful backends using Node.js, MongoDB, and Express for seamless data flow.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.4 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white text-gray-700 shadow-lg hover:shadow-2xl border border-blue-100"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mt-5">{item.title}</h3>
              <p className="mt-3 text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-100 via-blue-50 to-indigo-100 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-10"
        >
          Why Choose Our React Team?
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: <FaRocket />, title: "Performance Optimized" },
            { icon: <FaMobileAlt />, title: "Mobile Responsive" },
            { icon: <FaCheckCircle />, title: "Clean & Scalable Code" },
            { icon: <FaGithub />, title: "Version Controlled" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="text-blue-700 text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-5 md:px-20 text-center bg-[#002a42]">
        <h2 className="text-4xl font-bold mb-12 text-white">
          Technologies We Work With
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-10">
          {[FaReact, SiRedux, FaNodeJs, SiTailwindcss, SiNextdotjs, SiFirebase, SiMongodb, SiFigma].map(
            (Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ duration: 0.3 }}
                className="p-5 bg-white rounded-xl shadow-md hover:shadow-lg"
              >
                <Icon size={50} className="mx-auto text-[#002a42]" />
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Our Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "E-commerce Dashboard",
              img: ReactProject1,
            },
            {
              title: "Portfolio Website",
              img: ReactProject2,
            },
            {
              title: "CRM Management App",
              img: ReactProject3,
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  Built with React, Tailwind, and Node.js for real-time data and
                  stunning UI.
                </p>
                <button className="mt-4 inline-flex items-center text-blue-700 hover:text-blue-900 font-medium">
                  View Project <FaArrowRight className="ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#001f2c] via-[#00364c] to-[#004a64]">
        <motion.h2
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-10  text-white"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              q: "How long does it take to develop a React project?",
              a: "It depends on the project's size. Typically, small projects take 2–4 weeks, while enterprise solutions can take several months.",
            },
            {
              q: "Do you offer maintenance after project delivery?",
              a: "Absolutely. We provide ongoing support, updates, and performance monitoring to ensure your app runs flawlessly.",
            },
            {
              q: "Can you migrate our existing website to React?",
              a: "Yes, we specialize in migrating existing static or legacy websites into modern React-based web apps with zero downtime.",
            },
          ].map((faq, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-lg shadow-sm"
            >
              <h4 className="font-bold text-lg text-blue-800">{faq.q}</h4>
              <p className="text-gray-700 mt-2">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 text-center text-[#002a42]">
        <motion.h2
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="text-3xl font-bold mb-4"
        >
          Let’s Build Something Incredible Together
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-8 opacity-90">
          Ready to launch your React project? Let’s create a stunning, powerful,
          and responsive experience that performs beautifully across devices.
        </p>
        <Link
          to="/contact"
          className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-100 transition"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default ReactWeb;
