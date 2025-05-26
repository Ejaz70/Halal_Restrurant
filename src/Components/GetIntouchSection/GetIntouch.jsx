import image from '../../assets/sms.svg';
import loca from '../../assets/location.svg';
import './GetInTouch.css';

const Getintouch = () => {
  return (
    <div className="reservation-container">
      <h5 className="section-subtitle">GET IN TOUCH</h5>
      <h2 className="section-title">Reservation Table & Enjoy Dining Table</h2>
      <div className="reservation-content">
        <div className="reservation-contact">
          <div className="contact-item">
            <span className="icon">
              <img src={image} alt="pic" />
            </span>
            <div>
              <p className="contact-title">For Booking</p>
              <p className="contact-info">+1 (123) 456 78</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="icon">
              <img src={image} alt="pic" />
            </span>
            <div>
              <p className="contact-title">For Private Dinings</p>
              <p className="contact-info">eg@hfhooods@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="icon">
              <img src={loca} alt="pic" />
            </span>
            <div>
              <p className="contact-title">Location</p>
              <p className="contact-info">New Street 12 (US)</p>
            </div>
          </div>
        </div>
        <form className="reservation-form">
          <input type="text" placeholder="No. of Guests" />
          <div className="form-row">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Phone Number" />
          </div>
          <div className="form-row">
            <input type="date" />
            <input type="time" placeholder="Enter time" />
          </div>
          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default Getintouch;
