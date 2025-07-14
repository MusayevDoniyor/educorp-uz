import { useState } from "react";
import {
  FaCheckCircle,
  FaBookOpen,
  FaHeadset,
  FaKey,
  FaPlay,
  FaUserTie,
} from "react-icons/fa";

export default function AccordionSection() {
  const [activeItems, setActiveItems] = useState([0, 2]);

  const toggleAccordion = (index) => {
    const rowIndex = Math.floor(index / 2);

    const newActiveItems = activeItems.filter(
      (item) => Math.floor(item / 2) !== rowIndex
    );
    if (!activeItems.includes(index)) {
      newActiveItems.push(index);
    }
    setActiveItems(newActiveItems);
  };

  const accordionItems = [
    {
      icon: <FaUserTie className="text-xl" />,
      title: "TAJRIBALI JAMOA",
      content: (
        <>
          <p className="font-roboto text-[#555] mb-4">
            Vaqtingiz va pulingizni tejaymiz. Androgogika (kattalarni o'qitish)
            qoidasiga mos darsliklar tayyorlaymiz
          </p>

          <ul className="text-lg font-normal font-roboto space-y-2.5">
            <li className="flex items-center gap-2.5">
              <FaCheckCircle className="text-primary flex-shrink-0" />4 yil+
              tajriba
            </li>

            <li className="flex items-center gap-2.5">
              <FaCheckCircle className="text-primary flex-shrink-0" />
              1000+ topshirilgan darsliklar
            </li>

            <li className="flex items-center gap-2.5">
              <FaCheckCircle className="text-primary flex-shrink-0" />
              Xalqaro kompaniyalar bilan hamkorlik
            </li>
          </ul>
        </>
      ),
    },
    {
      icon: <FaKey className="text-xl" />,
      title: '"ПОД КЛЮЧ" XIZMAT',
      content: (
        <div className="space-y-2">
          <p>
            Kompaniyada korporativ onlayn ta'limni yo'lga qo'yishda barcha
            xizmatlarimiz mavjud:
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Darslik metodologiyasi</li>
            <li>Video syomka</li>
            <li>Video montaj</li>
            <li>Test va keys tuzish</li>
            <li>LMSda yig'ib berish</li>
            <li>T&D tizimni o'rnatish</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <FaBookOpen className="text-xl" />,
      title: "TAYYOR KURSLAR BAZASI",
      content: (
        <p>
          Kutubxonamizda xodimlar samaradorligini oshiruvchi kurslar mavjud.{" "}
          <br />
          Bu esa sarmoyangizni 3 karra tejalishiga yordam beradi
        </p>
      ),
    },
    {
      icon: <FaHeadset className="text-xl" />,
      title: "QO'LLAB TURISH XIZMATI",
      content: (
        <p>
          Platformani ishlatishda yuzaga keladigan muammolarni vaqtida bartaraf
          qilish uchun, yil davomida texnik bo'limimiz xizmat ko'rsatadi
        </p>
      ),
    },
  ];

  return (
    <section className="educorp-accordion py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary section-title">NIMA UCHUN EDUCORP?</h2>

          <h3 className="text-2xl md:text-[28px] font-bold text-gray-700">
            KOMPANIYANGIZGA QANDAY QIYMAT KELTIRAMIZ?
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[0, 1].map((row) => (
            <div key={row} className="space-y-6">
              {accordionItems.slice(row * 2, row * 2 + 2).map((item, i) => {
                const index = row * 2 + i;
                const isActive = activeItems.includes(index);

                return (
                  <div
                    key={index}
                    className={`border border-gray-200 rounded-xl overflow-hidden transition-all shadow-sm hover:shadow-md ${
                      isActive ? "shadow-md" : ""
                    }`}
                    data-aos-delay={index < 2 ? 100 : 300}
                  >
                    <button
                      className={`w-full flex justify-between items-center p-6 transition-colors ${
                        isActive
                          ? "bg-gradient-primary text-white"
                          : "bg-white hover:bg-gray-50"
                      }`}
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={isActive}
                      aria-controls={`accordion-content-${index}`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`p-3 rounded-full ${
                            isActive
                              ? "bg-white text-primary"
                              : "bg-primary text-white"
                          }`}
                        >
                          {item.icon}
                        </div>

                        <h4 className="font-bold text-lg md:text-xl text-left">
                          {item.title}
                        </h4>
                      </div>

                      <div
                        className={`transition-transform ${
                          isActive ? "rotate-90" : ""
                        }`}
                      >
                        <FaPlay
                          className={isActive ? "text-white" : "text-primary"}
                        />
                      </div>
                    </button>

                    <div
                      id={`accordion-content-${index}`}
                      className={`transition-all duration-300 overflow-hidden ${
                        isActive ? "max-h-[500px] p-6 bg-white" : "max-h-0"
                      }`}
                    >
                      <div className="text-gray-700">{item.content}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
