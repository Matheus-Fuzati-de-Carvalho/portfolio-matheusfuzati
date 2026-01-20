import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight, TrendingUp, Server, BarChart3 } from "lucide-react";
import { SectionFloatingElements } from "@/app/components/SectionFloatingElements";

export function Projects() {
  const projects = [
    {
      id: "pipeline-eventos-gcp",
      title: "Pipeline orientado a eventos — GCP",
      description:
        "Pipeline de dados moderno orientado a eventos no Google Cloud Platform. Fluxo completo de ETL aplicado a dados de marketing digital com foco em desacoplamento, escalabilidade e automação baseada em eventos.",
      metrics: [
        { label: "Camadas de dados", value: "3" },
        { label: "Serviços GCP", value: "7" },
        { label: "Automação", value: "100%" },
      ],
      tech: ["Cloud Run", "Eventarc", "BigQuery", "Dataform", "Cloud Storage"],
    },
    {
      id: "agente-ia-educacional",
      title: "Agente de IA — Faculdade Nova Aurora",
      description:
        "Sistema de IA conversacional integrado a pipelines de dados e dashboards analíticos para apoiar decisões no setor educacional. Perguntas em linguagem natural convertidas em SQL, resumos inteligentes e exportação personalizada de dados.",
      metrics: [
        { label: "Funcionalidades IA", value: "8" },
        { label: "Análises disponíveis", value: "50+" },
        { label: "Uptime", value: "100%" },
      ],
      tech: ["Python", "Streamlit", "BigQuery", "OpenAI", "Looker Studio", "Plotly"],
    },
  ];

  return (
    <section id="projetos" className="relative py-32 px-6 border-t border-[#F4F3EE]/10 z-0">
      {/* Floating Elements Container */}
      <SectionFloatingElements count={10} />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-24">
            <span className="font-mono text-[#F5B700] text-sm uppercase tracking-wider">
              // Projetos & Cases
            </span>
            <h2 className="font-mono text-4xl md:text-5xl mt-3 text-[#F4F3EE]">
              Cases
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Link
                key={index}
                to={`/projeto/${project.id}`}
                className="block mb-8 last:mb-0"
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
                  className="border-2 border-[#F4F3EE]/20 bg-[#051226] hover:border-[#F5B700] transition-all group cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-[#F5B700]/10 relative z-10"
                >
                  <div className="p-10 md:p-12">
                    {/* Title */}
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="font-mono text-2xl md:text-3xl text-[#F4F3EE]">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-6 h-6 text-[#F5B700] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>

                    {/* Description */}
                    <p className="text-[#F4F3EE]/80 mb-8 leading-relaxed text-lg">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 py-8 border-y border-[#F4F3EE]/10">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="text-center">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            <TrendingUp className="w-4 h-4 text-[#F5B700]" />
                            <span className="font-mono text-2xl text-[#F4F3EE]">
                              {metric.value}
                            </span>
                          </div>
                          <p className="text-sm text-[#F4F3EE]/60 font-mono">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-[#F5B700] text-[#051226] text-sm font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}