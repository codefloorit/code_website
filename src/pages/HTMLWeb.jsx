import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
  FaShopify,
  FaWordpress,
  FaCode,
  FaRocket,
  FaCogs,
  FaMobileAlt,
  FaLock,
  FaStar,
  FaUserCircle,
} from "react-icons/fa";

const WebDevelopment = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white overflow-hidden">
      {/* 🔹 Hero Section */}
      <section
        className="relative text-center py-28 px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('/images/webdev-bg.jpg')",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-blue-400">
            Web Development Services
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-200 mb-8">
            Transform your ideas into stunning, high-performing web solutions
            that drive engagement and growth. From startups to enterprises, we
            craft digital experiences that matter.
          </p>
          <a
          href="/contact"
          className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full font-semibold text-white transition duration-300 shadow-lg"
          >
            Get a Free Quote
          </a>
        </motion.div>
      </section>

      {/* 🔹 About Section */}
      <section className="py-20 px-8 md:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            alt="Web Development"
            className="rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          />
          <div>
            <h2 className="text-4xl font-bold mb-4 text-blue-400">
              Build Better with Modern Web Tech
            </h2>
            <p className="text-gray-300 mb-6">
              Our development process focuses on speed, reliability, and
              usability. We design with purpose, code with precision, and deploy
              with confidence.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li>✔ Pixel-perfect & fully responsive design</li>
              <li>✔ SEO optimized and lightning-fast</li>
              <li>✔ Secure and scalable architecture</li>
              <li>✔ 24/7 maintenance and support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 🔹 Process Section */}
      <section className="py-20 bg-gray-950 px-6">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Our Development Process
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          {[
            { icon: <FaCode />, title: "Plan", desc: "We analyze your business goals and create a solid project roadmap." },
            { icon: <FaCogs />, title: "Design", desc: "Crafting intuitive, aesthetic designs with a focus on user experience." },
            { icon: <FaRocket />, title: "Develop", desc: "Building robust, scalable, and clean-coded applications." },
            { icon: <FaLock />, title: "Deploy", desc: "Testing, launching, and optimizing for top performance." },
          ].map((step, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="text-5xl text-blue-400 mb-4 mx-auto">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 Services Section */}
      <section className="py-20 bg-gray-900 px-6">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Our Web Development Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Frontend Development",
              desc: "Modern, responsive, and engaging UI using React.js, Next.js, and Tailwind CSS.",
              img: "https://miro.medium.com/0*F8SCjR_hs3eF8RhV",
            },
            {
              title: "Backend Development",
              desc: "Secure APIs and scalable server-side logic using Node.js and Express.",
              img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
            },
            {
              title: "E-commerce Solutions",
              desc: "Custom online stores built with React, Shopify, and WooCommerce integration.",
              img: "https://www.orangemantra.com/wp-content/uploads/2025/05/case-study.webp",
            },
            {
              title: "CMS & WordPress",
              desc: "Seamless WordPress and Headless CMS development with full customization.",
              img: "https://akshartechnologies.com/wp-content/uploads/2019/01/WordPress-Development-Services.jpg",
            },
            {
              title: "Mobile-Friendly Apps",
              desc: "Progressive Web Apps and hybrid solutions that feel native across all devices.",
              img: "https://logisticinfotech.com/wp-content/uploads/2015/04/Mobile-App-Development.jpg",
            },
            {
              title: "Custom Web Portals",
              desc: "Bespoke dashboards, CRMs, and analytics tools built for your business growth.",
              img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=600&q=80",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <img src={service.img} alt={service.title} className="w-full h-56 object-cover" />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-blue-400 mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 Technology Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-10">
          Technologies We Use
        </h2>
        <div className="flex flex-wrap justify-center gap-10 text-6xl">
          <FaHtml5 className="text-orange-500 hover:scale-110 transition" />
          <FaCss3Alt className="text-blue-500 hover:scale-110 transition" />
          <FaJsSquare className="text-yellow-400 hover:scale-110 transition" />
          <FaReact className="text-cyan-400 hover:scale-110 transition" />
          <FaNodeJs className="text-green-500 hover:scale-110 transition" />
          <FaDatabase className="text-gray-400 hover:scale-110 transition" />
          <FaWordpress className="text-indigo-400 hover:scale-110 transition" />
          <FaShopify className="text-green-400 hover:scale-110 transition" />
        </div>
      </section>

      {/* 🔹 Why Choose Us */}
      <section className="py-20 bg-gray-950 px-8">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-10">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Experienced Team",
              desc: "Our developers and designers bring years of expertise and innovation to every project.",
            },
            {
              title: "Client-Centric Approach",
              desc: "We prioritize your goals and create customized strategies for impactful digital success.",
            },
            {
              title: "End-to-End Support",
              desc: "From development to deployment and maintenance, we’re with you every step of the way.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-800 p-8 rounded-2xl text-center hover:shadow-blue-500/20 transition"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Testimonials */}
      <section className="py-20 bg-gray-900 text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-10">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              name: "John Smith",
              feedback:
                "Absolutely amazing service! The team built our site exactly as envisioned — clean, fast, and modern.",
            },
            {
              name: "Emily Johnson",
              feedback:
                "Highly professional and responsive. Our ecommerce store saw a 50% increase in conversions!",
            },
            {
              name: "Michael Brown",
              feedback:
                "Their React and Node.js expertise made our CRM portal run smoother than ever. Great support too!",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition"
            >
              <FaUserCircle className="text-5xl mx-auto text-blue-400 mb-4" />
              <p className="text-gray-300 mb-4 italic">"{t.feedback}"</p>
              <h4 className="font-semibold text-blue-400">{t.name}</h4>
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
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto space-y-6 text-gray-300">
          {[
            {
              q: "How long does it take to build a website?",
              a: "Most websites take between 3–6 weeks depending on the project scope and revisions.",
            },
            {
              q: "Do you provide ongoing maintenance?",
              a: "Yes! We offer flexible support and maintenance plans to keep your website updated and secure.",
            },
            {
              q: "Can you optimize my current website?",
              a: "Absolutely. We specialize in redesigns, SEO, and performance enhancements for existing sites.",
            },
          ].map((faq, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                {faq.q}
              </h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>     
    </div>
  );
};

export default WebDevelopment;
