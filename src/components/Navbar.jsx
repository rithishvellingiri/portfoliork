import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div className={cn(
        "container mx-auto px-6 transition-all duration-500",
        isScrolled ? "max-w-5xl" : "max-w-7xl"
      )}>
        <div className={cn(
          "flex items-center justify-between rounded-2xl transition-all duration-500",
          isScrolled ? "glass px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-white/10" : "px-2 py-2 border-transparent"
        )}>
          <a
            className="text-xl font-bold flex items-center gap-2 group"
            href="#hero"
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              R
            </span>
            <span className="text-glow text-foreground font-semibold tracking-tight">Rithish</span>
          </a>

          {/* desktop nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="relative px-4 py-2 text-sm text-foreground/80 hover:text-primary transition-colors duration-300 rounded-full hover:bg-white/5"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* mobile nav button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-50 hover:bg-white/10 rounded-full transition-colors"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/90 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col space-y-6 text-center w-full px-8">
              {navItems.map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.name}
                  href={item.href}
                  className="text-2xl font-medium text-foreground/80 hover:text-primary transition-colors duration-300 py-4 border-b border-white/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
