import React from "react";

export default function TexTaskSection() {
  return (
    <section className="task">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Tex Topshiriq tuzish</h2>
        </div>

        <div className="task-grid">
          <div className="task-card" data-aos="fade-right">
            <h3>Mahsulot bo'yicha</h3>

            <img
              loading="lazy"
              src="./images/webp/creating_tex_task-img1.webp"
              alt="Creating Tex Task By Product"
            />
          </div>

          <div className="task-card" data-aos="fade-left">
            <h3>Ish jarayonlari bo'yicha</h3>

            <img
              loading="lazy"
              src="./images/webp/creating_tex_task-img2.webp"
              alt="Creating Tex Task By Work Process"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
