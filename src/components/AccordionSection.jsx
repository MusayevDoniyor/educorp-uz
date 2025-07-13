import { FaCheckCircle } from "react-icons/fa";
import {
  FaBookOpen,
  FaHeadset,
  FaKey,
  FaPlay,
  FaUserTie,
} from "react-icons/fa6";

export default function AccordionSection() {
  return (
    <section className="educorp-accordion">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2 className="color-primary">NIMA UCHUN EDUCORP?</h2>
          <h3>KOMPANIYANGIZGA QANDAY QIYMAT KELTIRAMIZ?</h3>
        </div>

        <div className="accordion-grid">
          <div className="accordion-row">
            <div
              className="accordion-item active"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="accordion-header">
                <div className="accordion-title">
                  <div className="accordion-icon">
                    <i>
                      <FaUserTie />
                    </i>
                  </div>

                  <h4>TAJRIBALI JAMOA</h4>
                </div>

                <div className="accordion-arrow">
                  <i className="fas fa-play">
                    <FaPlay />
                  </i>
                </div>
              </div>

              <div className="accordion-content">
                <p>
                  Vaqtingiz va pulingizni tejaymiz. Androgogika (kattalarni
                  o'qitish) qoidasiga mos darsliklar tayyorlaymiz
                </p>

                <ul className="benefit-list">
                  <li>
                    <i className="fas fa-check-circle">
                      <FaCheckCircle />
                    </i>
                    4 yil+ tajriba
                  </li>

                  <li>
                    <i className="fas fa-check-circle">
                      <FaCheckCircle />
                    </i>
                    1000+ topshirilgan darsliklar
                  </li>

                  <li>
                    <i className="fas fa-check-circle">
                      <FaCheckCircle />
                    </i>
                    Xalqaro kompaniyalar bilan hamkorlik
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="accordion-item"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="accordion-header">
                <div className="accordion-title">
                  <div className="accordion-icon">
                    <i className="fas fa-key">
                      <FaKey />
                    </i>
                  </div>

                  <h4>"ПОД КЛЮЧ" XIZMAT</h4>
                </div>

                <div className="accordion-arrow">
                  <i className="fas fa-play">
                    <FaPlay />
                  </i>
                </div>
              </div>

              <div className="accordion-content">
                <p>
                  Kompaniyada korporativ onlayn ta'limni yo'lga qo'yishda barcha
                  xizmatlarimiz mavjud:
                  <br />- Darslik metodologiyasi <br />
                  - Video syomka <br />
                  - Video montaj <br />
                  - Test va keys tuzish <br />- LMSda yig'ib berish <br />- T&D
                  tizimni o'rnatish
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-row">
            <div
              className="accordion-item active"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="accordion-header">
                <div className="accordion-title">
                  <div className="accordion-icon">
                    <i className="fas fa-book-open">
                      <FaBookOpen />
                    </i>
                  </div>

                  <h4>TAYYOR KURSLAR BAZASI</h4>
                </div>

                <div className="accordion-arrow">
                  <i className="fas fa-play">
                    <FaPlay />
                  </i>
                </div>
              </div>

              <div className="accordion-content">
                <p>
                  Kutubxonamizda xodimlar samaradorligini oshiruvchi kurslar
                  mavjud. <br />
                  Bu esa sarmoyangizni 3 karra tejalishiga yordamberadi
                </p>
              </div>
            </div>

            <div
              className="accordion-item"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <div className="accordion-header">
                <div className="accordion-title">
                  <div className="accordion-icon">
                    <i className="fas fa-headset">
                      <FaHeadset />
                    </i>
                  </div>

                  <h4>QO'LLAB TURISH XIZMATI</h4>
                </div>

                <div className="accordion-arrow">
                  <i className="fas fa-play">
                    <FaPlay />
                  </i>
                </div>
              </div>

              <div className="accordion-content">
                <p>
                  Platformani ishlatishda yuzaga keladigan muammolarni vaqtida
                  bartaraf qilish uchun, yil davomida texnik bo'limimiz xizmat
                  ko'rsatadi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
