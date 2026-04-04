import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { skillsData } from "@/data/portfolio";

const SkillsSection = () => {
  return (
    <section id="skills" className="scroll-mt-24 py-20 px-4 max-w-4xl mx-auto">
      <div className="mb-10">
        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          My Skills
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
        <Link to="/skills" className="block">
          <div className="card-inner grid grid-cols-2 gap-3">
            <div className="col-span-2 bg-secondary border border-border rounded-lg p-4 text-center
              hover:border-primary/30 hover:shadow-[0_0_20px_hsl(340_90%_60%/0.15)] hover:-translate-y-0.5
              hover:bg-gradient-to-br hover:from-secondary hover:to-primary/5
              transition-all duration-300 ease-in-out cursor-pointer">
              <span className="text-foreground font-medium">{skillsData[0].name}</span>
            </div>
            {skillsData.slice(1, 5).map((skill) => (
              <div
                key={skill.name}
                className="bg-secondary border border-border rounded-lg p-4 text-center
                  hover:border-primary/40 hover:shadow-[0_0_20px_hsl(340_90%_60%/0.15)] hover:-translate-y-0.5
                  hover:bg-gradient-to-br hover:from-secondary hover:to-primary/5
                  transition-all duration-300 ease-in-out cursor-pointer"
              >
                <span className="text-foreground font-medium text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
