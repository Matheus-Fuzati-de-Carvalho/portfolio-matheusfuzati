import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, Cloud, Database, GitBranch, Shield, Layers, Github, ExternalLink } from "lucide-react";
import { useEffect } from "react";
import arquiteturaImage from "../../../assets/case-gcp-01.jpg";

export function PipelineEventosGCP() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const technologies = [
    { name: "Cloud Run", desc: "Serviços serverless para ingestão e orquestração" },
    { name: "Cloud Scheduler", desc: "Disparo inicial controlado" },
    { name: "Eventarc", desc: "Gatilhos baseados em eventos de GCS e BigQuery" },
    { name: "Cloud Storage", desc: "Camada intermediária de arquivos" },
    { name: "BigQuery", desc: "Armazenamento analítico" },
    { name: "Dataform", desc: "Transformação, modelagem e versionamento SQL" },
    { name: "Git & GitHub", desc: "Versionamento e portfólio" },
  ];

  const rawTables = [
    { name: "raw_ads", desc: "Dados brutos de anúncios" },
    { name: "raw_campanhas", desc: "Dados brutos de campanhas" },
  ];

  const stageTables = [
    { name: "stage_ads", desc: "Anúncios tratados e validados" },
    { name: "stage_campanhas", desc: "Campanhas tratadas e validadas" },
  ];

  const securityPractices = [
    "Nenhuma credencial sensível versionada no repositório",
    "Valores sensíveis injetados via variáveis de ambiente",
    "Uso de service accounts dedicadas",
    "Aplicação do princípio do menor privilégio (least privilege)",
    "Serviços Cloud Run implementados de forma idempotente",
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
                Pipeline orientado a eventos —<br />Google Cloud Platform
              </h1>
            </div>

            {/* Descrição Geral */}
            <div className="mb-16 border-l-4 border-[#F5B700] pl-6">
              <h2 className="font-mono text-2xl text-[#F4F3EE] mb-4">
                Descrição Geral
              </h2>
              <p className="text-[#F4F3EE]/80 leading-relaxed mb-4">
                Este projeto demonstra a construção de um pipeline de dados moderno, orientado a eventos, 
                utilizando serviços gerenciados do Google Cloud Platform (GCP).
              </p>
              <p className="text-[#F4F3EE]/80 leading-relaxed mb-4">
                O fluxo simula um cenário real de ETL completo, aplicado a dados de marketing digital, 
                com foco em desacoplamento, escalabilidade e automação baseada em eventos.
              </p>
              <div className="mt-6 p-4 bg-[#F4F3EE]/5 border border-[#F4F3EE]/20">
                <p className="text-sm text-[#F4F3EE]/70 italic">
                  <span className="font-mono text-[#F5B700] not-italic">Observação:</span> Uma adaptação 
                  foi realizada na etapa de extração dos dados. No projeto simulado, os dados são ingeridos 
                  a partir do Google Drive, e não diretamente das plataformas de origem, devido a limitações 
                  de acesso e credenciais. A arquitetura, no entanto, é facilmente adaptável para ingestão 
                  direta em ambientes produtivos.
                </p>
              </div>
            </div>

            {/* Objetivo */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Cloud className="w-8 h-8 text-[#F5B700]" />
                <h2 className="font-mono text-2xl text-[#F4F3EE]">
                  Objetivo do Projeto
                </h2>
              </div>
              <p className="text-[#F4F3EE]/80 leading-relaxed mb-4">
                Construir um pipeline que:
              </p>
              <ul className="space-y-3">
                {[
                  "Ingere dados de múltiplas fontes",
                  "Reage automaticamente a eventos de atualização",
                  "Garante qualidade e padronização dos dados",
                  "Entrega dados consolidados prontos para análise",
                  "Evita acoplamento rígido e dependência de agendamentos manuais",
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
              <p className="text-[#F4F3EE]/80 leading-relaxed mt-6">
                O projeto foi desenvolvido com foco em boas práticas de engenharia de dados e pode ser 
                facilmente adaptado para ambientes produtivos reais.
              </p>
            </div>

            {/* Arquitetura */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Layers className="w-8 h-8 text-[#F5B700]" />
                <h2 className="font-mono text-2xl text-[#F4F3EE]">
                  Arquitetura Geral
                </h2>
              </div>

              {/* Placeholder para diagrama */}
              <div className="mb-8 border-2 border-[#F5B700]/30 bg-[#051226] p-8 flex items-center justify-center min-h-[300px]">
                <img src={arquiteturaImage} alt="Arquitetura do Pipeline" className="w-full h-full object-contain" />
              </div>

              {/* Fluxo */}
              <div className="bg-[#F4F3EE]/5 border border-[#F4F3EE]/20 p-6">
                <h3 className="font-mono text-lg text-[#F5B700] mb-4">Fluxo do pipeline:</h3>
                <div className="space-y-2 font-mono text-sm">
                  {[
                    "Cloud Scheduler",
                    "→ Cloud Run (Drive to GCS)",
                    "→ Eventarc (Cloud Storage – Object Finalized)",
                    "→ Cloud Run (GCS to BigQuery RAW)",
                    "→ Eventarc (BigQuery Audit Logs)",
                    "→ Cloud Run (Dataform Runner)",
                    "→ Dataform (Stage → Mart)",
                  ].map((step, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className={`${
                        step.startsWith("→") 
                          ? "text-[#F4F3EE]/70 pl-4" 
                          : "text-[#F5B700]"
                      }`}
                    >
                      {step}
                    </motion.p>
                  ))}
                </div>
              </div>
            </div>

            {/* Tecnologias */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <GitBranch className="w-8 h-8 text-[#F5B700]" />
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

            {/* Camadas de Dados */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-8 h-8 text-[#F5B700]" />
                <h2 className="font-mono text-2xl text-[#F4F3EE]">
                  Camadas de Dados
                </h2>
              </div>

              <div className="space-y-6">
                {/* RAW */}
                <div className="border-l-4 border-[#F5B700] pl-6">
                  <h3 className="font-mono text-xl text-[#F4F3EE] mb-3">RAW</h3>
                  <p className="text-[#F4F3EE]/80 mb-4">
                    Camada de ingestão sem transformação, preservando o formato original dos dados.
                  </p>
                  <div className="space-y-2">
                    <p className="font-mono text-sm text-[#F5B700]">Tabelas:</p>
                    {rawTables.map((table, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="font-mono text-sm text-[#F4F3EE]">{table.name}</span>
                        <span className="text-sm text-[#F4F3EE]/60">— {table.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* STAGE */}
                <div className="border-l-4 border-[#F5B700] pl-6">
                  <h3 className="font-mono text-xl text-[#F4F3EE] mb-3">STAGE</h3>
                  <p className="text-[#F4F3EE]/80 mb-4">
                    Camada responsável por tratamento e qualidade dos dados, incluindo:
                  </p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "Padronização de campos (UPPER, TRIM)",
                      "Conversões seguras de tipos (SAFE_CAST)",
                      "Remoção de duplicidades",
                      "Aplicação de regras básicas de validação de negócio",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#F4F3EE]/80">
                        <span className="text-[#F5B700] mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-2">
                    <p className="font-mono text-sm text-[#F5B700]">Tabelas:</p>
                    {stageTables.map((table, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="font-mono text-sm text-[#F4F3EE]">{table.name}</span>
                        <span className="text-sm text-[#F4F3EE]/60">— {table.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MART */}
                <div className="border-l-4 border-[#F5B700] pl-6">
                  <h3 className="font-mono text-xl text-[#F4F3EE] mb-3">MART</h3>
                  <p className="text-[#F4F3EE]/80 mb-4">
                    Camada analítica consolidada, pronta para consumo por ferramentas de BI e análises.
                  </p>
                  <div className="mb-4">
                    <p className="font-mono text-sm text-[#F5B700] mb-2">Principais métricas:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {["impressions", "clicks", "conversions", "cost"].map((metric, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-[#F5B700]">▸</span>
                          <span className="font-mono text-sm text-[#F4F3EE]">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-[#F4F3EE]/70 mb-3">
                    Dados agregados por data e campanha.
                  </p>
                  <div className="space-y-2">
                    <p className="font-mono text-sm text-[#F5B700]">Tabela:</p>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm text-[#F4F3EE]">mart_marketing_performance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Segurança */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-[#F5B700]" />
                <h2 className="font-mono text-2xl text-[#F4F3EE]">
                  Segurança e Boas Práticas
                </h2>
              </div>
              <div className="bg-[#F4F3EE]/5 border border-[#F4F3EE]/20 p-6">
                <ul className="space-y-3">
                  {securityPractices.map((practice, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 text-[#F4F3EE]/80"
                    >
                      <Shield className="w-5 h-5 text-[#F5B700] flex-shrink-0 mt-0.5" />
                      <span>{practice}</span>
                    </motion.li>
                  ))}
                </ul>
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
                  Para visualizar a implementação completa deste projeto, incluindo a estrutura do 
                  repositório, decisões técnicas e detalhes do pipeline, acesse o repositório no GitHub.
                </p>
                <a
                  href="https://github.com/Matheus-Fuzati-de-Carvalho/data-pipeline-gcp/tree/main/cloud-run"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-[#F4F3EE] text-[#F4F3EE] font-mono text-sm hover:bg-[#F4F3EE] hover:text-[#051226] transition-all duration-300 group"
                >
                  <Github className="w-5 h-5" />
                  <span>Acessar Repositório no GitHub</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t-2 border-[#F5B700] pt-8">
              <p className="text-[#F4F3EE]/70 leading-relaxed">
                Esta página demonstra <span className="text-[#F5B700] font-mono">clareza arquitetural</span>, 
                <span className="text-[#F5B700] font-mono"> maturidade técnica</span> e 
                <span className="text-[#F5B700] font-mono"> boas práticas de engenharia de dados</span>, 
                com capacidade de adaptação para ambientes produtivos.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
