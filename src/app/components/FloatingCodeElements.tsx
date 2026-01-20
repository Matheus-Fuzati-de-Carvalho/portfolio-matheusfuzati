import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { 
  Database, 
  Code2, 
  Server, 
  GitBranch, 
  Terminal, 
  Cpu, 
  HardDrive, 
  Cloud, 
  Workflow,
  BarChart3,
  FileJson,
  Binary,
  Boxes,
  Layers
} from "lucide-react";

const codeSymbols = [
  "{ }",
  "</>",
  "SELECT *",
  "=",
  "<>",
  "||",
  "WHERE",
  "JOIN",
  "GROUP BY",
  "ETL",
  "CASE",
  "WHEN",
  "THEN",
  "AS",
  "FROM",
  "WITH",
  "ORDER BY",
  "LIMIT",
  "DISTINCT",
  "COUNT(*)",
  "SUM",
  "AVG",
  "MAX",
  "MIN",
  "TRANSFORM",
  "PIPELINE",
  "QUERY",
  "DATA",
  "SCHEMA",
  "INDEX",
  "INSERT",
  "UPDATE",
  "DELETE",
  "CREATE",
  "ALTER",
  "DROP",
  "UNION",
  "HAVING",
  "NULL",
  "TRUE",
  "FALSE",
  "INNER",
  "LEFT",
  "RIGHT",
  "FULL",
  "CROSS",
  "ON",
  "AND",
  "OR",
  "NOT",
  "IN",
  "EXISTS",
  "BETWEEN",
  "LIKE",
  "IS",
];

const techIcons = [
  Database,
  Code2,
  Server,
  GitBranch,
  Terminal,
  Cpu,
  HardDrive,
  Cloud,
  Workflow,
  BarChart3,
  FileJson,
  Binary,
  Boxes,
  Layers
];

interface FloatingElement {
  id: number;
  symbol?: string;
  icon?: typeof Database;
  x: number;
  size: number;
  duration: number;
  delay: number;
  isIcon: boolean;
}

export function FloatingCodeElements() {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    // Calcula a altura total da página
    const updateHeight = () => {
      const height = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      setPageHeight(height);
    };

    updateHeight();
    
    // Atualiza altura quando o conteúdo mudar
    const observer = new MutationObserver(updateHeight);
    observer.observe(document.body, { 
      childList: true, 
      subtree: true,
      attributes: true 
    });

    window.addEventListener('resize', updateHeight);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  useEffect(() => {
    if (pageHeight === 0) return;

    const newElements = Array.from({ length: 250 }, (_, i) => {
      const isIcon = Math.random() > 0.6; // 40% chance de ser ícone
      return {
        id: i,
        symbol: isIcon ? undefined : codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
        icon: isIcon ? techIcons[Math.floor(Math.random() * techIcons.length)] : undefined,
        x: Math.random() * 100,
        size: Math.random() * 0.5 + 0.5,
        // Velocidade 30% mais lenta = duration original (sem multiplicador)
        duration: Math.random() * 20 + 30,
        delay: Math.random() * 10,
        isIcon
      };
    });
    setElements(newElements);
  }, [pageHeight]);

  if (pageHeight === 0) return null;

  return (
    <div 
      className="absolute top-0 left-0 w-full pointer-events-none overflow-hidden z-[2]"
      style={{ height: `${pageHeight}px` }}
    >
      {elements.map((element) => {
        const IconComponent = element.icon;
        // Distribui elementos aleatoriamente ao longo de toda a altura da página
        const startY = Math.random() * pageHeight;
        
        return (
          <motion.div
            key={element.id}
            className="absolute opacity-[0.28]"
            style={{
              left: `${element.x}%`,
              fontSize: element.isIcon ? undefined : `${element.size}rem`,
              color: "#F5B700",
              top: 0,
            }}
            initial={{ y: startY }}
            animate={{
              y: [startY, startY + 300, startY - 300],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          >
            {element.isIcon && IconComponent ? (
              <IconComponent 
                size={element.size * 24} 
                strokeWidth={1.5}
              />
            ) : (
              <span className="font-mono">{element.symbol}</span>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}