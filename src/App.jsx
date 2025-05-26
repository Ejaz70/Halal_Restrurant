import Header from './Components/Header/Header';
import About from './Components/About/About';
import Cards from './Components/Cards/Cards';
import Quality from './Components/QualitySection/Quality';
import Getintouch from './Components/GetIntouchSection/GetIntouch';
import Subscribe from './Components/Subscribe/Subscribe';
import Footer from './Components/Footer/Footer';
import Testimonials from './Components/Testimonials/Testimonials';
import Bloges from './Components/Bloges/BlogSection';

const App = () => {
  return (
    <>
      <div className="app">
        <Header />
        <About />
        <Cards />
        <Quality />
        <Bloges />
        <Testimonials />
        <Getintouch />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export default App;
