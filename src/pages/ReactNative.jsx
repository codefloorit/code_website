import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

export default function ReactNative() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <PageWrapper
      title=""
      subtitle=""
    >
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">

        {/* Intro Section */}
        <motion.section
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-5xl font-bold text-blue-600 mb-6">React Native App Development</h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            At <strong className="text-blue-500">CodeFloor IT</strong>, we design and develop high-quality React Native applications that work seamlessly on both iOS and Android. Our apps combine responsive UI, smooth performance, and cutting-edge features to deliver exceptional user experiences. 
            Whether you need a startup app or an enterprise-grade solution, we have the expertise to bring your idea to life.
          </p>
        </motion.section>

        {/* Services Section */}
        <motion.section
          className="grid md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { title: "Cross-Platform App Development", desc: "Build apps for both iOS and Android using a single React Native codebase." },
            { title: "Custom UI/UX Design", desc: "Beautiful and intuitive user interfaces tailored to your brand and audience." },
            { title: "Third-Party API Integration", desc: "Connect your app with payment gateways, CRMs, analytics, and more." },
            { title: "Performance Optimization", desc: "Ensure your app runs fast and smooth on all devices with optimized code." },
            { title: "App Redesign & Modernization", desc: "Revamp your existing app for better performance, usability, and visuals." },
            { title: "Maintenance & Support", desc: "Continuous support to keep your app updated and secure." },
          ].map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeInUp}
              className="p-8 rounded-3xl shadow-lg bg-gradient-to-r from-blue-400 to-purple-500 text-white hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Development Process */}
        <motion.section
          className="bg-blue-50 p-12 rounded-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#00364c] mb-12 text-center">React Native Development Process</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { step: "1", title: "Requirement Analysis", desc: "Understand business goals, target audience, and app objectives." },
              { step: "2", title: "Wireframing & Prototyping", desc: "Blueprint the app structure and create interactive prototypes." },
              { step: "3", title: "UI/UX Design", desc: "Design visually appealing interfaces with focus on usability and brand identity." },
              { step: "4", title: "React Native Development", desc: "Build cross-platform apps with efficient, maintainable code." },
              { step: "5", title: "Testing & QA", desc: "Perform rigorous testing for bugs, performance, and UX issues." },
              { step: "6", title: "Launch & Support", desc: "Deploy to App Store & Play Store, and provide ongoing maintenance." },
            ].map((step, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeInUp}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
              >
                <div className="text-4xl font-bold text-[#00364c] mb-2">{step.step}</div>
                <h4 className="text-2xl font-semibold text-blue-600 mb-2">{step.title}</h4>
                <p className="text-gray-800 font-semibold text-lg">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Platforms & Benefits */}
        <motion.section
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-blue-600 mb-12">Platforms & Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "iOS", desc: "High-performance apps with smooth animations and Apple Human Interface Guidelines compliance." },
              { name: "Android", desc: "Optimized for all Android devices with consistent performance and beautiful UI." },
              { name: "Flutter Integration", desc: "Optional integration for hybrid solutions, shared codebase, and faster development." },
            ].map((platform, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeInUp}
                className="p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition cursor-pointer"
              >
                <h3 className="text-2xl font-semibold mb-2 text-blue-600">{platform.name}</h3>
                <p className="text-gray-800 font-semibold text-lg">{platform.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Case Studies */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-blue-600 mb-12 text-center">Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Foodie App", desc: "React Native app for food delivery with smooth animations and real-time tracking." },
              { title: "ShopSmart App", desc: "Cross-platform shopping app with secure payments and fast performance." },
              { title: "TravelMate App", desc: "Travel planning app with interactive maps, notifications, and engaging UX." },
            ].map((caseStudy, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeInUp}
                className="p-6 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-2xl shadow-lg hover:scale-105 transition"
              >
                <h3 className="text-2xl font-bold mb-2">{caseStudy.title}</h3>
                <p>{caseStudy.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          className="bg-blue-100 p-12 rounded-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-blue-600 mb-10 text-center">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Emily Carter", feedback: "React Native app development by CodeFloor IT was fast, creative, and extremely reliable!" },
              { name: "Michael Scott", feedback: "Our app runs smoothly on both iOS and Android with beautiful design and features." },
              { name: "Sarah Williams", feedback: "Highly professional team delivering cross-platform apps on time with great UX." },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeInUp}
                className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <p className="italic mb-4 text-gray-800">"{testimonial.feedback}"</p>
                <p className="font-semibold text-blue-600">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">Ready to Build Your React Native App?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Let's create a cross-platform mobile app that engages users and drives business growth.
          </p>
          <Link
            to="/contact"
            className="bg-blue-500 text-white px-10 py-3 rounded-xl hover:bg-blue-600 transition"
          >
            Start Your Project
          </Link>
        </motion.section>

        {/* FAQ */}
        <motion.section
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-blue-600 mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-left">
            {[
              { q: "Do you develop apps for startups?", a: "Yes! We specialize in building apps for startups, SMEs, and enterprises using React Native." },
              { q: "Can React Native apps be truly native?", a: "Yes, React Native provides near-native performance and user experience for both iOS and Android." },
              { q: "Do you provide design mockups and prototypes?", a: "Absolutely! We create interactive wireframes and prototypes before development." },
              { q: "Do you support post-launch maintenance?", a: "Yes, we provide ongoing support and updates to ensure app performance and security." },
            ].map((faq, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeInUp}
                className="p-6 bg-white rounded-2xl shadow"
              >
                <p className="font-semibold mb-2 text-blue-600 text-lg">{faq.q}</p>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </PageWrapper>
  );
}
