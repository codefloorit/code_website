import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const faqs = [
  { q: "What is Flutter app development?", a: "Flutter app development is the process of creating mobile applications using the Flutter framework, known for its cross-platform capabilities." },
  { q: "How does cross-platform compatibility benefit businesses?", a: "It allows you to reach users on both iOS and Android platforms with a single codebase, reducing cost and development time." },
  { q: "Why choose Elsner for Firebase Auth in Flutter?", a: "We ensure secure, reliable authentication and seamless integration for your Flutter apps using Firebase Auth." },
  { q: "What makes our Flutter form builder stand out?", a: "Our form builder simplifies user interactions, ensuring quick data capture and intuitive UI design." },
  { q: "How do you ensure native-like performance in cross-platform apps?", a: "Our developers leverage Flutter’s rendering engine and optimization techniques for near-native performance." },
  { q: "Can I migrate my existing app to Flutter?", a: "Yes! We offer seamless migration services ensuring zero data loss and enhanced performance." },
];

const industries = [
  "Tiles", "Furniture", "Fashion", "Jewellery", "Healthcare", "Education",
  "Architecture & Interior Design", "Real Estate", "Travel", "Event Management",
  "LMS", "Groceries", "Beauty / Personal Care", "Food & Beverages", "Many More"
];

export default function FlutterAppDevelopment() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="font-sans">
      {/* HERO SECTION */}
      <section className="bg-[#003b53] text-white py-28 px-6 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fadeIn">
            Flutter App Development Services
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl mb-6 animate-fadeIn delay-200">
            Take your business to the next level with top-of-the-line Flutter App Development solutions crafted for innovation and performance.
          </p>
          <Link
          to="/contact"
           className="mt-4 md:mt-8 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:scale-105"
          >
            Request a Quote
          </Link>
        </div>
        {/* Decorative Animated Shapes */}
        <div className="absolute -bottom-12 -left-20 w-64 h-64 bg-yellow-300 rounded-full opacity-30 animate-ping-slow"></div>
        <div className="absolute -top-16 -right-16 w-72 h-72 bg-white rounded-full opacity-20 animate-spin-slow"></div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#003b53]">Your Premier Destination for Cutting-edge Flutter Solutions</h2>
        <p className="text-gray-900 text-lg md:text-xl leading-relaxed">
          At Elsner, we specialize in delivering top-notch Flutter app development services that redefine excellence. Whether you want a native-like experience or the benefits of cross-platform development, our experts build apps that perform flawlessly on both iOS and Android.
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#003b53]">Our Flutter App Development Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Native-Like Performance",
            "Cross-Platform Compatibility",
            "Innovative UI/UX Designs",
            "Custom Flutter App Development",
            "Firebase Auth Integration",
            "Flutter Form Builder",
            "Scalable Business Solutions",
            "Expert Flutter App Builders",
          ].map((service, i) => (
            <div key={i} className="bg-white border-l-4 border-yellow-500 p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition duration-300">
              <h3 className="font-semibold text-lg mb-2 text-[#003b53]">{service}</h3>
              <p className="text-gray-800 text-lg">
                {service.includes("Firebase") ? "Secure and seamless authentication powered by Firebase." :
                service.includes("UI/UX") ? "Beautiful, intuitive, and responsive design for better engagement." :
                service.includes("Cross") ? "Expand your reach with apps that run on both iOS and Android." :
                "High-performance apps crafted with precision and scalability in mind."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#003b53]">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border rounded-xl p-5 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer bg-white"
              onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg text-[#003b53]">{faq.q}</h3>
                <FaChevronDown className={`transition-transform duration-300 ${openFAQ === i ? "rotate-180" : ""}`} />
              </div>
              {openFAQ === i && <p className="mt-2 text-gray-900 border-t pt-2 text-lg">{faq.a}</p>}
            </div>
          ))}
        </div>
      </section>

       {/* INDUSTRIES SERVED */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#003b53]">Industries We Serve</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 text-gray-700">
          {industries.map((ind, i) => (
            <div key={i} className="bg-white rounded-2xl py-4 shadow hover:shadow-lg text-center font-medium transition transform hover:-translate-y-1 hover:bg-gradient-to-r hover:from-[#003b53] hover:to-[#003b53] hover:text-amber-50">{ind}</div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#003b53] text-white text-center py-16 px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fadeIn">Interested & Want to Talk More?</h2>
          <p className="mb-6 text-lg md:text-xl animate-fadeIn delay-200">Let’s brew something amazing together! Get in touch with our Flutter experts today.</p>
         <Link
          to="/contact"
          className="inline-block bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-lg transform hover:-translate-y-1 hover:scale-105 transition"
         >
          Contact Us
         </Link>
        </div>
        <div className="absolute -bottom-12 -left-20 w-64 h-64 bg-yellow-300 rounded-full opacity-30 animate-ping-slow"></div>
        <div className="absolute -top-16 -right-16 w-72 h-72 bg-white rounded-full opacity-20 animate-spin-slow"></div>
      </section>
    </div>
  );
}
