import { FaFacebookF, FaInstagram, FaTelegram } from "react-icons/fa6";

export default function Footer() {
  const footerLinks = [
    {
      title: "Xizmatlar",
      items: [
        { text: "Ichki akademiya", href: "#" },
        { text: "Korporativ kurslar", href: "#" },
        { text: "LMS platformasi", href: "#" },
        { text: "Metodik yordam", href: "#" },
      ],
    },
    {
      title: "Kompaniya",
      items: [
        { text: "Biz haqimizda", href: "#" },
        { text: "Jamoa", href: "#" },
        { text: "Mijozlar", href: "#" },
        { text: "Karyera", href: "#" },
      ],
    },
    {
      title: "Yordam",
      items: [
        { text: "FAQ", href: "#" },
        { text: "Qo'llanma", href: "#" },
        { text: "Shartnoma", href: "#" },
        { text: "Maxfiylik", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <FaTelegram className="text-xl" />,
      label: "Telegram",
      href: "#",
    },
    {
      icon: <FaFacebookF className="text-xl" />,
      label: "Facebook",
      href: "#",
    },
    {
      icon: <FaInstagram className="text-xl" />,
      label: "Instagram",
      href: "#",
    },
  ];

  return (
    <footer className="p-[15px] bg-gradient-to-b from-dark to-[#2c3e50] text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo and Info */}
          <div data-aos="fade-up" data-aos-delay="50">
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/images/webp/educorp-icon.webp"
                alt="EDUCORP ICON"
                className="h-10"
              />
              <h3 className="font-poppins text-2xl font-bold">EDUCORP</h3>
            </div>

            <p className="font-roboto mb-6">
              Kompaniyalarga korporativ ta'lim yechimlarini taqdim etuvchi
              yetakchi provayder
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gradient-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors"
                  aria-label={`${social.label} sahifasiga o'tish`}
                  title={social.label}
                >
                  {social.icon}
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay="50">
              <h3 className="font-poppins text-xl font-bold mb-6 relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-16 after:h-1 after:bg-gradient-primary">
                {section.title}
              </h3>

              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      className="font-roboto text-[#bbb] hover:text-white transition-colors duration-300 flex items-center gap-2 w-fit"
                      aria-label={item.text}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-gray-800 text-center">
          <p className="font-roboto text-gray-400">
            © {new Date().getFullYear()} EDUCORP. Barcha huquqlar himoyalangan
          </p>
        </div>
      </div>
    </footer>
  );
}
