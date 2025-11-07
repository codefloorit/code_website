import React from "react";
import { motion } from "framer-motion";
import { FaCogs, FaRocket, FaLaptopCode, FaUsers, FaProjectDiagram, FaAward, FaGlobe, FaFacebook, FaLinkedin, FaInstagram, FaCode, FaLightbulb, } from "react-icons/fa";
import Team1 from "../images/team1.jpg";
import Team2 from "../images/team2.jpg";
import Team3 from "../images/team3.jpg";
import Client1 from "../images/client1.jpg";
import Client2 from "../images/client2.jpg";
import Client3 from "../images/client3.jpg";
import AppDevImage1 from "../images/homeService1.jpg";
import AppDevImage2 from "../images/homeService2.jpg";
import AppDevImage3 from "../images/heroService3.jpg";
import AppDevImage4 from "../images/heroService4.avif";
import AppDevImage5 from "../images/heroService5.avif";
import AppDevImage6 from "../images/heroService6.jpg";

const milestones = [
    {
      year: "October 2025",
      title: "Our Beginning",
      desc: "CodeFloor IT Tech was founded with a clear vision — to revolutionize digital experiences through innovation, technology, and creativity. A passionate team came together to build something impactful.",
    },
    {
      year: "2026",
      title: "Building the Foundation",
      desc: "We began crafting high-quality web and mobile applications, gaining trust from local clients and expanding our technical expertise across multiple platforms.",
    },
    // {
    //   year: "2027",
    //   title: "Expanding Horizons",
    //   desc: "Our projects reached international markets. We built long-term partnerships with global clients, focusing on reliability, creativity, and results-driven solutions.",
    // },
    // {
    //   year: "2028",
    //   title: "Innovation & Growth",
    //   desc: "By continuously adopting new technologies — from AI-powered systems to advanced cloud integrations — we grew into a full-fledged IT powerhouse.",
    // },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const items = [
    {
      icon: <FaLaptopCode className="text-4xl text-[#00bcd4]" />,
      title: "Innovators in Technology",
      desc: "At CodeFloor IT Tech, we craft innovative web, mobile, and software solutions that empower businesses to thrive in the digital world. Our team blends creativity with technology to turn visions into impactful products.",
    },
    {
      icon: <FaUsers className="text-4xl text-[#00bcd4]" />,
      title: "Driven by People",
      desc: "We are a team of passionate developers, designers, and strategists working together to build meaningful digital experiences. Collaboration and creativity define our culture.",
    },
    {
      icon: <FaCogs className="text-4xl text-[#00bcd4]" />,
      title: "Quality with Purpose",
      desc: "We don’t just deliver code — we deliver value. Every project is designed with precision, performance, and scalability in mind to ensure business success and long-term client satisfaction.",
    },
    {
      icon: <FaRocket className="text-4xl text-[#00bcd4]" />,
      title: "Future-Ready Solutions",
      desc: "Our focus on emerging technologies like AI, cloud computing, and automation allows us to create solutions that evolve with the digital landscape and keep our clients ahead of the curve.",
    },
  ];


  const services = [
    {
      title: "Mobile App Development",
      image: AppDevImage1,
      description:
        "We create scalable and high-performing mobile applications for Android and iOS platforms, tailored to your business needs using the latest frameworks and technologies.",
    },
    {
      title: "Web Development",
      image: AppDevImage2,
      description:
        "Our team builds fast, secure, and responsive websites using modern technologies like React.js, Node.js, and PHP — designed to deliver seamless user experiences.",
    },
    {
      title: "E-Commerce Solutions",
      image: AppDevImage3,
      description:
        "We design and develop fully functional e-commerce platforms with secure payment gateways, inventory management, and user-friendly interfaces to boost your sales.",
    },
    {
      title: "Digital Marketing",
      image: AppDevImage4,
      description:
        "From SEO and social media marketing to paid campaigns and brand strategy, we help your business grow and reach the right audience effectively.",
    },
    {
      title: "UI/UX Design",
      image: AppDevImage5,
      description:
        "Our creative team crafts intuitive and visually stunning user interfaces that enhance engagement and improve the overall user journey across devices.",
    },
    {
      title: "Software Maintenance",
      image: AppDevImage6,
      description:
        "We provide ongoing software support, updates, and optimization services to ensure your applications stay secure, efficient, and up-to-date.",
    },
  ];

const About = () => {
  return (
    <div className="overflow-x-hidden">

      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#002430] via-[#003b53] to-[#005a78] text-white py-28 px-6 md:px-12">
      {/* ===== Decorative Background Circles ===== */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#00bcd4]/10 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00bcd4]/10 rounded-full blur-3xl animate-pulse -z-10" />

      {/* ===== Main Content ===== */}
      <div className="max-w-6xl mx-auto text-center space-y-8">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          About <span className="text-[#00bcd4]">CodeFloor IT Tech</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
        >
          At CodeFloor IT Tech LLP, we blend creativity, technology, and strategy to craft
          world-class digital experiences. From startups to enterprises, we empower brands
          with innovation and precision — delivering excellence across every pixel and code line.
        </motion.p>

        {/* Call to Action */}
        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          href="/contact"
          className="inline-block bg-[#00bcd4] text-[#003b53] font-semibold px-8 py-3 rounded-lg hover:bg-[#00a1b2] transition-all duration-300 shadow-lg"
        >
          Get In Touch
        </motion.a>

        {/* ===== Company Highlights ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {[
            {
              icon: <FaUsers size={40} />,
              title: "Experienced Team",
              desc: "A passionate group of developers, designers, and strategists dedicated to excellence.",
            },
            {
              icon: <FaCode size={40} />,
              title: "Modern Technologies",
              desc: "We use cutting-edge frameworks and tools like React, Node.js, Laravel, and Flutter.",
            },
            {
              icon: <FaLightbulb size={40} />,
              title: "Innovative Solutions",
              desc: "We turn complex challenges into scalable, user-friendly solutions for every business.",
            },
            {
              icon: <FaGlobe size={40} />,
              title: "Global Reach",
              desc: "Trusted by clients worldwide for delivering high-quality digital transformation services.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:bg-white/20 transition-all"
            >
              <div className="flex justify-center text-[#00bcd4] mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== Mission Statement ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 max-w-4xl mx-auto bg-[#004d63]/50 border border-[#00bcd4]/30 rounded-2xl p-10 shadow-xl"
        >
          <h3 className="text-2xl font-semibold text-[#00bcd4] mb-4">Our Mission</h3>
          <p className="text-gray-200 leading-relaxed">
            To deliver digital excellence through innovation, transparency, and collaboration.
            Our goal is to empower businesses with scalable solutions that redefine technology,
            design, and growth in the ever-evolving digital world.
          </p>
        </motion.div>
      </div>
    </section>

      {/* ===== COMPANY STORY / TIMELINE ===== */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-gray-50 to-white text-center font-poppins">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-[#003b53] mb-12"
      >
        Our Journey
      </motion.h2>

      <div className="max-w-6xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-[#00bcd4] opacity-30"></div>

        <div className="space-y-16">
          {milestones.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`relative bg-white shadow-lg rounded-2xl p-8 md:p-10 w-full md:w-[70%] mx-auto ${
                i % 2 === 0 ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"
              } hover:-translate-y-2 transition-transform duration-500`}
            >
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-[#00bcd4] text-white font-bold px-5 py-2 rounded-full shadow-md">
                {item.year}
              </div>
              <h3 className="text-2xl font-semibold text-[#003b53] mt-10 mb-3">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

          {/* ===== What We Are ===== */}
          <section className="relative py-20 px-6 md:px-16 bg-gradient-to-br from-[#003b53] to-[#001f2a] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-10"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          What We Are
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 max-w-3xl mx-auto text-lg mb-16"
        >
          We are more than a tech company — we are a team of dreamers, builders, and innovators.
          Our goal is to transform digital ideas into seamless, scalable, and stunning realities.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-[#00bcd4]">{item.title}</h3>
              <p className="text-gray-200 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16"
        >
          <a
            href="/contact"
            className="inline-block bg-[#00bcd4] text-[#003b53] font-semibold px-8 py-3 rounded-lg hover:bg-[#00a8b8] transition-colors duration-300"
          >
            Work With Us
          </a>
        </motion.div>
      </div>
    </section>

          {/* ===== SERVICES ===== */}
           <section id="services" className="py-20 px-6 md:px-12 bg-white">
          <h2 className="text-4xl font-bold text-[#003b53] text-center mb-16">
            Our Services
          </h2>
    
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-2xl text-[#003b53] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      {/* ===== TEAM ===== */}
      {/* <section className="py-16 px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold text-[#003b53] mb-12">Meet Our Team</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[Team1, Team2, Team3].map((img, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src={img} alt={`Team ${i + 1}`} className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
              <h3 className="text-xl font-semibold text-[#003b53]">Team Member {i + 1}</h3>
              <p className="text-gray-500 mb-2">Web Developer</p>
              <div className="flex justify-center gap-4 text-[#00bcd4]">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaInstagram /></a>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* ===== CLIENTS / PARTNERS ===== */}
      {/* <section className="py-16 px-6 md:px-12 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-[#003b53] mb-12">Our Trusted Clients</h2>
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-12">
          {[Client1, Client2, Client3].map((logo, i) => (
            <div key={i} className="p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <img src={logo} alt={`Client ${i + 1}`} className="h-52 object-contain"/>
            </div>
          ))}
        </div>
      </section> */}

      {/* ===== TESTIMONIALS ===== */}
      <section className="relative bg-gradient-to-b from-[#f8fbfc] via-[#e8f7fb] to-[#dff6f9] py-24 px-6 md:px-12 overflow-hidden">
        {/* Background Orbs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#00bcd4]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#003b53]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#003b53] mb-4">
            What Our <span className="text-[#00bcd4]">Clients Say</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from our satisfied clients who trusted <strong>CodeFloor IT Tech </strong> 
            to deliver cutting-edge web, mobile, and digital solutions.
          </p>
        </motion.div>
      
        {/* Testimonials Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              name: "Rohit Sharma",
              role: "Founder, RS Solutions",
              text: "Outstanding service! Delivered before the deadline with perfect quality. The team at Codefloor IT Tech LLP truly understands client needs.",
           },
            {
              name: "Anjali Mehta",
              role: "Marketing Head, BrightBrand",
              text: "Professional and supportive team. Our new website looks stunning, loads fast, and performs flawlessly on all devices!",
            },
            {
              name: "Vivek Patel",
              role: "CEO, Patel Enterprises",
              text: "One of the best development partners we’ve ever worked with. Great communication, quick fixes, and incredible post-launch support.",
            },
          ].map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-[#00bcd4] hover:shadow-2xl transition-all duration-300"
            >
      
              {/* Testimonial Text */}
              <p className="text-gray-600 italic mb-4 leading-relaxed">
                “{client.text}”
              </p>
      
              {/* Client Name */}
              <h3 className="font-semibold text-lg text-[#003b53]">{client.name}</h3>
              <p className="text-sm text-[#00bcd4]">{client.role}</p>
            </motion.div>
          ))}
        </div>
      
        {/* Decorative Line Animation */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="w-2/3 h-1 bg-gradient-to-r from-[#00bcd4] to-[#003b53] mx-auto mt-16 rounded-full origin-left"
        />
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 px-6 md:px-12 bg-[#003b53] text-white text-center rounded-tl-3xl rounded-tr-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-6">
          Contact us today and let’s turn your ideas into reality with innovative digital solutions.
        </p>
        <a
          href="/contact"
          className="bg-[#00bcd4] text-[#003b53] font-semibold px-8 py-3 rounded-lg hover:bg-[#0099aa] transition-colors duration-300"
        >
          Get in Touch
        </a>
      </section>

    </div>
  );
};

export default About;
