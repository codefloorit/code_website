import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import { Shield, Zap, Cpu, Layers, Globe, Store, Users } from "lucide-react";

import WooHero from "../images/wooHero.jpg";
import WooProcess from "../images/wooProcess.jpg";
import WooIntegration from "../images/wooIntegretion.webp";
import WooTeam from "../images/wooTeam.webp";
import WooClient from "../images/wooClient.webp";

export default function WooCommerce() {

  const MotionLink = motion(Link);

  const services = [
    {
      icon: <Zap className="w-10 h-10 text-[#004a64]" />,
      title: "Lightning-Fast Shopping Experience",
      desc: "Our WooCommerce websites are fine-tuned for performance — delivering millisecond load times, optimized images, and seamless navigation. Every page is crafted to drive higher conversions and lower bounce rates.",
      img: WooHero,
    },
    {
      icon: <Shield className="w-10 h-10 text-[#004a64]" />,
      title: "Ironclad Security, Always On",
      desc: "We prioritize your store’s protection with SSL encryption, malware scanning, and firewall integration. You’ll have full confidence that customer data remains secure and compliant.",
      img: WooIntegration,
    },
    {
      icon: <Layers className="w-10 h-10 text-[#004a64]" />,
      title: "Flawless Integrations & Reliable Hosting",
      desc: "From payment gateways to ERP and CRM solutions, our WooCommerce stores integrate smoothly with all your essential tools. Enjoy reliable uptime and seamless system performance.",
      img: WooProcess,
    },
    {
      icon: <Cpu className="w-10 h-10 text-[#004a64]" />,
      title: "Smart, AI-Enhanced Features",
      desc: "We incorporate AI tools for personalized product recommendations, automated inventory management, and smarter marketing decisions — making your WooCommerce store more powerful and future-ready.",
      img: WooHero,
    },
  ];


  return (
    <PageWrapper
      title="WooCommerce Development"
      subtitle="Empower your online business with high-performance WooCommerce stores that deliver speed, scalability, and success."
    >
      {/* Hero Section */}
      <motion.div
        className="max-w-5xl mx-auto text-gray-300 text-lg leading-relaxed text-center mt-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={WooHero}
          alt="WooCommerce Hero"
          className="rounded-2xl shadow-lg w-full h-96 object-cover mb-8"
        />
        <p className="mb-6">
          At <span className="font-bold text-teal-400">Codefloor IT</span>, we create modern WooCommerce websites that help businesses grow, scale, and convert. Whether you're starting from scratch or upgrading your existing store, we focus on crafting eCommerce experiences that are user-friendly, secure, and lightning-fast.
        </p>
        <p>
          Our WooCommerce solutions are not just about selling — they’re about engaging, converting, and retaining customers through smooth functionality and clean UI/UX.
        </p>
        <MotionLink
          to="/contact"
          className="inline-block mt-6 bg-[#004a64] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          Let’s Talk Now
        </MotionLink>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:-translate-y-2 transition-transform duration-300"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <motion.img
              src={service.img}
              alt={service.title}
              className="w-full h-72 object-cover"
              whileHover={{ scale: 1.03 }}
            />
            <div className="p-6">
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#004a64] text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>


      {/* Why Choose Us Section */}
      <motion.div
        className="mt-24 max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-teal-400 mb-6">
          Why Choose Codefloor IT for WooCommerce Development?
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-8">
          We deliver results-driven WooCommerce solutions designed for performance, scalability, and seamless user experience. Our development process ensures your online store not only looks great but performs even better.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {[
            { img: WooTeam, title: "Dedicated Team", desc: "Experienced WooCommerce developers dedicated to delivering excellence for every project." },
            { img: WooIntegration, title: "Complete Customization", desc: "From themes to custom plugins — we tailor every element to your business." },
            { img: WooClient, title: "Global Client Satisfaction", desc: "Our track record speaks volumes — 6200+ satisfied clients worldwide." },
          ].map((feature, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-2 transition">
              <img src={feature.img} alt={feature.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#004a64] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="mt-24 text-center bg-gradient-to-r from-[#004a64] to-teal-600 py-16 rounded-3xl text-white shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-bold mb-4">
          Ready to Build Your WooCommerce Store?
        </h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Partner with <span className="font-semibold">Codefloor IT</span> to create a customized WooCommerce store that performs flawlessly and delivers outstanding user experience.
        </p>
        <Link
          to="/contact"
          className="bg-white text-[#004a64] px-10 py-4 rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-transform"
        >
          Hire WooCommerce Expert
        </Link>
      </motion.div>
    </PageWrapper>
  );
}
