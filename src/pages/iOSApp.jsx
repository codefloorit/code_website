import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaApple,
  FaReact,
  FaSwift,
  FaMobileAlt,
  FaCloud,
  FaDatabase,
  FaCogs,
  FaRocket,
  FaLock,
  FaUserTie,
  FaChartLine,
  FaCodeBranch,
  FaClipboardCheck,
  FaStar,
  FaLightbulb,
  FaTools,
  FaNetworkWired,
} from "react-icons/fa";
import heroImg from "../images/ios-hero.png";
import iosFeature1 from "../images/iosPost1.png";
import iosFeature2 from "../images/iosPost2.webp";
import iosFeature3 from "../images/iosPost3.jpg";
import iosFeature4 from "../images/isoPost4.webp";
import iosFeature5 from "../images/isoPost5.webp";
import iosFeature6 from "../images/isoPost6.jpg";


export default function IOSApp() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do you provide full-cycle iOS development?",
      answer:
        "Yes, from concept, UI/UX design, development, testing, and deployment — we handle the full lifecycle of your iOS app.",
    },
    {
      question: "Which programming languages are used for iOS apps?",
      answer:
        "We primarily use Swift and Objective-C, along with React Native for cross-platform development.",
    },
    {
      question: "Can you integrate AI/ML features in apps?",
      answer:
        "Absolutely. We integrate AI-based recommendations, predictive analytics, and ARKit for immersive experiences.",
    },
    {
      question: "Do you provide App Store deployment?",
      answer:
        "Yes, we manage building, testing, publishing, and updates for your app on the App Store.",
    },
    {
      question: "Can you integrate third-party APIs?",
      answer:
        "We seamlessly integrate RESTful APIs, payment gateways, cloud storage, and other third-party services.",
    },
    {
      question: "What about security for my app?",
      answer:
        "We implement top-notch encryption, secure authentication, and follow Apple’s best practices.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes, we provide 24/7 maintenance, monitoring, and updates to ensure peak performance.",
    },
    {
      question: "Can you make apps for iPad and Apple Watch?",
      answer:
        "Yes, we build universal apps compatible with iPhone, iPad, and watchOS devices.",
    },
    {
      question: "How long does iOS app development take?",
      answer:
        "Depending on complexity, most apps are delivered between 8 to 20 weeks.",
    },
    {
      question: "Do you provide UI/UX design services?",
      answer:
        "Yes, we design clean, intuitive, and user-friendly interfaces to maximize engagement.",
    },
  ];

  return (
    <div className="text-[#003b53] overflow-hidden">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-[#001f2c] via-[#00364c] to-[#004a64] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-6 animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Transform Your Business with Cutting-Edge iOS Apps
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              We design visually stunning, high-performance iOS applications
              tailored to your business needs. From concept to launch, our
              team ensures excellence at every step.
            </p>
            <Link
            to="/contact"
            className="bg-white text-[#003b53] px-6 py-3 rounded-full font-semibold hover:bg-[#00bcd4] hover:text-white transition-all duration-500 shadow-lg"
            >
              Get Started
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={heroImg}
              alt="iOS Development"
              className="rounded-3xl shadow-2xl hover:scale-105 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Technologies & Tools We Use
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <FaSwift size={50} />, name: "Swift", color: "#fa7343" },
            { icon: <FaReact size={50} />, name: "React Native", color: "#61dafb" },
            { icon: <FaCogs size={50} />, name: "Xcode", color: "#0a84ff" },
            { icon: <FaCloud size={50} />, name: "Firebase", color: "#ffca28" },
            { icon: <FaDatabase size={50} />, name: "RESTful APIs", color: "#4caf50" },
            { icon: <FaLock size={50} />, name: "Security", color: "#f44336" },
            { icon: <FaRocket size={50} />, name: "Performance", color: "#9c27b0" },
            { icon: <FaNetworkWired size={50} />, name: "Networking", color: "#03a9f4" },
          ].map((tech, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-500 bg-gray-50"
            >
              <div className="mb-3 flex justify-center" style={{ color: tech.color }}>
                {tech.icon}
              </div>
              <h3 className="font-semibold text-lg">{tech.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#f9fafb] to-[#e0f7fa] text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Our iOS Services</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <FaMobileAlt size={50} />,
              title: "Custom iPhone Apps",
              text: "Pixel-perfect iOS apps tailored to your business requirements with intuitive UI/UX.",
            },
            {
              icon: <FaLock size={50} />,
              title: "Secure Enterprise Apps",
              text: "Enterprise-grade apps with encryption, cloud sync, and advanced authentication.",
            },
            {
              icon: <FaRocket size={50} />,
              title: "App Optimization",
              text: "Optimized for speed, responsiveness, and high performance on all Apple devices.",
            },
            {
              icon: <FaLightbulb size={50} />,
              title: "AI & AR Integration",
              text: "Integrate AI and ARKit features for immersive and intelligent app experiences.",
            },
            {
              icon: <FaTools size={50} />,
              title: "Maintenance & Support",
              text: "24/7 app maintenance, updates, monitoring, and bug fixing.",
            },
            {
              icon: <FaChartLine size={50} />,
              title: "Analytics Integration",
              text: "Integrate analytics to track user behavior and app performance metrics.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-500 hover:-translate-y-2"
            >
              <div className="text-[#00bcd4] mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="py-20 bg-gradient-to-b from-[#001f2c] via-[#00364c] to-[#004a64] text-center">
        <h2 className="text-3xl md:text-4xl text-white font-bold mb-12">Development Process</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { icon: <FaUserTie />, title: "1. Consultation" },
            { icon: <FaClipboardCheck />, title: "2. Design & Prototyping" },
            { icon: <FaCodeBranch />, title: "3. Development & Testing" },
            { icon: <FaRocket />, title: "4. Deployment & Launch" },
            { icon: <FaLock />, title: "5. Security Checks" },
            { icon: <FaCloud />, title: "6. Cloud Integration" },
            { icon: <FaStar />, title: "7. Quality Assurance" },
            { icon: <FaChartLine />, title: "8. Analytics & Reporting" },
          ].map((step, i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-xl hover:scale-105 transition-all duration-500"
            >
              <div className="text-[#00bcd4] mb-3 flex justify-center">{step.icon}</div>
              <h3 className="font-bold text-lg">{step.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
       <section className="py-20 px-6 bg-gradient-to-b from-[#e0f7fa] to-[#ffffff] text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our iOS Projects
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {[
          {
           img: iosFeature1,
           title: "Health Tracker App",
           description:
              "A comprehensive app to monitor daily activities, health metrics, and nutrition.",
           icon: <FaMobileAlt size={40} />,
          },
           {
            img: iosFeature2,
            title: "E-Commerce iOS App",
            description:
               "Seamless shopping experience with secure payment integration and smooth UI.",
            icon: <FaApple size={40} />,
           },
          {
            img: iosFeature3,
            title: "Social Networking App",
            description:
              "Connect, share, and engage with users worldwide with real-time messaging features.",
            icon: <FaReact size={40} />,
          },
           {
            img: iosFeature4,
            title: "Fitness App",
            description:
                "Track workouts, goals, and achievements with personalized dashboards.",
            icon: <FaRocket size={40} />,
           },
          {
           img: iosFeature5,
           title: "Finance Management App",
           description:
              "Manage personal finances, budgets, and investments with advanced analytics.",
           icon: <FaChartLine size={40} />,
          },
          {
           img: iosFeature6,
           title: "Educational App",
           description:
              "Interactive learning platform with gamification, quizzes, and progress tracking.",
           icon: <FaLightbulb size={40} />,
          },
        ].map((project, i) => (
           <div
              key={i}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-500 hover:-translate-y-2 overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="p-6 text-left">
          <div className="text-[#00bcd4] mb-3">{project.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-700">{project.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>

       {/* TESTIMONIALS */}
         <section className="bg-gradient-to-r from-[#004a64] to-[#003b53] text-white py-20 px-6 text-center">
           <h2 className="text-3xl md:text-4xl font-bold mb-10">
             What Our Clients Say
           </h2>
           <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
             {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="p-6 bg-white text-[#003b53] rounded-2xl shadow-lg hover:scale-105 transition-all duration-500"
            >
              <p className="italic mb-4">
                “The team delivered our iOS app ahead of schedule. Great UI and
                flawless performance. Highly recommend!”
              </p>
              <div className="flex justify-center text-[#00bcd4] mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <h4 className="font-semibold">— Sarah Johnson, CEO, FinTrak</h4>
            </div>
          ))}
        </div>
      </section>


      {/* FAQ SECTION */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto text-left space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 border-b border-gray-300 pb-3 cursor-pointer hover:bg-gray-100 rounded-lg p-3 transition-all duration-300"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h3 className="font-semibold text-lg flex justify-between items-center">
                {faq.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </h3>
              {openIndex === index && (
                <p className="mt-3 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
