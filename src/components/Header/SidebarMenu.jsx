import { useEffect } from "react";
import { FaPhone } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { text: "bosh sahifa", url: "home" },
  { text: "xizmatlar", url: "services" },
  { text: "biz haqimizda", url: "about" },
  { text: "jamoa", url: "team" },
  { text: "bog'lanish", url: "contact" },
];

export default function SidebarMenu({ isOpen, onClose }) {
  // Disable background scroll
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  // Auto-close on resize (desktop width)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) onClose(); // md breakpoint
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.aside
            className="fixed top-0 right-0 w-[80%] max-w-sm h-full bg-light z-50 shadow-2xl flex flex-col px-6 py-8"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Close button */}
            <button
              className="self-end mb-6 text-gray-500 hover:text-red-500 transition"
              onClick={onClose}
              aria-label="Close menu"
            >
              <FaX className="text-2xl" />
            </button>

            {/* Navigation */}
            <ul className="flex flex-col items-start gap-6">
              {navLinks.map((link) => (
                <li key={link.url}>
                  <a
                    href={`#${link.url}`}
                    className="text-lg font-medium text-gray-800 hover:text-primary transition-colors"
                    onClick={onClose}
                  >
                    {link.text.charAt(0).toUpperCase() + link.text.slice(1)}
                  </a>
                </li>
              ))}
            </ul>

            {/* Call-to-action */}
            <a
              href="tel:+781139858"
              className="mt-auto btn btn-secondary flex items-center gap-2 justify-center"
              onClick={onClose}
            >
              <FaPhone />
              <span>Aloqa</span>
            </a>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
