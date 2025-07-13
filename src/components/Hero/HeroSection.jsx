export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden flex items-center text-center text-white bg-[url(/images/webp/hero_bg_img.webp)] bg-no-repeat bg-center bg-cover bg-fixed">
      {/* <img
        src="/images/webp/hero_bg_img.webp"
        alt="EDUCORP Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] brightness-50"
        width={1440}
        height={1080}
        decoding="async"
        loading="eager"
        fetchpriority="high"
      /> */}

      <div className="container mx-auto px-4">
        <div
          className="hero-content max-w-4xl mx-auto"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <h1
            className="font-poppins text-4xl md:text-5xl lg:text-[54px] mb-8 leading-tight font-extrabold text-shadow-md"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            1 OYDA KOMPANIYANGIZDA{" "}
            <span className="text-primary">ICHKI AKADEMIYANI</span> YO'LGA
            QO'YIB BERAMIZ
          </h1>

          <p
            className="font-roboto text-xl md:text-2xl mb-10 text-shadow-sm"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <span className="text-primary">Smartfon orqali</span> adaptasiya,
            malaka oshirish, bilimni baholash, rag'batlantirish
          </p>

          <div
            className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mt-10"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <a href="#contact" className="btn btn-secondary">
              Bepul konsultatsiya
            </a>

            <a href="#services" className="btn btn-primary">
              Xizmatlarimiz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
