import React, { useState } from "react";
import { Link } from "react-router-dom";
import androidAppImage from "../images/andriodApp.jpg";
import { FaAndroid, FaRocket, FaMobileAlt, FaUsers, FaVrCardboard, FaGamepad, FaArrowRight } from "react-icons/fa";
import androidApp1 from "../images/androidapp1.png";
import androidApp2 from "../images/androidapp2.jpg";
import androidApp3 from "../images/androidapp3.png";

const expertise = [
  { title: "Android App Strategy", icon: <FaRocket size={28} className="text-yellow-500" />, description: "Our developers create strategies that skyrocket your app’s downloads and popularity." },
  { title: "Android App Design", icon: <FaMobileAlt size={28} className="text-yellow-500" />, description: "Expert UI/UX designers craft splendid and user-friendly interfaces." },
  { title: "Custom App Development", icon: <FaAndroid size={28} className="text-yellow-500" />, description: "Custom Android apps using contemporary SDKs tailored to your business needs." },
  { title: "Native Android Development", icon: <FaAndroid size={28} className="text-yellow-500" />, description: "High-end Android features with fast performance using native programming languages." },
  { title: "Hybrid Android Development", icon: <FaAndroid size={28} className="text-yellow-500" />, description: "Cost-effective, efficient hybrid apps that work across platforms." },
  { title: "Enterprise Android Apps", icon: <FaUsers size={28} className="text-yellow-500" />, description: "Functional apps for stakeholders to streamline business processes and efficiency." },
  { title: "AR/VR Development", icon: <FaVrCardboard size={28} className="text-yellow-500" />, description: "Interactive apps using AR & VR for enhanced user experience." },
  { title: "Game Development", icon: <FaGamepad size={28} className="text-yellow-500" />, description: "High-performance Android games with superior features and interactive gameplay." },
];

const industries = [
  "Tiles", "Furniture", "Fashion", "Jewellery", "Healthcare", "Education",
  "Architecture & Interior Design", "Real Estate", "Travel", "Event Management",
  "LMS", "Groceries", "Beauty / Personal Care", "Food & Beverages", "Many More"
];

const projects = [
    { title: "GalleriaSt App Solutions", category: "#Mobile", description: "eCommerce marketplace for selling jewelry, home accessories, and daily needs.", image: androidApp1 },
  { title: "2D3D Floor Plan Maps", category: "#Mobile", description: "Search and explore detailed 2D/3D indoor floor plans.", image: androidApp2 },
  { title: "Video Converter Utility", category: "#Mobile", description: "Supports most video and audio formats in a single app.", image: androidApp3 },
];

export default function AndroidAppDevelopment() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="bg-gray-50 text-gray-800">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#003b53] text-white py-32 px-6 text-center">
        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fadeIn">
            Proficient Android App Development Services
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl mb-8 animate-fadeIn delay-200">
            Delivering Customised, State-of-the-Art Android Apps for Long-Term Business Success.
          </p>
          <Link
          to="/contact"
          className="mt-4 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold px-8 py-4 rounded-lg shadow-lg transition transform hover:scale-110 animate-bounce">
            Request a Free Quote
          </Link>
        </div>
        {/* Animated Shapes */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-yellow-300 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full opacity-20 animate-spin-slow"></div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-[#003b53]">Android App Development By Our Proficient Team</h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
            Android is the most powerful and user-friendly mobile platform with innovative features. Businesses can utilise these to provide superior user experience.
          </p>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
           CodeFloor IT Tech develops top-class Android apps with creative solutions, native or hybrid programming, and rapid turnaround time.
          </p>
        </div>
        <div>
          <img
           src={androidAppImage}
           alt="Android Team"
           className="rounded-2xl shadow-lg hover:scale-105 transition duration-500"
          />
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#003b53]">Expertise Of Our Developers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertise.map((exp, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105 border-t-4 border-[#003b53]">
              <div className="mb-4 animate-bounce">{exp.icon}</div>
              <h3 className="font-semibold text-lg mb-2 text-[#003b53]">{exp.title}</h3>
              <p className="text-gray-600 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 px-6 bg-blue-50 relative overflow-hidden">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#003b53]">Our Development Process</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-6">
          {["Strategy", "Design", "Development", "Testing", "Launch"].map((step, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 text-center">
              <div className="text-[#003b53] mb-2 text-3xl"><FaArrowRight /></div>
              <h4 className="font-semibold text-[#003b53] text-lg">{step}</h4>
            </div>
          ))}
        </div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
      </section>

      {/* REQUEST QUOTE FORM */}
      <section className="py-16 px-6 bg-[#003b53]">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8 relative z-10">
          <h3 className="text-3xl font-bold text-center mb-6 text-[#003b53]">Request a Free Quote</h3>
          <form className="grid md:grid-cols-2 gap-4">
            <input type="text" placeholder="Name *" className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-[#003b53]" required />
            <input type="email" placeholder="Business Email *" className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-[#003b53]" required />
            <input type="tel" placeholder="Phone" className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-[#003b53]" />
            <input type="text" placeholder="Website" className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-[#003b53]" />
            <select className="border p-3 rounded-lg w-full md:col-span-2 focus:ring-2 focus:ring-[#003b53]">
              <option>Choose Service</option>
              <option>Android App Development</option>
              <option>UI/UX Design</option>
              <option>App Maintenance</option>
            </select>
            <textarea placeholder="Message *" className="border p-3 rounded-lg md:col-span-2 focus:ring-2 focus:ring-[#003b53]" rows="4"></textarea>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-3 rounded-lg md:col-span-2 transition transform hover:scale-100">
              Submit Request
            </button>
          </form>
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

      {/* CTA SECTION */}
      <section className="bg-[#003b53] text-white text-center py-20 px-6 relative overflow-hidden">
        <h2 className="text-4xl font-bold mb-4 animate-fadeIn">Build Your Dedicated Android Team</h2>
        <p className="mb-6 text-xl animate-fadeIn delay-200">Get expert Android professionals to bring your app vision to life efficiently and effectively.</p>
        <Link
        to="/contact"
         className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold px-8 py-4 rounded-lg shadow-lg transition transform hover:scale-110"
         >
          Contact Us Now
        </Link>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-yellow-300 rounded-full opacity-20 animate-spin-slow"></div>
      </section>

    </div>
  );
}
