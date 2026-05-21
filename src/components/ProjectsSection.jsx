import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Cricket Score Prediction",
    description: "A beautiful Streamlit landing page for score predictions using Machine Learning Algorithms.",
    image: "/projects/image.png",
    tags: ["Python", "Machine Learning", "Streamlit"],
    demoUrl: "#",
    githubUrl: "https://github.com/rithishvellingiri/cricketscoreprediction",
  },
  {
    id: 2,
    title: "Room Occupancy Prediction",
    description:
      "Interactive analytics with data visualization and filtering capabilities,where the number of occupancies based on the sensor data.",
    image: "/projects/image copy.png",
    tags: ["Python ","HTML"],
    demoUrl: "#",
    githubUrl: "https://github.com/rithishvellingiri/predictiveanalytics",
  },
  {
    id: 3,
    title: "Inventory Management System ",
    description:
      "Full-featured inventory management platform with user authentication and payment processing.",
    image: "/projects/image copy 2.png",
    tags: ["React", "Node.js", "Angular","Typescript","MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/rithishvellingiri/inventory-management-prp-",
  },
  {
    id: 4,
    title: "Chatbot-NLP ",
    description:
      "Intelligent chatbot powered by NLP for human-like conversations and automated query handling.",
    image: "/projects/image copy 3.png",
    tags: ["NLP", "Tensorflow","Python", "Streamlit"],
    demoUrl: "#",
    githubUrl: "https://github.com/rithishvellingiri/chatbot-nlp",
  },
  {
    id: 5,
    title: "Injury Prediction System For Soccer",
    description:
      "Machine learning model to forecast injury risk in soccer players using workload and performance data",
    image: "/projects/image copy 4.png",
    tags: ["Machine Learning","Python", "Streamlit"],
    demoUrl: "#",
    githubUrl: "https://github.com/rithishvellingiri/injury-prediction-for-soccer",
  },
  {
    id: 6,
    title: "Employee attrition and Performance",
    description:
      "HR analytics platform leveraging ML to forecast employee turnover and evaluate performance metrics.",
    image: "/projects/image copy 5.png",
    tags: ["Predictive Analytics","Machine Learning", "Python","Streamlit"],
    demoUrl: "#",
    githubUrl: "https://github.com/rithishvellingiri/ibm-hr-analytics",
  },
  {
    id: 7,
    title: "Language Transalator",
    description:
      "Multilingual text-translation system using Python and ML to convert and localize content across diverse languages in real time.",
    image: "/projects/image copy 6.png",
    tags: ["Machine Learning" ,"flask","Python"],
    demoUrl: "#",
    githubUrl: "https://github.com/rithishvellingiri/language-translator",
  },
];

export const ProjectsSection = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Projects</span>
          </h2>
          <p className="text-center text-foreground/60 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-primary mx-auto mt-6 rounded-full" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group glass-panel overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-2.5 py-1 text-xs font-semibold rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-sm mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            className="cosmic-button inline-flex items-center gap-2 group"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/rithishvellingiri"
          >
            Check My Github 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
