import { Link } from "react-router-dom";
import "./style/contact.scss";
import Footer from "./Footer";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact">
        <div>
          <Link to="/" className="gohome">
            ← Strona Główna
          </Link>
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <h2>Email</h2>
            <p>j.wochlik@wp.pl</p>
          </div>

          <div className="contact-item">
            <h2>Instagram</h2>
            <a
              href="https://www.instagram.com/jagodawochlik/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jagoda Wochlik
            </a>
          </div>

          <div className="contact-item">
            <h2>Facebook</h2>
            <a
              href="https://www.facebook.com/p/Biblioteka-Edgara-100048065003586/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Biblioteka Edgara
            </a>
          </div>

          <div className="contact-item">
            <h2>Blog</h2>
            <a
              href="http://biblioteka-edgara.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              biblioteka-edgara.blogspot.com
            </a>
          </div>

          <div className="contact-item">
            <h2>YouTube</h2>
            <ul className="yt-list">
              <li>
                <a
                  href="https://www.youtube.com/@bibliotekaedgara5388"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Biblioteka Edgara — kanał książkowy
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@Czasnadram%C4%99"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Czas na dramę — kanał dramowy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
