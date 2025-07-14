export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen before:content-[''] before:absolute before:inset-0 before:bg-black/50 flex flex-col justify-center items-start text-left text-white"
    >
      <div className="max-w-3xl space-y-6">
        <h1
          className="font-poppins font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          1 OYDA KOMPANIYANGIZDA{" "}
          <span className="text-primary">ICHKI AKADEMIYANI</span> YO'LGA QO'YIB
          BERAMIZ
        </h1>

        <p
          className="
            font-roboto text-lg sm:text-xl md:text-2xl
            drop-shadow-md
          "
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <span className="text-primary">Smartfon orqali</span> adaptasiya,
          malaka oshirish, bilimni baholash, rag'batlantirish
        </p>

        <div
          className="mt-8 flex flex-col sm:flex-row gap-4"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <a
            href="#contact"
            className="bg-gradient-primary
              inline-flex items-center justify-center
              px-6 py-4 rounded-xl
              font-poppins font-bold text-sm uppercase
              tracking-wide transition-transform duration-300
              hover:scale-105 hover:shadow-lg
            "
          >
            Bepul konsultatsiya
          </a>

          <a
            href="#services"
            className="
              btn-primary
              inline-flex items-center justify-center
              px-8 py-4 rounded-xl
              font-poppins font-bold text-sm uppercase
              tracking-wide transition-transform duration-300
              hover:scale-105 hover:shadow-lg
            "
          >
            Xizmatlarimiz
          </a>
        </div>
      </div>
    </section>
  );
}
