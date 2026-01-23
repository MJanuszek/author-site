import "./style/contact.scss";

import Navigation from "./Navigation";

function Contact() {
  return (
    <div className="contact">
      {/* <Link to="/" className="gohome">
        ← Strona Główna
      </Link> */}
      <Navigation />

      <div className="contact-card">
        <p className="contact-subtitle">
          Pisz śmiało, jeśli masz pytania o książki, bibliotekę albo moje
          projekty.
        </p>

        <div className="contact-grid">
          {/* Email */}
          <a
            className="contact-block contact-link"
            href="mailto:j.wochlik@wp.pl"
          >
            <h2>📧 Email</h2>
            <p>j.wochlik@wp.pl</p>
          </a>

          {/* Instagram – podmień USERNAME_HERE na właściwy nick */}
          <a
            className="contact-block contact-link"
            href="https://www.instagram.com/jagodawochlik/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>📷 Instagram</h2>
            <p>Jagoda Wochlik</p>
          </a>

          {/* Facebook */}
          <a
            className="contact-block contact-link"
            href="https://www.facebook.com/p/Biblioteka-Edgara-100048065003586/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>📘 Facebook</h2>
            <p>Biblioteka Edgara</p>
          </a>

          {/* Blog */}
          <a
            className="contact-block contact-link"
            href="http://biblioteka-edgara.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>📝 Blog</h2>
            <p>biblioteka-edgara.blogspot.com</p>
          </a>

          {/* YouTube – książkowy */}
          <a
            className="contact-block contact-link"
            href="https://www.youtube.com/@bibliotekaedgara5388"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>📚 YouTube – książki</h2>
            <p>Biblioteka Edgara</p>
          </a>

          {/* YouTube – dramowy */}
          <a
            className="contact-block contact-link"
            href="https://www.youtube.com/@Czasnadram%C4%99"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>🎭 YouTube – dramy</h2>
            <p>Czas na dramę</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
