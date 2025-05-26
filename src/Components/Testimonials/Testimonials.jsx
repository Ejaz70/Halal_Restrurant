// components/Testimonials/Testimonials.jsx

import TestimonialCard from './TestimonialsCard';
import './Testimonials.css';

import user1 from '../../assets/user1.jpeg';
import user2 from '../../assets/user2.avif';
import user3 from '../../assets/user3.avif';
import user4 from '../../assets/user1.jpeg';
import user5 from '../../assets/user2.avif';
import user6 from '../../assets/user3.avif';

const Testimonials = () => {
  const testimonialData = [
    {
      name: 'Ali Khan',
      role: 'Customer',
      text: 'This place is a hidden gem! Every dish is packed with flavor, and I love that everything is 100% halal. You can really taste the freshness and quality.',
      image: user1,
    },
    {
      name: 'Sara Malik',
      role: 'Food Blogger',
      text: 'From the moment we walked in, the staff was welcoming, and the food blew us away. The chicken shawarma is the best I’ve ever had. Highly recommend!',
      image: user2,
    },
    {
      name: 'John Doe',
      role: 'Chef',
      text: 'Their menu is a halal dream come true. Everything from the rice platters to the falafel tastes authentic and made with care. We’ll definitely be coming back.',
      image: user3,
    },
    {
      name: 'John Doe',
      role: 'Chef',
      text: 'Hands down the best halal spot in town. Everything is made fresh and the spices are just right. I love that they respect faith with their Friday closings.',
      image: user4,
    },
    {
      name: 'John Doe',
      role: 'Chef',
      text: 'Their menu is a halal dream come true. Everything from the rice platters to the falafel tastes authentic and made with care. We’ll definitely be coming back.',
      image: user5,
    },

    {
      name: 'John Doe',
      role: 'Chef',
      text: 'Their menu is a halal dream come true. Everything from the rice platters to the falafel tastes authentic and made with care. We’ll definitely be coming back.',
      image: user6,
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="heading">
        <h5 className="testimonails">TESTIMONIALS</h5>
        <h2>What Our Clients Are Saying</h2>
      </div>
      <div className="testimonials-container">
        {testimonialData.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
