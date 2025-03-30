import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-body">
        <p className="footer-phrase">
          Protecting the species of our planet, is protecting ourselves.
          <hr></hr>
        </p>

        <div className="footer-pages">
          <ul>
            <p>Our sections:</p>
            <a href="/endangered">
              <li>Endangered</li>
            </a>
            <a href="/extinct">
              <li>Extinct</li>
            </a>
            <a href="/conservation">
              <li>Conservation</li>
            </a>
          </ul>
        </div>
        <div className="footer-socials">
          <ul>
            <p>Socials:</p>
            <a href="https://github.com/Gabye80">
              <li>
                <img src="/img/github_icon.png" /> Github
              </li>
            </a>
            <a href="/terms-and-services">
              <li>© Xtinct 2025 All rights reserved.</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
