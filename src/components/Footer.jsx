import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import Logo from "../images/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#003b53] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">

        {/* ======= Top Section ======= */}
        <div className="flex flex-wrap justify-between items-start gap-8 md:gap-12">

          {/* Logo */}
          <div className="w-full sm:w-1/2 md:w-1/4 text-center md:text-left">
          <Link to="/">
            <img
              src={Logo}
              alt="CodeFloor Logo"
              className="mx-auto md:mx-0 w-36 h-auto"
            />
            </Link>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              Innovative digital solutions for businesses worldwide.
            </p>
          </div>

          {/* What We Do */}
          <div className="w-1/2 sm:w-1/2 md:w-1/5">
            <h3 className="font-semibold mb-3 text-[#00bcd4]">What We Do</h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li><a href="/android-app">Android Development</a></li>
              <li><a href="/ios-app">iOS Development</a></li>
              <li><a href="react-web">React Web Development</a></li>
              <li><a href="/shopify">Shopify Development</a></li>
              <li><a href="/e-commerce">Ecommerce Development</a></li>
            </ul>
          </div>

          {/* Marketing */}
          <div className="w-1/2 sm:w-1/2 md:w-1/5">
            <h3 className="font-semibold mb-3 text-[#00bcd4]">Marketing</h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li><a href="/seo-setup">SEO Setup</a></li>
              <li><a href="/content-marketing">Content Marketing</a></li>
              <li><a href="/mail-marketing">E-Mail Marketing</a></li>
              <li><a href="/social-marketing">Social Media Marketing</a></li>
            </ul>
          </div>

          {/* About */}
          <div className="w-1/2 sm:w-1/2 md:w-1/5">
            <h3 className="font-semibold mb-3 text-[#00bcd4]">About Us</h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li><a href="/about">Portfolio</a></li>
              <li><a href="/contact">Contact US</a></li>
              <li><a href="/terms-conditions">Terms & Condition</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* ======= Bottom Section ======= */}
        <div className="flex flex-wrap justify-between items-center gap-6 border-t border-[#00506b] pt-6">

          {/* Contact */}
          <div className="text-sm text-gray-300 space-y-1">
            <p><a href="tel:+919928965676" className="hover:text-[#00bcd4]">+91 - 9928965676</a></p>
            <p><a href="mailto:info@codefloorit.com" className="hover:text-[#00bcd4]">info@codefloorit.com</a></p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 justify-center">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaGithub].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white text-sm transition-all duration-300 hover:bg-[#00bcd4] hover:text-[#003b53] hover:scale-105"
                >
                  <Icon />
                </a>
              )
            )}
          </div>

          {/* Address */}
          <div className="text-gray-300 text-sm text-center md:text-right leading-relaxed">
            <p>Satellite, Ahmedabad,</p>
            <p>Gujarat, India</p>
            <p><a href="tel:+91 9928965676" className="hover:text-[#00bcd4]">+91 9828965676</a></p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-xs mt-6">
          © 2025 CodeFloor IT Tech | 
          <a href="/contact" className="text-[#00bcd4] hover:underline ml-1">Contact Us</a> |
          <a href="/privacy-policy" className="text-[#00bcd4] hover:underline ml-1">Privacy Policy</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
