import { FaInstagram, FaFacebookF } from "react-icons/fa";
import "./SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a
        href="https://www.instagram.com/_salsadenoche/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61579343969713"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FaFacebookF />
      </a>
    </div>
  );
};

export default SocialIcons;
