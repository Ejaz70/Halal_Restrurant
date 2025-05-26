import './About.css';

import img2 from '../../assets/dinner-table.png';
import img1 from '../../assets/happy-pub.png';
import img3 from '../../assets/Border.png';
import img4 from '../../assets/anotherone.png';

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="headings">
        <p className="section-label">About The Food Restaurant</p>
        <h1 className="section-title">
          Perfect Place For an Exceptional Experience
        </h1>
      </div>
      <div className="content-wrapper">
        <div className="images-group">
          <div className="image-container main-image">
            <img src={img1} alt="Happy pub" className="image-1" />
          </div>
          <div className="image-container secondary-image">
            <img src={img2} alt="Dinner table" className="image-2" />
          </div>
        </div>
        <div className="about-text">
          <p className="description">
            Crafted with care and rooted in tradition, our flavors bring people
            together. Inspired by timeless recipes and authentic ingredients,
            every dish is prepared with passion. From our kitchen to your table,
            experience halal food the way it was meant to be—delicious,
            wholesome, and unforgettable.
          </p>
          <div className="features">
            <div className="feature">
              <img
                src={img3}
                alt="Online ordering icon"
                className="feature-icon"
              />
              <div className="feature-text">
                <h3>Online Food Ordering</h3>
                <p>Easy Food delivery from the best restaurants.</p>
              </div>
            </div>
            <div className="feature">
              <img
                src={img4}
                alt="Healthy food icon"
                className="feature-icon"
              />
              <div className="feature-text">
                <h3>100% Healthy Food</h3>
                <p>Eating a wide variety of nutritious Healthy foods</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
