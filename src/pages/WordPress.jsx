import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WPImg1 from "../images/wp1.jpg";
import WPImg2 from "../images/wp2.jpg";
import WPImg3 from "../images/wp3.jpg";
import WPImg4 from "../images/wp4.jpg";
import WPImg5 from "../images/wp5.jpg";

const MotionLink = motion(Link);


const WordPressDevelopment = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="font-poppins bg-gradient-to-b from-gray-50 via-white to-blue-50 text-gray-800">
      {/* 🟦 Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 text-white py-28 px-6 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          WordPress Development Services
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-10 opacity-90">
          Build fast, secure, and SEO-friendly WordPress websites that deliver
          performance and design excellence — powered by Codefloor IT Tech.
        </p>
        <MotionLink
          href="/contact"
          whileHover={{ scale: 1.05 }}
          className="inline-block border border-[#00bcd4] px-8 py-3 rounded-full text-white 
                        hover:bg-[#00bcd4] hover:text-[#003b53] transition-all duration-300"
        >
          Get a Free Consultation
        </MotionLink>
      </motion.section>

      {/* 🟩 About Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-6xl mx-auto py-20 px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-700">
          Why WordPress?
        </h2>
        <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed mb-10">
          WordPress powers over 40% of all websites worldwide — and for good
          reason. It’s flexible, easy to manage, SEO-friendly, and scalable for
          everything from personal blogs to enterprise-level ecommerce stores.
          Our expert team at <strong>Codefloor IT Tech</strong> delivers
          custom solutions built for your business growth.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Custom Design & Branding",
              desc: "We create visually unique and brand-focused themes that help you stand out in a competitive digital world.",
            },
            {
              title: "Lightning Fast Performance",
              desc: "Optimized websites built for speed and performance using advanced caching and clean code architecture.",
            },
            {
              title: "Seamless Content Control",
              desc: "Easily manage your pages, media, and blog posts with WordPress’s intuitive dashboard and our custom admin enhancements.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-700">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 🟨 Feature Grid Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-yellow-50 via-pink-50 to-purple-50">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-16"
        >
          WordPress Features We Deliver
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              img: WPImg1,
              title: "Custom WordPress Themes",
              desc: "Tailored designs that reflect your brand identity with responsive and mobile-first layouts.",
            },
            {
              img: WPImg2,
              title: "WooCommerce Integration",
              desc: "Create a powerful ecommerce store with seamless checkout, inventory, and payment systems.",
            },
            {
              img: WPImg3,
              title: "Plugin Development",
              desc: "Enhance your site’s functionality with custom-built WordPress plugins and APIs.",
            },
            {
              img: WPImg4,
              title: "SEO Optimization",
              desc: "Boost visibility and rankings through optimized site structure, metadata, and content.",
            },
            {
              img: WPImg5,
              title: "Security & Maintenance",
              desc: "Regular updates, backups, and security enhancements keep your website safe and stable.",
            },
            {
              img: WPImg1,
              title: "Migration & Support",
              desc: "Migrate your website from any platform to WordPress with zero data loss and full assistance.",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-full h-52 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🟪 Process Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-6xl mx-auto py-20 px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12">
          Our WordPress Development Process
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Planning", desc: "Understanding your goals and preparing a custom roadmap." },
            { step: "02", title: "Design", desc: "Creating UI/UX that matches your brand and enhances usability." },
            { step: "03", title: "Development", desc: "Building responsive, SEO-friendly websites with modern tech." },
            { step: "04", title: "Launch & Support", desc: "Testing, deploying, and maintaining your live website." },
          ].map((phase, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.08 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl border-t-4 border-blue-600 transition"
            >
              <h3 className="text-4xl font-bold text-blue-600 mb-2">
                {phase.step}
              </h3>
              <h4 className="text-lg font-semibold mb-2">{phase.title}</h4>
              <p className="text-gray-700">{phase.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 🟦 CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-24 px-6 text-center bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 text-white"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let’s Build Something Great With WordPress!
        </h2>
        <p className="mb-8 max-w-3xl mx-auto text-lg opacity-90">
          Whether you need a business website, portfolio, or online store, our
          WordPress experts at <strong>Codefloor IT Tech</strong> will craft
          a solution that’s fast, secure, and scalable.
        </p>
        <MotionLink
          to="/contact"
          whileHover={{ scale: 1.05 }}
          className="bg-white text-blue-700 py-3 px-10 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Contact Us Today
        </MotionLink>
      </motion.section>
    </div>
  );
};

export default WordPressDevelopment;
