import { Link } from 'react-router-dom';

const Footer = () => {
    return(
      <footer className="footer-section">
      <div className="container">
          <div className="row">
              <div className="col-lg-4">
                  <div className="fs-about">
                      <div className="fa-logo">
                          <Link to="#"><img src="img/logo.png" alt="" />
                          </Link>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore dolore magna aliqua endisse ultrices gravida lorem.</p>
                      <div className="fa-social">
                          <Link to="#"><i className="fa fa-facebook"></i></Link>
                          <Link to="#"><i className="fa fa-twitter"></i></Link>
                          <Link to="#"><i className="fa fa-youtube-play"></i></Link>
                          <Link to="#"><i className="fa fa-instagram"></i></Link>
                          <Link to="#"><i className="fa  fa-envelope-o"></i></Link>
                      </div>
                  </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                  <div className="fs-widget">
                      <h4>Useful links</h4>
                      <ul>
                          <li><Link to="#">About</Link></li>
                          <li><Link to="#">Blog</Link></li>
                          <li><Link to="#">Classes</Link></li>
                          <li><Link to="#">Contact</Link></li>
                      </ul>
                  </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                  <div className="fs-widget">
                      <h4>Support</h4>
                      <ul>
                          <li><Link to="#">Login</Link></li>
                          <li><Link to="#">My account</Link></li>
                          <li><Link to="#">Subscribe</Link></li>
                          <li><Link to="#">Contact</Link></li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-lg-12 text-center">
                  <div className="copyright-text">
                      <p>
                          Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <Link to="https://colorlib.com" target="_blank">Colorlib</Link>
                      </p>
                  </div>
              </div>
          </div>
      </div>
  </footer>
    );
}

export default Footer;