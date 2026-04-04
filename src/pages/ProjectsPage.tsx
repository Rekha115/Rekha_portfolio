import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { projectsData } from "@/data/portfolio";
import Navbar from "@/components/Navbar";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <div className="pt-28 pb-20 px-4 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} /> Back Home
          </Link>

          <h1 className="font-heading text-4xl font-bold mb-2">
            Things I've <span className="text-primary italic">built</span>
          </h1>
          <p className="text-muted-foreground mb-10">A collection of projects showcasing my skills and interests.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <Link to={`/projects/${project.id}`} className="card-outer block hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="card-inner space-y-2 h-full">
                    <span className="text-2xl">{project.emoji}</span>
                    <span className="text-primary text-xs font-medium">{project.tag}</span>
                    <h3 className="font-heading font-semibold text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.slice(0, 3).map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs">{t}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
