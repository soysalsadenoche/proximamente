// src/components/CatalogViewer.tsx
import { motion } from "framer-motion";
import "./CatalogViewer.css";

const CatalogViewer = () => {
  return (
    <motion.div
      className="catalog-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <h2 className="catalog-title">Catálogo Salsa de Noche ✨</h2>

      <div className="catalog-frame">
        <iframe
          src="/catalogo.pdf"
          title="Catálogo Salsa de Noche"
          loading="lazy"
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      </div>

      <p className="catalog-note">
        Si no se carga correctamente,{" "}
        <a href="/catalogo.pdf" target="_blank" rel="noopener noreferrer">
          hacé clic aquí para abrirlo en otra pestaña
        </a>
        .
      </p>
    </motion.div>
  );
};

export default CatalogViewer;
