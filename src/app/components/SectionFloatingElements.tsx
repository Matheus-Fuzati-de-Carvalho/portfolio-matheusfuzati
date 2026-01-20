import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";
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
  y: number;
  vx: number; // velocidade x
  vy: number; // velocidade y
  size: number;
  isIcon: boolean;
}

interface Props {
  count?: number;
}

export function SectionFloatingElements({ count = 15 }: Props) {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    // Inicializa elementos com posições e velocidades aleatórias
    const newElements = Array.from({ length: count }, (_, i) => {
      const isIcon = Math.random() > 0.6; // 40% chance de ser ícone
      return {
        id: i,
        symbol: isIcon ? undefined : codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
        icon: isIcon ? techIcons[Math.floor(Math.random() * techIcons.length)] : undefined,
        x: Math.random() * 100,
        y: Math.random() * 100,
        vx: (Math.random() - 0.5) * 0.075, // velocidade x entre -0.0375 e 0.0375 (4x mais lento)
        vy: (Math.random() - 0.5) * 0.075, // velocidade y entre -0.0375 e 0.0375 (4x mais lento)
        size: Math.random() * 0.5 + 0.5,
        isIcon
      };
    });
    setElements(newElements);
  }, [count]);

  useEffect(() => {
    if (elements.length === 0) return;

    let lastTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const deltaTime = (currentTime - lastTime) / 16.67; // normaliza para 60fps
      lastTime = currentTime;

      setElements(prevElements => 
        prevElements.map(element => {
          let newX = element.x + element.vx * deltaTime;
          let newY = element.y + element.vy * deltaTime;
          let newVx = element.vx;
          let newVy = element.vy;

          // Bounce nas bordas horizontais
          if (newX <= 0 || newX >= 100) {
            newVx = -element.vx;
            newX = newX <= 0 ? 0 : 100;
          }

          // Bounce nas bordas verticais
          if (newY <= 0 || newY >= 100) {
            newVy = -element.vy;
            newY = newY <= 0 ? 0 : 100;
          }

          return {
            ...element,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy
          };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [elements.length]);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-[1]"
    >
      {elements.map((element) => {
        const IconComponent = element.icon;
        
        return (
          <motion.div
            key={element.id}
            className="absolute opacity-[0.28]"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              fontSize: element.isIcon ? undefined : `${element.size}rem`,
              color: "#F5B700",
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