import "./style/navigation.scss";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="nav-top">
      <ScrollLink className="link-nav" to="about" smooth={true} duration={500}>
        O autorce
      </ScrollLink>

      <ScrollLink className="link-nav" to="books" smooth={true} duration={500}>
        Książki
      </ScrollLink>
      <ScrollLink className="link-nav" to="quotes" smooth={true} duration={500}>
        Cytaty
      </ScrollLink>

      <RouterLink className="link-nav" to="/contact">
        Contact
      </RouterLink>
    </nav>
  );
}

export default Navigation;
