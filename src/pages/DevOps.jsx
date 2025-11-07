// src/pages/DevOpsDevelopment.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaAws,
  FaDocker,
  FaGithub,
  FaCloud,
  FaCogs,
  FaBell,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";
import { SiKubernetes } from "react-icons/si"; // ✅ Correct Kubernetes icon

import heroImg from "../images/devops-hero.jpg";
import project1 from "../images/devops-Devops1.png";
import project2 from "../images/devops-Devops2.png";
import project3 from "../images/androidapp3.png";
import teamImg from "../images/devops-team.jpg";

export default function DevOpsDevelopment() {
  const [open, setOpen] = useState(null);

  const features = [
    {
      icon: <FaCogs className="text-[#003b53] text-3xl" />,
      title: "Infrastructure as Code",
      text: "Automate infrastructure provisioning using Terraform/CloudFormation for predictable, versioned environments.",
    },
    {
      icon: <FaDocker className="text-[#003b53] text-3xl" />,
      title: "Containerization",
      text: "Containerize apps with Docker for reproducible builds, portability, and simplified dependency management.",
    },
    {
      icon: <SiKubernetes className="text-[#003b53] text-3xl" />,
      title: "Kubernetes Orchestration",
      text: "Deploy, scale, and self-heal applications with Kubernetes for production-grade resilience.",
    },
    {
      icon: <FaGithub className="text-[#003b53] text-3xl" />,
      title: "CI / CD Pipelines",
      text: "Automated pipelines (GitHub Actions, Jenkins, GitLab CI) to build, test, and deliver rapidly & reliably.",
    },
    {
      icon: <FaShieldAlt className="text-[#003b53] text-3xl" />,
      title: "Security & Compliance",
      text: "Shift-left security, secrets management, vulnerability scanning, and compliance automation.",
    },
    {
      icon: <FaCloud className="text-[#003b53] text-3xl" />,
      title: "Cloud Native Architecture",
      text: "Design cloud-native, cost-optimized solutions for AWS, GCP, or Azure with observability baked-in.",
    },
  ];

  const tools = [
    { name: "Docker", icon: <FaDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "GitHub Actions", icon: <FaGithub /> },
    { name: "Prometheus", icon: <FaBell /> },
    { name: "Grafana", icon: <FaServer /> },
  ];

  const projects = [
    {
      title: "Platform CI/CD Modernization",
      tag: "CI/CD",
      desc: "Moved legacy builds to a scalable GitHub Actions pipeline — build times cut by 70%.",
      img: project1,
    },
    {
      title: "K8s Multi-cluster Deployment",
      tag: "Kubernetes",
      desc: "Designed multi-cluster architecture with automated failover and blue/green deployments.",
      img: project2,
    },
    {
      title: "Cloud Cost Optimization",
      tag: "Cloud",
      desc: "Performed rightsizing, Reserved Instances, and infra automation — reduced monthly spend by 38%.",
      img: project3,
    },
  ];

  const faqs = [
    {
      q: "What is DevOps?",
      a: "DevOps integrates culture, automation, and tools to improve development and operations collaboration.",
    },
    {
      q: "Which cloud providers do you work with?",
      a: "We work with AWS, GCP, and Azure — designing cloud-native, secure architectures.",
    },
    {
      q: "Do you offer managed DevOps services?",
      a: "Yes — we provide 24/7 managed infra, monitoring, and incident response.",
    },
  ];

  return (
    <div className="font-sans text-[#003b53]">
      {/* HERO SECTION */}
      <header className="relative bg-[#003b53] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight animate-fadeInUp">
              DevOps Development & Cloud Engineering
            </h1>
            <p className="text-lg md:text-xl text-blue-50 max-w-2xl animate-fadeInUp delay-100">
              Accelerate delivery, improve reliability, and secure your software
              lifecycle with enterprise-grade DevOps — pipelines, containers,
              IaC, and observability.
            </p>

            <div className="flex flex-wrap gap-4 animate-fadeInUp delay-200">
              <Link
                to="/contact"
                className="bg-yellow-400 text-[#003b53] font-semibold px-6 py-3 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition"
              >
                Get a Free Assessment
              </Link>
              <a
                href="#projects"
                className="border border-white/40 px-5 py-3 rounded-lg hover:bg-white/10 transition"
              >
                View Projects →
              </a>
            </div>
          </div>

          <div className="relative animate-fadeIn">
            <img
              src={heroImg}
              alt="DevOps hero"
              className="w-full rounded-2xl shadow-2xl object-cover transform hover:scale-105 transition duration-500"
            />
            <div className="absolute -top-8 -left-8 bg-yellow-400 rounded-full w-20 h-20 opacity-70 animate-pulse hidden md:block" />
            <div className="absolute -bottom-8 -right-8 bg-white rounded-full w-28 h-28 opacity-10 hidden lg:block" />
          </div>
        </div>
      </header>

      {/* FEATURES SECTION */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Our Core DevOps Capabilities
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-gradient-to-tr from-white to-gray-50 border p-6 rounded-2xl shadow hover:shadow-lg hover:-translate-y-2 transition"
              >
                <div className="w-14 h-14 rounded-lg bg-white flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS SECTION */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#eef2ff] to-[#f8fafc]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Tools & Platform Expertise
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tools.map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white p-4 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="text-2xl text-[#003b53]">{t.icon}</div>
                <div className="font-medium">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Recent Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-5">
                  <div className="text-sm text-yellow-500 font-semibold mb-2">
                    {p.tag}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM / WHY US */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Our DevOps Team?
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li>✅ Proven track record — successful enterprise migrations</li>
              <li>✅ Security-first automation & compliance</li>
              <li>✅ 24/7 support & managed DevOps operations</li>
            </ul>
          </div>
          <div>
            <img
              src={teamImg}
              alt="DevOps Team"
              className="rounded-2xl shadow-lg w-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="contact" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Frequently Asked</h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-lg shadow-sm cursor-pointer border"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{f.q}</span>
                    <span className="text-xl text-[#003b53]">
                      {open === i ? "−" : "+"}
                    </span>
                  </div>
                  {open === i && (
                    <p className="mt-3 text-gray-600 animate-fadeIn">{f.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CONTACT FORM */}
          <form className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
            <h2 className="text-3xl font-bold mb-4">
              Contact Our DevOps Team
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                className="border p-3 rounded"
                placeholder="Name *"
                required
              />
              <input
                className="border p-3 rounded"
                placeholder="Company Email *"
                required
              />
            </div>
            <input className="border p-3 rounded w-full" placeholder="Phone" />
            <select className="border p-3 rounded w-full">
              <option>Service Interested</option>
              <option>CI/CD Pipelines</option>
              <option>Kubernetes & Orchestration</option>
              <option>Managed DevOps</option>
            </select>
            <textarea
              className="border p-3 rounded w-full"
              rows="4"
              placeholder="Message *"
            ></textarea>
            <button className="bg-[#003b53] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#005080] transition">
              Send Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
