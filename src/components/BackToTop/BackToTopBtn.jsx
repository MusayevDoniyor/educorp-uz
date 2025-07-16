import { FaAngleUp } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function BackToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  const updateProgress = () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / totalHeight) * 100;
    setScrollProgress(progress);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("scroll", updateProgress);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <button
      id="backToTop"
      className={`
        fixed bottom-5 right-5 w-12 h-12 rounded-full
        bg-white shadow-md cursor-pointer flex items-center justify-center
        transition-all duration-300 ease-in-out
        ${isVisible ? "opacity-100 visible" : "opacity-0 invisible"}
        hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary
      `}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <svg className="absolute w-full h-full" viewBox="0 0 50 50">
        <circle
          className="text-gray-200 stroke-current"
          cx="25"
          cy="25"
          r="22"
          fill="none"
          strokeWidth="2"
        />

        <circle
          className="text-primary stroke-current"
          cx="25"
          cy="25"
          r="22"
          fill="none"
          strokeWidth="2"
          strokeDasharray={`${2 * Math.PI * 22}`}
          strokeDashoffset={`${2 * Math.PI * 22 * (1 - scrollProgress / 100)}`}
          transform="rotate(-90 25 25)"
        />
      </svg>

      <span className="text-primary text-xl">
        <FaAngleUp />
      </span>
    </button>
  );
}
