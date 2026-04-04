import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { experiencesData } from "@/data/portfolio";
import Navbar from "@/components/Navbar";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <div className="pt-28 pb-20 px-4 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} /> Back Home
          </Link>

          <h1 className="font-heading text-4xl font-bold mb-2">
            Where I've <span className="text-primary italic">worked</span>
          </h1>
          <p className="text-muted-foreground mb-10">My professional experience and contributions.</p>

          <div className="space-y-6">
            {experiencesData.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="card-outer"
              >
                <div className="card-inner space-y-3">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                    <div>
                      <h3 className="font-heading font-semibold text-foreground text-lg">{exp.role}</h3>
                      <p className="text-primary text-sm font-medium">{exp.org}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-muted-foreground text-sm">{exp.period}</p>
                      <p className="text-muted-foreground text-xs">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5 pt-1">
                    {exp.details.map((d, j) => (
                      <li key={j} className="text-foreground/60 text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">•</span> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperiencePage;
