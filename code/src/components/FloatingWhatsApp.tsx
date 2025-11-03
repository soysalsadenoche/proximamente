import { FaWhatsapp } from "react-icons/fa";
import "./FloatingWhatsApp.css";

const FloatingWhatsApp = () => {
  const phoneNumber = "5493515997489"; // tu número
  const message = encodeURIComponent("Hola! Vi el catálogo de Salsa de Noche 💫");
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default FloatingWhatsApp;
