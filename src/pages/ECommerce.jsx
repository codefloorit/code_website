import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";

import EcomHero from "../images/ecomHero.jpg";
import EcomAI from "../images/ecomAI.jpeg";
import EcomPayment from "../images/ecomPayments.webp";
import EcomSecurity from "../images/ecomSecurity.jpeg";
import EcomUX from "../images/ecomUI.png";
import EcomTeam from "../images/ecomTeam.webp";
import EcomStats from "../images/ecomStats.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function ECommerce() {
  return (
    <PageWrapper
      title="AI-Driven Ecommerce Development"
      subtitle="Transform your online business with intelligent, scalable, and high-performance ecommerce solutions that convert visitors into loyal customers."
    >
      {/* Hero / Intro Section */}
      <motion.div
        className="max-w-6xl mx-auto text-gray-400 text-lg leading-relaxed space-y-6 mt-10"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <img
          src={EcomHero}
          alt="Ecommerce Development Hero"
          className="w-full h-96 object-cover rounded-2xl shadow-lg"
        />
        <p>
          At <span className="font-bold text-teal-400">Codefloor IT</span>,
          we build next-generation ecommerce experiences powered by AI,
          automation, and modern cloud infrastructure. Our solutions focus on
          exceptional performance, superior UI/UX, and conversion-driven design.
        </p>
        <p>
          From startups to global brands, we’ve helped 6000+ clients scale their
          online sales with intelligent digital stores that learn, adapt, and
          grow with your audience.
        </p>
      </motion.div>

      {/* Key Capabilities */}
      <motion.section
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-32 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        {[
          {
            title: "Custom Store Development",
            desc: "Fully tailored ecommerce platforms built with AI-ready architecture and lightning-fast performance.",
            img: EcomAI,
          },
          {
            title: "Seamless Payment Systems",
            desc: "Integration with global gateways — Stripe, Razorpay, PayPal, Apple Pay, and more — for smooth checkouts.",
            img: EcomPayment,
          },
          {
            title: "Advanced Security Setup",
            desc: "Multi-layer protection including SSL, firewalls, fraud detection, and 24×7 server monitoring.",
            img: EcomSecurity,
          },
          {
            title: "UX & Conversion Optimization",
            desc: "Data-driven design that enhances product visibility, boosts engagement, and drives sales growth.",
            img: EcomUX,
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeUp}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all border border-gray-100"
          >
            <motion.img
              src={item.img}
              alt={item.title}
              className="w-full h-72 object-contain bg-white"
              whileHover={{ scale: 1.05 }}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#004a64] mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* About & Approach Section */}
      <motion.section
        className="max-w-6xl mx-auto mt-20 text-gray-300"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-teal-400 mb-4">
              A Smarter Way to Build Ecommerce Success
            </h2>
            <p className="mb-4">
              Our approach goes beyond coding — we combine design thinking,
              AI-driven personalization, and growth-focused strategy to deliver
              digital stores that scale effortlessly.
            </p>
            <ul className="space-y-3 list-disc list-inside text-gray-400">
              <li>AI-powered product recommendations & personalization</li>
              <li>Real-time analytics and intelligent customer insights</li>
              <li>Seamless integrations with ERP, CRM, and marketing tools</li>
              <li>Mobile-first responsive layouts for all devices</li>
            </ul>
          </div>
          <motion.img
            src={EcomTeam}
            alt="Ecommerce Development Team"
            className="rounded-2xl shadow-lg w-full h-96 object-cover"
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="mt-24 bg-[#004a64]/5 py-16 rounded-3xl text-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
        <h2 className="text-3xl font-bold text-teal-400 mb-10">
          Trusted by Global Brands & Fast-Growing Startups
        </h2>
        <img
          src={EcomStats}
          alt="Ecommerce Statistics"
          className="w-full h-auto object-cover rounded-2xl mb-10"
        />
      </motion.section>

      {/* Blog / Insights Section */}
      <motion.section
        className="max-w-6xl mx-auto mt-24"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
        <h2 className="text-3xl font-bold text-center text-teal-400 mb-10">
          Ecommerce Insights & Resources
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title:
                "AI in Ecommerce: How Machine Learning Boosts Conversions in 2025",
              author: "Dipak Malviya",
              date: "02 Nov 2025",
              img: EcomAI,
            },
            {
              title:
                "Design Psychology: Creating Seamless Shopping Experiences That Sell",
              author: "Rohit Patel",
              date: "14 Oct 2025",
              img: EcomUX,
            },
          ].map((post, i) => (
            <motion.div
              key={i}
              className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all bg-white"
              custom={i}
              variants={fadeUp}
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#004a64] mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3">
                  by {post.author} — {post.date}
                </p>
                <a
                  href="#"
                  className="text-[#004a64] font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call To Action */}
      <motion.div
        className="mt-24 text-center bg-gradient-to-r from-[#004a64] to-teal-700 py-16 rounded-3xl text-white shadow-2xl"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
        <h2 className="text-4xl font-bold mb-4">
          Ready to Build Your Intelligent Ecommerce Platform?
        </h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Let’s craft a powerful, AI-driven ecommerce experience built for speed,
          scalability, and measurable success. Partner with Codefloor IT today.
        </p>
        <a
          href="/contact"
          className="bg-white text-[#004a64] px-10 py-4 rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-transform"
        >
          Get Free Consultation
        </a>
      </motion.div>
    </PageWrapper>
  );
}
