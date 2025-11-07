import React from "react";
import { motion } from "framer-motion";
import HeroImg from "../images/animatedHero.png";
import AboutImg from "../images/animatedAbout.jpg";
import Service1 from "../images/animatedServies1.webp";
import Service2 from "../images/animatedServies2.png";
import Service3 from "../images/animatedServies3.jpg";
import ContactImg from "../images/animatedContact.webp";

const AnimatedWebApp = () => {
  return (
    <div className="bg-gray-50 font-poppins text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="bg-[#004a64] text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Animated Web Experiences
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200"
        >
          Bring your website to life with interactive animations, dynamic
          layouts, and responsive design — all crafted for engagement and
          performance.
        </motion.p>
        <motion.img
          src={HeroImg}
          alt="Animated Web Design"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mx-auto mt-10 rounded-2xl shadow-2xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
        />
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          src={AboutImg}
          alt="About Animation"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl shadow-xl w-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#004a64] mb-4">
            Why Choose Animated Web Design?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Animated web design makes your brand stand out. Motion guides
            attention, enhances storytelling, and improves user experience.
            We design interactive websites that are smooth, elegant, and
            functional across all devices.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Enhance engagement with smooth transitions</li>
            <li>Build trust through motion-based storytelling</li>
            <li>Fully optimized animations with performance in mind</li>
            <li>Delight users with interactive interfaces</li>
          </ul>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="bg-[#004a64] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-8"
          >
            Our Animated Web Solutions
          </motion.h2>
          <p className="text-white max-w-3xl mx-auto mb-12">
            From micro-interactions to full-page transitions, we create
            immersive animated web experiences that engage users and elevate
            your digital presence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                img: Service1,
                title: "Interactive Landing Pages",
                desc: "Beautifully animated landing pages with scroll-triggered and parallax effects to capture attention instantly.",
              },
              {
                img: Service2,
                title: "Motion UI & UX Design",
                desc: "Smart UI transitions and hover animations that make interactions intuitive and exciting.",
              },
              {
                img: Service3,
                title: "Animated Product Pages",
                desc: "Showcase your product features dynamically with motion, videos, and creative layouts.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-xl mb-4 w-full h-56 object-cover"
                />
                <h3 className="text-xl font-semibold text-[#004a64] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#004a64] mb-4">
            Let’s Create Something Amazing
          </h2>
          <p className="text-gray-600 mb-6">
            Whether you need an interactive portfolio, animated landing page, or
            a complete web experience — our team can bring it to life with motion and precision.
          </p>
          <a
          href="/contact"
          className="bg-[#004a64] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#006b8a] transition-all duration-300"
          >
            Contact Us Now
          </a>
        </motion.div>
        <motion.img
          src={ContactImg}
          alt="Contact Us"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl shadow-xl w-full object-cover"
        />
      </section>
    </div>
  );
};

export default AnimatedWebApp;
