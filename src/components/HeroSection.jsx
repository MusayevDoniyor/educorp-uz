export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <img
        src="/images/webp/hero_bg_img.webp"
        alt="EDUCORP Hero Background"
        className="hero-bg-img"
        width="1440"
        height="1080"
        decoding="async"
        loading="eager"
        fetchPriority="high"
      />

      <div className="container">
        <div className="hero-content" data-aos="zoom-in" data-aos-delay="300">
          <h1 data-aos="fade-up" data-aos-delay="400">
            1 OYDA KOMPANIYANGIZDA
            <span className="color-primary">ICHKI AKADEMIYANI</span> YO'LGA
            QO'YIB BERAMIZ
          </h1>

          <p data-aos="fade-up" data-aos-delay="500">
            <span className="color-primary">Smartfon orqali</span> adaptasiya,
            malaka oshirish, bilimni baholash, rag'batlantirish
          </p>

          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="600">
            <a href="#contact" className="btn hero-btn">
              Bepul konsultatsiya
            </a>

            <a href="#services" className="btn btn-secondary">
              Xizmatlarimiz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
