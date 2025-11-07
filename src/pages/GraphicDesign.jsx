import React from "react";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import Graphic1 from "../images/graphics1.jpg";
import Graphic2 from "../images/graphics2.webp";
import Graphic3 from "../images/graphic3.jpg";
import Graphic4 from "../images/graphics4.jpg";
import Graphic5 from "../images/graphics5.jpg";
import Graphic6 from "../images/graphics6.webp";

export default function GraphicDesign() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <PageWrapper title="Graphic Design Services">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 space-y-24">

        {/* Intro Section */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <div className="flex flex-col items-center">
            <img
              src={Graphic2}
              alt="Graphic Design Intro"
              className="rounded-3xl shadow-lg mb-10 w-full max-w-4xl h-72 object-cover"
            />
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-400 leading-relaxed">
              At <strong className="text-teal-600">CodeFloor IT</strong>, we design visuals that make your brand
              unforgettable. From <strong>logos</strong> and <strong>brand identity</strong> to
              <strong> marketing materials</strong> and <strong>digital graphics</strong>, our creative
              solutions help your business stand out and connect with your audience.
            </p>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          className="grid md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { img: Graphic1, title: "Logo & Brand Identity", desc: "Craft unique logos and brand systems that reflect your vision and values." },
            { img: Graphic3, title: "Marketing Collateral", desc: "Design brochures, flyers, and posters that deliver your message effectively." },
            { img: Graphic4, title: "Digital Graphics", desc: "Eye-catching social media designs, banners, and infographics for your campaigns." },
            { img: Graphic5, title: "Packaging Design", desc: "Creative packaging that enhances your product’s appeal and customer experience." },
            { img: Graphic6, title: "UI Graphics & Illustrations", desc: "Modern illustrations and icons for web and mobile apps." },
            { img: Graphic2, title: "Presentation Design", desc: "Professional presentation designs that tell your story visually." },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              custom={i}
              className="relative p-6 bg-gradient-to-r from-[#004a64] to-[#007b8f] text-white rounded-3xl shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover rounded-2xl mb-4"
              />
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-100">{item.desc}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Design Philosophy */}
        <motion.section
          className="bg-[#e6f2f7] p-12 rounded-3xl text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-4xl font-bold text-[#004a64] mb-6">Our Design Philosophy</h2>
          <p className="max-w-3xl mx-auto text-gray-700 text-lg">
            Great design tells a story. Our approach blends <strong>creativity, strategy, and emotion</strong> 
            to ensure every visual expresses your brand’s identity and connects deeply with your audience.
          </p>
        </motion.section>

        {/* Industries Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-teal-400 mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Healthcare", "Finance", "Education",
              "Technology", "Retail & E-commerce", "Travel & Hospitality",
            ].map((industry, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                className="p-8 bg-white rounded-3xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-[#004a64] mb-2">{industry}</h3>
                <p className="text-gray-600 text-sm">
                  Tailored design solutions for the {industry} sector.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Case Studies */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-teal-400 mb-12 text-center">
            Case Studies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: Graphic2, title: "LuxeWear Brand Identity", desc: "Developed logo, color palette, and branding elements for a luxury fashion brand." },
              { img: Graphic3, title: "GreenLife Social Media", desc: "Created engaging infographics and visuals for an eco-friendly campaign." },
              { img: Graphic4, title: "SnackCo Packaging", desc: "Designed creative packaging that increased brand visibility and sales." },
            ].map((caseStudy, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                className="p-6 bg-gradient-to-r from-[#004a64] to-[#007b8f] text-white rounded-2xl shadow-lg hover:scale-105 transition"
              >
                <img
                  src={caseStudy.img}
                  alt={caseStudy.title}
                  className="w-full h-52 object-cover rounded-xl mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2">{caseStudy.title}</h3>
                <p>{caseStudy.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          className="bg-[#e6f2f7] p-12 rounded-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-4xl font-bold text-[#004a64] mb-10 text-center">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "John Doe", feedback: "CodeFloor IT elevated our brand design beyond expectations!" },
              { name: "Emily Smith", feedback: "Beautiful designs, fast delivery, and an amazing team to work with!" },
              { name: "Michael Brown", feedback: "Creative and professional — they made our brand stand out!" },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <p className="italic mb-4 text-gray-700">
                  "{testimonial.feedback}"
                </p>
                <p className="font-semibold text-[#004a64]">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Let’s create a brand identity that leaves a lasting impression.
          </p>
          <a
            href="/contact"
            className="bg-[#004a64] text-white px-10 py-3 rounded-xl hover:bg-[#007b8f] transition"
          >
            Start Your Project
          </a>
        </motion.section>

        {/* FAQ */}
        <motion.section
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-4xl font-bold text-teal-400 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-left">
            {[
              { q: "What design services do you offer?", a: "We provide logo design, branding, print design, packaging, and digital graphics." },
              { q: "Can you handle big branding projects?", a: "Yes, we have experience handling large-scale and enterprise-level branding." },
              { q: "Will I get source files?", a: "Absolutely. You’ll receive all necessary source files and brand assets." },
              { q: "How long will it take?", a: "Typically between 2–8 weeks depending on project size and complexity." },
            ].map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                className="p-6 bg-white rounded-2xl shadow"
              >
                <p className="font-semibold text-[#004a64] mb-2">{faq.q}</p>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </PageWrapper>
  );
}
