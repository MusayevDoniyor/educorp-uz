export default function ServicesSection() {
  const services = [
    {
      number: "1 - bosqich",
      img: "/images/webp/roadmap.webp",
      title: "Yo'l xaritasini tasdiqlaymiz",
      description:
        "Mijoz bilan kelishilgan reja asosida barcha ish bosqichlarini aniqlab olamiz.",
    },
    {
      number: "2 - bosqich",
      img: "/images/webp/tasks.webp",
      title: "Tex topshiriq tuzish",
      description:
        "Loyiha talablariga mos aniq va tushunarli hujjat tayyorlaymiz.",
    },
    {
      number: "3 - bosqich",
      img: "/images/webp/video_recording.webp",
      title: "Video yozish",
      description:
        "Ssenariy asosida sifatli tasvirga olish jarayonini amalga oshiramiz.",
    },
    {
      number: "4 - bosqich",
      img: "/images/webp/video_editing.webp",
      title: "Video montaj",
      description:
        "Yozilgan materialni professional tarzda tahrirlaymiz va kerakli effektlar qo'shamiz.",
    },
    {
      number: "5 - bosqich",
      img: "/images/webp/creating_tests.webp",
      title: "Test tuzish",
      description:
        "Auditoriya bilimini baholash uchun moslashtirilgan savollarni tayyorlaymiz.",
    },
    {
      number: "6 - bosqich",
      img: "/images/webp/upload_platform.webp",
      title: "Platformaga yuklash",
      description:
        "Tayyor kontentni kerakli formatda yuklab, foydalanishga tayyor holga keltiramiz.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-primary section-title">
            Qanday bosqichlarda xizmat ko'rsatamiz?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="inline-block px-4 py-1 bg-gradient-primary text-white rounded-full font-poppins font-bold text-sm mb-5">
                {service.number}
              </div>

              <div className="flex items-start gap-4 mb-5">
                <img
                  loading="lazy"
                  src={service.img}
                  alt={service.title}
                  className="w-16 h-16 object-contain"
                />
                <h3 className="font-poppins text-xl text-dark font-bold flex-1">
                  {service.title}
                </h3>
              </div>

              <p className="font-roboto text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
