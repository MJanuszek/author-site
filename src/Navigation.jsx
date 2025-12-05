import "./style/navigation.scss";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="nav-top">
      <RouterLink className="link-nav" to="/about">
        O autorce
      </RouterLink>
      <RouterLink className="link-nav" to="/news">
        Aktualności
      </RouterLink>
      <RouterLink className="link-nav" to="/Books">
        Książki
      </RouterLink>

      {/* <ScrollLink className="link-nav" to="quotes" smooth={true} duration={500}>
        Cytaty
      </ScrollLink> */}

      <RouterLink className="link-nav" to="/contact">
        Media
      </RouterLink>
    </nav>
  );
}

export default Navigation;
