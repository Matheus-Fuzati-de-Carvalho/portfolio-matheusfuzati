import { motion } from "motion/react";
import { Mail, Linkedin, Github, ArrowUpRight, Database, Code2 } from "lucide-react";
import { SectionFloatingElements } from "@/app/components/SectionFloatingElements";

export function Contact() {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "fuzatimatheus@gmail.com",
      displayValue: "fuzatimatheus@gmail.com",
      href: "mailto:fuzatimatheus@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "matheus-fuzati-de-carvalho",
      displayValue: "/in/matheus-fuzati-de-carvalho",
      href: "https://www.linkedin.com/in/matheus-fuzati-de-carvalho",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Matheus-Fuzati-de-Carvalho",
      displayValue: "@Matheus-Fuzati-de-Carvalho",
      href: "https://github.com/Matheus-Fuzati-de-Carvalho",
    },
  ];

  return (
    <section id="contato" className="relative py-32 px-6 border-t border-[#F5B700]/20">
      {/* Floating Elements Container */}
      <SectionFloatingElements count={6} />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-20 text-center">
            <span className="font-mono text-[#F5B700] text-sm uppercase tracking-wider">
              // Contato
            </span>
            <h2 className="font-mono text-5xl md:text-6xl mt-4 text-[#F4F3EE]">
              Vamos Conversar
            </h2>
            <p className="text-[#F4F3EE]/70 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
              Aberto a oportunidades, projetos e conversas sobre dados,
              analytics engineering e tecnologia.
            </p>
          </div>

          {/* Main Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Contact Cards Grid */}
            <div className="space-y-6">
              {/* Email and LinkedIn Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email Card */}
                <motion.a
                  href={contacts[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="group/item relative border-2 border-[#F5B700]/30 bg-[#051226] p-8 hover:border-[#F5B700] hover:scale-[1.02] transition-all duration-300 z-10"
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-4 border-2 border-[#F5B700]/30 group-hover/item:border-[#F5B700] group-hover/item:bg-[#F5B700] transition-all duration-300">
                      <Mail
                        className="w-8 h-8 text-[#F5B700] group-hover/item:text-[#051226]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-[#F5B700] uppercase tracking-wider mb-2">
                        Email
                      </p>
                      <p className="font-mono text-sm text-[#F4F3EE] group-hover/item:text-[#F5B700] transition-colors break-all">
                        fuzatimatheus@gmail.com
                      </p>
                    </div>
                    <ArrowUpRight 
                      className="absolute top-4 right-4 w-5 h-5 text-[#F5B700]/50 group-hover/item:text-[#F5B700] group-hover/item:translate-x-1 group-hover/item:-translate-y-1 transition-all duration-300" 
                      strokeWidth={2}
                    />
                  </div>
                </motion.a>

                {/* LinkedIn Card */}
                <motion.a
                  href={contacts[1].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="group/item relative border-2 border-[#F5B700]/30 bg-[#051226] p-8 hover:border-[#F5B700] hover:scale-[1.02] transition-all duration-300 z-10"
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-4 border-2 border-[#F5B700]/30 group-hover/item:border-[#F5B700] group-hover/item:bg-[#F5B700] transition-all duration-300">
                      <Linkedin
                        className="w-8 h-8 text-[#F5B700] group-hover/item:text-[#051226]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-[#F5B700] uppercase tracking-wider mb-2">
                        LinkedIn
                      </p>
                      <p className="font-mono text-sm text-[#F4F3EE] group-hover/item:text-[#F5B700] transition-colors">
                        /in/matheus-fuzati-de-carvalho
                      </p>
                    </div>
                    <ArrowUpRight 
                      className="absolute top-4 right-4 w-5 h-5 text-[#F5B700]/50 group-hover/item:text-[#F5B700] group-hover/item:translate-x-1 group-hover/item:-translate-y-1 transition-all duration-300" 
                      strokeWidth={2}
                    />
                  </div>
                </motion.a>
              </div>

              {/* GitHub Row - Centered */}
              <div className="flex justify-center">
                <motion.a
                  href={contacts[2].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="group/item relative border-2 border-[#F5B700]/30 bg-[#051226] p-8 hover:border-[#F5B700] hover:scale-[1.02] transition-all duration-300 w-full md:w-1/2 z-10"
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-4 border-2 border-[#F5B700]/30 group-hover/item:border-[#F5B700] group-hover/item:bg-[#F5B700] transition-all duration-300">
                      <Github
                        className="w-8 h-8 text-[#F5B700] group-hover/item:text-[#051226]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-[#F5B700] uppercase tracking-wider mb-2">
                        GitHub
                      </p>
                      <p className="font-mono text-sm text-[#F4F3EE] group-hover/item:text-[#F5B700] transition-colors">
                        @Matheus-Fuzati-de-Carvalho
                      </p>
                    </div>
                    <ArrowUpRight 
                      className="absolute top-4 right-4 w-5 h-5 text-[#F5B700]/50 group-hover/item:text-[#F5B700] group-hover/item:translate-x-1 group-hover/item:-translate-y-1 transition-all duration-300" 
                      strokeWidth={2}
                    />
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}