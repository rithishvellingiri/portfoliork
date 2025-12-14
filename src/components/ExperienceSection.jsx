import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Data Analysis Intern",
    company: "Cognifyz Technologies",
    duration: "Dec 2025 – Jan 2026",
    description: [
      "Working on data preprocessing, data manipulation, and statistical analysis using Python to extract insights from large datasets and support data-driven decision-making.",
      "Contributing  to building data visualizations, cleaning workflows, and exploratory analysis, helping transform raw data into meaningful business insights for real-world problem solving.",
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
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-10">
          <Briefcase className="w-7 h-7 text-primary" />
          <h2 className="text-3xl font-bold">Experience</h2>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-primary font-medium">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>

              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
