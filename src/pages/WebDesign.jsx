import React from "react";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

export default function WebDesign() {
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
      title="Web Design & UI/UX Services"
      subtitle="Transform your brand’s digital presence with creative, user-focused web design built for performance and impact."
    >
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e6f3f8] via-white to-gray-50 -z-10" />

        {/* Intro Section */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto text-gray-300 text-lg leading-relaxed space-y-6 px-6 md:px-10"
        >
          <p>
            At <strong className="text-[#0387b7]">CodeFloor IT</strong>, we design websites that blend visual excellence with business strategy. Our designs aren’t just beautiful — they’re functional, optimized, and crafted to convert visitors into loyal customers.
          </p>

          <p>
            From startups to established brands, we help businesses of every size build digital experiences that inspire trust and engagement. Our goal is simple — to make your website a digital asset that grows your business.
          </p>
        </motion.section>

        {/* What We Offer */}
        <motion.section
          className="mt-20 max-w-6xl mx-auto px-6 md:px-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-[#00e2c0] mb-12 text-center"
          >
            What We Offer
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Website Design",
                desc: "Unique, visually stunning designs that reflect your brand identity and business objectives.",
              },
              {
                title: "UI/UX Design & Wireframing",
                desc: "Interactive, user-centered interfaces built through deep research and prototyping.",
              },
              {
                title: "Responsive Design",
                desc: "Seamless experiences across desktops, tablets, and mobile devices.",
              },
              {
                title: "eCommerce Web Design",
                desc: "High-converting layouts designed to boost sales and create memorable shopping experiences.",
              },
              {
                title: "Landing Page Design",
                desc: "Conversion-optimized landing pages built to maximize your marketing ROI.",
              },
              {
                title: "Website Redesign & Revamp",
                desc: "Upgrade your existing website with a modern, fast, and intuitive experience.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                className="p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#004a64] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Design Process */}
        <motion.section
          className="mt-24 bg-[#004a64] text-[#00e2c0] py-16 px-6 md:px-10 rounded-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold mb-10 text-center"
          >
            Our Web Design Process
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              {
                step: "1",
                title: "Discovery",
                desc: "Understanding your brand, goals, and target audience.",
              },
              {
                step: "2",
                title: "Wireframing",
                desc: "Creating layout blueprints for structure and flow.",
              },
              {
                step: "3",
                title: "Design & Development",
                desc: "Blending creativity with technology to bring your vision to life.",
              },
              {
                step: "4",
                title: "Testing & Launch",
                desc: "Ensuring flawless performance across browsers and devices.",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl"
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  Step {s.step}
                </h3>
                <h4 className="font-semibold mb-2">{s.title}</h4>
                <p className="text-gray-100 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Portfolio Showcase */}
        <motion.section
          className="max-w-6xl mx-auto mt-20 px-6 md:px-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-[#00e2c0] mb-8"
          >
            Objectives
          </motion.h2>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              "https://cdn.prod.website-files.com/65a1b21a5fcbab501a6f2d5c/67c9df6daa2103711bbf29f2_future-webdesign.jpg",
              "https://t4.ftcdn.net/jpg/02/83/46/33/360_F_283463385_mfnrx6RPU3BqObhVuVjYZjeZ5pegE7xq.jpg",
              "https://t4.ftcdn.net/jpg/04/98/94/31/360_F_498943157_fhn9lPRGBlYtLXN8CbT4FsbtFc4thsYP.jpg",
              "https://www.entheosweb.com/wp-content/uploads/2024/03/Basics-of-Web-Design.png",
              
            ].map((img, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                className="overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={img}
                  alt={`Project ${i + 1}`}
                  className="w-full h-64 object-contain bg-white"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          className="mt-24 bg-gray-100 py-16 px-6 md:px-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#004a64] mb-10">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Arjun Patel",
                quote:
                  "The CodeFloor team delivered a stunning, responsive design that elevated our brand identity.",
              },
              {
                name: "Priya Mehta",
                quote:
                  "Their attention to user experience and detail helped increase our conversion rates by 40%.",
              },
              {
                name: "Rahul Sharma",
                quote:
                  "Highly professional and creative. Our new website now reflects the true value of our business.",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition"
              >
                <p className="text-gray-600 italic mb-4">“{t.quote}”</p>
                <h4 className="font-semibold text-[#00e2c0]">{t.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="text-center py-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#00e2c0] mb-4">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Work with <strong>CodeFloor IT</strong> to create a visually stunning,
            conversion-driven, and future-ready website.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="bg-[#004a64] text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:bg-[#006a8c] transition-all duration-300"
          >
            Get a Free Consultation
          </motion.a>
        </motion.section>
      </div>
    </PageWrapper>
  );
}
