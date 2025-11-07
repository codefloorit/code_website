import React from "react";
import { motion } from "framer-motion";
import {
  FaJava,
  FaDatabase,
  FaServer,
  FaCloud,
  FaLock,
  FaLaptopCode,
  FaReact,
  FaNodeJs,
  FaMobileAlt,
  FaCogs,
  FaRocket,
  FaCode,
  FaUserCircle,
  FaStar,
} from "react-icons/fa";

const JavaDevelopment = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white overflow-hidden">
      {/* 🔹 Hero Section */}
      <section
        className="relative text-center py-28 px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-orange-400">
            Java Web Development Services
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-200 mb-8">
            Build secure, scalable, and high-performance web applications with our expert Java development team. From enterprise systems to web apps — we power businesses worldwide.
          </p>
          <a
          href="/contact"
          className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-semibold text-white transition duration-300 shadow-lg"
          >
            Get a Free Consultation
          </a>
        </motion.div>
      </section>

      {/* 🔹 About Section */}
      <section className="py-20 px-8 md:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
            alt="Java Development"
            className="rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          />
          <div>
            <h2 className="text-4xl font-bold mb-4 text-orange-400">
              Scalable Java Web Solutions
            </h2>
            <p className="text-gray-300 mb-6">
              Our Java experts build robust, enterprise-grade applications with top-tier security, performance, and reliability. Using frameworks like Spring Boot and Hibernate, we ensure every project runs smoothly from backend to frontend.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li>✔ Enterprise-grade Java web applications</li>
              <li>✔ Secure architecture with Spring Security</li>
              <li>✔ RESTful APIs & Microservices architecture</li>
              <li>✔ Optimized for performance and scalability</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 🔹 Why Choose Java Section */}
      <section className="py-20 bg-gray-950 text-center px-6">
        <h2 className="text-4xl font-bold text-orange-400 mb-12">
          Why Choose Java for Web Development?
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <FaLock />, title: "Security", desc: "Java ensures top-level security with encryption, sandboxing, and robust frameworks." },
            { icon: <FaRocket />, title: "Performance", desc: "Optimized JVM and multi-threading for unmatched speed and efficiency." },
            { icon: <FaCloud />, title: "Scalability", desc: "Ideal for enterprise applications that need to grow with your business." },
            { icon: <FaCogs />, title: "Flexibility", desc: "Integrates easily with other technologies like React, Node.js, or Python." },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-orange-500/20 transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="text-5xl text-orange-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 Our Services Section */}
      <section className="py-20 bg-gray-900 px-6">
        <h2 className="text-4xl font-bold text-center text-orange-400 mb-12">
          Our Java Development Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Enterprise Java Development",
              desc: "Custom ERP and CRM systems built with Java EE, Spring Boot, and Microservices.",
              img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80",
            },
            {
              title: "API & Backend Development",
              desc: "Powerful RESTful and GraphQL APIs to connect your apps and data sources efficiently.",
              img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=600&q=80",
            },
            {
              title: "Cloud Integration",
              desc: "We deploy Java applications on AWS, Azure, and Google Cloud with auto-scaling and CI/CD pipelines.",
              img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
            },
            {
              title: "Java Web Portals",
              desc: "Dynamic, interactive portals for enterprises, universities, and organizations worldwide.",
              img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=600&q=80",
            },
            {
              title: "E-commerce Platforms",
              desc: "Secure online stores built with Java, integrated payment gateways, and real-time analytics.",
              img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
            },
            {
              title: "Java Migration & Maintenance",
              desc: "Migrate legacy systems to Java frameworks or upgrade existing Java-based systems.",
              img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-500/20 transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <img src={service.img} alt={service.title} className="w-full h-56 object-cover" />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-orange-400 mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 Technology Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-center">
        <h2 className="text-4xl font-bold text-orange-400 mb-10">
          Technologies & Tools We Use
        </h2>
        <div className="flex flex-wrap justify-center gap-10 text-6xl">
          <FaJava className="text-orange-500 hover:scale-110 transition" />
          <FaDatabase className="text-yellow-400 hover:scale-110 transition" />
          <FaServer className="text-blue-400 hover:scale-110 transition" />
          <FaCloud className="text-cyan-400 hover:scale-110 transition" />
          <FaReact className="text-blue-500 hover:scale-110 transition" />
          <FaNodeJs className="text-green-500 hover:scale-110 transition" />
          <FaMobileAlt className="text-purple-400 hover:scale-110 transition" />
        </div>
      </section>

      {/* 🔹 Portfolio Showcase */}
      <section className="py-20 bg-gray-950 text-center">
        <h2 className="text-4xl font-bold text-orange-400 mb-10">
          Featured Java Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { img: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=600&q=80", title: "Enterprise CRM System" },
            { img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80", title: "Cloud-Based Banking Portal" },
            { img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80", title: "Online Learning Platform" },
          ].map((project, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-2xl shadow-lg hover:shadow-orange-500/30 transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <img src={project.img} alt={project.title} className="w-full h-56 object-cover" />
              <div className="bg-gray-800 p-6">
                <h3 className="text-2xl font-semibold text-orange-400">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 Testimonials */}
      <section className="py-20 bg-gray-900 text-center">
        <h2 className="text-4xl font-bold text-orange-400 mb-10">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { name: "Ankit Mehta", feedback: "Our enterprise Java system transformed after their upgrade — blazing fast and secure!" },
            { name: "Priya Sharma", feedback: "Excellent support and technical skills. They migrated our old PHP site to Java seamlessly." },
            { name: "Rahul Verma", feedback: "Their Java + Spring expertise helped automate our complete logistics operations." },
          ].map((t, i) => (
            <div key={i} className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-orange-500/20 transition">
              <FaUserCircle className="text-5xl mx-auto text-orange-400 mb-4" />
              <p className="text-gray-300 mb-4 italic">"{t.feedback}"</p>
              <h4 className="font-semibold text-orange-400">{t.name}</h4>
              <div className="flex justify-center text-yellow-400 mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 FAQ Section */}
      <section className="py-20 bg-gray-950 px-6">
        <h2 className="text-4xl font-bold text-center text-orange-400 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto space-y-6 text-gray-300">
          {[
            { q: "Do you provide full-stack Java development?", a: "Yes, our developers are experienced in both backend (Java) and frontend (React, Angular)." },
            { q: "Can you migrate existing applications to Java?", a: "Absolutely. We specialize in migrating and modernizing legacy systems with Java frameworks." },
            { q: "Do you provide maintenance after launch?", a: "Yes, we offer long-term support, updates, and performance optimization services." },
          ].map((faq, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-orange-400 mb-2">{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Contact Section */}
      <section className="py-20 text-center bg-gray-900">
        <motion.h2
          className="text-4xl font-bold text-orange-400 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Let’s Build Your Java Application
        </motion.h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          From startups to enterprises — we turn complex ideas into powerful Java-based solutions. Get in touch to start your next big project.
        </p>

      </section>
    </div>
  );
};

export default JavaDevelopment;
