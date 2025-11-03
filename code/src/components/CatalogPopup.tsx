import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./CatalogPopup.css";

interface CatalogPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CatalogPopup = ({ isOpen, onClose }: CatalogPopupProps) => {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const [loading, setLoading] = useState(false);
  const [textVisible, setTextVisible] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const [hasOpened, setHasOpened] = useState(false); // evita mostrar toast inicial

  // 📱 Móvil: muestra animación y abre PDF en nueva pestaña
  useEffect(() => {
    if (isMobile && isOpen) {
      setHasOpened(true);
      setLoading(true);
      setTextVisible("");

      // Animación de escritura suave
      const text = "Abriendo catálogo...";
      let i = 0;
      const interval = setInterval(() => {
        setTextVisible(text.slice(0, i + 1));
        i++;
        if (i === text.length) clearInterval(interval);
      }, 60);

      // Abre el PDF
      const timer = setTimeout(() => {
        const pdfUrl = `${window.location.origin}/catalogo.pdf`;
        window.open(
          `https://docs.google.com/gview?embedded=true&url=${pdfUrl}`,
          "_blank"
        );
        setLoading(false);
        setShowThankYou(true);
        onClose();
      }, 1200);

      // Oculta el mensaje después de unos segundos
      const thankYouTimer = setTimeout(() => {
        setShowThankYou(false);
      }, 4200);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
        clearTimeout(thankYouTimer);
      };
    }
  }, [isMobile, isOpen, onClose]);

  // 💻 Desktop: mostrar agradecimiento solo al cerrar después de haberlo abierto
  useEffect(() => {
    if (!isMobile && !isOpen && hasOpened) {
      setShowThankYou(true);
      const timer = setTimeout(() => setShowThankYou(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isMobile, hasOpened]);

  // -------------------- RENDER --------------------

  if (isMobile) {
    return (
      <>
        <AnimatePresence>
          {loading && (
            <motion.div
              className="catalog-overlay mobile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="catalog-loader"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="loader-ring"></div>
                <p className="loader-text">{textVisible}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showThankYou && (
            <motion.div
              className="thankyou-toast"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              ✨ Gracias por explorar nuestro catálogo ✨
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // 💻 Desktop render
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="catalog-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="catalog-modal"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <button
                className="catalog-close"
                onClick={() => {
                  setHasOpened(true);
                  onClose();
                }}
              >
                ✕
              </button>

              <iframe
                src="/catalogo.pdf"
                title="Catálogo Salsa de Noche"
                loading="lazy"
                className="catalog-iframe"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showThankYou && (
          <motion.div
            className="thankyou-toast"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            ✨ Gracias por explorar nuestro catálogo ✨
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CatalogPopup;
