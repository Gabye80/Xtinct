import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-body">
        <p className="footer-phrase">
          Protecting the species of our planet, is protecting ourselves.
            <hr></hr>
        </p>
        
        <div>
            <ul>
                <p>Our sections</p>
                <li href="/endangered">Endangered</li>
                <li>Extinct</li>
                <li>Conservation</li>
            </ul>
        </div>
        <div>
            <ul>
                <p>My socials.</p>
                <li><img src="/img/github_icon.png"/> Github</li>
                <li>© Xtinct 2025 All rights reserved.</li>
            </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
