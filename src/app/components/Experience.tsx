import { motion } from "motion/react";
import { Briefcase, Cpu, Cloud } from "lucide-react";
import { SectionFloatingElements } from "@/app/components/SectionFloatingElements";

export function Experience() {
  const experiences = [
    {
      period: "07/2025 - Presente",
      role: "Analista de Dados Pleno",
      company: "Atento Brasil",
      description:
        "Lido com clientes como META, Itaú, Alelo, Qualicorp e Mercado Livre, onde atuo com processos ETL em ambientes On-Premise, com SQL Server, Visual Studio Code, lidando com Jobs e Procedures, armazenando dados em camadas Raw, Stage e Mart. Também atuo em demandas em ambiente Azure, com Python/Databricks.",
      achievements: [
        "Desenvolvo e mantenho relatórios em Power BI para a área de atendimento ao cliente, aplicando DAX avançado para criar tabelas calculadas e realizando modelagem de dados no modelo Star Schema",
      ],
      tools: ["SQL Server", "Python", "Power BI", "Azure"],
    },
    {
      period: "09/2024 - 07/2025",
      role: "Analista de Inteligência de Mercado",
      company: "Faculdade ESEG",
      description:
        "Desenvolvimento e manutenção de pipelines ETL, construindo fluxos completos de dados: desde a extração, passando por limpeza e transformação em áreas de staging, até o carregamento em Data Warehouses. Atuação com Python, SQL e ferramentas do Google Cloud (Cloud Storage, BigQuery, Cloud Scheduler, Cloud Run Functions, entre outras).",
      achievements: [
        "Criação de dashboards automatizados no Power BI e Looker Studio, utilizando dados tratados e atualizados diretamente das pipelines",
        "Gestão de Data Lakes, com integração de diversas fontes de dados como ERP, CRM, BigQuery, GCP e Google Analytics",
        "Desenvolvimento de automações (RPA) em Python com Selenium, BeautifulSoup e PyAutoGui, otimizando e acelerando processos operacionais manuais",
      ],
      tools: ["Python", "BigQuery", "Power BI", "GCP"],
    },
    {
      period: "11/2023 - 09/2024",
      role: "Estágio em Business Intelligence",
      company: "Faculdade ESEG",
      description:
        "Desenvolvimento de dashboards automatizados em Power BI e Looker Studio, integrando diversas fontes de dados, incluindo bancos MySQL, BigQuery e Google Analytics. Esses dashboards foram projetados para atender às necessidades de diferentes áreas, como Marketing Digital e Tradicional, Acompanhamento de Produtividade do Time de Atendimento, Monitoramento de Inscrições e Matrículas, e análises Educacionais.",
      achievements: [
        "Implementação de Processos ETL: Responsável por projetar e implementar pipelines ETL para extrair dados de APIs em Python, integrando informações de sistemas CRM, ERP e plataformas em nuvem (Google Ads, Meta, Google Analytics), além de bancos de dados SQL",
        "Automação de Processos (RPA): Desenvolvimento de automações em Python, implementando soluções que reduziram significativamente o tempo de trabalho em diversos setores, resultando em melhorias na produtividade e na precisão de tarefas repetitivas",
      ],
      tools: ["Power BI", "Looker Studio", "MySQL", "Python"],
    },
    {
      period: "03/2023 - 10/2023",
      role: "Assistente Financeiro",
      company: "Grupo Vamos",
      description:
        "Conciliação das contas do banco com o sistema.",
      achievements: [
        "Extração de dados em SQL e construção de relatórios em Power BI",
      ],
      tools: ["SQL", "Power BI", "Excel", "ERP"],
    },
    {
      period: "05/2021 - 01/2023",
      role: "Analista de Dados",
      company: "Los Carvalhos",
      description:
        "Desenvolvimento e manutenção de dashboards no Power BI para monitoramento de estoque, projeção de vendas e análises financeiras.",
      achievements: [
        "Implementação de pipelines ETL utilizando Python e SQL, integrando dados de diversas fontes, como CRM, ERP e planilhas Excel",
      ],
      tools: ["Python", "SQL", "Power BI", "Excel"],
    },
  ];

  return (
    <section id="experiencia" className="relative py-24 px-6 border-t border-[#F4F3EE]/10">
      {/* Floating Elements Container */}
      <SectionFloatingElements count={15} />
      
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
              // Experiência
            </span>
            <h2 className="font-mono text-4xl md:text-5xl mt-3 text-[#F4F3EE]">
              Trajetória Profissional
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#F4F3EE]/20 transform md:-translate-x-1/2 z-0" />

            {/* Experiences */}
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Icon */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 z-20">
                    <div className="w-12 h-12 bg-[#F5B700] flex items-center justify-center border-4 border-[#051226]">
                      <Briefcase className="w-6 h-6 text-[#051226]" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className="w-full md:w-[calc(55%-1.5rem)] ml-16 md:ml-0 relative z-10 text-left"
                  >
                    <div className="relative border-2 border-[#F4F3EE]/20 bg-[#051226] p-12 hover:bg-[#F4F3EE]/5 hover:border-[#F5B700] hover:shadow-lg hover:shadow-[#F5B700]/20 transition-all group">
                      <div className="flex flex-col">
                        {/* Top Center - Title, Period, Company */}
                        <div className="text-center mb-8 pb-8 border-b border-[#F4F3EE]/10">
                          <span className="font-mono text-sm text-[#F5B700] block mb-3">
                            {exp.period}
                          </span>
                          <h3 className="font-mono text-xl text-[#F4F3EE] mb-2">{exp.role}</h3>
                          <p className="font-mono text-sm text-[#F4F3EE]/80">
                            {exp.company}
                          </p>
                        </div>

                        {/* Bottom - Description and Achievements */}
                        <div className="text-left">
                          <p className="mb-4 leading-relaxed text-sm text-[#F4F3EE]/80">
                            {exp.description}
                          </p>
                          <ul className="space-y-2 mb-6">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-[#F4F3EE]/80">
                                {achievement}
                              </li>
                            ))}
                          </ul>

                          {/* Tools */}
                          <div className="flex flex-wrap gap-2 pt-4 border-t border-[#F4F3EE]/10">
                            {exp.tools.map((tool, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 bg-[#F5B700]/10 border border-[#F5B700]/30 font-mono text-xs text-[#F5B700]"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}