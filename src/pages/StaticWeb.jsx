import React from "react";
import { motion } from "framer-motion";
import Service1 from "../images/Staticservices1.jpg";
import Service2 from "../images/Staticservices2.jpg";
import Service3 from "../images/Staticservices3.jpg";
import Service4 from "../images/Staticservices4.jpg";

const HeadingStaticWebPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-800 font-poppins overflow-hidden">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Build Powerful & Fast Static Websites
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
          We design static websites that combine stunning visuals, smooth performance, 
          and optimized SEO — built to elevate your brand online.
        </p>

        <motion.img
          src={Service1}
          alt="Static Web Design"
          className="mx-auto mt-12 rounded-3xl shadow-2xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        />
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <img
          src={Service2}
          alt="About Static Websites"
          className="rounded-2xl shadow-xl w-full object-cover hover:scale-105 transition-all duration-500"
        />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
            Why Choose Static Websites?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Static websites offer unmatched speed, security, and reliability — ideal for
            portfolios, company profiles, events, and landing pages. They are easy to host,
            cost-efficient, and provide a smooth experience for your visitors.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>⚡ Ultra-fast page load times</li>
            <li>🔒 Secure with zero backend vulnerabilities</li>
            <li>💰 Cost-effective hosting and maintenance</li>
            <li>📈 SEO optimized with cleaner code</li>
            <li>📱 100% responsive on all devices</li>
          </ul>
        </div>
      </section>

      {/* We Provide Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-10">
            We Provide Complete Web Solutions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-14">
            From creative layouts to pixel-perfect designs, our static web development team delivers 
            clean, modern, and conversion-focused websites tailored to your business goals.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                img: Service1,
                title: "Business Websites",
                desc: "Elegant corporate sites that represent your business identity and attract clients.",
              },
              {
                img: Service2,
                title: "Portfolio Designs",
                desc: "Showcase your projects beautifully with interactive and responsive designs.",
              },
              {
                img: Service3,
                title: "Landing Pages",
                desc: "Boost conversions with landing pages optimized for marketing campaigns.",
              },
              {
                img: Service4,
                title: "Product Pages",
                desc: "Display your products with clear visuals and engaging layout.",
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
                <h3 className="text-xl font-semibold text-blue-700 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-10">Technologies We Use</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          We craft high-quality websites using the latest front-end technologies and frameworks 
          to ensure performance, security, and scalability.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {["HTML5", "CSS3", "Tailwind CSS", "React.js", "Next.js", "JavaScript"].map(
            (tech, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-xl px-6 py-3 text-blue-700 font-semibold hover:bg-blue-700 hover:text-white transition-all duration-300"
              >
                {tech}
              </div>
            )
          )}
        </div>
      </section>

      {/* Workflow Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-10">Our Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Planning", desc: "We understand your vision and target audience." },
              { step: "02", title: "Designing", desc: "Creative and responsive layouts crafted for your brand." },
              { step: "03", title: "Development", desc: "Pixel-perfect, high-speed code implementation." },
              { step: "04", title: "Deployment", desc: "Seamless hosting and performance optimization." },
            ].map((s, i) => (
              <motion.div
                key={i}
                className="bg-white shadow-lg p-8 rounded-2xl hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-5xl font-bold text-blue-700 mb-4">{s.step}</h3>
                <h4 className="text-xl font-semibold mb-2">{s.title}</h4>
                <p className="text-gray-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-10">What Our Clients Say</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Amit Sharma",
              feedback:
                "The static website they built for my business looks fantastic and loads lightning fast!",
            },
            {
              name: "Priya Patel",
              feedback:
                "Clean, elegant design and fully responsive. My portfolio looks more professional now!",
            },
            {
              name: "Rahul Mehta",
              feedback:
                "Loved the attention to detail and quick delivery. Perfect for startups like mine.",
            },
          ].map((review, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <p className="text-gray-600 mb-4 italic">“{review.feedback}”</p>
              <h4 className="text-blue-700 font-semibold">{review.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-700 to-indigo-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Build Your Static Website?
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Let’s turn your ideas into a professional, responsive, and high-performing 
          static website that grows your business.
        </p>
        <a
        href="/contact"
        className="bg-white text-blue-700 px-10 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
        >
          Get Started Today
        </a>
      </section>
    </div>
  );
};

export default HeadingStaticWebPage;
