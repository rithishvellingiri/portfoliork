import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
        >
          {/* Main Description Card */}
          <motion.div variants={itemVariants} className="lg:col-span-7 glass-panel p-8 md:p-10 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Passionate Web Developer
            </h3>
            <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
              <p>
                With experience in web development, I specialize
                in creating responsive, accessible, and performant web
                applications using modern technologies.
              </p>
              <p>
                I'm passionate about creating elegant solutions to complex
                problems, and I'm constantly learning new technologies and
                techniques to stay at the forefront of the ever-evolving web
                landscape.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-10">
              <a href="#contact" className="cosmic-button text-center">
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1IeKFaqU2i_9xOmrCP0o_9haWokexrEGe/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all duration-300 text-center font-medium"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Side Cards (Bento style) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.div variants={itemVariants} className="glass-panel p-6 flex-1 hover:border-primary/50 transition-colors group">
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-2xl bg-primary/20 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                  <Code className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-foreground/90">Web Development</h4>
                  <p className="text-foreground/60 leading-relaxed text-sm">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-panel p-6 flex-1 hover:border-primary/50 transition-colors group">
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-2xl bg-blue-500/20 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  <User className="h-7 w-7 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-foreground/90">ML Enthusiast</h4>
                  <p className="text-foreground/60 leading-relaxed text-sm">
                    Passionate about building predictive models and intelligent data-driven systems.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-panel p-6 flex-1 hover:border-primary/50 transition-colors group">
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-2xl bg-purple-500/20 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                  <Briefcase className="h-7 w-7 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-foreground/90">Project Management</h4>
                  <p className="text-foreground/60 leading-relaxed text-sm">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
