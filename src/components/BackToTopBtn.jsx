import { FaAngleUp } from "react-icons/fa6";

export default function BackToTopBtn() {
  return (
    <button id="backToTop" className="back-to-top">
      <svg
        className="progress-circle"
        width="50"
        height="50"
        viewBox="0 0 50 50"
      >
        <circle className="progress-circle-track" cx="25" cy="25" r="22" />
        <circle className="progress-circle-fill" cx="25" cy="25" r="22" />
      </svg>

      <span className="fas fa-angle-up arrow-icon" aria-hidden="true">
        <FaAngleUp />
      </span>
    </button>
  );
}
