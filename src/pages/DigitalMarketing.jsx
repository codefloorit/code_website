import React from "react";
import { motion } from "framer-motion";
import HeroImg from "../images/digitalHero.webp";
import SEOImg from "../images/digitalSEO.jpg";
import SMOImg from "../images/digitalSMO.png";
import PPCImg from "../images/digitalPPC.webp";
import EmailImg from "../images/digitalEmail.jpg";
import BrandingImg from "../images/digitalBranding.jpg";

const DigitalMarketing = () => {
  return (
    <div className="font-poppins bg-gray-50 text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-[#004a64] text-white text-center py-24 px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Digital Marketing that Delivers Real Results 🚀
          </h1>
          <p className="max-w-3xl mx-auto text-gray-200 text-lg md:text-xl leading-relaxed">
            We craft powerful, data-driven marketing campaigns that boost your
            brand’s visibility, engagement, and conversions — turning clicks into customers.
          </p>
        </motion.div>

        <motion.img
          src={HeroImg}
          alt="Digital Marketing"
          className="w-full max-w-4xl mx-auto mt-12 rounded-2xl shadow-lg object-cover"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        />
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[#004a64] mb-4">
            Why Choose Our Digital Marketing Services?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We understand that every business is unique. That’s why our digital
            marketing solutions are fully customized to match your goals and audience.
            From SEO to paid campaigns, we use smart strategies backed by analytics.
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>✅ ROI-driven marketing campaigns</li>
            <li>✅ Modern analytics & audience tracking</li>
            <li>✅ 100% customized digital growth plans</li>
            <li>✅ Cross-platform engagement strategies</li>
          </ul>
        </motion.div>

        <motion.img
          src={SEOImg}
          alt="About Digital Marketing"
          className="rounded-2xl shadow-lg w-full object-cover"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      {/* Services Section */}
      <section className="bg-[#f0f8fa] py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#004a64] mb-10">
          Our Digital Marketing Services
        </h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              img: SEOImg,
              title: "Search Engine Optimization (SEO)",
              desc: "Improve your search rankings, drive organic traffic, and dominate Google results with our white-hat SEO strategies.",
            },
            {
              img: SMOImg,
              title: "Social Media Marketing (SMM)",
              desc: "Grow your social presence and build loyal communities through engaging posts, visuals, and influencer strategies.",
            },
            {
              img: PPCImg,
              title: "Pay-Per-Click Advertising (PPC)",
              desc: "Instantly boost traffic and conversions with Google Ads and Meta campaigns that deliver measurable ROI.",
            },
            {
              img: EmailImg,
              title: "Email Marketing",
              desc: "Engage your audience with powerful email campaigns that convert leads into long-term customers.",
            },
            {
              img: BrandingImg,
              title: "Brand Strategy & Awareness",
              desc: "Build a strong digital identity that resonates with your audience and sets your brand apart from competitors.",
            },
            {
              img: SEOImg,
              title: "Content Marketing",
              desc: "Deliver valuable, SEO-optimized content that attracts, engages, and retains customers effectively.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all overflow-hidden"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#004a64] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#004a64] mb-10">Our Marketing Process</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Research & Analysis",
              desc: "We dive deep into your business, competitors, and target audience to form an actionable plan.",
            },
            {
              step: "02",
              title: "Strategy & Planning",
              desc: "We create a custom digital strategy that aligns perfectly with your business objectives.",
            },
            {
              step: "03",
              title: "Execution",
              desc: "Our team launches campaigns, manages ads, and creates compelling content that drives engagement.",
            },
            {
              step: "04",
              title: "Monitoring & Growth",
              desc: "We track results, optimize performance, and ensure continuous improvement in every campaign.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="text-4xl font-bold text-[#004a64] mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold text-[#004a64] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#004a64] text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
          {[
            {
              name: "Sophia Patel",
              position: "Marketing Manager, BrandNova",
              quote:
                "Our online visibility skyrocketed thanks to their SEO and PPC expertise. Amazing teamwork and real results!",
            },
            {
              name: "James Carter",
              position: "CEO, BizTech Solutions",
              quote:
                "They transformed our social media strategy and helped us reach 10x engagement in just 3 months.",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 rounded-2xl p-8 shadow-lg backdrop-blur-md"
            >
              <p className="italic text-gray-200 mb-4">“{t.quote}”</p>
              <h4 className="font-semibold text-white">{t.name}</h4>
              <p className="text-gray-300 text-sm">{t.position}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-[#003a52] to-[#006d91] text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Ready to Grow Your Business Online?
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg text-gray-200">
          Let’s craft a winning digital strategy together that helps your brand
          stand out and dominate the market.
        </p>
        <a
        href="/contact"
        className="bg-white text-[#004a64] px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all"
        >
          Get Free Consultation
        </a>
      </section>
    </div>
  );
};

export default DigitalMarketing;
