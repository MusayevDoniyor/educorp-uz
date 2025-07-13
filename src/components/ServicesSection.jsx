import React from "react";

export default function ServicesSection() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Qanday bosqichlarda xizmat ko'rsatamiz?</h2>
        </div>

        <div className="services-grid">
          <div className="service-card" data-aos="fade-up" data-aos-delay="100">
            <div className="number">1 - bosqich</div>

            <div className="service-card-title">
              <img
                loading="lazy"
                src="./images/webp/roadmap.webp"
                alt="Roadmap Confirmation"
                className="service-img"
              />

              <h3>Yo'l xaritasini tasdiqlaymiz</h3>
            </div>

            <p>
              — Mijoz bilan kelishilgan reja asosida barcha ish bosqichlarini
              aniqlab olamiz.
            </p>
          </div>

          <div className="service-card" data-aos="fade-up" data-aos-delay="200">
            <div className="number">2 - bosqich</div>

            <div className="service-card-title">
              <img
                loading="lazy"
                src="./images/webp/tasks.webp"
                alt="Creating tasks"
                className="service-img"
              />

              <h3>Tex topshiriq tuzish</h3>
            </div>

            <p>
              — Loyiha talablariga mos aniq va tushunarli hujjat tayyorlaymiz.
            </p>
          </div>

          <div className="service-card" data-aos="fade-up" data-aos-delay="300">
            <div className="number">3 - bosqich</div>

            <div className="service-card-title">
              <img
                loading="lazy"
                src="./images/webp/video_recording.webp"
                alt="Video Recording"
                className="service-img"
              />

              <h3>Video yozish</h3>
            </div>

            <p>
              — Ssenariy asosida sifatli tasvirga olish jarayonini amalga
              oshiramiz.
            </p>
          </div>

          <div className="service-card" data-aos="fade-up" data-aos-delay="400">
            <div className="number">4 - bosqich</div>

            <div className="service-card-title">
              <img
                loading="lazy"
                src="./images/webp/video_editing.webp"
                alt="Video Editing"
                className="service-img"
              />

              <h3>Video montaj</h3>
            </div>

            <p>
              — Yozilgan materialni professional tarzda tahrirlaymiz va kerakli
              effektlar qo'shamiz.
            </p>
          </div>

          <div className="service-card" data-aos="fade-up" data-aos-delay="500">
            <div className="number">5 - bosqich</div>

            <div className="service-card-title">
              <img
                loading="lazy"
                src="./images/webp/creating_tests.webp"
                alt="Creating Tests"
                className="service-img"
              />

              <h3>Test tuzish</h3>
            </div>

            <p>
              — Auditoriya bilimini baholash uchun moslashtirilgan savollarni
              tayyorlaymiz.
            </p>
          </div>

          <div className="service-card" data-aos="fade-up" data-aos-delay="600">
            <div className="number">6 - bosqich</div>

            <div className="service-card-title">
              <img
                loading="lazy"
                src="./images/webp/upload_platform.webp"
                alt="Upload To Platform"
                className="service-img"
              />

              <h3>Platformaga yuklash</h3>
            </div>

            <p>
              — Tayyor kontentni kerakli formatda yuklab, foydalanishga tayyor
              holga keltiramiz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
