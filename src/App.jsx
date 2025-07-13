import Aos from "aos";
import BenefitsSection from "./components/BenefitsSection";
import Header from "./components/Header/Header";
import HeroSection from "./components/Hero/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import TexTaskSection from "./components/TexTaskSection";
import TeamSection from "./components/TeamSection";
import AccordionSection from "./components/AccordionSection";
import ClientsSection from "./components/ClientsSection";
import TargetCompaniesSection from "./components/TargetCompaniesSection";
import CTASection from "./components/CTASection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BackToTopBtn from "./components/BackToTopBtn";

function App() {
  Aos.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    offset: 100,
  });

  return (
    <>
      <Header />

      <HeroSection />
      <BenefitsSection />
      <AboutSection />
      <ServicesSection />
      <TexTaskSection />
      <TeamSection />
      <AccordionSection />
      <ClientsSection />
      <TargetCompaniesSection />
      <CTASection />
      <ContactSection />

      <Footer />

      <BackToTopBtn />
    </>
  );
}

export default App;
