import { motion } from "framer-motion";

const certificates = [
  { title: "Appreciation Certificate", org: "GDG · Dronacharya College", year: "2026" },
  { title: "Letter of Recommendation", org: "SkillCraft Technology", year: "2025" },
  { title: "Advanced Software Engineering Simulation", org: "Walmart USA · Forage", year: "2025" },
  { title: "Data Analytics & Technology Simulation", org: "Deloitte Australia · Forage", year: "2025" },
  { title: "SQL and Relational Databases 101", org: "Cognitive Class", year: "2024" },
];

const CertificatesSection = () => {
  return (
    <section className="scroll-mt-24 py-20 px-4 max-w-4xl mx-auto">
      <div className="mb-10">
        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Certificates & Awards
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
        <div className="card-inner space-y-4">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex justify-between items-start p-3 rounded-xl -mx-3
                hover:bg-primary/5 hover:shadow-[0_0_15px_hsl(340_90%_60%/0.15)]
                transition-all duration-300 ease-in-out cursor-default group"
            >
              <div>
                <h3 className="text-foreground font-medium text-sm group-hover:text-primary transition-colors duration-300">{cert.title}</h3>
                <p className="text-muted-foreground text-xs">{cert.org}</p>
              </div>
              <span className="text-primary font-semibold text-xs whitespace-nowrap ml-4 group-hover:translate-x-0.5 transition-transform duration-300">{cert.year}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CertificatesSection;
