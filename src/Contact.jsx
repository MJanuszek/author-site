import { Link } from "react-router-dom";
import "./style/contact.scss";
import Footer from "./Footer";

function Contact() {
  return (
    <div>
      <div className="contact">
        <div>
          <Link to="/" className="gohome">
            ← Strona Główna
          </Link>
        </div>
        <div className="contact-into">
          <h1>Napisz do mnie</h1>
          <p>j.wochlik@wp.pl</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
