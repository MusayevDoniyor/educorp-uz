import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import BenefitsSection from "./components/Benefits/BenefitsSection";
import Header from "./components/Header/Header";
import HeroSection from "./components/Hero/HeroSection";
import AboutSection from "./components/About/AboutSection";
import ServicesSection from "./components/Services/ServicesSection";
import TexTaskSection from "./components/TexTasks/TexTaskSection";
import TeamSection from "./components/Team/TeamSection";
import AccordionSection from "./components/Accordion/AccordionSection";
import ClientsSection from "./components/Clients/ClientsSection";
import TargetCompaniesSection from "./components/TargetCompanies/TargetCompaniesSection";
import ContactSection from "./components/Contact/ContactSection";
import Footer from "./components/Footer/Footer";
import BackToTopBtn from "./components/BackToTop/BackToTopBtn";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Header */}
      <div className="relative h-screen flex items-start justify-start text-white overflow-hidden">
        <img
          src="/images/webp/hero_bg_img.webp"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Header va Hero matn */}
        <div className="relative z-20 w-full">
          <Header />
          {/* <HeroSection /> */}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        <BenefitsSection />
        <AboutSection />
        <ServicesSection />
        <TexTaskSection />
        <TeamSection />
        <AccordionSection />
        <ClientsSection />
        <TargetCompaniesSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <BackToTopBtn />
    </div>
  );
}

export default App;
