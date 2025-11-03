import "./index.css";
import StarBackground from "./components/StarBackground";
import logo from "./assets/logo.png";
import SocialIcons from "./components/SocialIcons";
import { motion } from "framer-motion";

function App() {
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

        {/* ICONOS SOCIALES */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1.2, ease: "easeOut" }}
        >
          <SocialIcons />
        </motion.div>
      </main>
    </div>
  );
}

export default App;
