import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/app/components/Navigation";
import { HomePage } from "@/app/components/HomePage";
import { ProjectDetailPage } from "@/app/components/ProjectDetailPage";
import { PipelineEventosGCP } from "@/app/components/cases/PipelineEventosGCP";
import { AgenteIAEducacional } from "@/app/components/cases/AgenteIAEducacional";
import { WhatsAppButton } from "@/app/components/WhatsAppButton";
import { IntroAnimation } from "@/app/components/IntroAnimation";
import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [hasShownIntro, setHasShownIntro] = useState(false);

  useEffect(() => {
    // Check if intro has been shown in this session
    const introShown = sessionStorage.getItem("introShown");
    if (introShown) {
      setShowIntro(false);
      setHasShownIntro(true);
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem("introShown", "true");
    setShowIntro(false);
    setHasShownIntro(true);
  };

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {showIntro && !hasShownIntro && (
          <IntroAnimation key="intro" onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      <div className="relative bg-[#051226] font-['Inter',sans-serif] overflow-x-hidden">
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projeto/pipeline-eventos-gcp" element={<PipelineEventosGCP />} />
            <Route path="/projeto/agente-ia-educacional" element={<AgenteIAEducacional />} />
            <Route path="/projeto/:projectId" element={<ProjectDetailPage />} />
          </Routes>
        </div>

        {/* WhatsApp Floating Button */}
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}