const Footer = () => {
    return(
      <footer className="footer-section">
      <div className="container">
          <div className="row">
              <div className="col-lg-4">
                  <div className="fs-about">
                      <div className="fa-logo">
                          <a href="#"><img src="img/logo.png" alt="" /></a>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore dolore magna aliqua endisse ultrices gravida lorem.</p>
                      <div className="fa-social">
                          <a href="#"><i className="fa fa-facebook"></i></a>
                          <a href="#"><i className="fa fa-twitter"></i></a>
                          <a href="#"><i className="fa fa-youtube-play"></i></a>
                          <a href="#"><i className="fa fa-instagram"></i></a>
                          <a href="#"><i className="fa  fa-envelope-o"></i></a>
                      </div>
                  </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                  <div className="fs-widget">
                      <h4>Useful links</h4>
                      <ul>
                          <li><a href="#">About</a></li>
                          <li><a href="#">Blog</a></li>
                          <li><a href="#">Classes</a></li>
                          <li><a href="#">Contact</a></li>
                      </ul>
                  </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                  <div className="fs-widget">
                      <h4>Support</h4>
                      <ul>
                          <li><a href="#">Login</a></li>
                          <li><a href="#">My account</a></li>
                          <li><a href="#">Subscribe</a></li>
                          <li><a href="#">Contact</a></li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-lg-12 text-center">
                  <div className="copyright-text">
                      <p>
                          Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                      </p>
                  </div>
              </div>
          </div>
      </div>
  </footer>
    );
}

export default Footer;