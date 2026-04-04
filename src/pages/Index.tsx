import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificatesSection from "@/components/CertificatesSection";
import ContactSection from "@/components/ContactSection";
import FloatingDecorations from "@/components/FloatingDecorations";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FloatingDecorations />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
