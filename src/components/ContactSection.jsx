import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
      e.target.reset();
    }, 1500);
  };

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
    <section id="contact" className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Touch</span>
          </h2>
          <p className="text-center text-foreground/60 max-w-2xl mx-auto">
            Have a creative idea in mind? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-primary mx-auto mt-6 rounded-full" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-10">
            <h3 className="text-3xl font-semibold mb-8 text-foreground/90">
              Contact Information
            </h3> 

            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-foreground/90 mb-1">Email</h4>
                  <a
                    href="mailto:rithishvellingiri@gmail.com"
                    className="text-foreground/60 hover:text-primary transition-colors text-sm md:text-base"
                  >
                    rithishvellingiri@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-foreground/90 mb-1">Phone</h4>
                  <a
                    href="tel:9715534855"
                    className="text-foreground/60 hover:text-primary transition-colors text-sm md:text-base"
                  >
                    +91 9715534855
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-foreground/90 mb-1">Location</h4>
                  <span className="text-foreground/60 text-sm md:text-base">
                    Coimbatore, Tamilnadu
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h4 className="font-medium text-lg mb-6 text-foreground/90">Connect With Me</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/rithish-kumar-v-0659a1355/" },
                  { icon: Twitter, href: "https://x.com/Rithish1703?t=ceICLFuJRfan17tNrSFt-w&s=09" },
                  { icon: Instagram, href: "https://www.instagram.com/rithish_.17?igsh=MWo3Y3VtNHZzM2lsag==" },
                  { icon: Github, href: "https://github.com/rithishvellingiri" },
                ].map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.href} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-3 bg-white/5 rounded-full border border-white/10 text-foreground/70 hover:text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="glass-panel p-8 md:p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
            
            <h3 className="text-2xl font-semibold mb-8 text-foreground/90 relative z-10">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="peer w-full px-4 py-4 rounded-xl border border-white/10 bg-black/20 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 placeholder-transparent"
                  placeholder="Enter your name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-1 text-xs text-primary transition-all duration-300 
                  peer-placeholder-shown:text-sm peer-placeholder-shown:text-foreground/50 peer-placeholder-shown:top-4 
                  peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary pointer-events-none"
                >
                  Your Name
                </label>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="peer w-full px-4 py-4 rounded-xl border border-white/10 bg-black/20 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 placeholder-transparent"
                  placeholder="Enter your email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-1 text-xs text-primary transition-all duration-300 
                  peer-placeholder-shown:text-sm peer-placeholder-shown:text-foreground/50 peer-placeholder-shown:top-4 
                  peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary pointer-events-none"
                >
                  Your Email
                </label>
              </div>

              <div className="relative group">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="peer w-full px-4 py-4 rounded-xl border border-white/10 bg-black/20 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 placeholder-transparent resize-none"
                  placeholder="Your Message..."
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-2 text-xs text-primary transition-all duration-300 
                  peer-placeholder-shown:text-sm peer-placeholder-shown:text-foreground/50 peer-placeholder-shown:top-4 
                  peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary pointer-events-none"
                >
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full py-4 rounded-xl font-medium text-white transition-all duration-300 flex items-center justify-center gap-2",
                  isSubmitting ? "bg-primary/50 cursor-not-allowed" : "bg-primary hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] hover:-translate-y-1 active:scale-95"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} className={cn("transition-transform duration-300", isSubmitting ? "translate-x-2 opacity-50" : "group-hover:translate-x-1")} />
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
