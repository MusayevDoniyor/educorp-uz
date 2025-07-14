export default function TexTaskSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="section-title text-primary">Tex Topshiriq tuzish</h2>
        </div>

        <div className="flex flex-col gap-10 md:gap-16">
          {/* Product Task Card */}
          <div
            className="bg-white p-6 md:p-8 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-center"
            data-aos="fade-right"
          >
            <div className="md:col-span-1">
              <h3 className="font-poppins text-xl md:text-2xl font-bold text-primary mb-2 md:mb-0 text-center md:text-left">
                Mahsulot bo'yicha
              </h3>
            </div>

            <div className="md:col-span-2">
              <img
                loading="lazy"
                src="/images/webp/creating_tex_task-img1.webp"
                alt="Creating Tex Task By Product"
                className="w-full h-auto rounded-lg border-4 border-dark shadow-md transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Process Task Card */}
          <div
            className="bg-white p-6 md:p-8 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center"
            data-aos="fade-left"
          >
            <div className="md:col-span-1 order-2 md:order-1">
              <h3 className="font-poppins text-xl md:text-2xl font-bold text-primary mt-6 md:mt-0 mb-4 md:mb-0 text-center md:text-left">
                Ish jarayonlari bo'yicha
              </h3>
            </div>

            <div className="md:col-span-2 order-1 md:order-2">
              <img
                loading="lazy"
                src="/images/webp/creating_tex_task-img2.webp"
                alt="Creating Tex Task By Work Process"
                className="w-full h-auto rounded-lg border-4 border-dark shadow-md transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
