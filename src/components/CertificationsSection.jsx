import { Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export const CertificationsSection = () => {
  const certifications = [
    {
      name: "Facebook ADS Campaign",
      issuer: "Coursera",
      link: "https://drive.google.com/file/d/1TTPtzVsyG5iFzhbbaPF3HwlpT0z-nj6f/view?usp=drive_link",
    },
    {
      name: "Machine Learning in Python",
      issuer: "Simplilearn",
      link: "https://drive.google.com/file/d/1-KrShdq9VtobYA82ioE-rpCfORCXCc-T/view?usp=drive_link",
    },
    {
      name: "5 Days Virtual Internship On CyberSecurity",
      issuer: "Prompt Infotech",
      link: "https://drive.google.com/file/d/1VreWNTlQCQc9rZB3Ui5m-p9JYHFP27oq/view?usp=drive_link",
    },
    {
      name: "Principles Of Management",
      issuer: "Great Learning",
      link: "https://drive.google.com/file/d/1CcaWtqaMP52BuLrcH-jQ8FhAkE1z7ZF7/view?usp=drive_link",
    },
    {
      name: "UI/UX for Beginers",
      issuer: "Great Learning",
      link: "https://drive.google.com/file/d/1swPto4Y-OxcVqlXR99kfYm1YMf31e4JE/view?usp=drive_link",
    },
    {
      name: "Git/GitHub Workshop",
      issuer: "NoviTech R&D Pvt Limited ",
      link: "https://drive.google.com/file/d/1DW7lAfiObvm_7T_jRDgm1SJERwq-OIcB/view?usp=drive_link"
    },
    {
      name: "AWS Fundamentals",
      issuer: "Simplilearn ",
      link: "https://drive.google.com/file/d/17zroyiKiqJQp84ZFFWZzNdoBfkD0J0CO/view?usp=drive_link"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="certifications" className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-panel p-6 hover:-translate-y-1 transition-all duration-300 group hover:border-primary/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] flex items-start gap-5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none group-hover:bg-primary/10 transition-colors duration-500" />
              
              <div className="p-3.5 rounded-2xl bg-primary/20 shadow-[0_0_10px_rgba(139,92,246,0.3)] group-hover:scale-110 transition-transform duration-300">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg text-foreground/90 leading-tight mb-1 group-hover:text-primary transition-colors pr-4">{cert.name}</h4>
                <p className="text-foreground/60 text-sm mb-4 font-medium">{cert.issuer}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-blue-400 transition-colors"
                >
                  View Certificate <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
