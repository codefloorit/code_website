import React from "react";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

export default function SwiftKotlin() {
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
      title="Swift & Kotlin App Development"
      subtitle="Build native iOS and Android apps with modern technology, high performance, and seamless user experience."
    >
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">

        {/* Intro Section */}
        <motion.section
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-5xl font-bold text-indigo-600 mb-6">
            Swift & Kotlin App Development
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At <strong className="text-indigo-500">CodeFloor IT</strong>, we deliver high-performance native mobile applications using <strong>Swift</strong> for iOS and <strong>Kotlin</strong> for Android. Our apps provide smooth animations, robust architecture, and intuitive user experiences. From startups to enterprise solutions, we help you bring your mobile app ideas to life with precision and speed.
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
            { title: "iOS App Development with Swift", desc: "Develop secure, scalable, and visually appealing iOS apps with Swift, following Apple Human Interface Guidelines." },
            { title: "Android App Development with Kotlin", desc: "Create high-performance, native Android apps using Kotlin with a modern, clean architecture." },
            { title: "UI/UX Design", desc: "Crafting intuitive and elegant interfaces for seamless user experiences on both iOS and Android." },
            { title: "API & Third-Party Integrations", desc: "Integrate payment gateways, analytics, maps, and other third-party services efficiently." },
            { title: "App Maintenance & Support", desc: "Continuous support to ensure your app stays up-to-date, secure, and high-performing." },
            { title: "App Modernization", desc: "Revamp legacy apps with the latest Swift and Kotlin best practices and updated design trends." },
          ].map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeInUp}
              className="p-8 rounded-3xl shadow-lg bg-gradient-to-r from-indigo-400 to-purple-500 text-white hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Development Process */}
        <motion.section
          className="bg-indigo-50 p-12 rounded-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-indigo-600 mb-12 text-center">
            Swift & Kotlin Development Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { step: "1", title: "Requirement Gathering", desc: "Understand your business needs, target audience, and app objectives." },
              { step: "2", title: "Wireframing & Prototyping", desc: "Blueprint the app structure and create interactive prototypes." },
              { step: "3", title: "UI/UX Design", desc: "Craft visually stunning interfaces with user-centric designs." },
              { step: "4", title: "Native Development", desc: "Build apps using Swift for iOS and Kotlin for Android with clean architecture." },
              { step: "5", title: "Testing & QA", desc: "Rigorous testing for performance, usability, and bug-free experience." },
              { step: "6", title: "Deployment & Support", desc: "Deploy apps to App Store & Play Store and provide ongoing support." },
            ].map((step, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeInUp}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
              >
                <div className="text-4xl font-bold text-indigo-600 mb-2">{step.step}</div>
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.desc}</p>
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
          <h2 className="text-4xl font-bold text-indigo-600 mb-12">
            Platforms & Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "iOS (Swift)", desc: "Fast, secure, and elegant apps fully compliant with Apple standards." },
              { name: "Android (Kotlin)", desc: "Optimized for smooth performance across all Android devices." },
              { name: "Scalability & Maintenance", desc: "Apps built with clean architecture for long-term growth and updates." },
            ].map((platform, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeInUp}
                className="p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition cursor-pointer"
              >
                <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                <p className="text-gray-600 text-sm">{platform.desc}</p>
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
          <h2 className="text-4xl font-bold text-indigo-600 mb-12 text-center">
            Case Studies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "HealthTrack App", desc: "iOS app to track health metrics with smooth Swift animations." },
              { title: "ShopEase App", desc: "Kotlin-based Android shopping app with fast checkout and intuitive UI." },
              { title: "TravelBuddy", desc: "Cross-platform native app for travel bookings and itinerary planning." },
            ].map((caseStudy, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeInUp}
                className="p-6 bg-gradient-to-r from-indigo-400 to-purple-500 text-white rounded-2xl shadow-lg hover:scale-105 transition"
              >
                <h3 className="text-2xl font-bold mb-2">{caseStudy.title}</h3>
                <p>{caseStudy.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          className="bg-indigo-100 p-12 rounded-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-indigo-600 mb-10 text-center">
            Client Testimonials
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "John Smith", feedback: "The Swift app developed for us is fast, elegant, and bug-free. Highly recommend!" },
              { name: "Laura Wilson", feedback: "Kotlin app for Android exceeded our expectations with smooth performance and beautiful UI." },
              { name: "David Lee", feedback: "Professional team delivering high-quality native apps with timely updates and support." },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeInUp}
                className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <p className="italic mb-4">"{testimonial.feedback}"</p>
                <p className="font-semibold">- {testimonial.name}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4">
            Ready to Build Your Native App?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Let's create powerful native iOS and Android apps with Swift & Kotlin that engage users and drive growth.
          </p>
          <a
            href="/contact"
            className="bg-indigo-500 text-white px-10 py-3 rounded-xl hover:bg-indigo-600 transition"
          >
            Start Your Project
          </a>
        </motion.section>

        {/* FAQ */}
        <motion.section
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-indigo-600 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-left">
            {[
              { q: "Do you develop apps for startups?", a: "Yes! We specialize in building native iOS and Android apps for startups, SMEs, and enterprises." },
              { q: "Why choose Swift for iOS apps?", a: "Swift is fast, secure, and allows us to build smooth, native iOS apps with great UI/UX." },
              { q: "Why choose Kotlin for Android apps?", a: "Kotlin provides modern features, safety, and compatibility with all Android devices, ensuring performance and reliability." },
              { q: "Do you provide post-launch support?", a: "Absolutely! We provide maintenance, updates, and support to keep your apps high-performing." },
            ].map((faq, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h4 className="font-semibold mb-2">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </PageWrapper>
  );
}
