import { motion } from "motion/react";
import { Database, Cloud, Code2, BarChart3, Layers, Server } from "lucide-react";
import { SectionFloatingElements } from "@/app/components/SectionFloatingElements";

export function Skills() {
  const skillCategories = [
    {
      title: "Linguagens & Dados",
      icon: Database,
      skills: ["SQL", "Python", "DAX", "M Language"],
      color: "#F5B700",
    },
    {
      title: "Cloud e BI",
      icon: Cloud,
      skills: ["Google Cloud Platform", "Azure/Databricks", "Power BI", "Looker Studio"],
      color: "#F5B700",
    },
    {
      title: "ETL & Modelagem",
      icon: Server,
      skills: ["ETL/ELT", "Data Warehouse / Data Lake", "Modelagem de dados", "Visual Studio Code"],
      color: "#F5B700",
    },
  ];

  return (
    <section id="skills" className="relative py-24 px-6 border-t border-[#F4F3EE]/10">
      {/* Floating Elements Container */}
      <SectionFloatingElements count={6} />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-16">
            <span className="font-mono text-[#F5B700] text-sm uppercase tracking-wider">
              // Habilidades
            </span>
            <h2 className="font-mono text-4xl md:text-5xl mt-3 text-[#F4F3EE]">
              Ferramentas e Habilidades
            </h2>
          </div>

          {/* Skills Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.15, duration: 0.6 }}
                  className="relative group"
                >
                  {/* Card Container */}
                  <div className="relative border-2 border-[#F4F3EE]/20 bg-[#051226] p-8 hover:border-[#F5B700] transition-all duration-300 hover:shadow-lg hover:shadow-[#F5B700]/10 z-10">
                    {/* Icon Header */}
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F5B700]/20 group-hover:border-[#F5B700]/50 transition-colors">
                      <div className="p-2 border border-[#F5B700]/30 group-hover:border-[#F5B700] transition-colors">
                        <IconComponent className="w-6 h-6 text-[#F5B700]" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-mono text-lg text-[#F4F3EE] group-hover:text-[#F5B700] transition-colors">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: categoryIndex * 0.15 + skillIndex * 0.1, duration: 0.4 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-1.5 h-1.5 bg-[#F5B700] opacity-50 group-hover:opacity-100 transition-opacity" />
                          <span className="text-sm text-[#F4F3EE]/80 group-hover:text-[#F4F3EE] transition-colors">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Accent Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F5B700]/0 via-[#F5B700]/50 to-[#F5B700]/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="text-center border-l-2 border-[#F5B700] pl-6">
              <p className="font-mono text-3xl text-[#F5B700] mb-2">12+</p>
              <p className="text-sm text-[#F4F3EE]/70">Ferramentas</p>
            </div>
            <div className="text-center border-l-2 border-[#F5B700] pl-6">
              <p className="font-mono text-3xl text-[#F5B700] mb-2">3</p>
              <p className="text-sm text-[#F4F3EE]/70">Categorias</p>
            </div>
            <div className="text-center border-l-2 border-[#F5B700] pl-6">
              <p className="font-mono text-3xl text-[#F5B700] mb-2">3+</p>
              <p className="text-sm text-[#F4F3EE]/70">Anos de Experiência</p>
            </div>
            <div className="text-center border-l-2 border-[#F5B700] pl-6">
              <p className="font-mono text-3xl text-[#F5B700] mb-2">Cloud</p>
              <p className="text-sm text-[#F4F3EE]/70">Especialização</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}