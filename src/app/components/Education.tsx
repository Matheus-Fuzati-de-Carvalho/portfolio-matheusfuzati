import { motion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";
import { SectionFloatingElements } from "@/app/components/SectionFloatingElements";

export function Education() {
  const academicEducation = [
    {
      institution: "Faculdade GRAN",
      degree: "Pós graduação em Arquitetura e Projetos de Cloud Computing",
      period: "01/2026 - 06/2027",
    },
    {
      institution: "Faculdade Estácio",
      degree: "Graduação em Ciência de dados",
      period: "01/2023 - 12/2025",
    },
  ];

  const courses = [
    {
      institution: "Udemy",
      course: "Engenharia de Dados com Databricks, Spark e PySpark",
    },
    {
      institution: "Udemy",
      course: "Google Cloud Associate Cloud Engineer (GCP)",
    },
    {
      institution: "Udemy",
      course: "Engenharia de Dados com Python e Bancos de Dados SQL e NoSQL",
    },
    {
      institution: "FIAP",
      course: "Busines Intelligence",
    },
    {
      institution: "FIAP",
      course: "Big Data e Analytics",
    },
    {
      institution: "Data Science Academy",
      course: "Microsoft Power BI Para Business Intelligence e Data Science",
    },
    {
      institution: "Data Science Academy",
      course: "Python para Análise de Dados e Data Science",
    },
  ];

  return (
    <section id="formacao" className="relative py-24 px-6 border-t border-[#F4F3EE]/10">
      {/* Floating Elements Container */}
      <SectionFloatingElements count={8} />
      
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
              // Formação
            </span>
            <h2 className="font-mono text-4xl md:text-5xl mt-3 text-[#F4F3EE]">
              Formação Acadêmica e Cursos
            </h2>
          </div>

          {/* Academic Education Section */}
          <div className="mb-20">
            <h3 className="font-mono text-2xl text-[#F5B700] mb-8 flex items-center gap-3">
              <GraduationCap className="w-7 h-7" strokeWidth={2} />
              Formação Acadêmica
            </h3>
            <div className="space-y-8">
              {academicEducation.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="relative p-6 pl-8 border-l-4 border-[#F5B700] hover:border-[#F5B700]/70 hover:bg-[#F4F3EE]/5 transition-all"
                >
                  <span className="font-mono text-xs text-[#F5B700] block mb-2 uppercase tracking-wider">
                    {edu.period}
                  </span>
                  <h4 className="font-mono text-lg text-[#F4F3EE] mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-[#F4F3EE]/70">
                    {edu.institution}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Divider Line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-20 mx-6"
          >
            <div className="h-[2px] bg-gradient-to-r from-transparent via-[#F5B700] to-transparent" />
          </motion.div>

          {/* Courses Section */}
          <div>
            <h3 className="font-mono text-2xl text-[#F5B700] mb-8 flex items-center gap-3">
              <Award className="w-7 h-7" strokeWidth={2} />
              Cursos e Certificados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative p-6 pb-3 border-b-2 border-[#F5B700]/30 hover:border-[#F5B700] hover:bg-[#F4F3EE]/5 transition-all"
                >
                  <p className="font-mono text-xs text-[#F5B700] mb-2 uppercase tracking-wider">
                    {course.institution}
                  </p>
                  <h4 className="text-sm text-[#F4F3EE] leading-relaxed">
                    {course.course}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}