export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="relative h-screen bg-black/50 flex flex-col justify-center items-start text-left text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[66px] drop-shadow-lg leading-tight animate-fade-in-up">
              1 OYDA KOMPANIYANGIZDA{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ICHKI AKADEMIYANI
              </span>{" "}
              YO'LGA QO'YIB BERAMIZ
            </h1>

            <p
              className="
                font-roboto text-lg sm:text-xl md:text-2xl lg:text-3xl
                drop-shadow-md max-w-3xl leading-relaxed
                animate-fade-in-up animation-delay-200
              "
            >
              <span className="text-primary font-semibold">
                Smartfon orqali
              </span>{" "}
              adaptasiya, malaka oshirish, bilimni baholash, rag'batlantirish
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              <a href="#contact" className="btn btn-secondary">
                <span className="relative z-10">Bepul konsultatsiya</span>
              </a>

              <a href="#services" className="btn btn-primary">
                <span className="relative z-10">Xizmatlarimiz</span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Separator Section */}
      <section className="relative h-32 sm:h-40 md:h-48 lg:h-56 bg-hero-img bg-no-repeat bg-center bg-cover bg-fixed overflow-hidden">
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

        {/* Simplified animated elements - no blur for performance */}
        <div className="absolute inset-0 z-10">
          <div
            className="absolute top-1/4 left-[10%] w-16 h-16 bg-white/40 rounded-full animate-float"
            style={{ animationDuration: "8s" }}
          />
          <div
            className="absolute bottom-1/4 right-[15%] w-12 h-12 bg-primary/30 rounded-full animate-float"
            style={{ animationDuration: "6s", animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 rounded-full animate-float"
            style={{ animationDuration: "10s", animationDelay: "1s" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center text-white animate-fade-in-up animation-delay-600">
            <h3 className="font-poppins font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2">
              Sizning muvaffaqiyatingiz - bizning maqsadimiz
            </h3>
            <p className="font-roboto text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto px-4">
              Professional jamoangizni rivojlantirish uchun zamonaviy ta'lim
              yechimlaridan foydalaning
            </p>
          </div>
        </div>

        {/* Decorative line at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
      </section>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>
    </>
  );
}
