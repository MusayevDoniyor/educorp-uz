import {
  FaExchangeAlt,
  FaMapMarkedAlt,
  FaChartLine,
  FaCodeBranch,
  FaMicrochip,
  FaUsers,
} from "react-icons/fa";

export default function TargetCompaniesSection() {
  const companies = [
    {
      icon: <FaUsers className="text-3xl text-primary" />,
      percentage: "80%+",
      title: "Bir lavozimli xodimlari ko'p kompaniyalar",
      subtitle: "(distribyutor, restoran, savdo vakillari va boshqalar)",
      delay: 100,
    },
    {
      icon: <FaExchangeAlt className="text-3xl text-primary" />,
      percentage: "15+",
      title: "Xodim almashinuvi yuqori bo'lgan kompaniyalar",
      subtitle: "(yiliga 15+ yangi xodim qabul qiluvchilar)",
      delay: 200,
    },
    {
      icon: <FaMapMarkedAlt className="text-3xl text-primary" />,
      title: "Turli hududlarda faoliyat yurituvchi kompaniyalar",
      subtitle: "(bir nechta viloyatlarda filiallari bo'lganlar)",
      delay: 300,
    },
    {
      icon: <FaCodeBranch className="text-3xl text-primary" />,
      title: "Bir necha filialli kompaniyalar",
      subtitle: "(markaziy boshqaruvga ega bo'lgan tarmoqlar)",
      delay: 400,
    },
    {
      icon: <FaMicrochip className="text-3xl text-primary" />,
      title: "Texnologik bizneslar",
      subtitle: "(biznesi xodimlar tajribasiga bog'liq bo'lganlar)",
      delay: 500,
    },
    {
      icon: <FaChartLine className="text-3xl text-primary" />,
      title: "Tez o'sishni ko'zlagan kompaniyalar",
      subtitle: "(tezkor kengayish rejalari bo'lgan startaplar va bizneslar)",
      delay: 600,
    },
  ];

  return (
    <section className="target-companies py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-primary">QANDAY KOMPANIYALAR</span> UCHUN
            FOYDALI BO'LADI?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((comp, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={comp.delay}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="w-14 h-14 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                    {comp.icon}
                  </div>

                  {comp.percentage && (
                    <span className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-0.5 rounded-full">
                      {comp.percentage}
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {comp.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {comp.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
