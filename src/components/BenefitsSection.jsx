import React from "react";
import {
  FaBolt,
  FaChartLine,
  FaClock,
  FaGlobe,
  FaUsers,
  FaWallet,
} from "react-icons/fa6";

export default function BenefitsSection() {
  return (
    <section className="benefits">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>
            <span className="color-primary">NIMA UCHUN</span> KOMPANIYALAR
            ONLAYN TA'LIMNI YO'LGA QO'YADILAR?
          </h2>
        </div>

        <div className="benefits-grid">
          <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
            <i>
              <FaBolt />
            </i>

            <h3>2x tezroq adaptatsiya</h3>

            <p>
              Yangi xodimlarni 2 karra tezroq kompaniyaga adaptatsiya qilish
            </p>
          </div>

          <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
            <i>
              <FaGlobe />
            </i>
            <h3>Qulay format</h3>

            <p>
              Turli viloyatlardagi xodimlarga qulay formatda bilim yetkazish
            </p>
          </div>

          <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
            <i>
              <FaUsers />
            </i>

            <h3>Jamoa bilimi</h3>

            <p>Yuqori malakali xodimlar bilimini butun jamoaga tatbiq qilish</p>
          </div>

          <div className="benefit-card" data-aos="fade-up" data-aos-delay="400">
            <i>
              <FaClock />
            </i>

            <h3>Vaqtni tejash</h3>

            <p>Istalgan vaqt, istalgan joydan bilim olish imkoni</p>
          </div>

          <div className="benefit-card" data-aos="fade-up" data-aos-delay="500">
            <i>
              <FaChartLine />
            </i>

            <h3>Samaradorlik</h3>

            <p>
              Tizimli talimni yo'lga qo'yish orqali xodimlar samaradorligini
              oshirish
            </p>
          </div>

          <div className="benefit-card" data-aos="fade-up" data-aos-delay="600">
            <i>
              <FaWallet />
            </i>

            <h3>Xarajatlarni kamaytirish</h3>

            <p>
              Xodimlarni rivojlantirishga ajratilgan sarmoyani 3 karra
              qisqartirish imkoni
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
