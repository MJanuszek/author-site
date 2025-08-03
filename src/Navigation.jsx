import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      {/* Scroll links */}
      <ScrollLink to="about" smooth={true} duration={500}>
        About
      </ScrollLink>

      <ScrollLink to="services" smooth={true} duration={500}>
        Services
      </ScrollLink>

      <RouterLink to="/contact">Contact</RouterLink>
    </nav>
  );
}

export default Navigation;
