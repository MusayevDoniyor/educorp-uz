import { useState, useEffect } from "react";
import { FaBars, FaPhone } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMenuActive(false);
  };

  const navLinks = [
    { href: "#home", text: "Bosh sahifa", delay: "300" },
    { href: "#services", text: "Xizmatlar", delay: "400" },
    { href: "#about", text: "Biz haqimizda", delay: "500" },
    { href: "#team", text: "Jamoa", delay: "600" },
    { href: "#contact", text: "Bog'lanish", delay: "700" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "header-blur py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="logo z-50"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <img
              loading="lazy"
              src="/images/webp/educorp.webp"
              alt="EDUCORP"
              className="h-14 md:h-16 transition-all duration-300 hover:scale-110"
            />
          </a>

          {/* Desktop Navigation */}
          <div
            className={`hidden md:flex items-center space-x-8 ${
              isMenuActive ? "hidden" : ""
            }`}
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <ul className="flex space-x-8">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`hover:text-primary transition-colors duration-300 font-poppins font-medium text-lg ${
                      scrolled ? "text-dark" : "text-light"
                    }`}
                    data-aos="fade-right"
                    data-aos-delay={item.delay}
                    onClick={handleNavClick}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div
            className="hidden md:block"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <a href="tel:+781139858" className="btn btn-primary">
              <FaPhone />
              <span>ALOQA QILING</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 p-2 text-primary focus:outline-none"
            data-aos="fade-left"
            data-aos-delay="300"
            onClick={() => setIsMenuActive(!isMenuActive)}
            aria-label="Toggle menu"
          >
            {isMenuActive ? (
              <FaX className="text-xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out transform ${
              isMenuActive
                ? "translate-y-0 visible"
                : "-translate-y-full hidden"
            } md:hidden`}
          >
            <ul className="flex flex-col items-center space-y-8">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-2xl font-poppins font-medium text-gray-700 hover:text-primary transition-colors duration-300"
                    onClick={() => {
                      handleNavClick();
                    }}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile CTA Button */}
            <a
              href="tel:+781139858"
              className="mt-8 btn btn-secondary"
              onClick={handleNavClick}
            >
              <FaPhone className="text-xl" />
              <span className="font-poppins font-medium text-lg">
                Aloqa qiling
              </span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
