import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    title: "Email",
    value: "rathorekhah052@gmail.com",
    href: "mailto:rathorekhah052@gmail.com",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/rekha-h-rathore",
    href: "https://linkedin.com/in/rekha-h-rathore",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/Rekha115",
    href: "https://github.com/Rekha115",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-24 py-16 px-4 max-w-xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-md border border-pink-100 p-8 space-y-6"
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2">
            Get in Touch
          </h2>
          <p className="text-gray-500">
            Feel free to connect with me
          </p>
        </div>
        <div className="space-y-4">
          {contactItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-pink-50 hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-md bg-pink-100 flex items-center justify-center">
                  <Icon size={20} className="text-pink-600" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider">{item.title}</p>
                  <p className="text-foreground text-base font-medium">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
