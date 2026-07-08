import { useEffect, useState } from "react";
import { ArrowDown, X } from "lucide-react";
import profilePic from "../assets/rk.jpeg";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20"
    >
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        className="container max-w-5xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-8 flex flex-col items-center">
          {/* Profile Image with Ring */}
          <motion.div variants={itemVariants} className="relative group cursor-pointer" onClick={() => setOpen(true)}>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-500" />
            <img
              src={profilePic}
              alt="Rithish Kumar"
              loading="lazy"
              className="
                relative w-48 h-48 md:w-56 md:h-56 
                rounded-full object-cover 
                border-2 border-white/10
                transition-all duration-300
              "
            />
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h2 className="text-xl md:text-2xl font-medium text-foreground/80 tracking-wide">
              Hi, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-purple-500">
                RITHISH KUMAR
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            I craft amazing digital experiences. Specializing in frontend development, 
            I build interfaces that are both aesthetically premium and highly functional.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <a href="#projects" className="cosmic-button">
              Explore My Work
            </a>
            <a href="#contact" className="px-6 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all duration-300 font-medium">
              Contact Me
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs text-foreground/40 mb-3 tracking-widest uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-8 h-12 rounded-full border-2 border-white/10 flex justify-center p-1"
        >
          <motion.div className="w-1 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>

      {/* Full Image Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-6"
          onClick={() => setOpen(false)}
        >
          <div className="relative max-w-[95%] max-h-[95%]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-12 right-0 md:-right-12 md:top-0 z-20 rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              src={profilePic}
              alt="Rithish Kumar"
              className="block max-w-full max-h-[80vh] rounded-2xl object-contain shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
            />
          </div>
        </div>
      )}
    </section>
  );
};
