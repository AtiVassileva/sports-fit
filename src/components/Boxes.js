const Boxes = () => {
    return(
        <div className="boxes">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="boxes_container d-flex flex-lg-row flex-column align-items-start justify-content-start">
                <div className="box">
                  <div className="box_icon d-flex flex-column align-items-center justify-content-center"><img src="images/icon_1.png" alt="" /></div>
                  <div className="box_title">Pilates with trainer</div>
                  <div className="box_text">
                    <p>Etiam commodo justo nec aliquam feugiat. Donec a leo eget augue porttitor sollicitudin.</p>
                  </div>
                  <div className="box_link_container">
                    <a href="#"><div className="box_link d-flex flex-column align-items-center justify-content-center trans_200"><div>+</div></div></a>
                  </div>
                </div>
                <div className="box">
                  <div className="box_icon d-flex flex-column align-items-center justify-content-center"><img src="images/icon_2.png" alt="" /></div>
                  <div className="box_title">Swimming Pool</div>
                  <div className="box_text">
                    <p>Donec a leo eget augue porttitor sollicitudin. Morbi sed varius risus, vitae molestie lectus. Donec id hendrerit.</p>
                  </div>
                  <div className="box_link_container">
                    <a href="#"><div className="box_link d-flex flex-column align-items-center justify-content-center trans_200"><div>+</div></div></a>
                  </div>
                </div>
                <div className="box">
                  <div className="box_icon d-flex flex-column align-items-center justify-content-center"><img src="images/icon_3.png" alt="" /></div>
                  <div className="box_title">Healthy diet plan</div>
                  <div className="box_text">
                    <p>Morbi sed varius risus, vitae molestie lectus. Donec id hendrerit velit, eu fringilla neque.</p>
                  </div>
                  <div className="box_link_container">
                    <a href="#"><div className="box_link d-flex flex-column align-items-center justify-content-center trans_200"><div>+</div></div></a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Boxes;