import { useState } from "react";
import { FaCheckCircle, FaMapMarkedAlt } from "react-icons/fa";
import { FaSpinner, FaEnvelope, FaPhone } from "react-icons/fa6";

export default function ContactCTASection() {
  const FORMSPREE_KEY = import.meta.env.VITE_FORMSPREE_KEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Ism kiritilishi shart";
    if (!formData.email.trim()) {
      newErrors.email = "Email kiritilishi shart";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Yaroqli email kiriting";
    }
    if (!formData.message.trim()) newErrors.message = "Xabar kiritilishi shart";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_KEY}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: "Educorp - Yangi xabar!",
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        `Xabar yuborishda xatolik yuz berdi: ${error.message}. Iltimos, qayta urunib ko'ring.`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-primary" id="contact">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* CTA Section */}
        <div className="text-center mb-16" data-aos="zoom-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Xodimlaringizni bugundan rivojlantirishni boshlang!
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            80%+ kompaniyalar bizning yechimlarimiz bilan samaradorlikni
            oshirdi. Bepul konsultatsiya oling!
          </p>
          <a
            href="#contact-form"
            className="px-8 py-3 rounded-xl bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl mx-auto font-bold font-poppins text-lg inline-block"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Darhol Bog'lanish
          </a>
        </div>

        {/* Contact Section */}
        <div className="bg-white py-16 px-8 md:px-12 rounded-2xl shadow-xl max-w-6xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Bog'lanish
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Biz bilan aloqaga chiqing, sizga yordam berishdan mamnun bo'lamiz
            </p>
          </div>

          {submitted ? (
            <div className="text-center" data-aos="zoom-in">
              <FaCheckCircle className="text-5xl text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Xabaringiz yuborildi!
              </h3>
              <p className="text-gray-600 mb-6">
                Tez orada siz bilan bog'lanamiz
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                  });
                }}
                className="bg-primary text-white font-bold py-2.5 px-6 rounded-xl hover:bg-primary-dark transition-colors shadow-md"
              >
                Yangi xabar yuborish
              </button>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-12">
              {/* Contact Info */}
              <div
                className="w-full md:w-1/2 bg-light p-6 rounded-xl"
                data-aos="fade-right"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Aloqa ma'lumotlari
                </h3>
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-100 p-3 rounded-full text-primary flex-shrink-0">
                      <FaMapMarkedAlt size={28} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl text-gray-800 mb-1">
                        Manzil
                      </h4>
                      <p className="text-gray-600 text-base">
                        Toshkent shahri, Mustaqillik kochasi, 78 uy.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-100 p-3 rounded-full text-primary flex-shrink-0">
                      <FaPhone size={28} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl text-gray-800 mb-1">
                        Telefon
                      </h4>
                      <p className="text-gray-600 text-base">
                        <a
                          href="tel:+998781139858"
                          className="hover:text-primary transition-colors hover:underline"
                        >
                          +998 78 113-98-58
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-100 p-3 rounded-full text-primary flex-shrink-0">
                      <FaEnvelope size={28} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl text-gray-800 mb-1">
                        Email
                      </h4>
                      <p className="text-gray-600 text-base">
                        <a
                          href="mailto:info@educorp.uz"
                          className="hover:text-primary transition-colors hover:underline"
                        >
                          info@educorp.uz
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div
                className="w-full md:w-1/2"
                data-aos="fade-left"
                id="contact-form"
              >
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  aria-label="Aloqa formasi"
                  noValidate
                >
                  <div data-aos="fade-up" data-aos-delay="100">
                    <label htmlFor="name" className="sr-only">
                      Ismingiz
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Ismingiz"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } rounded-xl focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:border-transparent transition-all`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-red-500 text-sm mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div data-aos="fade-up" data-aos-delay="200">
                    <label htmlFor="email" className="sr-only">
                      Email manzilingiz
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email manzilingiz"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } rounded-xl focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:border-transparent transition-all`}
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                    />
                    {errors.email && (
                      <p id="email-error" className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div data-aos="fade-up" data-aos-delay="300">
                    <label htmlFor="phone" className="sr-only">
                      Telefon raqamingiz
                    </label>
                    <input
                      type="tel"
                      placeholder="Telefon raqamingiz"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:border-transparent transition-all"
                    />
                  </div>
                  <div data-aos="fade-up" data-aos-delay="400">
                    <label htmlFor="message" className="sr-only">
                      Xabaringiz
                    </label>
                    <textarea
                      placeholder="Xabaringiz..."
                      rows="4"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      } rounded-xl focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:border-transparent transition-all`}
                      aria-invalid={!!errors.message}
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                    ></textarea>
                    {errors.message && (
                      <p
                        id="message-error"
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <div data-aos="fade-up" data-aos-delay="500">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full btn btn-secondary disabled:opacity-70"
                    >
                      {isLoading ? (
                        <>
                          <FaSpinner className="animate-spin size-6" />
                          Yuborilmoqda...
                        </>
                      ) : (
                        "Xabar yuborish"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
