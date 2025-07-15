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
import CTASection from "./components/CTA/CTASection";
import ContactSection from "./components/Contact/ContactSection";
import Footer from "./components/Footer";
import BackToTopBtn from "./components/BackToTopBtn";

function App() {
  Aos.init({
    duration: 800,
    easing: "ease",
    once: true,
  });

  return (
    <>
      <div className="bg-hero-img bg-no-repeat bg-center bg-cover bg-fixed w-full max-w relative mx-auto">
        <Header />
        <HeroSection />
      </div>

      <BenefitsSection />
      <AboutSection />
      <ServicesSection />
      <TexTaskSection />
      <TeamSection />
      <AccordionSection />
      <ClientsSection />
      <TargetCompaniesSection />
      <ContactSection />

      <Footer />

      <BackToTopBtn />
    </>
  );
}

export default App;
