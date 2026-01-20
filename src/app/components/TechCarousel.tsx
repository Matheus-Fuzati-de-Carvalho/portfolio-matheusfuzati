import { motion } from "motion/react";
import { GitBranch, Server } from "lucide-react";

export function TechCarousel() {
  const technologies = [
    { name: "SQL", highlight: true },
    { name: "Analytics Engineering", highlight: true },
    { name: "Data Analytics", highlight: false },
    { name: "Data Modeling", highlight: false },
    { name: "ETL / ELT", highlight: false },
    { name: "BigQuery", highlight: false },
    { name: "Power BI", highlight: false },
    { name: "Looker", highlight: false },
    { name: "Python", highlight: false },
    { name: "Cloud (GCP)", highlight: false },
    { name: "Data Pipelines", highlight: false },
    { name: "Metrics & KPIs", highlight: false },
    { name: "dbt", highlight: false },
  ];

  // Duplicate items for seamless loop
  const duplicatedTech = [...technologies, ...technologies, ...technologies];

  return (
    <section className="relative py-6 border-t border-[#F5B700]/20 overflow-hidden">
      <div className="relative flex">
        <motion.div
          className="flex gap-8 pr-8"
          animate={{
            x: [0, -2000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 120,
              ease: "linear",
            },
          }}
        >
          {duplicatedTech.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 flex items-center gap-8"
            >
              <span 
                className={`font-mono text-sm whitespace-nowrap ${
                  tech.highlight 
                    ? 'text-[#F5B700]' 
                    : 'text-[#F4F3EE]/50'
                }`}
              >
                {tech.name}
              </span>
              {index < duplicatedTech.length - 1 && (
                <span className="text-[#F4F3EE]/20">·</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Subtle gradient overlays */}
      <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#051226] to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#051226] to-transparent pointer-events-none z-10"></div>
      
      {/* Decorative Fixed Elements */}
      <GitBranch className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[#F5B700] opacity-20 pointer-events-none hidden lg:block" strokeWidth={1.5} />
      <Server className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[#F5B700] opacity-20 pointer-events-none hidden lg:block" strokeWidth={1.5} />
    </section>
  );
}