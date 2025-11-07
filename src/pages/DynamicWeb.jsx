import React from "react";
import { motion } from "framer-motion";
import Dynamic1 from "../images/Dynamic1.png";
import Dynamic2 from "../images/Dynamic2.jpg";
import Dynamic3 from "../images/Dynamic3.webp";
import Dynamic4 from "../images/Dynamic4.png";
import { Link } from "react-router-dom";

const HeadingDynamicWebPage = () => {
  return (
    <div className="text-gray-800 font-poppins overflow-hidden">

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#001f2c] via-[#00364c] to-[#004a64] mx-auto px-6 py-20 text-center">
        <motion.h1
         className="text-4xl md:text-6xl font-extrabold mb-6"
         initial={{ opacity: 0, y: -30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6 }}>
         <span className="text-blue-600">Dynamic Web Pages</span>{" "}
         <br />
         <span className="text-white">That Evolve with Your Users</span>
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
          Bring your business to life with interactive, user-driven, and
          database-powered dynamic websites — designed for flexibility, growth,
          and engagement.
        </p>

        <motion.img
          src={Dynamic1}
          alt="Dynamic Web Design"
          className="mx-auto mt-12 rounded-3xl shadow-2xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        />
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <img
          src={Dynamic2}
          alt="About Dynamic Websites"
          className="rounded-2xl shadow-xl w-full object-cover hover:scale-105 transition-all duration-500"
        />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#004a64]">
            What is a Dynamic Website?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Dynamic websites are built with real-time functionality and
            interactive content that changes based on user inputs or system data.
            Unlike static sites, they connect to databases and allow users to
            interact — ideal for eCommerce, blogs, dashboards, and user portals.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>⚙️ Real-time content updates</li>
            <li>🧠 Data-driven personalization</li>
            <li>🛒 Ideal for web apps, portals, and eCommerce</li>
            <li>💬 Interactive user experience with dynamic interfaces</li>
            <li>🔗 Integration with APIs and databases</li>
          </ul>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#004a64] mb-10">
            Key Features of Our Dynamic Web Solutions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-14">
            We build dynamic websites with cutting-edge technologies that make
            your platform responsive, scalable, and data-interactive for all
            kinds of businesses.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                img: Dynamic1,
                title: "Database Integration",
                desc: "Connects seamlessly with MySQL, MongoDB, or Firebase for real-time data updates.",
              },
              {
                img: Dynamic2,
                title: "User Management",
                desc: "Secure login, registration, and authentication systems with role-based access.",
              },
              {
                img: Dynamic3,
                title: "Admin Dashboards",
                desc: "Interactive dashboards for analytics, monitoring, and content management.",
              },
              {
                img: Dynamic4,
                title: "API Connectivity",
                desc: "Easily integrates third-party APIs for payment gateways, email, and CRM systems.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-3xl hover:-translate-y-2 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-xl mb-5 w-full h-52 object-cover"
                />
                <h3 className="text-xl font-semibold text-[#004a64] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-[#004a64] mb-10">
          Technologies We Use for Dynamic Websites
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          We use top-tier web technologies to build responsive, secure, and
          fast-loading dynamic applications with modern UI/UX.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "MySQL",
            "Firebase",
            "Next.js",
            "GraphQL",
          ].map((tech, i) => (
            <div
              key={i}
              className="bg-[#004a64] shadow-md rounded-xl px-6 py-3 text-white font-semibold hover:bg-blue-700 hover:text-white transition-all duration-300"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Workflow Section */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#004a64] mb-10">
            How We Develop Dynamic Web Solutions
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Requirement Analysis", desc: "Understanding your goals, users, and data needs." },
              { step: "02", title: "UI/UX Design", desc: "Designing intuitive and visually engaging interfaces." },
              { step: "03", title: "Development", desc: "Integrating front-end and back-end logic with databases." },
              { step: "04", title: "Testing & Launch", desc: "Ensuring performance, security, and seamless deployment." },
            ].map((s, i) => (
              <motion.div
                key={i}
                className="bg-white shadow-lg p-8 rounded-2xl hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-5xl font-bold text-[#004a64] mb-4">{s.step}</h3>
                <h4 className="text-xl font-semibold mb-2">{s.title}</h4>
                <p className="text-gray-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-[#004a64] mb-10">Client Testimonials</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Neha Gupta",
              feedback:
                "The dynamic dashboard built for our agency is fast, secure, and beautifully designed!",
            },
            {
              name: "Rohan Singh",
              feedback:
                "Amazing work! My eCommerce site now runs smoothly with live inventory updates.",
            },
            {
              name: "Simran Patel",
              feedback:
                "They created a user-friendly portal with great functionality. Excellent experience!",
            },
          ].map((review, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <p className="text-gray-600 mb-4 italic">“{review.feedback}”</p>
              <h4 className="text-[#004a64] font-semibold">{review.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-b from-[#004a64] via-[#00364c] to-[#001f2c] text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Build Your Dynamic Website?
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Let’s develop a fully customized, interactive, and data-driven website
          that scales with your business growth.
        </p>
        <Link
        to="/contact"
        className="bg-white text-[#004a64] px-10 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
        >
          Get Started Now
        </Link>
      </section>
    </div>
  );
};

export default HeadingDynamicWebPage;
