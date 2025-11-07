import React from "react";
import { motion } from "framer-motion";
import { FaPenNib, FaLightbulb, FaChartLine, FaUsers, FaVideo, FaFileAlt, FaMobileAlt, FaShareAlt } from "react-icons/fa";

import CMHero from "../images/contenthero1.webp";
import BlogImage from "../images/contentblog.jpg";
import VideoImage from "../images/contentvideo.webp";
import InfographicImage from "../images/contentinfo.jpg";
import SEOImage from "../images/contentseo.jpg";
import StrategyImage from "../images/contentstrategy.jpg";
import CampaignImage from "../images/andriodApp.jpg";
import AnalyticsImage from "../images/contentanalytics.jpg";
import { Link } from "react-router-dom";

const ContentMarketing = () => {
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
          Creative Content Marketing Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-gray-200 text-lg md:text-xl"
        >
          Build trust, drive traffic, and grow your brand with impactful storytelling and strategic content crafted to engage and convert your audience.
        </motion.p>
      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          src={CMHero}
          alt="Content Marketing"
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
            What is Content Marketing?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Content marketing is the strategic creation and sharing of valuable content to attract, engage, and retain your target audience. It’s about building relationships and providing genuine value that aligns with your brand message.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From blogs to videos, infographics to social posts, we help your brand communicate its story, build authority, and drive meaningful engagement.
          </p>
        </motion.div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#004a64] mb-12">
          Why Your Business Needs Content Marketing
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { icon: FaLightbulb, title: "Build Brand Awareness", desc: "Showcase your expertise and build brand trust with consistent, valuable content." },
            { icon: FaChartLine, title: "Boost SEO Rankings", desc: "Drive organic traffic with SEO-optimized content tailored to your audience." },
            { icon: FaUsers, title: "Engage Your Audience", desc: "Keep your audience informed, entertained, and loyal through engaging storytelling." },
            { icon: FaPenNib, title: "Increase Conversions", desc: "Well-written content encourages readers to take action and convert into leads." },
            { icon: FaMobileAlt, title: "Improve Online Presence", desc: "Reach customers across multiple devices and platforms effectively." },
            { icon: FaShareAlt, title: "Encourage Social Sharing", desc: "Quality content inspires your followers to share, expanding your reach." },
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

      {/* TYPES OF CONTENT SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#004a64] mb-12">
          We Create All Types of Engaging Content
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { img: BlogImage, title: "Blog Articles", desc: "Informative and SEO-friendly blogs that position your brand as a thought leader." },
            { img: VideoImage, title: "Video Content", desc: "High-quality videos that tell stories, explain products, and capture attention." },
            { img: InfographicImage, title: "Infographics", desc: "Visually stunning graphics that simplify complex data for easy understanding." },
            { img: SEOImage, title: "SEO Copywriting", desc: "Optimized website copy designed to rank higher and convert visitors." },
            { img: CampaignImage, title: "Email Campaigns", desc: "Personalized email content to nurture leads and build customer loyalty." },
            { img: AnalyticsImage, title: "Content Performance Reports", desc: "Analyze engagement, track performance, and optimize future strategies." },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img src={item.img} alt={item.title} className="w-full h-56 object-contain bg-white" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#004a64] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OUR PROCESS SECTION */}
      <section className="bg-gray-100 py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-[#004a64] mb-12">
          Our Proven Content Marketing Process
        </h2>
        <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto text-center">
          {[
            { title: "1. Research & Strategy", desc: "We analyze your audience, competitors, and goals to design a tailored content plan." },
            { title: "2. Content Creation", desc: "Our expert team crafts engaging, optimized, and visually appealing content." },
            { title: "3. Publishing & Promotion", desc: "We distribute your content through the right channels for maximum reach." },
            { title: "4. Measure & Optimize", desc: "Performance tracking and continuous improvements ensure lasting success." },
          ].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold text-[#004a64] mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
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
          Ready to Transform Your Brand with Content?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-2xl mx-auto mb-6 text-lg text-gray-200"
        >
          Let’s create content that connects, converts, and builds your brand authority. Partner with our expert team to grow your business online.
        </motion.p>
        <Link
        to="/contact"
        className="bg-white text-[#004a64] px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Get Started Today
        </Link>
      </section>
    </div>
  );
};

export default ContentMarketing;
