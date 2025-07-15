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
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (submitError) setSubmitError("");
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
    setSubmitError("");
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
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitError(
        "Xabar yuborishda xatolik yuz berdi. Iltimos, qayta urunib ko'ring."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-primary to-secondary">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
        id="contact"
      >
        {/* CTA Section */}
        <div className="text-center mb-12 md:mb-16" data-aos="zoom-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
            Xodimlaringizni bugundan rivojlantirishni boshlang!
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto px-4 font-roboto">
            80%+ kompaniyalar bizning yechimlarimiz bilan samaradorlikni
            oshirdi. Bepul konsultatsiya oling!
          </p>

          <a
            href="#contact-form"
            className="inline-block bg-white text-primary hover:bg-gray-50 px-6 py-2 md:px-8 md:py-3 rounded-lg font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 font-inter"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Darhol Bog'lanish
          </a>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden max-w-6xl mx-auto">
          {submitted ? (
            <div className="p-10 text-center">
              <FaCheckCircle className="text-5xl text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2 font-poppins">
                Xabaringiz yuborildi!
              </h3>
              <p className="text-gray-600 mb-6 font-roboto">
                Tez orada siz bilan bog'lanamiz
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-[#d45f0e] transition-colors font-inter"
              >
                Yangi xabar yuborish
              </button>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row">
              {/* Contact Info - Left Side */}
              <div className="w-full lg:w-1/2 bg-gray-50 p-6 sm:p-8 md:p-10">
                <div className="max-w-md mx-auto">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 md:mb-8 font-poppins">
                    Biz bilan bog'laning
                  </h3>

                  <div className="space-y-6 md:space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary/80 flex-shrink-0">
                        <FaMapMarkedAlt className="text-lg sm:text-xl" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base sm:text-lg text-gray-800 mb-1 font-poppins">
                          Manzil
                        </h4>
                        <p className="text-gray-600 text-sm sm:text-base font-roboto">
                          Toshkent shahri, Mustaqillik ko'chasi, 78 uy.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary/80 flex-shrink-0">
                        <FaPhone className="text-lg sm:text-xl" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base sm:text-lg text-gray-800 mb-1 font-poppins">
                          Telefon
                        </h4>
                        <p className="text-gray-600 text-sm sm:text-base font-roboto">
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
                      <div className="p-3 rounded-lg bg-primary/10 text-primary/80 flex-shrink-0">
                        <FaEnvelope className="text-lg sm:text-xl" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base sm:text-lg text-gray-800 mb-1 font-poppins">
                          Email
                        </h4>
                        <p className="text-gray-600 text-sm sm:text-base font-roboto">
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
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 md:mb-8 font-poppins">
                  Xabar yuborish
                </h3>

                {submitError && (
                  <div className="mb-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700 rounded font-roboto">
                    {submitError}
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-6"
                >
                  <div>
                    <input
                      type="text"
                      placeholder="Ismingiz"
                      className={`w-full px-4 py-2 md:py-3 border ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base font-roboto`}
                      value={formData.name}
                      onChange={handleChange}
                      name="name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs md:text-sm mt-1 font-roboto">
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
                      } rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base font-roboto`}
                      value={formData.email}
                      onChange={handleChange}
                      name="email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs md:text-sm mt-1 font-roboto">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Telefon raqamingiz"
                      className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base font-roboto"
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
                      } rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base font-roboto`}
                      value={formData.message}
                      onChange={handleChange}
                      name="message"
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-xs md:text-sm mt-1 font-roboto">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-secondary hover:bg-primary text-white font-bold py-2 md:py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70 text-sm md:text-base font-inter"
                  >
                    {isLoading ? (
                      <>
                        <FaSpinner className="animate-spin size-4 md:size-5" />
                        <span>Yuborilmoqda...</span>
                      </>
                    ) : (
                      "Xabar yuborish"
                    )}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
