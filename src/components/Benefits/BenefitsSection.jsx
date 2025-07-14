import React from "react";
import {
  BsClockFill,
  BsGlobe2,
  BsGraphUpArrow,
  BsLightningChargeFill,
  BsPeopleFill,
  BsWalletFill,
} from "react-icons/bs";
import {
  FaBolt,
  FaChartLine,
  FaClock,
  FaGlobe,
  FaUsers,
  FaWallet,
} from "react-icons/fa6";

export default function Benefits() {
  const benefits = [
    {
      icon: <FaBolt className="text-4xl text-primary mb-5" />,
      title: "2x tezroq adaptatsiya",
      description:
        "Yangi xodimlarni 2 karra tezroq kompaniyaga adaptatsiya qilish",
      delay: 100,
    },
    {
      icon: <FaGlobe className="text-4xl text-primary mb-5" />,
      title: "Qulay format",
      description:
        "Turli viloyatlardagi xodimlarga qulay formatda bilim yetkazish",
      delay: 200,
    },
    {
      icon: <FaUsers className="text-4xl text-primary mb-5" />,
      title: "Jamoa bilimi",
      description:
        "Yuqori malakali xodimlar bilimini butun jamoaga tatbiq qilish",
      delay: 300,
    },
    {
      icon: <FaClock className="text-4xl text-primary mb-5" />,
      title: "Vaqtni tejash",
      description: "Istalgan vaqt, istalgan joydan bilim olish imkoni",
      delay: 400,
    },
    {
      icon: <FaChartLine className="text-4xl text-primary mb-5" />,
      title: "Samaradorlik",
      description:
        "Tizimli talimni yo'lga qo'yish orqali xodimlar samaradorligini oshirish",
      delay: 500,
    },
    {
      icon: <FaWallet className="text-4xl text-primary mb-5" />,
      title: "Xarajatlarni kamaytirish",
      description:
        "Xodimlarni rivojlantirishga ajratilgan sarmoyani 3 karra qisqartirish imkoni",
      delay: 600,
    },
  ];

  return (
    <section className="bg-light">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
          <h2 className="section-title">
            <span className="text-primary">NIMA UCHUN</span> KOMPANIYALAR ONLAYN
            TA'LIMNI YO'LGA QO'YADILAR?
          </h2>

          <p className="mt-4 font-roboto text-gray-600">
            Zamonaviy metodikalar orqali xodimlaringizni zamonaviylashtiring.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="group bg-white rounded-lg p-6 shadow transition-all transform hover:-translate-y-2 hover:shadow-lg text-center"
              data-aos="fade-up"
              data-aos-delay={b.delay}
            >
              <div className="text-primary flex justify-center mb-4 transition group-hover:text-secondary">
                {b.icon}
              </div>

              <h3 className="font-poppins text-xl font-semibold mb-2">
                {b.title}
              </h3>

              <p className="font-roboto text-gray-600">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
