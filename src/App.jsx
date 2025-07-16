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
      duration: 800,
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Header */}
      <div className="bg-hero-img bg-no-repeat bg-center bg-cover bg-fixed w-full relative">
        <Header />
        <HeroSection />
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
