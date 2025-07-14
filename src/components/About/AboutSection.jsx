export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2" data-aos="fade-right">
          <div>
            <h2 className="text-primary mb-5 section-title">Maqsadimiz</h2>

            <p className="font-roboto text-gray-600 mb-8">
              Korporativ ta'limni qulaylashtirish orqali, xodimlar
              rivojlanishiga hissa qo'shish
            </p>
          </div>

          <div className="about-text">
            <p className="font-roboto text-gray-600 italic mb-6 leading-relaxed">
              "Jamiyat rivojida bizneslarning o'rni katta. Biznes rivojlanishida
              esa, jamoa eng muhim omildir. Biz kompaniyalar xodimlarini
              rivojlantirish orqali, bizneslar rivojiga hissa qo'shish uchun"
            </p>

            <p className="font-inter font-semibold text-primary">
              Habibulloh Karimov, EDUCORP MChJ rahbari
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center" data-aos="fade-left">
          <img
            loading="lazy"
            src="/images/webp/Hamidulloh_Karimov.webp"
            alt="Habibulloh Karimov"
            className="md:w-5/68 lg:w-2/4 rounded-full border-4 border-primary shadow-xl"
            width={250}
            height={250}
          />
        </div>
      </div>
    </section>
  );
}
