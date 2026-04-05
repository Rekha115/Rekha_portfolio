import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projectsData } from "@/data/portfolio";
import ringImg from "@/assets/4S (1).png";

const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-mt-24 relative overflow-visible py-20 px-4 max-w-4xl mx-auto">
      <img
        src={ringImg}
        alt=""
        className="absolute top-0 left-0 w-20 sm:w-28 md:w-40 z-[-1] opacity-100 blur-sm scale-125 sm:scale-100"
        style={{ transform: 'rotate(6deg)' }}
      />
      <img
        src={ringImg}
        alt=""
        className="absolute bottom-0 right-0 w-20 sm:w-28 md:w-40 z-[-1] opacity-100 blur-sm scale-125 sm:scale-100 hidden sm:block"
        style={{ transform: 'rotate(-12deg)' }}
      />
      <div className="mb-10">
        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Projects
        </h2>
        <div className="w-12 h-1 rounded-full bg-primary mt-3" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 card-outer max-w-2xl mx-auto"
      >
        <div className="card-inner grid grid-cols-1 md:grid-cols-2 gap-3">
          {projectsData.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <Link
                to={`/projects/${project.id}`}
                className="block bg-secondary border border-border rounded-lg p-4 h-full relative overflow-hidden group
                  hover:border-primary/40 hover:shadow-[0_4px_20px_hsl(340_90%_60%/0.2)] hover:-translate-y-1
                  transition-all duration-300 ease-in-out cursor-pointer"
              >
                <h3 className="text-foreground font-medium text-sm group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                <span className="text-muted-foreground text-xs">{project.tag}</span>
                <span className="absolute bottom-3 right-3 text-primary text-xs font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  View Details →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
