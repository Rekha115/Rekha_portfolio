import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github } from "lucide-react";
import { projectsData } from "@/data/portfolio";
import Navbar from "@/components/Navbar";
import ringImg from "@/assets/4S (1).png";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="font-heading text-2xl font-bold">Project not found</h1>
          <Link to="/projects" className="btn-pink inline-block">Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-visible">
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
      <div className="relative z-10">
        <Navbar />
        <div className="pt-28 pb-20 px-4 max-w-3xl mx-auto">
          <div>
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft size={16} /> Back to Projects
            </Link>
            <div className="card-outer">
              <div className="card-inner space-y-6">
                <div>
                  <span className="text-3xl mb-2 block">{project.emoji}</span>
                  <span className="text-primary text-xs font-medium uppercase tracking-wider">{project.tag}</span>
                  <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-1">{project.title}</h1>
                </div>
                <p className="text-foreground/70 leading-relaxed">{project.description}</p>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Overview</h3>
                  <p className="text-muted-foreground text-sm">{project.overview}</p>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Features</h3>
                  <ul className="space-y-1">
                    {project.features.map((f, i) => <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span> {f}
                    </li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((t) => <span key={t} className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">{t}</span>)}
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-pink flex items-center gap-2">
                    <Github size={14} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
