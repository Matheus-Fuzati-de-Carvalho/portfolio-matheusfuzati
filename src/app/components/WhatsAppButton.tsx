import { motion } from "motion/react";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export function WhatsAppButton() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const phoneNumber = "5511940403278"; // Número no formato internacional sem + e sem espaços
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setShowConfirmation(false);
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={handleClick}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#F5B700] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 group"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle 
          className="w-7 h-7 text-[#051226] group-hover:scale-110 transition-transform duration-300" 
          strokeWidth={2}
        />
      </motion.button>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleCancel}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="relative bg-[#051226] border-2 border-[#F5B700] rounded-lg p-6 max-w-sm w-full shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={handleCancel}
              className="absolute top-4 right-4 text-[#F4F3EE]/60 hover:text-[#F4F3EE] transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-[#F5B700] rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-[#051226]" strokeWidth={2} />
              </div>
            </div>

            {/* Message */}
            <h3 className="font-mono text-lg text-[#F4F3EE] text-center mb-2">
              Iniciar conversa?
            </h3>
            <p className="text-sm text-[#F4F3EE]/70 text-center mb-6">
              Você será redirecionado para o WhatsApp
            </p>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleCancel}
                className="flex-1 px-4 py-2 font-mono text-sm text-[#F4F3EE] border border-[#F4F3EE]/30 hover:bg-[#F4F3EE]/5 transition-colors rounded"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirm}
                className="flex-1 px-4 py-2 font-mono text-sm bg-[#F5B700] text-[#051226] hover:bg-[#F5B700]/90 transition-colors rounded font-semibold"
              >
                Confirmar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}