import { FaMapMarkedAlt } from "react-icons/fa";
import { FaEnvelope, FaPhone } from "react-icons/fa6";

export default function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Bog'lanish</h2>

          <p>
            Biz bilan aloqaga chiqing, sizga yordam berishdan mamnun bo'lamiz
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-info" data-aos="fade-right">
            <h3>Aloqa ma'lumotlari</h3>

            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt">
                  <FaMapMarkedAlt />
                </i>

                <div>
                  <h4>Manzil</h4>

                  <p>Toshkent shahri, Mustaqillik kochasi, 78 uy.</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="fas fa-phone">
                  <FaPhone />
                </i>

                <div>
                  <h4>Telefon</h4>

                  <p>
                    <a href="tel:+998 78 113-98-58">+998 78 113-98-58</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <i className="fas fa-envelope">
                  <FaEnvelope />
                </i>

                <div>
                  <h4>Email</h4>

                  <p>
                    <a href="mailto:info@educorp.uz">info@educorp.uz</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <div className="contact-form" data-aos="fade-left">
              <form aria-label="Aloqa formasi">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ismingiz"
                  required
                  aria-required="true"
                  data-aos="fade-up"
                  data-aos-delay="100"
                />

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email manzilingiz"
                  required
                  aria-required="true"
                  data-aos="fade-up"
                  data-aos-delay="200"
                />

                <input
                  type="tel"
                  placeholder="Telefon raqamingiz"
                  id="phone"
                  name="phone"
                  data-aos="fade-up"
                  data-aos-delay="300"
                />

                <textarea
                  placeholder="Xabaringiz..."
                  data-aos="fade-up"
                  data-aos-delay="400"
                ></textarea>

                <button
                  type="submit"
                  className="btn"
                  id="message"
                  name="message"
                  required
                  aria-required="true"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Xabar yuborish
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
