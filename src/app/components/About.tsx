import { motion } from "motion/react";
import { CheckCircle2, Code2, Database, GitBranch } from "lucide-react";
import { SectionFloatingElements } from "@/app/components/SectionFloatingElements";

export function About() {
  const principles = [
    "Dados confiáveis e bem modelados são a base de qualquer decisão orientada a dados",
    "Pipelines bem estruturados garantem consistência, escalabilidade e confiança nas análises",
    "Métricas só geram valor quando traduzem dados em insights claros e acionáveis",
    "Análises de qualidade precisam ser reproduzíveis, auditáveis e sustentáveis ao longo do tempo",
  ];

  return (
    <section id="sobre" className="relative py-24 px-6 z-0">
      {/* Floating Elements Container */}
      <SectionFloatingElements count={8} />
      
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-12">
            <span className="font-mono text-[#F5B700] text-sm uppercase tracking-wider">
              // Sobre
            </span>
            <h2 className="font-mono text-xl md:text-2xl lg:text-3xl mt-3 text-[#F4F3EE] whitespace-nowrap">
              Analytics Engineer | Cloud Computing | Business Intelligence
            </h2>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-[#F4F3EE]/80 leading-relaxed">
                Atuo na área de dados com foco em engenharia de dados, BI e analytics, 
                trabalhando com grandes volumes de informação para transformar dados 
                brutos em insights acionáveis.
              </p>
              <p className="text-lg text-[#F4F3EE]/80 leading-relaxed">
                Tenho experiência no desenvolvimento de pipelines de dados de ponta a ponta, 
                em ambientes on-premise e cloud, sempre priorizando qualidade, organização 
                e confiabilidade dos dados. Acredito que boas análises começam com uma base 
                sólida, por isso aplico práticas de engenharia de software como versionamento, 
                padronização e modelagem analítica consistente.
              </p>
            </div>

            <div className="space-y-4">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-3 items-start"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#F5B700] flex-shrink-0 mt-1" />
                  <p className="text-[#F4F3EE]/80">{principle}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Code Symbol */}
      <motion.div
        className="absolute top-10 left-10 font-mono text-6xl text-[#F4F3EE] opacity-5"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        SELECT
      </motion.div>
      
      {/* Additional Decorative Elements */}
      <Database className="absolute bottom-20 right-16 w-20 h-20 text-[#F5B700] opacity-10 pointer-events-none hidden lg:block" strokeWidth={1} />
    </section>
  );
}