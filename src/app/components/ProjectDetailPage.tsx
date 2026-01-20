import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

export function ProjectDetailPage() {
  const { projectId } = useParams();

  return (
    <div className="relative bg-[#051226] min-h-screen z-0">
      <section className="relative py-24 px-6 z-0">
        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Button */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#F5B700] hover:text-[#F4F3EE] transition-colors mb-12 font-mono"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar ao Portfólio
            </Link>

            {/* Project Header */}
            <div className="mb-12">
              <span className="font-mono text-[#F5B700] text-sm uppercase tracking-wider">
                // Projeto
              </span>
              <h1 className="font-mono text-4xl md:text-5xl mt-3 text-[#F4F3EE]">
                {projectId?.replace(/-/g, " ")}
              </h1>
            </div>

            {/* Placeholder Content */}
            <div className="space-y-8">
              <div className="border-2 border-[#F4F3EE]/20 p-8">
                <p className="text-[#F4F3EE]/80 text-lg leading-relaxed">
                  Conteúdo detalhado do projeto <span className="text-[#F5B700] font-mono">{projectId}</span> será adicionado aqui.
                </p>
              </div>

              <div className="border-2 border-[#F4F3EE]/20 p-8">
                <h2 className="font-mono text-2xl text-[#F4F3EE] mb-4">
                  Descrição do Projeto
                </h2>
                <p className="text-[#F4F3EE]/80 leading-relaxed mb-4">
                  Esta página está em construção. Aqui você encontrará informações detalhadas sobre:
                </p>
                <ul className="space-y-2 text-[#F4F3EE]/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[#F5B700] mt-1">▸</span>
                    <span>Contexto e objetivos do projeto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F5B700] mt-1">▸</span>
                    <span>Desafios técnicos enfrentados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F5B700] mt-1">▸</span>
                    <span>Soluções implementadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F5B700] mt-1">▸</span>
                    <span>Resultados e métricas de sucesso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F5B700] mt-1">▸</span>
                    <span>Tecnologias e ferramentas utilizadas</span>
                  </li>
                </ul>
              </div>

              <div className="border-2 border-[#F4F3EE]/20 p-8">
                <h2 className="font-mono text-2xl text-[#F4F3EE] mb-4">
                  Stack Técnico
                </h2>
                <p className="text-[#F4F3EE]/80 leading-relaxed">
                  Informações detalhadas sobre as tecnologias, frameworks e ferramentas utilizadas neste projeto.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}