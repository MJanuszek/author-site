import { Link } from "react-router-dom";
import "./style/contact.scss";

function Contact() {
  return (
    <div className="contact">
      <div>
        <Link to="/" className="gohome">
          ← Strona Główna
        </Link>
      </div>
      <div className="contact-into">
        <h1>Napisz do mnie</h1>
        <p>: contact@example.com</p>
      </div>
    </div>
  );
}

export default Contact;
