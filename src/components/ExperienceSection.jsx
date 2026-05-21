import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Data Analysis Intern",
    company: "Cognifyz Technologies",
    duration: "Dec 2025 – Jan 2026",
    description: [
      "Working on data preprocessing, data manipulation, and statistical analysis using Python to extract insights from large datasets and support data-driven decision-making.",
      "Contributing to building data visualizations, cleaning workflows, and exploratory analysis, helping transform raw data into meaningful business insights for real-world problem solving.",
      "Building visualizations using Matplotlib and Seaborn to support data-driven insights."
    ]
  },
  {
    role: "Python Developer Intern",
    company: "Certify Technologies",
    duration: "Nov 2025 – Dec 2025",
    description: [
      "Worked on developing and optimizing Python-based applications.",
      "Focused in script automation, data handling, and backend logic implementation.",
      "Implemented API integration, automation tasks, and data workflows while debugging issues and improving system efficiency."
    ]
  }
];

export const ExperienceSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-4xl">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Experience</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Experience Timeline */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative border-l border-white/10 ml-4 md:ml-0 md:space-y-12 space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 md:pl-10"
            >
              {/* Timeline Node */}
              <div className="absolute -left-2.5 top-2 w-5 h-5 rounded-full bg-background border-2 border-primary shadow-[0_0_15px_rgba(139,92,246,0.5)]" />

              <div className="glass-panel p-6 md:p-8 hover:border-primary/30 transition-colors duration-300 group">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground/90 group-hover:text-primary transition-colors">{exp.role}</h3>
                    <p className="text-primary font-medium text-lg mt-1">{exp.company}</p>
                  </div>
                  <span className="text-sm font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-foreground/60 whitespace-nowrap self-start">
                    {exp.duration}
                  </span>
                </div>

                <ul className="space-y-3 mt-6">
                  {exp.description.map((point, i) => (
                    <li key={i} className="text-foreground/70 flex items-start">
                      <span className="text-primary mr-2 mt-1.5 text-xs">◆</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
