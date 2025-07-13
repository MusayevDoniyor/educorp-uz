import { FaExchangeAlt, FaMapMarkedAlt } from "react-icons/fa";
import {
  FaChartLine,
  FaCodeBranch,
  FaMicrochip,
  FaUsers,
} from "react-icons/fa6";

export default function TargetCompaniesSection() {
  return (
    <section className="target-companies">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>
            <span className="color-primary">QANDAY KOMPANIYALAR</span> UCHUN
            FOYDALI BO'LADI?
          </h2>
        </div>

        <div className="company-types">
          <div className="company-type" data-aos="fade-up" data-aos-delay="100">
            <div className="type-icon">
              <i className="fas fa-users">
                <FaUsers />
              </i>

              <span className="percentage">80%+</span>
            </div>

            <div className="type-content">
              <h3>Bir lavozimli xodimlari ko'p kompaniyalar</h3>

              <p>(distribyutor, restoran, savdo vakillari va boshqalar)</p>
            </div>
          </div>

          <div className="company-type" data-aos="fade-up" data-aos-delay="200">
            <div className="type-icon">
              <i className="fas fa-exchange-alt">
                <FaExchangeAlt />
              </i>

              <span className="number">15+</span>
            </div>

            <div className="type-content">
              <h3>Xodim almashinuvi yuqori bo'lgan kompaniyalar</h3>

              <p>(yiliga 15+ yangi xodim qabul qiluvchilar)</p>
            </div>
          </div>

          <div className="company-type" data-aos="fade-up" data-aos-delay="300">
            <div className="type-icon">
              <i className="fas fa-map-marked-alt">
                <FaMapMarkedAlt />
              </i>
            </div>

            <div className="type-content">
              <h3>Turli hududlarda faoliyat yurituvchi kompaniyalar</h3>

              <p>(bir nechta viloyatlarda filiallari bo'lganlar)</p>
            </div>
          </div>

          <div className="company-type" data-aos="fade-up" data-aos-delay="400">
            <div className="type-icon">
              <i className="fas fa-code-branch">
                <FaCodeBranch />
              </i>
            </div>

            <div className="type-content">
              <h3>Bir necha filialli kompaniyalar</h3>

              <p>(markaziy boshqaruvga ega bo'lgan tarmoqlar)</p>
            </div>
          </div>

          <div className="company-type" data-aos="fade-up" data-aos-delay="500">
            <div className="type-icon">
              <i className="fas fa-microchip">
                <FaMicrochip />
              </i>
            </div>

            <div className="type-content">
              <h3>Texnologik bizneslar</h3>

              <p>(biznesi xodimlar tajribasiga bog'liq bo'lganlar)</p>
            </div>
          </div>

          <div className="company-type" data-aos="fade-up" data-aos-delay="600">
            <div className="type-icon">
              <i className="fas fa-chart-line">
                <FaChartLine />
              </i>
            </div>

            <div className="type-content">
              <h3>Tez o'sishni ko'zlagan kompaniyalar</h3>

              <p>(tezkor kengayish rejalari bo'lgan startaplar va bizneslar)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
