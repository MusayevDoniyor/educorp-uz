export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4 text-center" data-aos="zoom-in">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Xodimlaringizni bugundan rivojlantirishni boshlang!
        </h2>

        <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
          80%+ kompaniyalar bizning yechimlarimiz bilan samaradorlikni oshirdi.
          Bepul konsultatsiya oling!
        </p>

        <a
          href="#contact"
          className="px-6 py-2.5 md:px-8 md:py-4 rounded-lg items-center gap-3 inline-block bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl mx-auto font-bold font-poppins text-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Darhol Bog'lanish
        </a>
      </div>
    </section>
  );
}
