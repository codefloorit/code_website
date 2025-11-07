// src/components/Navbar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Menu } from "lucide-react";
import Logo from "../images/Logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = (menu) =>
    setActiveDropdown(activeDropdown === menu ? null : menu);
  const isActive = (path) => location.pathname === path;

  const desktopDropdowns = {
    Solutions: [
      {
        title: "Mobile App Solutions",
        links: [
          { name: "WhatsappChat Integration", to: "/whatsapp-chat" },
          { name: "Flutter App Development", to: "/flutter-app" },
          { name: "Android App Development", to: "/android-app" },
          { name: "DevOps Development", to: "/dev-Ops" },
          { name: "iOS App Development", to: "/ios-app" },
          { name: "Native App Development", to: "/native-app" },
        ],
      },
      {
        title: "Website Development",
        links: [
          { name: "PHP Web Development", to: "/php-web" },
          { name: "React Web Development", to: "/react-web" },
          { name: "HTML Web Development", to: "/html-web" },
          { name: "Java Web Development", to: "/java-web" },
          { name: "Laravel Web Development", to: "/laravel-web" },
          { name: "WordPress Web Development", to: "/wordpress-web" },
        ],
      },
     
    {
      title: "Web Pages",
      links: [
        { name: "Static Web Page", to: "/static-page" },
        { name: "Dynamic Web Page", to: "/dynamic-page" },
        { name: "Single Page App", to: "/singleweb-page" },
        { name: "Multiple Page App", to: "/multiple-page" },
        { name: "Animated Web App", to: "/animated-page" },
        { name: "Portfolio Web Page", to: "/portfolio-page" },
      ],
    },
  ],


    Design: [
      {
        title: "Design",
        links: [
          { name: "Web Design", to: "/web-design" },
          { name: "App Design", to: "/app-design" },
          { name: "UI/UX Design", to: "/uiux-design" },
          { name: "Figma Design", to: "/figma-design" },
          { name: "Graphic Design", to: "/graphic-design" },
          { name: "Logo Design", to: "/logo-design" },
        ],
      },
    ],
    "E-Commerce": [
      {
        title: "E-Commerce",
        links: [
          { name: "Shopify Development", to: "/shopify" },
          { name: "WooCommerce Development", to: "/woo-commerce" },
          { name: "E-Commerce Development", to: "/e-commerce" },
          { name: "E-Commerce Maintenance", to: "/maintenance" },
        ],
      },
    ],
     "Marketing": [
      {
        title: "Marketing",
        links: [
          { name: "Digital Marketing", to: "/digital-marketing" },
          { name: "Social Marketing", to: "/social-marketing" },
          { name: "SEO Setup", to: "/seo-setup" },
          { name: "Content Marketing", to: "/content-marketing" },
          { name: "E-Mail Marketing", to: "/mail-marketing" },
        ],
      },
    ],
  };

  const staticLinks = [
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="bg-[#003b53] text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <img src={Logo} alt="CodeFloor Logo" className="h-14" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-12 font-medium">
          {Object.entries(desktopDropdowns).map(([key, columns]) => (
            <li key={key} className="relative group">
              <button className="hover:text-[#00bcd4] flex items-center gap-1 transition-colors duration-300">
                {key} ▾
              </button>
              {/* Dropdown */}
              <div className="absolute hidden group-hover:flex flex-col bg-[#004a64] p-4 rounded-lg shadow-2xl gap-6 top-full left-0 w-max min-w-[300px] z-50">
                <div className="flex flex-wrap gap-6">
                  {columns.map((col) => (
                    <div key={col.title}>
                      <h4 className="text-[#00bcd4] font-bold text-lg mb-2">{col.title}</h4>
                      <ul className="space-y-1">
                        {col.links.map((link) => (
                          <li key={link.to}>
                            <Link
                              to={link.to}
                              className={`block whitespace-nowrap p-1.5 rounded-lg transition-colors duration-300 ${
                                isActive(link.to)
                                  ? "text-[#00bcd4] border border-blue-400"
                                  : "hover:text-[#00bcd4] hover:border border-gray-300"
                              }`}
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          ))}
          {staticLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`transition-colors duration-300 ${
                  isActive(link.to) ? "text-[#00bcd4]" : "hover:text-[#00bcd4]"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="lg:hidden text-white">
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-72 h-screen bg-[#003b53] text-white p-6 transition-transform duration-500 ease-in-out shadow-lg ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="CodeFloor Logo" className="w-8 h-8 object-contain" />
            <h2 className="text-xl font-bold">CodeFloor IT Tech</h2>
          </div>
          <button onClick={toggleMenu}>
            <X size={28} />
          </button>
        </div>
        <ul className="space-y-4 overflow-y-auto h-[80vh]">
          {Object.entries(desktopDropdowns).map(([key, columns]) => (
            <li key={key}>
              <button
                onClick={() => toggleDropdown(key)}
                className="w-full flex justify-between items-center text-left font-medium hover:text-[#00bcd4] transition-all duration-300"
              >
                {key} {activeDropdown === key ? "▴" : "▾"}
              </button>
              {activeDropdown === key && (
                <div className="pl-4 mt-2 space-y-2 text-sm text-gray-200">
                  {columns.map((col) => (
                    <div key={col.title}>
                      <h4 className="font-semibold text-[#00bcd4]">{col.title}</h4>
                      <ul className="pl-2">
                        {col.links.map((link) => (
                          <li key={link.to}>
                            <Link
                              to={link.to}
                              className={`block py-2 transition-colors duration-300 ${
                                isActive(link.to) ? "text-[#00bcd4]" : "hover:text-[#00bcd4]"
                              }`}
                              onClick={() => setMenuOpen(false)}
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
          {staticLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`block py-2 transition-colors duration-300 ${
                  isActive(link.to) ? "text-[#00bcd4]" : "hover:text-[#00bcd4]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
