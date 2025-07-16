import { useState, useEffect } from "react";
import { FaBars, FaPhone } from "react-icons/fa";
import SidebarMenu from "./SidebarMenu";

export default function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 mx-auto container ${
          scrolled ? "header-blur py-0.5" : "bg-transparent py-4"
        }`}
      >
        <div className="mx-auto px-4">
          <nav className="flex items-center justify-between">
            {/* Logo with AOS animation */}
            <a href="#" className="flex items-center space-x-2 z-50 mr-8">
              <img
                loading="lazy"
                src="/images/webp/educorp-icon.webp"
                alt="EDUCORP"
                className="h-10 sm:h-12 md:h-[53px] transition-transform duration-300 hover:scale-110"
              />

              <span className="flex flex-col leading-tight">
                <span className="font-poppins font-bold text-[28px] sm:text-3xl text-primary tracking-wider">
                  educorp
                </span>

                <span
                  className={`${
                    scrolled || isMenuActive ? "text-dark" : "text-light"
                  } text-[10px] md:text-[11px]`}
                >
                  Jamoangizni Rivojlantiring
                </span>
              </span>
            </a>

            {/* Desktop menu */}
            <div
              className={`hidden md:flex items-center z-50 md:max-w-4xl ${
                isMenuActive ? "hidden" : ""
              }`}
            >
              <ul className="flex flex-wrap justify-center space-x-6 lg:space-x-14">
                {[
                  { text: "bosh sahifa", url: "home" },
                  { text: "xizmatlar", url: "services" },
                  { text: "biz haqimizda", url: "about" },
                  { text: "jamoa", url: "team" },
                  { text: "bog'lanish", url: "contact" },
                ].map((link, i) => (
                  <li key={link.url}>
                    <a
                      href={`#${link.url}`}
                      className={`font-poppins font-medium md:text-lg transition-colors duration-300 ${
                        scrolled
                          ? "text-dark hover:text-primary"
                          : "text-light hover:text-primary"
                      }`}
                    >
                      {link.text.charAt(0).toUpperCase() + link.text.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <a
                href="tel:+781139858"
                className={`btn ${scrolled ? "btn-secondary" : "btn-primary"}`}
              >
                <FaPhone />
                <span className="hidden md:flex md:text-lg">ALOQA</span>
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden z-50 p-2 text-primary focus:outline-none"
              onClick={() => setIsMenuActive(!isMenuActive)}
              aria-label="Toggle menu"
            >
              <FaBars className="text-2xl" />
            </button>
          </nav>
        </div>
      </header>

      <SidebarMenu
        isOpen={isMenuActive}
        onClose={() => setIsMenuActive(false)}
      />
    </>
  );
}
