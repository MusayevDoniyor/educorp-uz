import { FaFacebookF, FaInstagram, FaTelegram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <div className="footer-col" data-aos="fade-up" data-aos-delay="100">
            <h3>
              <img
                src="./images/webp/educorp-icon.webp"
                alt="EDUCORP ICON"
                className="footer-icon"
                width="40"
                height="40"
              />
              EDUCORP
            </h3>

            <p>
              Kompaniyalarga korporativ ta'lim yechimlarini taqdim etuvchi
              yetakchi provayder
            </p>

            <div className="social-links">
              <a href="#">
                <i className="fab fa-telegram">
                  <FaTelegram />
                </i>
              </a>

              <a href="#">
                <i className="fab fa-facebook-f">
                  <FaFacebookF />
                </i>
              </a>

              <a href="#">
                <i className="fab fa-instagram">
                  <FaInstagram />
                </i>
              </a>
            </div>
          </div>

          <div className="footer-col" data-aos="fade-up" data-aos-delay="200">
            <h3>Xizmatlar</h3>

            <ul>
              <li>
                <a href="#">Ichki akademiya</a>
              </li>

              <li>
                <a href="#">Korporativ kurslar</a>
              </li>

              <li>
                <a href="#">LMS platformasi</a>
              </li>

              <li>
                <a href="#">Metodik yordam</a>
              </li>
            </ul>
          </div>

          <div className="footer-col" data-aos="fade-up" data-aos-delay="300">
            <h3>Kompaniya</h3>

            <ul>
              <li>
                <a href="#">Biz haqimizda</a>
              </li>

              <li>
                <a href="#">Jamoa</a>
              </li>

              <li>
                <a href="#">Mijozlar</a>
              </li>

              <li>
                <a href="#">Karyera</a>
              </li>
            </ul>
          </div>

          <div className="footer-col" data-aos="fade-up" data-aos-delay="400">
            <h3>Yordam</h3>

            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>

              <li>
                <a href="#">Qo'llanma</a>
              </li>

              <li>
                <a href="#">Shartnoma</a>
              </li>

              <li>
                <a href="#">Maxfiylik</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom" data-aos-delay="500">
          <p>© 2025 EDUCORP. Barcha huquqlar himoyalangan</p>
        </div>
      </div>
    </footer>
  );
}
