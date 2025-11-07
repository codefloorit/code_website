import React from "react";
import {
  FaEnvelopeOpenText,
  FaBullhorn,
  FaChartBar,
  FaUserFriends,
  FaMailBulk,
  FaRobot,
  FaClock,
  FaSmile,
  FaCheckCircle,
  FaTools,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const EmailMarketing = () => {
  const features = [
    {
      icon: <FaEnvelopeOpenText />,
      title: "Personalized Campaigns",
      desc: "Deliver tailored messages to every subscriber using behavioral data and segmentation. Personalization increases open rates and conversions significantly.",
      img: "https://img.freepik.com/free-photo/message-online-chat-social-text-concept_53876-122734.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      icon: <FaBullhorn />,
      title: "Promotional Campaigns",
      desc: "Announce offers, product launches, and special events through beautifully designed promotional emails that drive sales and engagement.",
      img: "https://media.istockphoto.com/id/1401461127/photo/hand-of-businessman-using-smartphone-for-email-with-notification-alert.jpg?s=612x612&w=0&k=20&c=s9nSBMOSkKKaKkUlRfpmfVGKYTfYMixbYPDQsdfk4NQ=",
    },
    {
      icon: <FaChartBar />,
      title: "Analytics & Reporting",
      desc: "Monitor open rates, clicks, and conversions in real time. Our analytics give you the insights needed to improve every campaign you run.",
      img: "https://buddyinfotech.in/blog/wp-content/uploads/2024/10/email-marketing-for-course-creators.jpg",
    },
    {
      icon: <FaUserFriends />,
      title: "Subscriber Management",
      desc: "Organize your audience effectively with advanced segmentation tools that allow targeted communication based on interests and engagement.",
      img: "https://www.shutterstock.com/shutterstock/videos/3676698645/thumb/7.jpg?ip=x480",
    },
    {
      icon: <FaMailBulk />,
      title: "Automated Workflows",
      desc: "From welcome emails to re-engagement sequences, automation helps you save time while maintaining consistent communication.",
      img: "https://www.isearchsolution.com/blog/wp-content/uploads/2018/05/Email-Marketing.jpg",
    },
    {
      icon: <FaRobot />,
      title: "AI-Based Optimization",
      desc: "Use smart AI tools to predict the best sending times, subject lines, and audience behavior for higher conversion results.",
      img: "https://webinpatna.com/images/about/best-email-marketing-company-patna.png",
    },
  ];

  const benefits = [
    {
      icon: <FaSmile />,
      title: "Customer Retention",
      desc: "Keep customers informed, engaged, and loyal through regular, value-driven updates.",
    },
    {
      icon: <FaClock />,
      title: "Time-Saving Automation",
      desc: "Automate repetitive tasks, schedule campaigns, and focus on business growth.",
    },
    {
      icon: <FaChartBar />,
      title: "High ROI",
      desc: "Email marketing consistently delivers one of the highest ROI across all digital channels.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 font-poppins">
      {/* HERO SECTION */}
      <section className="bg-[#004a64] text-white py-20 text-center px-6 md:px-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Email Marketing Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl opacity-90">
          Build lasting relationships, drive engagement, and increase sales with
          powerful and personalized email marketing campaigns.
        </p>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="py-16 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#004a64] mb-6">
          Why Choose Email Marketing?
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
          Email marketing remains one of the most cost-effective and reliable
          digital channels. It ensures direct contact with your audience,
          enabling personalized engagement that social platforms cannot always
          guarantee. Whether you’re nurturing leads, promoting products, or
          growing brand loyalty, email drives measurable results and lasting
          connections.
        </p>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-12 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#004a64] mb-10">
            What We Offer
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {features.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-[#004a64]/10 p-4 rounded-full text-[#004a64] text-3xl hover:bg-[#004a64] hover:text-white transition">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#004a64] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="bg-[#004a64] text-white py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Our Campaign Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Planning", desc: "Define your goals, audience & tone." },
              { title: "Design & Copy", desc: "Create high-converting templates." },
              { title: "Automation", desc: "Setup smart drip workflows." },
              { title: "Analysis", desc: "Track open rates & engagement." },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white text-[#004a64] p-6 rounded-xl shadow-md hover:bg-gray-50 transition"
              >
                <h3 className="text-2xl font-bold mb-3">
                  Step {i + 1}
                </h3>
                <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004a64] mb-8">
            Key Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="flex flex-col items-start bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <div className="bg-[#004a64]/10 p-4 rounded-full mb-4 text-[#004a64] text-2xl hover:bg-[#004a64] hover:text-white transition">
                  {b.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#004a64] mb-2">
                  {b.title}
                </h3>
                <p className="text-gray-600 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS SECTION */}
      <section className="py-16 px-6 md:px-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-[#004a64] mb-8">
          Tools We Use
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {["Mailchimp", "SendinBlue", "HubSpot", "ActiveCampaign", "Klaviyo", "ConvertKit"].map(
            (tool, i) => (
              <div
                key={i}
                className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg text-[#004a64] font-semibold text-lg transition"
              >
                <FaTools className="mx-auto text-3xl mb-2" />
                {tool}
              </div>
            )
          )}
        </div>
      </section>

      

      {/* CTA SECTION */}
      <section className="bg-[#004a64] text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Boost Your Conversions?
        </h2>
        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
          Take your email marketing strategy to the next level with our
          data-driven campaigns and creative storytelling.
        </p>
        <Link
        to="/contact"
        className="bg-white text-[#004a64] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-md"
        >
          Let’s Get Started
        </Link>
      </section>
    </div>
  );
};

export default EmailMarketing;
