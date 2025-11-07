import React from "react";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import {
  FaRocket,
  FaShoppingCart,
  FaCogs,
  FaMobileAlt,
  FaGlobe,
  FaCode,
} from "react-icons/fa";

// ✅ Images
import shopifyHero from "../images/shopifyHero.webp";
import feature1 from "../images/shopifyspeed.jpg";
import feature2 from "../images/shopifyMobile.webp";
import feature3 from "../images/shopifyai.png";
import feature4 from "../images/shopifyGlobal.webp";
import ctaImage from "../images/shopifyCTA.webp";

export default function Shopify() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <PageWrapper
      title="Shopify Development Services"
      subtitle="Empower your business with high-performing, AI-driven Shopify stores built for global growth."
    >
      <div className="max-w-6xl mx-auto text-gray-700 space-y-20 px-6 md:px-8 lg:px-12">

        {/* 🟢 Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div className="space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003b53]">
              Transform Your E-commerce Vision into Reality
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At <strong className="text-teal-500">Codefloor IT</strong>, we
              build dynamic, scalable, and AI-optimized Shopify stores designed
              to help brands grow faster. From store setup to automation, we
              handle everything that drives conversions and customer retention.
            </p>
          </div>
          <motion.img
            src={shopifyHero}
            alt="Shopify Development"
            className="rounded-2xl shadow-lg object-cover w-full h-80 md:h-[420px]"
            whileHover={{ scale: 1.05 }}
          />
        </motion.section>

        {/* 🟢 Trusted Clients */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold text-teal-500 mb-6">
            Trusted by Global Brands
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto mb-8">
            Our expertise powers e-commerce success for clients across the
            globe.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Nustone",
              "CASA39",
              "Flamingo",
              "Crompton",
              "Africa Investment Forum",
              "Mensa House of Brands",
            ].map((client, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gray-100 text-gray-600 px-6 py-3 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 🟢 Shopify Features */}
        {[
          {
            title: "Speed That Sells",
            desc: "A fast website means better conversions. Our Shopify optimization techniques — from CDN acceleration to image compression — ensure your store loads in under 2 seconds.",
            btn: "Boost Your Speed",
            img: feature1,
          },
          {
            title: "Mobile-First Shopping Experience",
            desc: "With over 70% of sales happening on mobile, we design Shopify stores that deliver seamless performance across every screen size.",
            btn: "Go Mobile Friendly",
            img: feature2,
          },
          {
            title: "AI-Driven Automation",
            desc: "We integrate AI tools to handle product recommendations, cart recovery, and personalized user experiences — helping you sell smarter.",
            btn: "Automate Your Store",
            img: feature3,
          },
          {
            title: "Global Reach & Localization",
            desc: "Expand effortlessly with multilingual, multi-currency, and region-specific store experiences — tailored for your global audience.",
            btn: "Go Global",
            img: feature4,
          },
        ].map((item, i) => (
          <motion.section
            key={i}
            className={`grid md:grid-cols-2 gap-10 items-center ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.img
              src={item.img}
              alt={item.title}
              className="rounded-2xl shadow-lg object-cover w-full h-80"
              whileHover={{ scale: 1.05 }}
            />
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-teal-600 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <a
                href="/contact"
                className="inline-block bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition"
              >
                {item.btn}
              </a>
            </div>
          </motion.section>
        ))}

        {/* 🟢 Our Process */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-[#003b53] text-white rounded-3xl p-12 space-y-10"
        >
          <h2 className="text-3xl font-bold text-teal-400">Our Shopify Process</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Every project follows a clear roadmap — ensuring transparency,
            quality, and timely delivery.
          </p>
          <div className="grid md:grid-cols-4 gap-8 text-left">
            {[
              {
                icon: <FaCode />,
                title: "1. Discovery",
                desc: "We analyze your business goals and create a custom Shopify blueprint.",
              },
              {
                icon: <FaCogs />,
                title: "2. Development",
                desc: "Our expert team codes your store with a focus on performance and security.",
              },
              {
                icon: <FaMobileAlt />,
                title: "3. Optimization",
                desc: "We fine-tune for speed, SEO, and mobile responsiveness.",
              },
              {
                icon: <FaRocket />,
                title: "4. Launch",
                desc: "After rigorous testing, your Shopify store goes live and ready to sell!",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition"
              >
                <div className="text-3xl text-teal-400 mb-3">{step.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 🟢 Call To Action */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative text-center rounded-3xl overflow-hidden shadow-lg"
        >
          <img
            src={ctaImage}
            alt="Shopify CTA"
            className="w-full h-[400px] object-cover opacity-40 absolute inset-0"
          />
          <div className="relative z-10 py-20 px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your Shopify Store?
            </h2>
            <p className="text-white mb-6 max-w-2xl mx-auto">
              Let’s turn your eCommerce dreams into reality — with speed,
              security, and innovation.
            </p>
            <a
              href="/contact"
              className="bg-white text-teal-600 px-10 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Hire Shopify Developer
            </a>
          </div>
        </motion.section>
      </div>
    </PageWrapper>
  );
}
