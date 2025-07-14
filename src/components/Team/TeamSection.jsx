export default function Team() {
  const teamMembers = [
    {
      img: "/images/webp/metodolog.webp",
      name: "Metodolog",
      role: "Darslik metodologiyasini ishlab chiqadi",
    },
    {
      img: "/images/webp/lms_manager.webp",
      name: "LMS Menejer",
      role: "Platformani boshqarish va sozlash",
    },
    {
      img: "/images/webp/videographer.webp",
      name: "Video Operator",
      role: "Professional video yozib olish",
    },
    {
      img: "/images/webp/montaj_specialist.webp",
      name: "Montaj Mutaxassisi",
      role: "Videolarni professional tarzda montaj qilish",
    },
  ];

  return (
    <section id="team" className="py-24 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="section-title text-primary">
            Loyihangiz bo'yicha ishlaydigan mutaxassislar
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              data-aos="zoom-in"
              data-aos-delay={(index + 1) * 150}
              aria-label={`Team member: ${member.name}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  loading="lazy"
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-5 text-center">
                <h3 className="font-poppins text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="font-roboto text-gray-600 text-sm">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
