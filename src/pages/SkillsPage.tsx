import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { skillsData } from "@/data/portfolio";
import Navbar from "@/components/Navbar";

const SkillsPage = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <div className="pt-28 pb-20 px-4 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} /> Back Home
          </Link>

          <h1 className="font-heading text-4xl font-bold mb-2">
            Tools & <span className="text-primary italic">Technologies</span>
          </h1>
          <p className="text-muted-foreground mb-10">The skills and tools I use to bring ideas to life.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsData.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="card-outer h-full"
              >
                <div className="card-inner space-y-3 h-full">
                  <span className="text-2xl">{skill.emoji}</span>
                  <h3 className="font-heading font-semibold text-foreground">{skill.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.tools.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsPage;
