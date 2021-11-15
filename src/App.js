import Header from './components/Header'
import HamburgerBar from './components/HamburgerBar';
import Menu from './components/Menu';
import Home from './components/Home';
import Boxes from './components/Boxes';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <HamburgerBar />
      <Menu />
      <Home />
      <Boxes/>
      <About />
      <Testimonials/>
      <Gallery/>
      <Services/>
      <Blog/>
      <Footer/>

      <script src="js/jquery-3.2.1.min.js"></script>
      <script src="styles/bootstrap-4.1.2/popper.js"></script>
      <script src="styles/bootstrap-4.1.2/bootstrap.min.js"></script>
      <script src="plugins/greensock/TweenMax.min.js"></script>
      <script src="plugins/greensock/TimelineMax.min.js"></script>
      <script src="plugins/scrollmagic/ScrollMagic.min.js"></script>
      <script src="plugins/greensock/animation.gsap.min.js"></script>
      <script src="plugins/greensock/ScrollToPlugin.min.js"></script>
      <script src="plugins/OwlCarousel2-2.2.1/owl.carousel.js"></script>
      <script src="plugins/easing/easing.js"></script>
      <script src="plugins/progressbar/progressbar.min.js"></script>
      <script src="plugins/parallax-js-master/parallax.min.js"></script>
      <script src="plugins/colorbox/jquery.colorbox-min.js"></script>
      <script src="js/custom.js"></script>
    </div>
  );
}

export default App;