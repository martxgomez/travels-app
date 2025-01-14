import "./footer.css";

function Footer() {
  // truco para actualizar el año automáticamente 🥳
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <p>
        <a
          className="link"
          href="https://github.com/martxgomez/travels-app.git"
        >
          Cooperate with us
        </a>
      </p>
      <br />
      <p className="rights-container">© {year} Routify. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
