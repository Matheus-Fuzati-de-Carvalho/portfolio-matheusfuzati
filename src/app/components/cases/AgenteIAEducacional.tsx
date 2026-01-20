import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Brain, 
  Database, 
  Sparkles, 
  LineChart, 
  MessageSquare,
  Download,
  History,
  BarChart3,
  Layers,
  GitBranch,
  Github,
  ExternalLink
} from "lucide-react";
import { useEffect } from "react";
import dashboardComplementar1 from "figma:asset/1a6eee8907ce6e1d54f9d770ab5f6746bbe876ff.png";
import dashboardComplementar3 from "figma:asset/7472e29b2ad7cb5450acb4cb0b5bffec708b1812.png";
import perguntasFrequentes from "figma:asset/0a1803bcba9ba61b7aac7ef9335f6ce209d835cd.png";
import perguntasLivremente from "figma:asset/d2db5545e3000175eb725bbeb331fc3576e12ba9.png";
import workflowCapa from "figma:asset/4a31def8868f5cdbebb856e2be0f01cb8af5a434.png";
import faqImage from "figma:asset/eee99ffef6caedd1d77c3ef1f8f4b8ee20a4bc08.png";
import perguntasNaturais from "figma:asset/2f02ac50c03f90560f7a29cf2fa1e87a49ed4597.png";
import resumoIA1 from "figma:asset/27f749167b226f302147a3de29ff2fe00d37b7c6.png";
import resumoIA2 from "figma:asset/7e455e882e6a95a8ee40b64ad9f0714a11f3706b.png";
import exportacao1 from "figma:asset/a64493681a5bddd8f45bc50659984d10e871fbe8.png";
import exportacao2 from "figma:asset/cbc4cd4f47b7c5629e2fbda51f7418f77ca9792a.png";
import historicoInteracoes from "figma:asset/0e0b2a66f2c0c27ce66e0a9204079c28372444bb.png";
import kpi1 from "figma:asset/f2ec69b8bc42bf821b55fb10e434ccd33ee5e00e.png";
import kpi2 from "figma:asset/b3b0e03b56ceebce56de4aaaefb23c7ad86f2c6c.png";
import arquitetura from "figma:asset/d8c48d0854e0e3e797de65c83d4fdd1d22a72dc9.png";

export function AgenteIAEducacional() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const technologies = [
    { name: "Python", desc: "Processamento e ETL de dados" },
    { name: "Streamlit", desc: "Interface web interativa" },
    { name: "Google BigQuery", desc: "Armazenamento analítico" },
    { name: "OpenAI (ChatGPT API)", desc: "IA generativa para análises" },
    { name: "Looker Studio", desc: "Dashboards avançados" },
    { name: "Faker", desc: "Geração de dados fictícios" },
    { name: "Plotly", desc: "Gráficos interativos" },
    { name: "Pandas / NumPy", desc: "Manipulação de dados" },
    { name: "GitHub Actions", desc: "Automação e disponibilidade" },
  ];

  const funcionalidades = [
    {
      icon: LineChart,
      titulo: "Dashboards Complementares",
      descricao: "Link direto para dashboards analíticos desenvolvidos no Looker Studio, permitindo aprofundamento nos indicadores educacionais.",
      imagens: [dashboardComplementar1, dashboardComplementar3]
    },
    {
      icon: MessageSquare,
      titulo: "Perguntas Frequentes com Análises Prontas",
      descricao: "Seção de perguntas frequentes com consultas e análises pré-definidas, facilitando a navegação e o entendimento dos dados.",
      imagens: [perguntasFrequentes]
    },
    {
      icon: Brain,
      titulo: "Perguntas em Linguagem Natural (IA)",
      descricao: "Campo de pergunta livre onde o usuário pode escrever em linguagem natural. As perguntas são interpretadas pela IA, convertidas em consultas SQL dinâmicas e executadas no BigQuery.",
      imagens: [perguntasLivremente]
    },
    {
      icon: Sparkles,
      titulo: "Resumos Inteligentes com IA",
      descricao: "Geração automática de resumos analíticos, combinando texto explicativo gerado por IA, gráficos interativos e insights sobre inscrições e matrículas.",
      imagens: [resumoIA1, resumoIA2]
    },
    {
      icon: Download,
      titulo: "Exportação Personalizada de Dados",
      descricao: "Possibilidade de selecionar filtros, colunas específicas e exportar dados em formato .xlsx, atendendo análises externas.",
      imagens: [exportacao1, exportacao2]
    },
    {
      icon: History,
      titulo: "Histórico de Interações",
      descricao: "Todas as perguntas realizadas e respostas geradas pela IA ficam registradas, permitindo análise posterior do uso e das decisões.",
      imagens: [historicoInteracoes]
    }
  ];

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

            {/* Header */}
            <div className="mb-12">
              <span className="font-mono text-[#F5B700] text-sm uppercase tracking-wider">
                // Case Técnico
              </span>
              <h1 className="font-mono text-4xl md:text-5xl mt-3 text-[#F4F3EE] leading-tight">
                Agente de IA —<br />Faculdade Nova Aurora
              </h1>
            </div>

            {/* Descrição Geral */}
            <div className="mb-16 border-l-4 border-[#F5B700] pl-6">
              <h2 className="font-mono text-2xl text-[#F4F3EE] mb-4">
                Descrição Geral
              </h2>
              <p className="text-[#F4F3EE]/80 leading-relaxed mb-4">
                Este projeto é uma adaptação de um sistema real em produção, que combina Inteligência Artificial, 
                análises automatizadas e visualizações interativas para apoiar a tomada de decisão no setor educacional.
              </p>
              <p className="text-[#F4F3EE]/80 leading-relaxed mb-4">
                O sistema integra IA conversacional, pipelines de dados e dashboards analíticos em uma única experiência.
              </p>
              <div className="mt-6 p-4 bg-[#F4F3EE]/5 border border-[#F4F3EE]/20">
                <p className="text-sm text-[#F4F3EE]/70 italic">
                  <span className="font-mono text-[#F5B700] not-italic">Observação:</span> Apesar de utilizar uma base 
                  de dados fictícia (gerada com Faker), a arquitetura, os fluxos e as funcionalidades replicam fielmente 
                  o projeto real.
                </p>
              </div>
            </div>

            {/* Visão Geral do Projeto */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-[#F5B700]" />
                <h2 className="font-mono text-2xl text-[#F4F3EE]">
                  Visão Geral do Projeto
                </h2>
              </div>
              <p className="text-[#F4F3EE]/80 leading-relaxed mb-4">
                O projeto consiste em um painel interativo com IA integrada, desenvolvido em Streamlit, com:
              </p>
              <ul className="space-y-3">
                {[
                  "Processamento de dados via ETL em Python",
                  "Armazenamento analítico no Google BigQuery",
                  "Integração com Looker Studio para visualizações avançadas",
                  "Uso de IA generativa (ChatGPT) para análises em linguagem natural"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-[#F4F3EE]/80"
                  >
                    <span className="text-[#F5B700] mt-1 flex-shrink-0">▸</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Funcionalidades Principais */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-8 h-8 text-[#F5B700]" />
                <h2 className="font-mono text-2xl text-[#F4F3EE]">
                  Funcionalidades Principais
                </h2>
              </div>

              <div className="space-y-12">
                {funcionalidades.map((func, index) => {
                  const Icon = func.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="border border-[#F4F3EE]/20 bg-[#F4F3EE]/5 p-6"
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <Icon className="w-6 h-6 text-[#F5B700] flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-mono text-lg text-[#F4F3EE] mb-2">
                            {func.titulo}
                          </h3>
                          <p className="text-[#F4F3EE]/70 leading-relaxed">
                            {func.descricao}
                          </p>
                        </div>
                      </div>
                      
                      {/* Imagens */}
                      <div className={`grid ${func.imagens.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} gap-4 mt-6`}>
                        {func.imagens.map((img, imgIndex) => (
                          <div 
                            key={imgIndex} 
                            className="border-2 border-[#F5B700]/30 bg-[#051226] p-4 flex items-center justify-center min-h-[200px]"
                          >
                            <img 
                              src={img} 
                              alt={`${func.titulo} - Imagem ${imgIndex + 1}`} 
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Fluxo Lógico */}
            <div className="mb-16">
              <div className="bg-[#F4F3EE]/5 border border-[#F4F3EE]/20 p-6">
                  <h3 className="font-mono text-lg text-[#F5B700] mb-4">Fluxo lógico:</h3>
                  <div className="space-y-2 font-mono text-sm">
                    {[
                      "Usuário",
                      "→ Streamlit App (Interface com IA)",
                      "  • Perguntas frequentes (SQL pré-definido)",
                      "  • Perguntas livres (ChatGPT → SQL dinâmico → BigQuery)",
                      "  • Resumos analíticos com IA",
                      "  • Exportações e histórico",
                      "→ Google BigQuery ← ETL em Python (dados fictícios com Faker)",
                      "→ Dashboards no Looker Studio"
                    ].map((step, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`${
                          step.startsWith("→") 
                            ? "text-[#F4F3EE]/70 pl-0" 
                            : step.startsWith("  •")
                            ? "text-[#F4F3EE]/60 pl-8"
                            : "text-[#F5B700]"
                        }`}
                      >
                        {step}
                      </motion.p>
                    ))}
                  </div>
                </div>
            </div>

            {/* Tecnologias Utilizadas */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-8 h-8 text-[#F5B700]" />
                <h2 className="font-mono text-2xl text-[#F4F3EE]">
                  Tecnologias Utilizadas
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {technologies.map((tech, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="border border-[#F4F3EE]/20 p-4 bg-[#F4F3EE]/5 hover:border-[#F5B700] transition-colors"
                  >
                    <h3 className="font-mono text-[#F5B700] mb-1">{tech.name}</h3>
                    <p className="text-sm text-[#F4F3EE]/70">{tech.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Código e Implementação */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Github className="w-8 h-8 text-[#F5B700]" />
                <h2 className="font-mono text-2xl text-[#F4F3EE]">
                  Código e Implementação
                </h2>
              </div>
              <div className="border border-[#F4F3EE]/20 bg-[#F4F3EE]/5 p-8">
                <p className="text-[#F4F3EE]/80 leading-relaxed mb-6">
                  Para explorar este projeto em profundidade, você pode acessar tanto a implementação completa do pipeline no GitHub — incluindo estrutura do repositório, decisões técnicas e detalhes da arquitetura — quanto o dashboard interativo, onde os dados consolidados são apresentados de forma visual e analítica.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://github.com/Matheus-Fuzati-de-Carvalho/chatbot_educacional"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-[#F4F3EE] text-[#F4F3EE] font-mono text-sm hover:bg-[#F4F3EE] hover:text-[#051226] transition-all duration-300 group"
                  >
                    <Github className="w-5 h-5" />
                    <span>Acessar Repositório no GitHub</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                  <a
                    href="https://lookerstudio.google.com/u/0/reporting/20a45689-fd6b-4b79-bf2e-76c9d73bb1d8/page/iG4NF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-[#F5B700] text-[#F5B700] font-mono text-sm hover:bg-[#F5B700] hover:text-[#051226] transition-all duration-300 group"
                  >
                    <BarChart3 className="w-5 h-5" />
                    <span>Visualizar Dashboard</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t-2 border-[#F5B700] pt-8">
              <p className="text-[#F4F3EE]/70 leading-relaxed">
                Esta página demonstra <span className="text-[#F5B700] font-mono">capacidade de aplicar IA de forma prática e responsável</span>, 
                <span className="text-[#F5B700] font-mono"> integração sólida entre dados, produto e visualização</span>, 
                <span className="text-[#F5B700] font-mono"> visão sistêmica de arquitetura e experiência do usuário</span> e 
                <span className="text-[#F5B700] font-mono"> maturidade técnica em projetos de dados e IA</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}