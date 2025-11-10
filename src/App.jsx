import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

// Mobile & App Development
import WhatsAppIntegration from "./pages/WhatsappChat";
import FlutterAppDevelopment from "./pages/FlutterApp";
import AndroidAppDevelopment from "./pages/AndroidApp";
import IOSDevelopment from "./pages/iOSApp";
import DevOpsDevelopment from "./pages/DevOps";
import NativeDevelopment from "./pages/ReactNative";

// Website Development
import PHPWeb from "./pages/PHPWeb";
import ReactWeb from "./pages/ReactWeb";
import HTMLWeb from "./pages/HTMLWeb";
import JavaWeb from "./pages/JavaWeb";
import LaravelWeb from "./pages/LaravelWeb";
import WordPressWeb from "./pages/WordPress";

// E-commerce
import Shopify from "./pages/Shopify";
import WooCommerce from "./pages/WooCommerce";
import Ecommerce from "./pages/Ecommerce";
import Maintenance from "./pages/Maintenance";

// Website Development
import WebDesign from "../src/pages/WebDesign";
import AppDesign from "./pages/AppDesign";
import UIUXDesign from "./pages/uiux";
import FigmaDesign from "./pages/figma";
import GraphicDesign from "./pages/GraphicDesign";
import LogoDesign from "./pages/LogoDesign";

// Web Pages
import StaticPage from "./pages/StaticWeb";
import DynamicPage from "./pages/DynamicWeb";
import SinglePageApp from "./pages/SinglePage";
import MultiplePageApp from "./pages/MultiplePage";
import AnimatedWebApp from "./pages/AnimatedWeb";
import PortfolioWebPage from "./pages/PortfolioWeb";

// Marketing Pages
import DigitalMarketing from "./pages/DigitalMarketing";
import SocialMarketing from "./pages/SocialMedia";
import SEO from "./pages/SEOSetup";
import ContentMarketing from "./pages/Content";
import Email from "./pages/Mail";

import Policies from "./components/Policies";
import TermsCondition from "./pages/termsCondition";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        {/* Main Pages */}
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />

        {/* Mobile / App Development */}
        <Route path="/whatsapp-chat" element={<PageWrapper><WhatsAppIntegration /></PageWrapper>} />
        <Route path="/flutter-app" element={<PageWrapper><FlutterAppDevelopment /></PageWrapper>} />
        <Route path="/android-app" element={<PageWrapper><AndroidAppDevelopment /></PageWrapper>} />
        <Route path="/ios-app" element={<PageWrapper><IOSDevelopment /></PageWrapper>} />
        <Route path="/dev-Ops" element={<PageWrapper><DevOpsDevelopment /></PageWrapper>} />
        <Route path="/native-app" element={<PageWrapper><NativeDevelopment /></PageWrapper>} />

        {/* Website Development */}
        <Route path="/php-web" element={<PageWrapper><PHPWeb /></PageWrapper>} />
        <Route path="/react-web" element={<PageWrapper><ReactWeb /></PageWrapper>} />
        <Route path="/html-web" element={<PageWrapper><HTMLWeb /></PageWrapper>} />  
        <Route path="/java-web" element={<PageWrapper><JavaWeb /></PageWrapper>} />
        <Route path="/laravel-web" element={<PageWrapper><LaravelWeb /></PageWrapper>} />
        <Route path="/wordpress-web" element={<PageWrapper><WordPressWeb /></PageWrapper>} />

        {/* Web Pages */}
        <Route path="/static-page" element={<PageWrapper><StaticPage /></PageWrapper>} />  
        <Route path="/dynamic-page" element={<PageWrapper><DynamicPage /></PageWrapper>} />
        <Route path="/singleweb-page" element={<PageWrapper><SinglePageApp /></PageWrapper>} />
        <Route path="/multiple-page" element={<PageWrapper><MultiplePageApp /></PageWrapper>} />
        <Route path="/animated-page" element={<PageWrapper><AnimatedWebApp /></PageWrapper>} />
        <Route path="/portfolio-page" element={<PageWrapper><PortfolioWebPage /></PageWrapper>} />

        
        {/* Design */}
        <Route path="/web-design" element={<PageWrapper><WebDesign /></PageWrapper>} />
        <Route path="/app-design" element={<PageWrapper><AppDesign /></PageWrapper>} />
        <Route path="/uiux-design" element={<PageWrapper><UIUXDesign /></PageWrapper>} />
        <Route path="/figma-design" element={<PageWrapper><FigmaDesign /></PageWrapper>} />
        <Route path="/graphic-design" element={<PageWrapper><GraphicDesign /></PageWrapper>} />
        <Route path="/logo-design" element={<PageWrapper><LogoDesign /></PageWrapper>} />

         {/* E-commerce */}
        <Route path="/shopify" element={<PageWrapper><Shopify /></PageWrapper>} />
        <Route path="/woo-commerce" element={<PageWrapper><WooCommerce /></PageWrapper>} />
        <Route path="/e-commerce" element={<PageWrapper><Ecommerce /></PageWrapper>} />
        <Route path="/maintenance" element={<PageWrapper><Maintenance /></PageWrapper>} />

        {/* Marketing Pages */}
        <Route path="/digital-marketing" element={<PageWrapper><DigitalMarketing /></PageWrapper>} />
        <Route path="/social-marketing" element={<PageWrapper><SocialMarketing /></PageWrapper>} />
        <Route path="/seo-setup" element={<PageWrapper><SEO /></PageWrapper>} />
        <Route path="/content-marketing" element={<PageWrapper><ContentMarketing /></PageWrapper>} />
        <Route path="/mail-marketing" element={<PageWrapper><Email /></PageWrapper>} />

        <Route path="/privacy-policy" element={<PageWrapper><Policies /></PageWrapper>} />
        <Route path="/terms-conditions" element={<PageWrapper><TermsCondition /></PageWrapper>} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

// Page wrapper for animation
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
