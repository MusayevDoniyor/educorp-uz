export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden bg-gradient-to-br from-primary via-secondary to-[#ff9f3a]"
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Main floating circles with better positioning */}
        <div
          className="absolute top-[25%] left-[8%] w-40 h-40 bg-white/12 rounded-full animate-float blur-sm"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute top-[10%] right-[12%] w-32 h-32 bg-light/20 rounded-full animate-float"
          style={{ animationDuration: "6s", animationDelay: "2s" }}
        />
        <div
          className="absolute top-[65%] right-[8%] w-28 h-28 bg-white/15 rounded-full animate-float blur-sm"
          style={{ animationDuration: "7s", animationDelay: "3s" }}
        />
        <div
          className="absolute bottom-[15%] left-[45%] w-24 h-24 bg-white/18 rounded-full animate-float"
          style={{ animationDuration: "5s", animationDelay: "1s" }}
        />

        {/* Additional smaller decorative elements */}
        <div
          className="absolute top-[45%] left-[15%] w-16 h-16 bg-white/8 rounded-full animate-float"
          style={{ animationDuration: "9s", animationDelay: "4s" }}
        />
        <div
          className="absolute bottom-[30%] right-[25%] w-20 h-20 bg-light/15 rounded-full animate-float blur-sm"
          style={{ animationDuration: "6s", animationDelay: "2.5s" }}
        />

        {/* Geometric shapes for variety */}
        <div
          className="absolute top-[20%] left-[70%] w-12 h-12 bg-white/10 transform rotate-45 animate-float"
          style={{ animationDuration: "10s", animationDelay: "1.5s" }}
        />
        <div
          className="absolute bottom-[45%] left-[25%] w-14 h-14 bg-white/12 rounded-lg transform rotate-12 animate-float"
          style={{ animationDuration: "8s", animationDelay: "3.5s" }}
        />
      </div>

      {/* Subtle overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/5 z-5" />

      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side - Text */}
        <div className="lg:w-6/12 text-white" data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins relative inline-block">
            Maqsadimiz
            <div className="absolute -bottom-2 left-0 w-16 h-1 bg-white rounded-full animate-pulse" />
            <div
              className="absolute -bottom-2 left-0 w-8 h-1 bg-white/60 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </h2>

          <p className="text-lg md:text-xl font-roboto mb-8 text-white/95 leading-relaxed">
            Korporativ ta'limni qulaylashtirish orqali, xodimlar rivojlanishiga
            hissa qo'shish.
          </p>

          <div className="bg-white/10 backdrop-blur-md border border-white/25 p-8 rounded-2xl shadow-2xl ring-1 ring-white/20 transition-all duration-300 hover:bg-white/15 hover:shadow-3xl hover:border-white/35">
            <blockquote className="italic text-white/95 font-roboto leading-relaxed text-lg mb-4">
              "Jamiyat rivojida bizneslarning o'rni katta. Biznes rivojlanishida
              esa jamoa eng muhim omil hisoblanadi. Biz kompaniyalar xodimlarini
              rivojlantirish orqali, bizneslar rivojiga hissa qo'shamiz."
            </blockquote>

            <div className="flex items-center gap-4 mt-6">
              <div className="w-12 h-0.5 bg-white/40 rounded-full" />
              <p className="font-inter font-semibold text-white/85 text-lg">
                Habibulloh Karimov, EDUCORP MChJ rahbari
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div
          className="lg:w-6/12 flex justify-center relative"
          data-aos="fade-left"
        >
          {/* Enhanced glow effects */}
          <div
            className="absolute -inset-8 bg-gradient-to-r from-white/15 via-white/8 to-white/15 blur-3xl rounded-full animate-pulse"
            style={{ animationDuration: "4s" }}
          />
          <div
            className="absolute -inset-12 bg-white/5 blur-[100px] rounded-full animate-pulse"
            style={{ animationDuration: "6s", animationDelay: "2s" }}
          />

          {/* Profile Image Container */}
          <div className="relative z-10 group">
            <div className="absolute -inset-2 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur-sm transition-all duration-500 group-hover:blur-md group-hover:from-white/30 group-hover:to-white/20" />

            <div
              className="relative animate-float bg-white/10 backdrop-blur-sm p-2 rounded-3xl border-2 border-white/30 transition-all duration-500 group-hover:border-white/50"
              style={{ animationDuration: "8s" }}
            >
              <img
                src="/images/webp/Hamidulloh_Karimov.webp"
                alt="Habibulloh Karimov"
                width={320}
                height={320}
                className="rounded-2xl border-2 border-white/60 shadow-[0_25px_80px_rgba(255,255,255,0.15)] object-cover transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_30px_100px_rgba(255,255,255,0.25)] group-hover:border-white/80"
                loading="lazy"
              />

              {/* Subtle overlay gradient */}
              <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-black/10 via-transparent to-white/5 pointer-events-none" />
            </div>
          </div>

          {/* Decorative elements around image */}
          <div
            className="absolute -top-4 -left-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"
            style={{ animationDuration: "3s" }}
          />
          <div
            className="absolute -bottom-6 -right-6 w-6 h-6 bg-white/25 rounded-full animate-pulse"
            style={{ animationDuration: "4s", animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 -right-8 w-4 h-4 bg-white/30 rounded-full animate-pulse"
            style={{ animationDuration: "5s", animationDelay: "2s" }}
          />
        </div>
      </div>
    </section>
  );
}
