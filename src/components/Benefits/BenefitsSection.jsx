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
    },
    {
      icon: <FaGlobe className="text-4xl text-primary mb-5" />,
      title: "Qulay format",
      description:
        "Turli viloyatlardagi xodimlarga qulay formatda bilim yetkazish",
    },
    {
      icon: <FaUsers className="text-4xl text-primary mb-5" />,
      title: "Jamoa bilimi",
      description:
        "Yuqori malakali xodimlar bilimini butun jamoaga tatbiq qilish",
    },
    {
      icon: <FaClock className="text-4xl text-primary mb-5" />,
      title: "Vaqtni tejash",
      description: "Istalgan vaqt, istalgan joydan bilim olish imkoni",
    },
    {
      icon: <FaChartLine className="text-4xl text-primary mb-5" />,
      title: "Samaradorlik",
      description:
        "Tizimli talimni yo'lga qo'yish orqali xodimlar samaradorligini oshirish",
    },
    {
      icon: <FaWallet className="text-4xl text-primary mb-5" />,
      title: "Xarajatlarni kamaytirish",
      description:
        "Xodimlarni rivojlantirishga ajratilgan sarmoyani 3 karra qisqartirish imkoni",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-light to-white">
      <div className="container mx-auto px-4">
        <div className="section-title text-center mb-16" data-aos="fade-up">
          <h2 className="font-poppins text-3xl md:text-4xl text-dark mb-5 font-bold bg-gradient-primary bg-clip-text text-transparent">
            <span className="text-primary">NIMA UCHUN</span> KOMPANIYALAR ONLAYN
            TA'LIMNI YO'LGA QO'YADILAR?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-light p-8 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div>{benefit.icon}</div>

              <h3 className="font-poppins text-2xl text-dark mb-4 font-bold">
                {benefit.title}
              </h3>
              <p className="font-roboto text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
