const Testimonials = () => {
    return (
        <div className="testimonials">
        <div className="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/testimonials.jpg" data-speed="0.8"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section_title_container">
                <div className="section_subtitle">welcome to sportfit</div>
                <div className="section_title">Testimonials</div>
              </div>
              <div className="test test_1 d-flex flex-row align-items-start justify-content-start">
                <div><div className="test_image"><img src="images/test_1.jpg" alt="" /></div></div>
                <div className="test_content">
                  <div className="test_name"><a href="#">Diane Smith</a></div>
                  <div className="test_title">client</div>
                  <div className="test_text">
                    <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna.</p>
                  </div>
                  <div className="rating rating_4 test_rating"><i></i><i></i><i></i><i></i><i></i></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="test d-flex flex-row align-items-start justify-content-start">
                <div><div className="test_image"><img src="images/test_2.jpg" alt="" /></div></div>
                <div className="test_content">
                  <div className="test_name"><a href="#">Diane Smith</a></div>
                  <div className="test_title">client</div>
                  <div className="test_text">
                    <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna.</p>
                  </div>
                  <div className="rating rating_4 test_rating"><i></i><i></i><i></i><i></i><i></i></div>
                </div>
              </div>
              <div className="test d-flex flex-row align-items-start justify-content-start">
                <div><div className="test_image"><img src="images/test_3.jpg" alt="" /></div></div>
                <div className="test_content">
                  <div className="test_name"><a href="#">Diane Smith</a></div>
                  <div className="test_title">client</div>
                  <div className="test_text">
                    <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna.</p>
                  </div>
                  <div className="rating rating_4 test_rating"><i></i><i></i><i></i><i></i><i></i></div>
                </div>
              </div>

            </div>
          </div>
          <div className="row test_button_row">
            <div className="col text-center">
              <div className="button test_button"><a href="#">Join Now</a></div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Testimonials;