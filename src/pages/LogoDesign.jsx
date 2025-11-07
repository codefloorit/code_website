import React from "react";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

export default function LogoDesign() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const logoImages = [
    "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740&q=80",
    "https://static.vecteezy.com/system/resources/previews/047/709/839/non_2x/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcResPTE5ZRpyOcxdmbQAcpym57RuLMTuGlP1UyyVB9VVeWtywx5pvKbVBPvCfcmEgI1ke4&usqp=CAU",
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/simple-logo-template-design-8c31540f0172a12551edf53ecc699a5b_screen.jpg?ts=1699477440",
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dance-logo-design-template-04a30b9ecc9e71ffe5e84ae044d2ec4c_screen.jpg?ts=1686802058",
    "https://i.pinimg.com/736x/71/b3/e4/71b3e4159892bb319292ab3b76900930.jpg",
  ];

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">

        {/* Intro Section */}
        <motion.section
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-5xl font-bold mb-6 text-[#00e2c0]">
            Professional Logo Design
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            At <strong className="text-[#00e2c0]">CodeFloor IT</strong>, we design logos that speak your brand’s language. 
            Whether you’re launching a startup or redefining an enterprise identity, 
            our creative team delivers timeless, scalable, and impactful designs.
          </p>
        </motion.section>

        {/* Image Gallery */}
        <motion.section
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {logoImages.map((img, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              custom={i}
              className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={img}
                alt={`Logo Design ${i + 1}`}
                className="w-full h-72 object-cover"
              />
            </motion.div>
          ))}
        </motion.section>

        {/* Services Section */}
        <motion.section
          className="grid md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { title: "Custom Logo Design", desc: "Tailor-made logos that represent your brand’s uniqueness and identity." },
            { title: "Brand Identity Design", desc: "Complete brand kits with colors, typography, and iconography." },
            { title: "Minimalist & Modern Logos", desc: "Clean and flexible designs that work perfectly across media." },
            { title: "Illustrative Logos", desc: "Creative and detailed illustrations that capture your story." },
            { title: "Typography Logos", desc: "Elegant wordmarks and lettering crafted for timeless appeal." },
            { title: "Logo Redesign", desc: "Revamp your existing logo to suit evolving markets and trends." },
          ].map((service, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              custom={i}
              className="p-8 rounded-3xl bg-gradient-to-r from-[#004a64] to-[#007b8f] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-100">{service.desc}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Process Section */}
        <motion.section
          className="bg-[#e6f2f7] p-12 rounded-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#004a64] mb-12 text-center">
            Our Logo Design Process
          </h2>
          <div className="grid md:grid-cols-5 gap-6 text-center">
            {[
              { step: "1", title: "Research", desc: "We understand your goals, audience, and brand essence." },
              { step: "2", title: "Concepts", desc: "Sketching multiple creative logo directions for review." },
              { step: "3", title: "Refinement", desc: "Polishing the selected logo with precision and detail." },
              { step: "4", title: "Delivery", desc: "Final logo delivered in all digital and print formats." },
              { step: "5", title: "Brand Kit", desc: "Complete brand guidelines for consistent identity usage." },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
              >
                <div className="text-4xl font-bold text-[#004a64] mb-2">{step.step}</div>
                <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.desc}</p>
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
          <h2 className="text-4xl font-bold text-[#00e2c0] mb-12 text-center">
            Case Studies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "EcoLife Brand", desc: "Created a sustainable green logo that resonated with eco-conscious customers." },
              { title: "LuxeWear Identity", desc: "Designed an elegant and premium identity for a high-end fashion label." },
              { title: "TechNova Logo", desc: "Developed a futuristic identity aligning with tech innovation." },
            ].map((caseStudy, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                className="p-6 bg-gradient-to-r from-[#004a64] to-[#00b4a1] text-white rounded-2xl shadow-lg hover:scale-105 transition"
              >
                <h3 className="text-2xl font-bold mb-2">{caseStudy.title}</h3>
                <p>{caseStudy.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          className="bg-[#e6f2f7] p-12 rounded-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#004a64] mb-10 text-center">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "John Doe", feedback: "The new logo helped us rebrand and grow customer trust instantly!" },
              { name: "Sarah Johnson", feedback: "They understood our vision perfectly and delivered beyond expectations." },
              { name: "Michael Brown", feedback: "Professional and creative — our logo became the talk of the industry!" },
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

        {/* CTA */}
        <motion.section
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#00e2c0] mb-4">
            Ready to Build a Memorable Brand?
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Let’s craft a logo that speaks volumes about your brand and builds lasting recognition.
          </p>
          <a
            href="/contact"
            className="bg-[#004a64] text-white px-10 py-3 rounded-xl hover:bg-[#007b8f] transition"
          >
            Start Your Project
          </a>
        </motion.section>
      </div>
    </PageWrapper>
  );
}
