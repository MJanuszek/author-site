import { Link } from "react-router-dom";

function Contact() {
  return (
    <section>
      <h1>Contact Page</h1>
      <p>Email us at: contact@example.com</p>

      <div>
        <Link to="/">← Back to Home</Link>
      </div>
    </section>
  );
}

export default Contact;
