import './Card.css';
import burger from '../../assets/burger.png';
import burger2 from '../../assets/burger2.png';
import burger3 from '../../assets/burger3.png';
import burger4 from '../../assets/burger4.png';
import burger5 from '../../assets/burger5.png';
import burger6 from '../../assets/burger5.png';

const Cards = () => {
  return (
    <>
      <section className="menu-section">
        <h2>Our Best & Delicious Menu</h2>

        <div className="tabs">
          <button className="tab active">All</button>
          <button className="tab">Mexican</button>
          <button className="tab">Greek</button>
          <button className="tab">Colombian</button>
          <button className="tab">Chinese</button>
          <button className="tab">Haitian</button>
          <button className="tab">Turkish</button>
        </div>

        <div className="menu-items">
          <div className="card">
            <img src={burger} alt="Naan Burger" />
            <h3>Naan Burger</h3>
            <p>A bold fusion of classic naan and burger bliss.</p>
            <div className="price-fav">
              <span>$1.85</span>
              <button className="fav-btn">♡</button>
            </div>
          </div>

          <div className="card">
            <img src={burger2} alt="Butter Chicken Taco" />
            <h3>Butter Chicken Taco</h3>
            <p>A bold fusion of Indian flavors and taco bites.</p>
            <div className="price-fav">
              <span>$1.15</span>
              <button className="fav-btn">♡</button>
            </div>
          </div>

          <div className="card">
            <img src={burger3} alt="Chicken Burger" />
            <h3>Chicken Burger</h3>
            <p>A bold blend of juicy chicken and classic flavor.</p>
            <div className="price-fav">
              <span>$2.00</span>
              <button className="fav-btn">♡</button>
            </div>
          </div>

          <div className="card">
            <img src={burger4} alt="Cheese Chicken Naan" />
            <h3>Cheese Chicken Naan</h3>
            <p>Bold mix of cheesy flavor and chicken goodness.</p>
            <div className="price-fav">
              <span>$2.50</span>
              <button className="fav-btn">♡</button>
            </div>
          </div>

          <div className="card">
            <img src={burger5} alt="3 Layer Burger" />
            <h3>3 Layer Burger</h3>
            <p>Stacked with triple layers, packed with flavor.</p>
            <div className="price-fav">
              <span>$4.99</span>
              <button className="fav-btn">♡</button>
            </div>
          </div>

          <div className="card">
            <img src={burger6} alt="Sandwich" />
            <h3>Sandwich</h3>
            <p>Fresh ingredients and timeless taste.</p>
            <div className="price-fav">
              <span>$2.80</span>
              <button className="fav-btn">♡</button>
            </div>
          </div>
        </div>

        <div className="see-all">
          <button>See All</button>
        </div>
      </section>
    </>
  );
};

export default Cards;
