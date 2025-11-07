import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaShieldAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;
    const phoneNumber = "919928965676"; // ✅ Admin business WhatsApp number
    const text = `📩 New Message from Website:\n\n👤 Name: ${name}\n📧 Email: ${email}\n📝 Subject: ${subject}\n💬 Message: ${message}`;

    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="overflow-x-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="bg-[#003b53] text-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch With Us
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to learn more about our services?
            Reach out to us today. Fill out the form, call, or email — we are
            here to help your business grow.
          </p>
        </div>
      </section>

      {/* ===== CONTACT FORM & INFO ===== */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-[#003b53] mb-6">
              Send a Message
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00bcd4]"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00bcd4]"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00bcd4]"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00bcd4]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#00bcd4] text-[#003b53] font-semibold px-6 py-3 rounded-lg hover:bg-[#0099aa] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-[#003b53] text-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="flex items-start mb-4">
                <FaMapMarkerAlt className="text-[#00bcd4] text-xl mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-lg">Address</h3>
                  <p className="text-gray-200">Satellite, Ahmedabad, Gujarat</p>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <FaPhoneAlt className="text-[#00bcd4] text-xl mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-200">+91 9928965676</p>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <FaEnvelope className="text-[#00bcd4] text-xl mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-200">info@codefloorit.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaClock className="text-[#00bcd4] text-xl mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-lg">Opening Hours</h3>
                  <p className="text-gray-200">Mon - Sat: 10:00 AM - 7:00 PM</p>
                  <p className="text-gray-200">Sun: Week Off</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-[#003b53] mb-4">
                Why Choose Us?
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li>✅ Experienced & Skilled Team</li>
                <li>✅ High-Quality Web & Mobile Solutions</li>
                <li>✅ Timely Delivery & Support</li>
                <li>✅ Affordable & Transparent Pricing</li>
              </ul>
            </div>

            {/* Support Promise */}
            <div className="bg-[#003b53] text-white p-8 rounded-xl shadow-lg flex items-center gap-4">
              <FaShieldAlt className="text-[#00bcd4] text-3xl" />
              <div>
                <h3 className="text-xl font-bold">Our Support Promise</h3>
                <p className="text-gray-200 text-sm">
                  24/7 assistance, post-launch maintenance, and a dedicated
                  support team to ensure your success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EMBEDDED MAP ===== */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-[#e0f7fa] to-white">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#003b53] text-center mb-10"
        >
          Find Us Here
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto relative rounded-2xl overflow-hidden shadow-2xl border-4 border-transparent bg-clip-border bg-gradient-to-r from-[#00bcd4] to-[#004a64]"
        >
          <iframe
            title="Codefloor IT Tech LLP Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.4470845120573!2d72.50919377491246!3d23.030476915642383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b353bc60d91%3A0xd5e48ea22ff8d924!2sSatellite%2C%20Ahmedabad%2C%20Gujarat%20380015!5e0!3m2!1sen!2sin!4v1699392273223!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "none" }}
            allowFullScreen=""
            loading="lazy"
            className="w-full rounded-xl"
          ></iframe>

          {/* Company Info Overlay */}
          <div className="absolute bottom-6 left-6 bg-white/90 text-[#003b53] p-4 rounded-xl shadow-lg backdrop-blur-md">
            <h3 className="font-bold text-lg">Codefloor IT Tech</h3>
            <p className="text-sm">Satellite, Ahmedabad, Gujarat, India</p>
            <p className="text-sm mt-1">📞 +91 9928965676</p>
            <p className="text-sm">✉️ info@codefloorit.com</p>
          </div>
        </motion.div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="bg-[#003b53] text-white py-16 px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-300 mb-6">
          Get the latest updates, tips, and offers delivered straight to your inbox.
        </p>
        <form className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-[#00bcd4] text-white border"
          />
          <button
            type="submit"
            className="bg-[#00bcd4] text-[#003b53] font-semibold px-6 py-3 rounded-lg hover:bg-[#0099aa] transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
