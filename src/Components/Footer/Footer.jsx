import fb from '../../assets/facebook.svg';
import dis from '../../assets/Discord.png';
import ig from '../../assets/linkedIn.svg';
import mastercard from '../../assets/Mastercard.svg';
import visa from '../../assets/Visa.svg';
import x from '../../assets/twitter.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <h4>Our Products</h4>
          <ul>
            <li>Our menus</li>
            <li>Our burgers</li>
            <li>Our times sides</li>
            <li>Our naandwiches</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>legal information</h4>
          <ul>
            <li>Legal Notice</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact us</h4>
          <ul>
            <li>Contacts</li>
            <li>Our addresses</li>
            <li>Become a Times Square franchisee</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>We accept</h4>
          <div className="payment-icons">
            <img src={mastercard} alt="Mastercard" />
            <img src={visa} alt="Visa" />
          </div>
        </div>
      </div>

      <hr className="footer-separator" />

      <div className="footer-bottom">
        <div className="social-icons">
          <img src={fb} alt="facebook" />
          <img src={x} alt="twitter" />
          <img src={dis} alt="discord" />
          <img src={ig} alt="" />
        </div>
        <p>© 2025 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
