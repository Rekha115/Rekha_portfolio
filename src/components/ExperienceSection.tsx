import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { experiencesData } from "@/data/portfolio";

const ExperienceSection = () => {
  return (
    <section id="experience" className="scroll-mt-24 py-20 px-4 max-w-4xl mx-auto">
      <div className="mb-10">
        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Experience
        </h2>
        <div className="w-12 h-1 rounded-full bg-primary mt-3" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="card-outer max-w-2xl mx-auto"
      >
        <Link to="/experience" className="block">
          <div className="card-inner space-y-6">
            {experiencesData.map((exp, i) => (
              <div key={i} className="flex flex-col md:flex-row md:justify-between gap-1 p-3 -mx-3 rounded-xl
                hover:bg-primary/5 hover:shadow-[0_0_15px_hsl(340_90%_60%/0.15)]
                transition-all duration-300 ease-in-out cursor-default group">
                <div>
                  <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
                <p className="text-sm text-foreground/70 md:text-right">{exp.org}</p>
              </div>
            ))}
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
