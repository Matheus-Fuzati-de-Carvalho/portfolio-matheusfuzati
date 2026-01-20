import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface IntroAnimationProps {
  onComplete: () => void;
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [displayedChars, setDisplayedChars] = useState<string[]>([]);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [startImplosion, setStartImplosion] = useState(false);
  
  const fullName = "MATHEUSFUZATI";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
  
  useEffect(() => {
    // Initialize with random characters
    setDisplayedChars(fullName.split('').map(() => 
      chars[Math.floor(Math.random() * chars.length)]
    ));
    
    // Decryption animation
    let frameCount = 0;
    const totalFrames = 180; // ~3 seconds at 60fps
    
    const decryptionInterval = setInterval(() => {
      frameCount++;
      
      // Calculate which indices should be revealed based on progress
      const progress = frameCount / totalFrames;
      const revealsNeeded = Math.floor(progress * fullName.length);
      
      setDisplayedChars(prev => prev.map((char, index) => {
        // If already revealed, keep the correct letter
        if (revealedIndices.has(index)) {
          return fullName[index];
        }
        
        // Reveal letters progressively from start to end
        if (index < revealsNeeded && !revealedIndices.has(index)) {
          setRevealedIndices(prev => new Set([...prev, index]));
          return fullName[index];
        }
        
        // Keep randomizing unrevealed letters
        return chars[Math.floor(Math.random() * chars.length)];
      }));
      
      // When complete, show subtitle and trigger implosion
      if (frameCount >= totalFrames) {
        clearInterval(decryptionInterval);
        
        // Ensure all letters are revealed
        setDisplayedChars(fullName.split(''));
        
        // Show subtitle after brief pause
        setTimeout(() => {
          setShowSubtitle(true);
          
          // Start implosion
          setTimeout(() => {
            setStartImplosion(true);
            
            // Complete animation
            setTimeout(() => {
              onComplete();
            }, 1200);
          }, 800);
        }, 300);
      }
    }, 16); // ~60fps

    return () => {
      clearInterval(decryptionInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ 
        opacity: startImplosion ? 0 : 1,
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Implosion Effect */}
      {startImplosion && (
        <>
          {/* Circular implosion rings */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                scale: 1,
                opacity: 0.2,
              }}
              animate={{ 
                scale: 0,
                opacity: 0,
              }}
              transition={{
                duration: 1.0,
                delay: i * 0.04,
                ease: [0.85, 0, 0.15, 1],
              }}
              className="absolute rounded-full border border-[#F5B700]/30"
              style={{
                width: `${80 + i * 180}vw`,
                height: `${80 + i * 180}vh`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}
          
          {/* Center point collapse */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 2, 0], opacity: [0, 0.6, 0] }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 w-3 h-3 rounded-full bg-[#F5B700]"
            style={{
              boxShadow: '0 0 60px 30px rgba(245, 183, 0, 0.3)',
            }}
          />
        </>
      )}

      {/* Main Content */}
      <motion.div 
        className="relative z-10 text-center px-6"
        animate={{
          scale: startImplosion ? 0.7 : 1,
          opacity: startImplosion ? 0 : 1,
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Decrypted Name */}
        <div className="relative font-mono text-4xl md:text-6xl tracking-tight">
          {displayedChars.map((char, index) => {
            const isMatheus = index < 7;
            const isRevealed = revealedIndices.has(index);
            
            return (
              <motion.span
                key={index}
                animate={{ 
                  opacity: isRevealed ? 1 : 0.6,
                  scale: isRevealed ? [1, 1.1, 1] : 1,
                }}
                transition={{ 
                  scale: { duration: 0.3 },
                  opacity: { duration: 0.2 }
                }}
                className={`inline-block ${
                  isMatheus ? 'text-[#F5B700]' : 'text-[#F4F3EE]'
                }`}
                style={{
                  textShadow: isRevealed
                    ? isMatheus 
                      ? '0 0 20px rgba(245, 183, 0, 0.4)'
                      : '0 0 15px rgba(244, 243, 238, 0.3)'
                    : 'none',
                }}
              >
                {char}
              </motion.span>
            );
          })}
        </div>

        {/* Subtitle */}
        {showSubtitle && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-mono text-xs md:text-sm text-[#F4F3EE] tracking-[0.3em] mt-6"
            style={{
              textShadow: '0 0 8px rgba(244, 243, 238, 0.15)',
            }}
          >
            ANALYTICS ENGINEER
          </motion.div>
        )}
      </motion.div>

      {/* Decryption progress indicator */}
      {!showSubtitle && displayedChars.length > 0 && (
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="font-mono text-[10px] text-[#F5B700]/50 tracking-wider mb-2">
            DECRYPTING
          </div>
          <div className="w-48 h-[1px] bg-[#F4F3EE]/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "linear" }}
              className="h-full bg-[#F5B700]/40"
            />
          </div>
        </motion.div>
      )}

      {/* Minimal grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#F5B700 1px, transparent 1px),
            linear-gradient(90deg, #F5B700 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Subtle vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.7) 100%)',
        }}
      />
    </motion.div>
  );
}