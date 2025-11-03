// src/components/CatalogPopup.tsx
import { motion, AnimatePresence } from "framer-motion";
import "./CatalogPopup.css";

interface CatalogPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CatalogPopup = ({ isOpen, onClose }: CatalogPopupProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="catalog-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="catalog-modal"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <button className="catalog-close" onClick={onClose}>
              ✕
            </button>

            {/* Detección simple del dispositivo */}
            {/(iPhone|iPad|iPod)/i.test(navigator.userAgent) ? (
              <div className="catalog-fallback">
                <p>
                  Para ver el catálogo completo, abrilo en una nueva ventana:{" "}
                  <a
                    href="/catalogo.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="catalog-link"
                  >
                    Abrir catálogo
                  </a>
                </p>
              </div>
            ) : (
              <iframe
                src="/catalogo.pdf"
                title="Catálogo Salsa de Noche"
                loading="lazy"
                className="catalog-iframe"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CatalogPopup;
