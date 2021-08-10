import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__list-item">About .</li>
        <li className="footer__list-item">Help .</li>
        <li className="footer__list-item">Press .</li>
        <li className="footer__list-item">API .</li>
        <li className="footer__list-item">Jobs .</li>
        <li className="footer__list-item">Privacy .</li>
        <li className="footer__list-item">Terms .</li>
        <li className="footer__list-item">Locations .</li>
        <li className="footer__list-item">Top Accounts .</li>
        <li className="footer__list-item">Hashtags .</li>
        <li className="footer__list-item">Language .</li>
      </ul>
      <span className="footer-legal">
        &copy; {new Date().getFullYear()} INSTAGRAM-CLONE FACEBOOK
      </span>
    </footer>
  );
};

export default Footer;
