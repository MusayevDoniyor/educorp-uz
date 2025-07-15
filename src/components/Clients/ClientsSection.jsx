export default function ClientsSection() {
  // Client logo data array
  const clientLogos = [
    { src: "./images/webp/Profi_Pharm_Service.webp", alt: "Profi Pharm" },
    { src: "./images/webp/Ahmad_Tea.webp", alt: "ATIMATI TEA" },
    { src: "./images/webp/Molochniy_Domik.webp", alt: "Молочный домик" },
    { src: "./images/webp/Novey.webp", alt: "NOVEY", className: "novey" },
  ];

  return (
    <section className="clients py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="section-title text-primary">
            Bizga ishonch bildirgan mijozlarimiz
          </h2>

          <p className="text-2xl md:text-[28px] font-bold text-gray-700">
            1000+ tayyorlangan darsliklar soni • 30+ loyihalar
          </p>
        </div>

        {/* Top logo track */}
        <div className="logo-track mb-10 overflow-hidden" data-aos="fade-right">
          <div className="logo-slide flex items-center justify-around animate-scroll">
            {[...clientLogos, ...clientLogos, ...clientLogos].map(
              (logo, index) => (
                <div
                  key={`top-${index}`}
                  className="mx-8 flex-shrink-0 opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-400 ease-in-out"
                >
                  <img
                    loading="lazy"
                    src={logo.src}
                    alt={logo.alt}
                    className={`h-16 object-contain transition-all duration-400 ease-in-out hover:scale-105 ${
                      logo.className || ""
                    }`}
                    width={160}
                    height={64}
                  />
                </div>
              )
            )}
          </div>
        </div>

        {/* Bottom logo track (reversed) */}
        <div className="logo-track overflow-hidden" data-aos="fade-left">
          <div className="logo-slide flex items-center justify-around animate-scroll-reverse">
            {[...clientLogos]
              .reverse()
              .concat([...clientLogos].reverse(), [...clientLogos].reverse())
              .map((logo, index) => (
                <div
                  key={`bottom-${index}`}
                  className="mx-8 flex-shrink-0 opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-400 ease-in-out"
                >
                  <img
                    loading="lazy"
                    src={logo.src}
                    alt={logo.alt}
                    className={`h-16 object-contain transition-all duration-400 ease-in-out hover:scale-105 ${
                      logo.className || ""
                    }`}
                    width={160}
                    height={64}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>

      <style>{`
        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: flex;
          width: calc(250px * ${clientLogos.length * 3});
        }

        .animate-scroll-reverse {
          animation: scroll 30s linear infinite reverse;
          display: flex;
          width: calc(250px * ${clientLogos.length * 3});
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-250px * ${clientLogos.length}));
          }
        }

        .logo-track {
          position: relative;
          padding: 20px 0;
        }

        .logo-track::before,
        .logo-track::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 150px;
          z-index: 2;
          pointer-events: none;
        }

        .logo-track::before {
          left: 0;
          background: linear-gradient(
            to right,
            rgba(249, 250, 251, 1),
            rgba(249, 250, 251, 0)
          );
        }

        .logo-track::after {
          right: 0;
          background: linear-gradient(
            to left,
            rgba(249, 250, 251, 1),
            rgba(249, 250, 251, 0)
          );
        }

        @media (max-width: 768px) {
          .logo-track::before,
          .logo-track::after {
            width: 60px;
          }

          .animate-scroll,
          .animate-scroll-reverse {
            animation-duration: 20s;
          }
        }
      `}</style>
    </section>
  );
}
