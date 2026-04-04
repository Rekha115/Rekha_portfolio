import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import profileImg from "@/assets/profile-avatar.png";

const HeroSection = () => {
  return (
    <section id="about" className="scroll-mt-24 pt-28 pb-16 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="gradient-hero rounded-3xl p-8 md:p-12 flex flex-col-reverse md:flex-row items-center gap-8 float-shadow"
      >
        <div className="flex-1 space-y-4">
          <p className="text-foreground/60 font-body text-base">Hi I'm</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary leading-tight">
            Rekha
          </h1>
          <h2 className="text-xl md:text-2xl font-heading font-semibold text-foreground">
            I design <em className="not-italic text-primary">experiences</em> that matter
          </h2>
          <p className="text-foreground/50 font-body text-sm max-w-sm leading-relaxed">
            I build modern websites and UI designs. A Computer Science student at DCE with a passion for crafting intuitive interfaces and clean frontend code.
          </p>
          <div className="flex gap-3 pt-3">
            <a href="/Latest_resume_rekha.pdf" download className="btn-pink flex items-center gap-2 text-xs">
              download resume <ArrowRight size={12} />
            </a>
            <a href="#contact" className="btn-pink flex items-center gap-2 text-xs">
              contact <ArrowRight size={12} />
            </a>
          </div>
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative flex-shrink-0"
        >
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden glow-border border-4 border-primary/30">
            <img src={profileImg} alt="Rekha" className="w-full h-full object-cover" width={512} height={512} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
