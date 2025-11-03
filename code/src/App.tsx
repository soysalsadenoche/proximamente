import "./index.css";
import StarBackground from "./components/StarBackground";
import logo from "./assets/logo.png";
import { motion } from "framer-motion";
import { useState } from "react";
import SocialIcons from "./components/SocialIcons";
import CatalogPopup from "./components/CatalogPopup"; 


function App() {
  
  const [showCatalog, setShowCatalog] = useState(false);
  return (
    <div className="app-container">
      <StarBackground />
      <main className="content">
        {/* LOGO */}
        <motion.img
          src={logo}
          alt="Salsa de Noche"
          className="logo"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* TÍTULO */}
        <motion.h1
          className="title"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          COMING SOON
        </motion.h1>

        {/* SUBTÍTULO */}
        <motion.p
          className="subtitle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        >
          Estamos trabajando para darte la mejor experiencia. Estaremos muy pronto.
        </motion.p>

        {/* FORMULARIO */}
        <motion.form
          className="notify-form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1.2, ease: "easeOut" }}
        >
          <input type="email" placeholder="tu@email.com" />
          <button>NOTIFICAME</button>
        </motion.form>

        {/* Botón para ver catálogo */}
        <motion.button
          className="catalog-btn"
          onClick={() => setShowCatalog(true)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          VER CATÁLOGO
        </motion.button>
        {/* ICONOS SOCIALES */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1.2, ease: "easeOut" }}
        >
          <SocialIcons />
        </motion.div>
        
      </main>
      {/* Popup */}
      <CatalogPopup isOpen={showCatalog} onClose={() => setShowCatalog(false)} />
    </div>
  );
}

export default App;
