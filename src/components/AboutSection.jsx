import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-content" data-aos="fade-right">
          <div className="section-title">
            <h2 className="color-primary">Maqsadimiz</h2>
            <p>
              Korporativ ta'limni qulaylashtirish orqali, xodimlar
              rivojlanishiga hissa qo'shish
            </p>
          </div>
          <div className="about-text">
            <p className="quote">
              "Jamiyat rivojida bizneslarning o'rni katta. Biznes rivojlanishida
              esa, jamoa eng muhim omildir. Biz kompaniyalar xodimlarini
              rivojlantirish orqali, bizneslar rivojiga hissa qo'shish uchun"
            </p>
            <p className="author">Habibulloh Karimov, EDUCORP MChJ rahbari</p>
          </div>
        </div>
        <div className="section-img" data-aos="fade-left">
          <img
            loading="lazy"
            src="./images/webp/Hamidulloh_Karimov.webp"
            alt="Habibulloh Karimov"
            className="about-image"
            width="250px"
            height="250px"
          />
        </div>
      </div>
    </section>
  );
}
