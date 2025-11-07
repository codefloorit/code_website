import React from "react";
import { motion } from "framer-motion";
import SEOHero from "../images/seoHero.webp";
import HeroImg from "../images/seoHero12.jpg";
import SEOTools from "../images/seoTools.webp";
import SEOAnalysis from "../images/seoanalysis.webp";
import SEOKeyword from "../images/seokeyword.jpg";
import SEOTraffic from "../images/seotraffic.jpg";
import SEOAudit from "../images/seoaudit.png";
import SEOReport from "../images/seoreport.jpg";
import { FaSearch, FaChartLine, FaGlobe, FaBullhorn, FaUserCheck, FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SEOSetup = () => {
  return (
    <div className="font-poppins text-gray-800 bg-gray-50 overflow-hidden">

      {/* HERO SECTION */}
      <section className="bg-[#004a64] text-white text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Professional SEO Setup Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-gray-200 text-lg md:text-xl"
        >
          Boost your online presence, rank higher on Google, and drive organic traffic with our expert SEO setup and optimization strategies.
        </motion.p>
        <motion.img
                  src={HeroImg}
                  alt="Digital Marketing"
                  className="w-full max-w-4xl mx-auto mt-12 rounded-2xl shadow-lg object-cover"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                />
      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          src={SEOHero}
          alt="SEO Optimization"
          className="rounded-2xl shadow-lg w-full object-cover"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[#004a64] mb-4">
            What is SEO Setup?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            SEO (Search Engine Optimization) setup is the process of optimizing your website structure, content, and performance to ensure better visibility on search engines like Google, Bing, and Yahoo.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our team focuses on building a strong SEO foundation that improves your rankings, increases website traffic, and enhances user experience through data-driven strategies.
          </p>
        </motion.div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="bg-gray-100 py-16 text-center px-6">
        <h2 className="text-3xl font-bold text-[#004a64] mb-12">
          Why Choose Our SEO Setup?
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { icon: FaChartLine, title: "Higher Rankings", desc: "Achieve top rankings in Google search results through proven white-hat SEO techniques." },
            { icon: FaGlobe, title: "Global Reach", desc: "Expand your reach to international audiences with optimized global SEO strategies." },
            { icon: FaBullhorn, title: "Brand Awareness", desc: "Build a recognizable brand presence through optimized content and keyword strategies." },
            { icon: FaUserCheck, title: "User-Friendly Experience", desc: "Ensure faster load times, better navigation, and enhanced user engagement." },
            { icon: FaFileAlt, title: "In-Depth Reports", desc: "Track every detail of your SEO performance through real-time analytics reports." },
            { icon: FaSearch, title: "Keyword Optimization", desc: "Find and rank for the best keywords that bring high-intent traffic to your site." },
          ].map((benefit, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
            >
              <benefit.icon className="text-[#004a64] text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#004a64] mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEO PROCESS SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#004a64] mb-12">
          Our Step-by-Step SEO Process
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            { img: SEOKeyword, title: "1. Keyword Research", desc: "Identify high-volume, low-competition keywords relevant to your business niche." },
            { img: SEOAudit, title: "2. Website Audit", desc: "Analyze technical SEO issues, performance gaps, and opportunities for growth." },
            { img: SEOTools, title: "3. On-Page Optimization", desc: "Optimize titles, meta tags, URLs, and content to improve visibility." },
            { img: SEOAnalysis, title: "4. Off-Page Optimization", desc: "Build backlinks and authority signals to strengthen your website’s reputation." },
            { img: SEOTraffic, title: "5. Traffic Monitoring", desc: "Track user behavior, impressions, and engagement through Google Analytics." },
            { img: SEOReport, title: "6. Reporting & Maintenance", desc: "Deliver monthly SEO reports and continuous performance tracking." },
          ].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img src={step.img} alt={step.title} className="w-full h-56 object-contain bg-white" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#004a64] mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="text-center py-20 px-6 bg-[#004a64] text-white">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Let’s Optimize Your Website for Search Engines!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-2xl mx-auto mb-10 text-lg text-gray-200"
        >
          Our SEO setup experts can help you achieve higher visibility, improved traffic, and measurable growth. Start your SEO journey with us today.
        </motion.p>
        <Link
        to="/contact"
        className="bg-white text-[#004a64] px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Get Your Free SEO Audit
        </Link>
      </section>
    </div>
  );
};

export default SEOSetup;
