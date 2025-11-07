import React from "react";
import { motion } from "framer-motion";
import AppDevImage1 from "../images/homeService1.jpg";
import AppDevImage2 from "../images/homeService2.jpg";
import AppDevImage3 from "../images/heroService3.jpg";
import AppDevImage4 from "../images/heroService4.avif";
import AppDevImage5 from "../images/heroService5.avif";
import AppDevImage6 from "../images/heroService6.jpg";

import {
  FaReact,
  FaNodeJs,
  FaAndroid,
  FaApple,
  FaPhp,
  FaWordpress,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaUsers,
  FaCheckCircle,
  FaClock,
  FaRocket,
  FaHome,
  FaCouch,
  FaTshirt,
  FaGem,
  FaHeartbeat,
  FaUniversity,
  FaDraftingCompass,
  FaBuilding,
  FaPlane,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaShoppingBasket,
  FaSpa,
  FaUtensils,
  FaEllipsisH,
  FaLaptopCode,
  FaLightbulb, 
  FaGlobe,
  FaCode,
  FaChartLine,
  FaCogs,
  FaHandshake,
  FaPencilRuler,
  FaQuestionCircle 
} from "react-icons/fa";
import { SiFlutter, SiLaravel, SiJavascript, SiMongodb, SiTailwindcss, SiHtml5, SiCss3 } from "react-icons/si";

import HeroImage from "../images/homeHeroimg.jpg";
import AppDevImage from "../images/appdev.jpg";
import Team1 from "../images/team1.jpg";
import Team2 from "../images/team2.jpg";
import Team3 from "../images/team3.jpg";
import Project1 from "../images/project1.png";
import Project2 from "../images/project2.jpg";
import Project3 from "../images/project3.png";


const industries = [
    { name: "Tiles", icon: <FaHome /> },
    { name: "Furniture", icon: <FaCouch /> },
    { name: "Fashion", icon: <FaTshirt /> },
    { name: "Jewellery", icon: <FaGem /> },
    { name: "Healthcare", icon: <FaHeartbeat /> },
    { name: "Education", icon: <FaUniversity /> },
    { name: "Architecture & Interior Design", icon: <FaDraftingCompass /> },
    { name: "Real Estate", icon: <FaBuilding /> },
    { name: "Travel", icon: <FaPlane /> },
    { name: "Event Management", icon: <FaCalendarAlt /> },
    { name: "LMS", icon: <FaChalkboardTeacher /> },
    { name: "Groceries", icon: <FaShoppingBasket /> },
    { name: "Beauty / Personal Care", icon: <FaSpa /> },
    { name: "Food & Beverages", icon: <FaUtensils /> },
    { name: "Many More", icon: <FaEllipsisH /> },
  ];

  const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

  const techs = [
    { icon: FaReact, name: "React" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: SiFlutter, name: "Flutter" },
    { icon: FaAndroid, name: "Android" },
    { icon: FaApple, name: "iOS" },
    { icon: FaPhp, name: "PHP" },
    { icon: SiLaravel, name: "Laravel" },
    { icon: FaWordpress, name: "WordPress" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiTailwindcss, name: "Tailwind CSS" },
    { icon: SiHtml5, name: "HTML5" },
    { icon: SiCss3, name: "CSS3" },
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

   const timelineSteps = [
    {
      icon: <FaLightbulb />,
      title: "Discovery & Research",
      desc: "We begin by understanding your goals, audience, and vision to craft a solid project foundation.",
    },
    {
      icon: <FaPencilRuler />,
      title: "Strategic Planning",
      desc: "Our experts plan architecture, features, and technology stacks that best fit your business objectives.",
    },
    {
      icon: <FaUsers />,
      title: "Wireframing & Collaboration",
      desc: "We create interactive wireframes and collaborate closely with you to finalize structure and flow.",
    },
    {
      icon: <FaCode />,
      title: "Design & Development",
      desc: "Our developers and designers work hand-in-hand to craft pixel-perfect, scalable digital solutions.",
    },
    {
      icon: <FaCogs />,
      title: "Testing & Quality Assurance",
      desc: "Rigorous testing ensures performance, security, and functionality before your product goes live.",
    },
    {
      icon: <FaRocket />,
      title: "Deployment & Launch",
      desc: "We handle all deployment steps — ensuring a smooth and successful product launch experience.",
    },
    {
      icon: <FaChartLine />,
      title: "Optimization",
      desc: "After launch, we monitor and enhance your solution using analytics, SEO, and performance metrics.",
    },
    {
      icon: <FaHandshake />,
      title: "Ongoing Support",
      desc: "We build long-term relationships with our clients through continuous updates and 24/7 support.",
    },
  ];

  const faqs = [
    {
      q: "1. How long does it take to complete a project?",
      a: "The timeline varies based on the project's complexity. Typically, most projects are completed between 4 to 12 weeks with regular updates.",
    },
    {
      q: "2. Do you offer post-launch support?",
      a: "Yes! Codefloor IT Tech LLP provides continuous support, updates, and maintenance to ensure smooth performance after launch.",
    },
    {
      q: "3. Can I request a custom quote for my project?",
      a: "Absolutely! Share your requirements with us, and our experts will prepare a personalized quotation tailored to your business goals.",
    },
    {
      q: "4. What industries do you specialize in?",
      a: "We serve diverse industries such as IT, healthcare, education, e-commerce, travel, and more with customized solutions.",
    },
    {
      q: "5. Do you provide SEO and digital marketing services?",
      a: "Yes, our team specializes in SEO, content marketing, and social media campaigns to help businesses grow online.",
    },
    {
      q: "6. Will I get regular updates during development?",
      a: "Of course. We maintain transparent communication through weekly reports, calls, and progress demos.",
    },
    {
      q: "7. Do you handle both web and mobile app development?",
      a: "Yes! We develop scalable websites and high-performance mobile apps for Android and iOS platforms.",
    },
    {
      q: "8. Can you redesign an existing website or app?",
      a: "Definitely. We specialize in revamping outdated websites into modern, responsive, and SEO-optimized platforms.",
    },
    {
      q: "9. What technologies do you use for development?",
      a: "Our stack includes React, Node.js, Laravel, Flutter, WordPress, and other modern frameworks for best results.",
    },
    {
      q: "10. Why should I choose Codefloor IT Tech LLP?",
      a: "Because we combine innovation, creativity, and technology with a customer-first approach to deliver impactful digital experiences.",
    },
  ];



const Home = () => {
  return (
    <div className="overflow-x-hidden font-sans">

      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-gradient-to-b from-[#001f2c] via-[#00364c] to-[#004a64] text-white py-24 px-6 md:px-12 overflow-hidden">
      {/* ==== Decorative Background Elements ==== */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#00bcd4]/10 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00bcd4]/10 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10"></div>

      {/* ==== Main Content ==== */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
        {/* ===== Left Section (Text) ===== */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Empowering <span className="text-[#00bcd4]">Digital Growth</span> <br />
            with <span className="text-[#00bcd4]">CodeFloor IT Tech</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0">
            At <strong>Codefloor IT Tech</strong>, we build world-class digital experiences that help
            businesses scale faster. From web & app development to SEO and digital marketing, 
            we deliver powerful results that transform your online presence.
          </p>

          {/* ==== Buttons ==== */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.a
              href="#services"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00bcd4] text-[#003b53] font-semibold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-[#00bcd4]/30 transition-all"
            >
              Explore Our Services
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="border border-[#00bcd4] px-8 py-3 rounded-full text-white hover:bg-[#00bcd4] hover:text-[#003b53] transition-all"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>

        {/* ===== Right Section (Image) ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center relative"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#00bcd4]/20 rounded-full blur-3xl animate-pulse"></div>
          <img
            src={HeroImage}
            alt="Codefloor Hero"
            className="mx-auto w-full max-w-md md:max-w-lg drop-shadow-2xl rounded-2xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>

      {/* ==== Decorative Animated Line ==== */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-3/4 h-1 bg-gradient-to-r from-[#00bcd4] to-white mx-auto mt-20 rounded-full origin-left"
      />
    </section>

      {/* ===== ABOUT COMPANY ===== */}
       <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-[#f0f9ff] via-white to-[#e8f7fb] text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#004a64] mb-6">
          About <span className="text-[#00bcd4]">CodeFloor IT Tech</span>
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
          At <strong>Codefloor IT Tech LLP</strong>, we are passionate innovators dedicated to
          building digital experiences that inspire, engage, and empower. From
          startups to enterprises, we help businesses transform their ideas into
          powerful, high-performing digital solutions.
        </p>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
          Our team blends creativity with cutting-edge technologies to deliver
          exceptional web, mobile, and enterprise software solutions. With
          expertise in <span className="text-[#00bcd4] font-semibold">React, Node.js, Laravel, WordPress, and Mobile App Development</span>, we
          deliver solutions that are scalable, secure, and tailored for growth.
        </p>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto"
      >
        {[
          {
            icon: <FaLaptopCode size={40} />,
            title: "Innovative Development",
            text: "We craft modern, efficient, and scalable solutions using the latest technologies.",
          },
          {
            icon: <FaUsers size={40} />,
            title: "Client-Centric Approach",
            text: "Your business goals are our top priority — we align technology with your vision.",
          },
          {
            icon: <FaLightbulb size={40} />,
            title: "Creative Thinking",
            text: "Our design and development process is fueled by creativity and fresh ideas.",
          },
          {
            icon: <FaGlobe size={40} />,
            title: "Global Impact",
            text: "Delivering world-class IT solutions that make a difference across industries.",
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all flex flex-col items-center text-center"
          >
            <div className="bg-gradient-to-br from-[#00bcd4] to-[#004a64] p-4 rounded-full text-white mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#004a64] mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Mission / Vision Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="max-w-5xl mx-auto mt-16 bg-white rounded-3xl shadow-md p-10 border-t-4 border-[#00bcd4]"
      >
        <h3 className="text-3xl font-bold text-[#004a64] mb-4">Our Mission</h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Our mission is to empower businesses with next-gen technology solutions
          that drive innovation, efficiency, and success. We strive to create
          digital products that are not only functional but also meaningful and
          human-centered.
        </p>
        <h3 className="text-3xl font-bold text-[#004a64] mb-4">Our Vision</h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          To become a global leader in IT innovation — providing scalable,
          affordable, and impactful solutions that connect people and technology
          seamlessly.
        </p>
      </motion.div>
    </section>

      {/* ===== TECHNOLOGIES ===== */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-[#001f2c] via-[#00364c] to-[#004a64]">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-white text-center mb-12 tracking-wide"
      >
        Technologies We Use
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
        {techs.map((tech, i) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.15, rotate: 3 }}
              className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all border border-[#cce7f0] hover:border-[#02525d] flex flex-col items-center justify-center"
            >
              <div className="bg-gradient-to-b from-[#001f2c] via-[#00364c] to-[#004a64] font-semibold p-4 rounded-full mb-3 group-hover:scale-110 transition-transform">
                <Icon className="text-white" size={40} />
              </div>
              <p className="text-[#004a64] font-medium text-sm group-hover:text-[#02525d] transition-colors">
                {tech.name}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Decorative Motion Wave */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-16 flex justify-center"
      >
        <div className="w-40 h-1 bg-gradient-to-r from-[#00bcd4] to-[#004a64] rounded-full"></div>
      </motion.div>
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

       {/* INDUSTRIES SERVED */}
    <section className="py-20 px-6 bg-[#003b53] text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Websites & Application For this Industries 
      </h2>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8">
        {industries.map((ind, i) => (
          <div
            key={i}
            className="group bg-white/10 border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-gradient-to-r hover:from-[#003b53] hover:to-[#006d8f] transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            <div className="text-4xl text-amber-300 mb-3 transition-transform duration-500 group-hover:rotate-12">
              {ind.icon}
            </div>
            <h3 className="text-lg font-semibold text-white group-hover:text-amber-200">
              {ind.name}
            </h3>
          </div>
        ))}
      </div>
    </section>

      {/* ===== Step by Step PROCESS ===== */}
      <section className="relative bg-gradient-to-b from-[#f0f9ff] via-white to-[#e8f7fb] py-24 px-6 md:px-12 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute -left-20 top-6 w-72 h-72 bg-[#00bcd4]/8 rounded-full blur-3xl -z-10" />
      <div className="absolute -right-20 bottom-6 w-80 h-80 bg-[#004a64]/8 rounded-full blur-3xl -z-10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#003b53] mb-3">
          Our Process — Step by Step
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          A clear, repeatable process that takes ideas from concept to launch — and beyond. We partner with
          you at every stage to ensure measurable outcomes.
        </p>
      </motion.div>

      {/* Timeline container */}
      <div className="max-w-6xl mx-auto relative">
        {/* center vertical line for large screens */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-[#00bcd4] to-[#004a64] opacity-10 rounded" />

        <div className="space-y-10">
          {timelineSteps.map((step, i) => {
            const isLeft = i % 2 === 0; // alternate sides on md+
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className={`md:flex md:items-start md:justify-between ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className="md:w-1/2 w-full">
                  <div
                    className={`bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all ${
                      isLeft ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      {/* STEP pill */}
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#004a64]/10 text-[#004a64] text-sm font-semibold">
                        STEP
                      </span>

                      {/* Icon */}
                      <div className="bg-gradient-to-br from-[#00bcd4] to-[#004a64] p-2 rounded-full text-white">
                        {step.icon}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-[#003b53] mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>

                    {/* small CTA or note */}
                    <div className="mt-4 flex items-center gap-3">
                      <span className="text-xs text-gray-500">Deliverables:</span>
                      <div className="text-xs text-gray-700 bg-gray-100 px-3 py-1 rounded-full">Docs</div>
                      <div className="text-xs text-gray-700 bg-gray-100 px-3 py-1 rounded-full">Prototype</div>
                      <div className="text-xs text-gray-700 bg-gray-100 px-3 py-1 rounded-full">Plan</div>
                    </div>
                  </div>
                </div>

                {/* timeline dot (center) */}
                <div className="md:flex-shrink-0 md:w-0 md:flex md:items-center md:justify-center">
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-white border-4 border-[#00bcd4] shadow-md -mt-3 z-10" />
                    {/* line piece between dots, but only if not last */}
                    {i !== timelineSteps.length - 1 && (
                      <div className="w-px bg-gradient-to-b from-[#00bcd4] to-[#004a64] flex-1 mt-2 opacity-20" />
                    )}
                  </div>

                  {/* mobile small dot */}
                  <div className="md:hidden flex items-center justify-center mt-4">
                    <div className="w-3 h-3 rounded-full bg-[#004a64]" />
                  </div>
                </div>

                {/* empty space to create alternate effect on md */}
                <div className="md:w-1/2 w-0"></div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* bottom flourish */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-16 flex justify-center"
      >
        <div className="w-36 h-1 bg-gradient-to-r from-[#004a64] to-[#00bcd4] rounded-full" />
      </motion.div>
    </section>

     {/* ===== FAQ ===== */}
       <section className="bg-gradient-to-b from-[#001f2c] via-[#002e41] to-[#004a64] py-24 px-6 md:px-12 text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Frequently Asked <span className="text-[#00bcd4]">Questions</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Everything you need to know about <strong>Codefloor IT Tech</strong> — from project timelines to support and process details.
        </p>
      </motion.div>

      {/* FAQ Cards */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {faqs.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
            className="bg-[#002b3a] bg-opacity-90 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-[#00bcd4]/30 border border-[#004a64]/30 transition-all"
          >
            <div className="flex items-center gap-4 mb-3">
              <FaQuestionCircle className="text-[#00bcd4] text-3xl" />
              <h3 className="font-semibold text-lg md:text-xl">{item.q}</h3>
            </div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">{item.a}</p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Line Animation */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="w-3/4 h-1 bg-gradient-to-r from-[#00bcd4] to-[#ffffff] mx-auto mt-16 rounded-full origin-left"
      />
    </section>

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


      {/* ===== CONTACT CTA ===== */}
      <section id="contact" className="bg-gradient-to-r from-[#003b53] to-[#005c7a] text-white py-20 px-6 md:px-12 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-300 mb-8">Contact us now to discuss your ideas and get a free consultation.</p>
          <a href="/contact" className="bg-[#00bcd4] text-[#003b53] px-8 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300">Get Free Consultation</a>
        </motion.div>
      </section>

    </div>
  );
};
export default Home;
