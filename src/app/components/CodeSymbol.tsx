interface CodeSymbolProps {
  type: "brackets" | "tags" | "sql" | "equals" | "pipe";
  className?: string;
}

export function CodeSymbol({ type, className = "" }: CodeSymbolProps) {
  const symbols = {
    brackets: (
      <svg viewBox="0 0 100 100" className={className} fill="currentColor">
        <path d="M30 20 L20 20 L20 80 L30 80 M70 20 L80 20 L80 80 L70 80" stroke="currentColor" strokeWidth="4" fill="none" />
      </svg>
    ),
    tags: (
      <svg viewBox="0 0 100 100" className={className} fill="currentColor">
        <path d="M25 30 L40 50 L25 70 M75 30 L60 50 L75 70" stroke="currentColor" strokeWidth="4" fill="none" />
      </svg>
    ),
    sql: (
      <svg viewBox="0 0 100 100" className={className}>
        <text x="50" y="60" textAnchor="middle" fontSize="32" fontFamily="monospace" fill="currentColor">
          SQL
        </text>
      </svg>
    ),
    equals: (
      <svg viewBox="0 0 100 100" className={className}>
        <line x1="20" y1="40" x2="80" y2="40" stroke="currentColor" strokeWidth="5" />
        <line x1="20" y1="60" x2="80" y2="60" stroke="currentColor" strokeWidth="5" />
      </svg>
    ),
    pipe: (
      <svg viewBox="0 0 100 100" className={className}>
        <line x1="40" y1="20" x2="40" y2="80" stroke="currentColor" strokeWidth="5" />
        <line x1="60" y1="20" x2="60" y2="80" stroke="currentColor" strokeWidth="5" />
      </svg>
    ),
  };

  return symbols[type];
}
