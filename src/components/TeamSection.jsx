export default function TeamSection() {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Loyihangiz bo'yicha ishlaydigan mutaxassislar</h2>
        </div>

        <div className="team-grid">
          <div className="team-card" data-aos="flip-left" data-aos-delay="100">
            <div className="team-img">
              <img
                loading="lazy"
                src="./images/webp/metodolog.webp"
                alt="Metodolog"
              />
            </div>

            <div className="team-info">
              <h3>Metodolog</h3>

              <p>Darslik metodologiyasini ishlab chiqadi</p>
            </div>
          </div>

          <div className="team-card" data-aos="flip-left" data-aos-delay="200">
            <div className="team-img">
              <img
                loading="lazy"
                src="./images/webp/lms_manager.webp"
                alt="LMS Menejer"
              />
            </div>

            <div className="team-info">
              <h3>LMS Menejer</h3>

              <p>Platformani boshqarish va sozlash</p>
            </div>
          </div>

          <div className="team-card" data-aos="flip-left" data-aos-delay="300">
            <div className="team-img">
              <img
                loading="lazy"
                src="./images/webp/videographer.webp"
                alt="Video Operator"
              />
            </div>

            <div className="team-info">
              <h3>Video Operator</h3>

              <p>Professional video yozib olish</p>
            </div>
          </div>

          <div className="team-card" data-aos="flip-left" data-aos-delay="400">
            <div className="team-img">
              <img
                loading="lazy"
                src="./images/webp/montaj_specialist.webp"
                alt="Montaj Mutaxassisi"
              />
            </div>

            <div className="team-info">
              <h3>Montaj Mutaxassisi</h3>

              <p>Videolarni professional tarzda montaj qilish</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
