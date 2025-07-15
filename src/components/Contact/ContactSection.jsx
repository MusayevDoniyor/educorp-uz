import { useState } from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
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
    <section className="py-12 md:py-20 bg-gradient-primary">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
        id="contact"
      >
        {/* CTA Section */}
        <div className="text-center mb-12 md:mb-16" data-aos="zoom-in">
          <h2 className="section-title text-white mb-4 md:mb-6">
            Xodimlaringizni bugundan rivojlantirishni boshlang!
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            80%+ kompaniyalar bizning yechimlarimiz bilan samaradorlikni
            oshirdi. Bepul konsultatsiya oling!
          </p>

          <a
            href="#contact-form"
            className="inline-block bg-white text-primary hover:bg-gray-50 px-6 py-2 md:px-8 md:py-3 rounded-lg font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Darhol Bog'lanish
          </a>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Info - Left Side */}
            <div className="w-full lg:w-1/2 bg-gray-50 p-6 sm:p-8 md:p-10">
              <div className="max-w-md mx-auto">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 md:mb-8">
                  Biz bilan bog'laning
                </h3>

                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg text-primary flex-shrink-0">
                      <FaMapMarkedAlt className="text-lg sm:text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base sm:text-lg text-gray-800 mb-1">
                        Manzil
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Toshkent shahri, Mustaqillik ko'chasi, 78 uy.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg text-primary flex-shrink-0">
                      <FaPhone className="text-lg sm:text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base sm:text-lg text-gray-800 mb-1">
                        Telefon
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base">
                        <a
                          href="tel:+998781139858"
                          className="hover:text-primary transition-colors"
                        >
                          +998 78 113-98-58
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg text-primary flex-shrink-0">
                      <FaEnvelope className="text-lg sm:text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base sm:text-lg text-gray-800 mb-1">
                        Email
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base">
                        <a
                          href="mailto:info@educorp.uz"
                          className="hover:text-primary transition-colors"
                        >
                          info@educorp.uz
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div
              className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10"
              id="contact-form"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 md:mb-8">
                Xabar yuborish
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Ismingiz"
                    className={`w-full px-4 py-2 md:py-3 border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base`}
                    value={formData.name}
                    onChange={handleChange}
                    name="name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs md:text-sm mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email manzilingiz"
                    className={`w-full px-4 py-2 md:py-3 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base`}
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs md:text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Telefon raqamingiz"
                    className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base"
                    value={formData.phone}
                    onChange={handleChange}
                    name="phone"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Xabaringiz..."
                    rows="4"
                    className={`w-full px-4 py-2 md:py-3 border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base`}
                    value={formData.message}
                    onChange={handleChange}
                    name="message"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs md:text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-secondary hover:bg-primary text-white font-bold py-2 md:py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70 text-sm md:text-base"
                >
                  {isLoading ? (
                    <>
                      <FaSpinner className="animate-spin size-4 md:size-5" />
                      Yuborilmoqda...
                    </>
                  ) : (
                    "Xabar yuborish"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
