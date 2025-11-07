import React from "react";
import { motion } from "framer-motion";
import { FaLaravel, FaPhp, FaDatabase, FaServer, FaCloud, FaCode } from "react-icons/fa";

const LaravelDevelopment = () => {
  return (
    <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      {/* 🔹 Hero Section */}
      <section
        className="relative text-center py-28 px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('../images/laravel-hero.jpg')",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-red-400">
            Laravel Web Development
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-200 mb-16">
            We specialize in creating robust, scalable, and secure web
            applications using the Laravel framework — tailored perfectly for
            your business needs.
          </p>
          <a
          href="/contact"
          className="bg-red-500 hover:bg-red-600 px-8 py-5 rounded-full font-semibold text-white transition duration-300 shadow-lg"
          >
            Get a Free Consultation
          </a>
        </motion.div>
      </section>

      {/* 🔹 About Section */}
      <section className="py-20 px-8 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80"
            alt="Laravel Development"
            className="rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          />
          <div>
            <h2 className="text-4xl font-bold mb-4 text-red-400">
              Build Scalable Apps with Laravel
            </h2>
            <p className="text-gray-300 mb-6">
              Laravel is a PHP-based framework that simplifies web development
              with elegant syntax, strong security, and fast performance. Our
              Laravel experts build everything from enterprise-grade apps to
              custom eCommerce platforms.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li>✔ Clean and maintainable architecture</li>
              <li>✔ MVC design pattern for scalability</li>
              <li>✔ Built-in security features</li>
              <li>✔ RESTful API and backend development</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 🔹 Services Section */}
      <section className="py-20 bg-gray-950 px-6">
        <h2 className="text-4xl font-bold text-center text-red-400 mb-12">
          Our Laravel Development Services
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Custom Web Applications",
              desc: "We develop custom Laravel applications tailored to your business needs, from dashboards to complete systems.",
              img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
            },
            {
              title: "API Development",
              desc: "Build secure, scalable APIs using Laravel’s built-in tools and middleware for mobile or web integrations.",
              img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=600&q=80",
            },
            {
              title: "E-Commerce Solutions",
              desc: "Create feature-rich eCommerce platforms with Laravel and modern technologies like Vue.js or React.",
              img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=600&q=80",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-red-500/20 transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-red-400 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 Features Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-gray-800 to-gray-900 text-center">
        <h2 className="text-4xl font-bold text-red-400 mb-10">
          Why Choose Laravel for Your Project?
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-gray-300">
          {[
            "Faster Development Cycle",
            "Incredible Security",
            "Built-In Authentication",
            "Powerful Blade Templating",
            "Eloquent ORM for Databases",
            "Caching for Speed Optimization",
            "Scalable MVC Architecture",
            "Seamless API Integration",
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition shadow-lg"
            >
              {feature}
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Technologies Section */}
      <section className="py-20 text-center bg-gray-950">
        <h2 className="text-4xl font-bold text-red-400 mb-10">
          Technologies We Use
        </h2>
        <div className="flex flex-wrap justify-center gap-12 text-6xl">
          <FaLaravel className="text-red-500 hover:scale-110 transition" />
          <FaPhp className="text-indigo-400 hover:scale-110 transition" />
          <FaDatabase className="text-gray-400 hover:scale-110 transition" />
          <FaServer className="text-green-400 hover:scale-110 transition" />
          <FaCloud className="text-blue-400 hover:scale-110 transition" />
          <FaCode className="text-yellow-400 hover:scale-110 transition" />
        </div>
      </section>

      {/* 🔹 Workflow Section */}
      <section className="py-20 bg-gray-900 text-center px-6">
        <h2 className="text-4xl font-bold text-red-400 mb-12">
          Our Development Process
        </h2>
        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            "Requirement Analysis",
            "UI/UX Design",
            "Development & Testing",
            "Deployment & Support",
          ].map((step, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-red-500/20 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-red-400 mb-2">
                Step {i + 1}
              </h3>
              <p className="text-gray-300">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-center">
        <h2 className="text-4xl font-bold text-red-400 mb-10">
          What Our Clients Say
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Amit Patel",
              feedback:
                "Our eCommerce platform built on Laravel by this team runs flawlessly! Highly professional and skilled developers.",
            },
            {
              name: "Sneha R.",
              feedback:
                "We loved the Laravel-based CRM system they created — fast, secure, and exactly what we needed.",
            },
            {
              name: "Ravi Sharma",
              feedback:
                "Best Laravel development company! Amazing support even after deployment.",
            },
          ].map((client, i) => (
            <div
              key={i}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-red-500/20 transition"
            >
              <p className="text-gray-300 italic mb-4">“{client.feedback}”</p>
              <h4 className="font-semibold text-red-400">{client.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Contact Section */}
      <section className="py-20 text-center bg-gray-950">
        <motion.h2
          className="text-4xl font-bold text-red-400 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Let's Build Your Laravel Project
        </motion.h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          From startup ideas to enterprise platforms, we deliver Laravel
          solutions that perform at scale.
        </p>
      </section>
    </div>
  );
};

export default LaravelDevelopment;
