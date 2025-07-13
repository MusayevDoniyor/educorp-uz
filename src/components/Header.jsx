import { useState } from "react";
import { FaPhone, FaBars } from "react-icons/fa6";

export default function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <a
            href="#"
            className="logo"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <img
              loading="lazy"
              src="/images/webp/educorp.webp"
              alt="EDUCORP"
              className="logo-img"
            />
          </a>

          <div
            className="nav-links"
            id="navLinks"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <ul>
              <li>
                <a href="#home" data-aos="fade-right" data-aos-delay="300">
                  Bosh sahifa
                </a>
              </li>

              <li>
                <a href="#services" data-aos="fade-right" data-aos-delay="400">
                  Xizmatlar
                </a>
              </li>

              <li>
                <a href="#about" data-aos="fade-right" data-aos-delay="500">
                  Biz haqimizda
                </a>
              </li>

              <li>
                <a href="#team" data-aos="fade-right" data-aos-delay="600">
                  Jamoa
                </a>
              </li>

              <li>
                <a href="#contact" data-aos="fade-right" data-aos-delay="700">
                  Bog'lanish
                </a>
              </li>
            </ul>
          </div>

          <div className="nav-cta" data-aos="fade-left" data-aos-delay="200">
            <a href="tel:+781139858" className="contact-number">
              <i className="fas fa-phone">
                <FaPhone />
              </i>

              <span> Aloqa qiling</span>
            </a>
          </div>

          <div
            className="mobile-menu-btn"
            id="mobileMenuBtn"
            data-aos="fade-left"
            data-aos-delay="300"
            onClick={() => {
              setIsMenuActive(!isMenuActive);
            }}
          >
            <i className="fas fa-bars">
              <FaBars></FaBars>
            </i>
          </div>
        </nav>
      </div>
    </header>
  );
}
