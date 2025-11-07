import React from "react";
import { motion } from "framer-motion";

// Social Icons (use transparent PNGs)
import HeroImg from "../images/socialHero.jpg";
import FacebookIcon from "../images/facebook.png";
import InstagramIcon from "../images/instagram.png";
import TwitterIcon from "../images/twitter.png";
import LinkedInIcon from "../images/linkedin.png";
import YouTubeIcon from "../images/youtube.jpg";
import PinterestIcon from "../images/pinterest.webp";

// Section Images
import CampaignImg from "../images/smmcampaign.png";
import EngagementImg from "../images/smmengagement.jpg";
import AdsImg from "../images/smmads.png";
import StrategyImg from "../images/smmstrategy.jpg";
import BrandingImg from "../images/smmbranding.jpg";
import AnalyticsImg from "../images/smmanalytics.png";


const SocialMediaMarketing = () => {
  return (
    <div className="font-poppins text-gray-800 bg-gray-50 overflow-hidden">
      {/* ================== HERO SECTION ================== */}
      <section className="bg-[#004a64] text-white text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Social Media Marketing Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-gray-200 text-lg md:text-xl"
        >
          Build an unforgettable online presence. From content creation to analytics,
          we make your brand stand out and engage meaningfully across every platform.
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

      {/* ================== SOCIAL MEDIA ICONS ================== */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-6 gap-8 justify-items-center">
          {[FacebookIcon, InstagramIcon, TwitterIcon, LinkedInIcon, YouTubeIcon, PinterestIcon].map(
            (icon, i) => (
              <motion.img
                key={i}
                src={icon}
                alt="Social Platform Icon"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain hover:scale-110 transition-transform duration-300"
                whileHover={{ scale: 1.15 }}
              />
            )
          )}
        </div>
      </section>

      {/* ================== ABOUT SECTION ================== */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          src={CampaignImg}
          alt="Social Media Campaign"
          className="rounded-2xl shadow-lg w-full object-cover"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[#004a64] mb-4">
            What Is Social Media Marketing?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Social Media Marketing (SMM) is more than just posting online — it's about
            building meaningful connections with your audience through creative storytelling,
            targeted advertising, and authentic engagement.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our goal is to help your brand grow organically and through strategic ad campaigns
            on platforms like Facebook, Instagram, LinkedIn, and YouTube. We deliver measurable
            results with data-backed decisions.
          </p>
        </motion.div>
      </section>

      {/* ================== SERVICES SECTION ================== */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#004a64] mb-12">
          Our Social Media Services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto p-2">
          {[
            { img: EngagementImg, title: "Content Creation", desc: "We design visually stunning and engaging posts that tell your story and captivate your target audience." },
            { img: AdsImg, title: "Social Media Ads", desc: "Target the right audience with tailored ad campaigns that increase brand awareness and conversions." },
            { img: StrategyImg, title: "Strategy & Planning", desc: "We craft custom strategies for each platform to ensure your brand message reaches the right people." },
            { img: BrandingImg, title: "Brand Management", desc: "We maintain a consistent, positive brand image that builds trust and authority across platforms." },
            { img: AnalyticsImg, title: "Analytics & Insights", desc: "We track engagement, impressions, and conversions to continuously improve campaign performance." },
            { img: CampaignImg, title: "Influencer Collaboration", desc: "Work with influencers who align with your brand to reach broader, more engaged audiences." },
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                 src={service.img}
                 alt={service.title}
                 className="w-full h-56 object-contain bg-white"
              />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#004a64] mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================== STRATEGY SECTION ================== */}
      <section className="max-w-7xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#004a64] mb-6">
          Our Step-by-Step Social Media Strategy
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
          We follow a structured approach that ensures your brand achieves consistent growth and engagement:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {[
            { step: "1. Research & Analysis", desc: "We analyze your target market, competitors, and audience demographics." },
            { step: "2. Content Planning", desc: "We design a content calendar with creative visuals, copy, and hashtags." },
            { step: "3. Campaign Execution", desc: "We post consistently, run ads, and engage with your followers." },
            { step: "4. Performance Review", desc: "We deliver monthly reports and optimize strategies for better ROI." },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold text-[#004a64] mb-2">{item.step}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================== TESTIMONIAL SECTION ================== */}
      <section className="bg-[#004a64] text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
          {[
            { name: "Sarah Williams", role: "Marketing Director, StylePro", quote: "The team transformed our brand presence across social media. Engagement has tripled within months!" },
            { name: "David Carter", role: "Founder, TechSphere", quote: "They managed our campaigns professionally — creative, data-driven, and results-oriented!" },
          ].map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white text-gray-800 rounded-2xl p-6 shadow-lg"
            >
              <p className="italic text-gray-700 mb-4">“{t.quote}”</p>
              <h4 className="font-semibold text-[#004a64]">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================== CTA SECTION ================== */}
      <section className="text-center py-20 px-6 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-[#004a64] mb-4">
          Let’s Take Your Social Media to the Next Level 🚀
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg text-gray-700">
          Connect with our team today to develop a powerful social strategy that enhances visibility,
          strengthens relationships, and drives long-term success.
        </p>
        <a
        href="/contact"
        className="bg-[#004a64] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#03617f] transition"
        >
          Get a Free Consultation
        </a>
      </section>
    </div>
  );
};

export default SocialMediaMarketing;
