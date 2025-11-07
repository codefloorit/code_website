import React from "react";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

export default function AppDesign() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: { duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
    },
  };

  return (
    <PageWrapper
      title="App Design & UI/UX Services"
      subtitle="Create interactive, user-focused apps that delight and convert."
    >
      {/* Floating Animated Background Shapes */}
      <motion.div
        variants={floatingVariants}
        animate="float"
        className="absolute top-20 left-10 w-24 h-24 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
      />
      <motion.div
        variants={floatingVariants}
        animate="float"
        className="absolute bottom-32 right-20 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
      />

      <div className="relative z-10 max-w-7xl mx-auto text-gray-700 space-y-24 px-6 py-16">

        {/* Intro */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-500 leading-relaxed">
            At <strong className="text-teal-500">CodeFloor IT</strong>, we craft mobile and web applications
            that aren’t just visually stunning—they’re intuitive, engaging, and built to convert.
            From concept to launch, we combine design thinking, user experience strategy, and cutting-edge
            technology to create apps your users will love.
          </p>
        </motion.section>

        {/* Services with Creative Hover */}
        <motion.section
          className="grid md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { title: "UI/UX Design", desc: "User-centered interfaces for mobile & web apps." },
            { title: "Prototyping", desc: "Interactive prototypes to visualize and validate ideas." },
            { title: "Mobile App Design", desc: "iOS & Android apps optimized for performance & usability." },
            { title: "Web App Design", desc: "Responsive web apps that delight users on every device." },
            { title: "App Redesign", desc: "Revitalize old apps with modern design trends & usability." },
            { title: "Enterprise Apps", desc: "Complex business apps built for scalability and security." },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              custom={i}
              className="relative p-8 bg-gradient-to-r from-teal-400 to-purple-500 text-white rounded-3xl shadow-lg overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-100">{item.desc}</p>
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/20 rounded-full blur-xl"
              />
            </motion.div>
          ))}
        </motion.section>

        {/* App Design Process with Step Cards */}
        <motion.section
          className="mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-teal-600 mb-12 text-center">Our App Design Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Research", desc: "Analyze users, competitors, and market trends." },
              { step: "2", title: "Wireframing", desc: "Blueprints of app screens and flow." },
              { step: "3", title: "UI Design", desc: "Visually stunning interfaces aligned with your brand." },
              { step: "4", title: "Prototyping", desc: "Interactive demos to gather early feedback." },
              { step: "5", title: "Testing", desc: "Usability testing for perfect user experience." },
              { step: "6", title: "Launch & Support", desc: "Deploy & maintain apps with ongoing updates." },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                className="relative p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-teal-100/60 rounded-full blur-2xl animate-pulse"></div>
                <div className="text-4xl font-bold text-teal-600 mb-3">{step.step}</div>
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tools Section with Gradient Cards */}
        <motion.section
          className="mt-32 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-teal-600 mb-10">Tools & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {["Figma", "Adobe XD", "Sketch", "InVision", "React Native", "Flutter", "Swift/Kotlin", "Tailwind CSS"].map((tool, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-r from-teal-400 to-purple-500 text-white p-6 rounded-2xl shadow-xl transition-all duration-300"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              title: "UI/UX Design",
              desc: "Intuitive, user-centered interfaces that enhance engagement.",
              img: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg",
            },
            {
              title: "Prototyping",
              desc: "Interactive prototypes that bring ideas to life before development.",
              img: "https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_1280.jpg",
            },
            {
              title: "Mobile App Design",
              desc: "Elegant and fast-performing iOS and Android apps.",
              img: "https://img.freepik.com/free-photo/smartphone-with-user-interface-concept_52683-104212.jpg?t=st=1760013725~exp=1760017325~hmac=96948fea5a5bf4cbd3844d5e5eefc82087d86897ebeee35eeabc99165305f93f",
            },
            {
              title: "Web App Design",
              desc: "Responsive web experiences that captivate users on any device.",
              img: "https://media.istockphoto.com/id/1503858430/vector/website-software-development-concept-web-design-site-and-mobile-app-on-laptop-testing-on.jpg?s=612x612&w=0&k=20&c=k8ckKsgOrPPxohAA_ywg2VXZzdCPptEbOlleRV8Kb7c=",
            },
            {
              title: "App Redesign",
              desc: "Transform outdated designs into modern, high-performing experiences.",
              img: "https://img.freepik.com/premium-vector/design-studio-mobile-app-screens-template-social-networks-stories_9209-4252.jpg?semt=ais_hybrid&w=740&q=80",
            },
            {
              title: "Enterprise Apps",
              desc: "Scalable, secure, and performance-optimized enterprise solutions.",
              img: "https://acropolium.com/img/articles/enterprise-mobile-app-development/img05.jpg",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              custom={i}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-500 hover:-translate-y-2"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-contain bg-[#f8f9fa]"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-[#004a64] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="mt-32 bg-gradient-to-r from-teal-500 to-purple-500 py-24 text-center rounded-3xl text-white relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"
          />
          <motion.div
            className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"
          />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build a Stunning App?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Let’s design interactive and high-performing apps that your users will love and remember.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 30px rgba(255,255,255,0.5)" }}
            className="bg-white text-teal-600 px-12 py-4 rounded-full font-bold transition-all duration-300 inline-block"
          >
            Start Your Project
          </motion.a>
        </motion.section>
      </div>
    </PageWrapper>
  );
}
