import { motion } from "motion/react";
import { Database, Terminal, Workflow, Code2 } from "lucide-react";
import profileImage from "../../assets/profile.jpeg";
import { SectionFloatingElements } from "@/app/components/SectionFloatingElements";

export function Hero() {
  return (
    <section className="relative flex items-center justify-center px-6 overflow-hidden pt-20 pb-20 z-0" style={{ minHeight: 'calc(100vh - 123px)' }}>
      {/* Floating Elements Container */}
      <SectionFloatingElements count={10} />
      
      <div className="max-w-7xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left side - Content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Icons */}
            <div className="flex gap-4 items-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <Database className="w-10 h-10 text-[#F5B700]" strokeWidth={1.5} />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <Terminal className="w-10 h-10 text-[#F5B700]" strokeWidth={1.5} />
              </motion.div>
            </div>

            {/* Name and Title */}
            <div>
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-mono text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#F4F3EE] mb-3"
              >
                Matheus Fuzati
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="font-mono text-xl md:text-2xl text-[#F5B700]"
              >
                Analytics Engineer
              </motion.p>
            </div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="space-y-3"
            >
              <p className="text-xl md:text-2xl text-[#F4F3EE]/90 leading-relaxed font-light font-mono">
              <span className="text-[#F5B700]">SELECT</span> insights
              <br />
              <span className="text-[#F5B700]">FROM</span> dados
              <br />
              <span className="text-[#F5B700]">WHERE</span> qualidade <span className="text-[#F5B700]">=</span> máxima
            </p>

            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projetos"
                className="px-8 py-4 bg-[#F5B700] text-[#051226] font-mono text-sm border-2 border-[#F5B700] hover:bg-transparent hover:text-[#F5B700] transition-all duration-300"
              >
                Ver Projetos
              </a>
              <a
                href="#contato"
                className="px-8 py-4 bg-transparent text-[#F4F3EE] font-mono text-sm border-2 border-[#F4F3EE] hover:bg-[#F4F3EE] hover:text-[#051226] transition-all duration-300"
              >
                Contato
              </a>
            </motion.div>
          </div>

          {/* Right side - Profile Photo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <img
                src={profileImage}
                alt="Matheus Fuzati"
                className="w-full h-full rounded-full object-cover border-8 border-[#F5B700]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
