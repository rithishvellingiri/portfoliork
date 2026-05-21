import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 75, category: "frontend" },
  { name: "TypeScript", level: 70, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 70, category: "frontend" },

  // Programming Languages 
  { name: "Python", level: 70, category: "languages" },
  { name: "Java", level: 40, category: "languages" },
  { name: "C & C++", level: 60, category: "languages" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 20, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 30, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools", "languages"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full transition-all duration-300 capitalize text-sm font-medium border",
                activeCategory === category
                  ? "bg-primary border-primary text-primary-foreground shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                  : "bg-white/5 border-white/10 text-foreground/70 hover:bg-white/10 hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                key={skill.name}
                className="glass-panel p-6 hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-lg text-foreground/90 group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-sm font-mono text-primary bg-primary/10 px-2 py-1 rounded-md">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-primary shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
