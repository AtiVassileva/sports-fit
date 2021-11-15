const About = () => {
    return (
        <div className="about">
        <div className="container about_container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about_content">
                <div className="section_title_container">
                  <div className="section_subtitle">welcome to sportfit</div>
                  <div className="section_title">About <span>Sportfit</span></div>
                </div>
                <div className="text_highlight">Etiam commodo justo nec aliquam feugiat. Donec a leo eget eget augue porttitor sollicitudin augue porttitor sollicitudin.</div>
                <div className="about_text">
                  <p>Morbi sed varius risus, vitae molestie lectus. Donec id hendrerit velit, eu fringilla neque. Etiam id finibus sapien. Donec sollicitudin luctus ex non pharetra. Aenean lobortis ut leo vel porta. Maecenas ac vestibulum lectus. Cras nulla urna, lacinia ut tempor facilisis, congue dignissim tellus. Maecenas ac vestibulum lectus. Cras nulla urna, lacinia ut tempor facilisis, congue dignissim tellus. Phasellus sit amet justo ullamcorper, elementum ipsum nec.</p>
                </div>
                <div className="button about_button"><a href="#">Join Now</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="about_background">
          <div className="container fill_height">
            <div className="row fill_height">
              <div className="col-lg-6 offset-lg-6 fill_height">
                <div className="about_image"><img src="images/a1.png" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;