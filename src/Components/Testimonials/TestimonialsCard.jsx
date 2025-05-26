import quoteIcon from '../../assets/qoutes.svg'; // use the green quote icon

const TestimonialCard = ({ image, name, role, text }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <img src={image} alt={name} className="testimonial-img" />
        <div className="testimonial-info">
          <div className="testimonial-name">{name}</div>
          <div className="testimonial-role">{role}</div>
          <div className="testimonial-stars">★★★★★</div>
        </div>
      </div>

      <div className="testimonial-body">
        <img src={quoteIcon} alt="quote" className="quote-icon" />
        <p className="testimonial-text">{text}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
